'use client';

import React, { useRef, useEffect, useCallback, useState } from 'react';
import gsap from 'gsap';
import { motion } from "framer-motion";
import type { PlayCursorProps } from '../../types/blobcursorprops';

export default function BlobCursor({
    size = 191,
    color = '#DC2626',
    centerText = 'PLAY',
    rotatingText = 'PLAY INTRO',
    zIndex = 100,
    showarrows = false,
    Arrow,
    onClick,
}: PlayCursorProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const moveRef = useRef<HTMLDivElement>(null);
    const jellyRef = useRef<HTMLDivElement>(null);

    // Position/Velocity state refs
    const pos = useRef({ x: 0, y: 0 });
    const targetPos = useRef({ x: 0, y: 0 });
    const vel = useRef({ x: 0, y: 0 });
    const requestRef = useRef<number | null>(null);

    const [visible, setVisible] = useState(false);
    const visibleRef = useRef(false);

    // Click/Hover state for scaling override
    const isClicked = useRef(false);

    // Speed factor from example
    const SPEED = 0.25;

    // GSAP Setters
    const setX = useRef<((v: number) => void) | null>(null);
    const setY = useRef<((v: number) => void) | null>(null);
    const setRotation = useRef<((v: number) => void) | null>(null);
    const setScaleX = useRef<((v: number) => void) | null>(null);
    const setScaleY = useRef<((v: number) => void) | null>(null);

    useEffect(() => {
        visibleRef.current = visible;
    }, [visible]);

    const handleLeave = useCallback(() => {
        setVisible(false);
    }, []);

    const updateOffset = useCallback(() => {
        if (!containerRef.current) return { left: 0, top: 0 };
        const rect = containerRef.current.getBoundingClientRect();
        return { left: rect.left, top: rect.top };
    }, []);

    const handleMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
            const { left, top } = updateOffset();

            // Safe event property access for TS
            let clientX: number, clientY: number;
            if ('touches' in e) {
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
            } else {
                clientX = (e as React.MouseEvent<HTMLDivElement>).clientX;
                clientY = (e as React.MouseEvent<HTMLDivElement>).clientY;
            }

            // Update target position relative to the container
            targetPos.current.x = clientX - left;
            targetPos.current.y = clientY - top;

            if (!visible) setVisible(true);
        },
        [updateOffset, visible]
    );

    // Initialize GSAP Setters
    useEffect(() => {
        if (moveRef.current && jellyRef.current) {
            // Move the entire wrapper
            setX.current = gsap.quickSetter(moveRef.current, "x", "px") as (v: number) => void;
            setY.current = gsap.quickSetter(moveRef.current, "y", "px") as (v: number) => void;

            // Distort only the inner jelly layer
            setRotation.current = gsap.quickSetter(jellyRef.current, "rotate", "deg") as (v: number) => void;
            setScaleX.current = gsap.quickSetter(jellyRef.current, "scaleX") as (v: number) => void;
            setScaleY.current = gsap.quickSetter(jellyRef.current, "scaleY") as (v: number) => void;
        }
    }, []);

    // Animation Loop
    useEffect(() => {
        const getScale = (diffX: number, diffY: number) => {
            const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
            return Math.min(distance / 100, 0.25);
        };

        const getAngle = (diffX: number, diffY: number) => {
            return (Math.atan2(diffY, diffX) * 180) / Math.PI;
        };

        const loop = () => {
            // Physics update
            pos.current.x += (targetPos.current.x - pos.current.x) * SPEED;
            pos.current.y += (targetPos.current.y - pos.current.y) * SPEED;

            vel.current.x = targetPos.current.x - pos.current.x;
            vel.current.y = targetPos.current.y - pos.current.y;

            // Calculate deform
            const rotation = getAngle(vel.current.x, vel.current.y);
            const scale = getScale(vel.current.x, vel.current.y);

            // Apply transforms
            if (setX.current && setY.current) {
                setX.current(pos.current.x);
                setY.current(pos.current.y);
            }

            if (setRotation.current) {
                setRotation.current(rotation);
            }

            // Only apply velocity-based scale if NOT clicked
            if (!isClicked.current && setScaleX.current && setScaleY.current) {
                setScaleX.current(1 + scale);
                setScaleY.current(1 - scale);
            }

            requestRef.current = requestAnimationFrame(loop);
        };

        requestRef.current = requestAnimationFrame(loop);

        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    // Handle Clicks
    useEffect(() => {
        // We scale the whole moveRef on click so everything shrinks uniformly
        const el = moveRef.current;
        if (!el) return;

        const onDown = (e: PointerEvent) => {
            if (!containerRef.current?.contains(e.target as Node)) return;
            if (!visibleRef.current) return;

            isClicked.current = true;
            gsap.to(el, { scale: 0.88, duration: 0.15, ease: 'power2.out', overwrite: 'auto' });
        };

        const onUp = (e: PointerEvent) => {
            if (!containerRef.current?.contains(e.target as Node)) return;
            if (!visibleRef.current) return;

            gsap.to(el, {
                scale: 1,
                duration: 0.28,
                ease: 'elastic.out(1, 0.6)',
                overwrite: 'auto',
                onComplete: () => {
                    isClicked.current = false;
                }
            });

            const isMouseLeft = e.pointerType === 'mouse' ? e.button === 0 : true;
            if (isMouseLeft) onClick?.();
        };

        window.addEventListener('pointerdown', onDown);
        window.addEventListener('pointerup', onUp);

        return () => {
            window.removeEventListener('pointerdown', onDown);
            window.removeEventListener('pointerup', onUp);
        };
    }, [onClick]);

    // Handle Resize
    useEffect(() => {
        const onResize = () => updateOffset();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [updateOffset]);

    // Create repeating text pattern
    const repeatingText = `${rotatingText} - `.repeat(5);

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMove}
            onTouchMove={handleMove}
            onMouseLeave={handleLeave}
            className="relative top-0 left-0 w-full h-full"
            style={{ zIndex }}
        >
            <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
                <motion.div
                    ref={moveRef}
                    className="absolute will-change-transform -translate-x-1/2 -translate-y-1/2"
                    aria-hidden
                    style={{
                        width: size,
                        height: size,
                        opacity: visible ? 1 : 0,
                    }}
                >
                    {/* Jelly Layer: Background + Rotating Text (Deforms) */}
                    <div
                        ref={jellyRef}
                        className="absolute inset-0 w-full h-full will-change-transform"
                        style={{
                            borderRadius: '50%',
                            backgroundColor: color,
                            boxShadow: '0 10px 25px rgba(0,0,0,0.25)'
                        }}
                    >
                        <motion.svg
                            className="absolute w-full h-full font-chillax"
                            viewBox="0 0 120 120"
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                        >
                            <defs>
                                <path
                                    id="circlePath"
                                    d="M60,60 m-48,0 a48,48 0 1,1 96,0 a48,48 0 1,1 -96,0"
                                />
                            </defs>
                            <text className="font-chillax text-[10px] fill-white uppercase tracking-widest">
                                <textPath href="#circlePath" startOffset="0">
                                    {repeatingText}
                                </textPath>
                            </text>
                        </motion.svg>
                    </div>

                    {/* Fixed Layer: Center Text (Stable) */}
                    <div
                        className="absolute inset-0 flex items-center justify-center text-white font-chillax will-change-transform"
                        // Note: We don't need a specific ref for simple centering unless we want separate anims
                        style={{ fontSize: Math.max(12, Math.floor(size * 0.15)) }}
                    >
                        {showarrows && Arrow ? <Arrow /> : centerText}
                    </div>

                </motion.div>
            </div>
        </div>
    );
}