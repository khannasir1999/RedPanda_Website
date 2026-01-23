import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);


type FadeInDirection = "left" | "right" | "bottom" | "top";

interface UseScrollFadeInProps {
    selector: string;
    direction?: FadeInDirection;
    delay?: number;
    distance?: number;
    duration?: number;
    /**
     * Controls when the animation triggers.
     * "top 85%" means "when the top of the element is 85% from the top of the viewport".
     * @default "top 85%"
     */
    start?: string;

}


export const useScrollFadeIn = ({
    selector,
    direction = "bottom",
    delay = 0,
    distance = 100,
    start = "top 85%",
    duration = 1.5,
}: UseScrollFadeInProps) => {

    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const elements = gsap.utils.toArray<HTMLElement>(selector);

        if (elements.length === 0) {
            console.warn(`useScrollFadeIn: No elements found for selector "${selector}"`);
            return;
        }

        elements.forEach((el) => {
            // --- 3. Set Initial State ---
            // We set the element to be invisible and in its starting position.
            let initialProps: gsap.TweenVars = { opacity: 0 };

            switch (direction) {
                case "left":
                    initialProps.x = -distance;
                    break;
                case "right":
                    initialProps.x = distance;
                    break;
                case "top":
                    initialProps.y = -distance;
                    break;
                case "bottom":
                default:
                    initialProps.y = distance;
                    break;
            }

            gsap.set(el, initialProps);

            gsap.to(el, {
                opacity: 1,
                x: 0,
                y: 0,
                duration: duration,
                ease: "cubic-bezier(1, 0.01, 0, 1)",
                delay: delay,
                scrollTrigger: {
                    trigger: el,
                    start: start,
                    toggleActions: "play none none none", // Play the animation once when it enters
                    once: true, // Ensures the animation only runs once
                },
            });
        });

    }, { scope: containerRef, dependencies: [selector, direction, delay, distance, start] });

    return {
        containerRef,
    };
};



