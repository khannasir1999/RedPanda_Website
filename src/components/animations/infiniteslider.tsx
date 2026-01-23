import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { SliderItem } from "../../types/slideritem";
import type { InfiniteSliderProps } from "../../types/infinitesliderprops.ts";


const ANIMATION_CONFIG = {
    SMOOTH_TAU: 0.25,
    MIN_COPIES: 2,
    COPY_HEADROOM: 2,
} as const;

const toCssLength = (value?: number | string): string | undefined =>
    typeof value === "number" ? `${value}px` : (value ?? undefined);

const cx = (...parts: Array<string | false | null | undefined>) =>
    parts.filter(Boolean).join(" ");

const useResizeObserver = (
    callback: () => void,
    elements: Array<React.RefObject<Element | null>>,
    dependencies: React.DependencyList
) => {
    useEffect(() => {
        if (!window.ResizeObserver) {
            const handleResize = () => callback();
            window.addEventListener("resize", handleResize);
            callback();
            return () => window.removeEventListener("resize", handleResize);
        }

        const observers = elements.map((ref) => {
            if (!ref.current) return null;
            const observer = new ResizeObserver(callback);
            observer.observe(ref.current);
            return observer;
        });

        callback();

        return () => {
            observers.forEach((observer) => observer?.disconnect());
        };
    }, dependencies);
};

const useImageLoader = (
    seqRef: React.RefObject<HTMLUListElement | null>,
    onLoad: () => void,
    dependencies: React.DependencyList
) => {
    useEffect(() => {
        const images = seqRef.current?.querySelectorAll("img") ?? [];

        if (images.length === 0) {
            setTimeout(onLoad, 50);
            return;
        }

        let remainingImages = images.length;
        const handleImageLoad = () => {
            remainingImages -= 1;
            if (remainingImages === 0) {
                setTimeout(onLoad, 50);
            }
        };

        images.forEach((img) => {
            const htmlImg = img as HTMLImageElement;
            if (htmlImg.complete) {
                handleImageLoad();
            } else {
                htmlImg.addEventListener("load", handleImageLoad, { once: true });
                htmlImg.addEventListener("error", handleImageLoad, { once: true });
            }
        });

        return () => {
            images.forEach((img) => {
                img.removeEventListener("load", handleImageLoad);
                img.removeEventListener("error", handleImageLoad);
            });
        };
    }, dependencies);
};

const useAnimationLoop = (
    trackRef: React.RefObject<HTMLDivElement | null>,
    targetVelocity: number,
    seqWidth: number,
    isHovered: boolean,
    pauseOnHover: boolean
) => {
    const rafRef = useRef<number | null>(null);
    const lastTimestampRef = useRef<number | null>(null);
    const offsetRef = useRef(0);
    const velocityRef = useRef(0);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const prefersReduced =
            typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (seqWidth > 0) {
            offsetRef.current = ((offsetRef.current % seqWidth) + seqWidth) % seqWidth;
            track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
        }

        if (prefersReduced) {
            track.style.transform = "translate3d(0, 0, 0)";
            return () => {
                lastTimestampRef.current = null;
            };
        }

        const animate = (timestamp: number) => {
            if (lastTimestampRef.current === null) {
                lastTimestampRef.current = timestamp;
            }

            const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
            lastTimestampRef.current = timestamp;

            const target = pauseOnHover && isHovered ? 0 : targetVelocity;

            const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
            velocityRef.current += (target - velocityRef.current) * easingFactor;

            if (seqWidth > 0) {
                let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
                nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
                offsetRef.current = nextOffset;

                const translateX = -offsetRef.current;
                track.style.transform = `translate3d(${translateX}px, 0, 0)`;
            }

            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            if (rafRef.current !== null) {
                cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
            }
            lastTimestampRef.current = null;
        };
    }, [targetVelocity, seqWidth, isHovered, pauseOnHover]);
};

export const InfiniteSlider = React.memo<InfiniteSliderProps>(
    ({
        items,
        speed = 120,
        direction = "left",
        width = "100%",
        itemsHeight,
        gap = 32,
        pauseOnHover = true,
        fadeOut = false,
        fadeOutColor,
        scaleOnHover = false,
        ariaLabel = "Infinite slider",
        className,
        style,
    }) => {
        const containerRef = useRef<HTMLDivElement>(null);
        const trackRef = useRef<HTMLDivElement>(null);
        const seqRef = useRef<HTMLUListElement>(null);

        const [seqWidth, setSeqWidth] = useState<number>(0);
        const [copyCount, setCopyCount] = useState<number>(ANIMATION_CONFIG.MIN_COPIES);
        const [isHovered, setIsHovered] = useState<boolean>(false);

        const targetVelocity = useMemo(() => {
            const magnitude = Math.abs(speed);
            const directionMultiplier = direction === "left" ? 1 : -1;
            const speedMultiplier = speed < 0 ? -1 : 1;
            return magnitude * directionMultiplier * speedMultiplier;
        }, [speed, direction]);

        const updateDimensions = useCallback(() => {
            const containerWidth = containerRef.current?.clientWidth ?? 0;
            // Use scrollWidth (more reliable than getBoundingClientRect for long inline content)
            const sequenceWidth =
                (seqRef.current?.scrollWidth ?? 0) ||
                (seqRef.current?.getBoundingClientRect?.()?.width ?? 0);

            if (sequenceWidth > 0) {
                setSeqWidth(Math.ceil(sequenceWidth));
                const copiesNeeded =
                    Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
                setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
            }
        }, []);

        useResizeObserver(updateDimensions, [containerRef, seqRef], [items, gap, itemsHeight]);
        useImageLoader(seqRef, updateDimensions, [items, gap, itemsHeight]);
        useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover);

        // Ensure we re-measure after initial layout, font load, and when tab becomes visible
        useEffect(() => {
            const onLoad = () => updateDimensions();
            const onVisibility = () => { if (!document.hidden) updateDimensions(); };

            const raf = requestAnimationFrame(updateDimensions);
            window.addEventListener("load", onLoad);
            document.addEventListener("visibilitychange", onVisibility);
            // fonts.ready can change text width after mount
            // @ts-ignore
            document.fonts?.ready?.then(() => updateDimensions()).catch(() => {});

            return () => {
                cancelAnimationFrame(raf);
                window.removeEventListener("load", onLoad);
                document.removeEventListener("visibilitychange", onVisibility);
            };
        }, [updateDimensions]);

        const cssVariables = useMemo(
            () =>
                ({
                    "--slider-gap": `${gap}px`,
                    "--slider-itemHeight": `${itemsHeight}px`,
                    ...(fadeOutColor && { "--slider-fadeColor": fadeOutColor }),
                }) as React.CSSProperties,
            [gap, itemsHeight, fadeOutColor]
        );

        const rootClasses = useMemo(
            () =>
                cx(
                    "relative overflow-x-hidden group",
                    "[--slider-gap:32px]",
                    "[--slider-itemHeight:28px]",
                    "[--slider-fadeColorAuto:#ffffff]",
                    "dark:[--slider-fadeColorAuto:#0b0b0b]",
                    scaleOnHover && "py-[calc(var(--slider-itemHeight)*0.1)]",
                    className
                ),
            [scaleOnHover, className]
        );

        const handleMouseEnter = useCallback(() => {
            if (pauseOnHover) setIsHovered(true);
        }, [pauseOnHover]);

        const handleMouseLeave = useCallback(() => {
            if (pauseOnHover) setIsHovered(false);
        }, [pauseOnHover]);

        const renderItem = useCallback(
            (item: SliderItem, key: React.Key) => {
                const isNodeItem = "node" in item;

                const content = isNodeItem ? (
                    <span
                        className={cx(
                            "inline-flex items-center",
                            "motion-reduce:transition-none",
                            scaleOnHover &&
                            "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120"
                        )}
                    >
                        {item.node}
                    </span>
                ) : (
                    <img
                        className={cx(
                            "h-[var(--slider-itemHeight)] w-auto block object-contain",
                            "[-webkit-user-drag:none] pointer-events-none",
                            "[image-rendering:-webkit-optimize-contrast]",
                            "motion-reduce:transition-none",
                            scaleOnHover &&
                            "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120"
                        )}
                        src={item.src}
                        srcSet={item.srcSet}
                        sizes={item.sizes}
                        width={item.width}
                        height={item.height}
                        alt={item.alt ?? ""}
                        title={item.title}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                    />
                );

                const itemAriaLabel = isNodeItem
                    ? item.ariaLabel ?? item.title
                    : item.alt ?? item.title;

                const inner = item.href ? (
                    <a
                        className={cx(
                            "inline-flex items-center no-underline rounded",
                            "transition-opacity duration-200 ease-linear",
                            "hover:opacity-80",
                            "focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2"
                        )}
                        href={item.href}
                        aria-label={itemAriaLabel || "slider link"}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        {content}
                    </a>
                ) : (
                    content
                );

                return (
                    <li
                        className={cx(
                            "flex-none mr-[var(--slider-gap)] text-[length:var(--slider-itemHeight)] leading-[1]",
                            scaleOnHover && "overflow-visible group/item"
                        )}
                        key={key}
                        role="listitem"
                    >
                        {inner}
                    </li>
                );
            },
            [scaleOnHover]
        );

        const itemLists = useMemo(
            () =>
                Array.from({ length: copyCount }, (_, copyIndex) => (
                    <ul
                        className="flex items-center"
                        key={`copy-${copyIndex}`}
                        role="list"
                        aria-hidden={copyIndex > 0}
                        ref={copyIndex === 0 ? seqRef : undefined}
                    >
                        {items.map((item, itemIndex) =>
                            renderItem(item, `${copyIndex}-${itemIndex}`)
                        )}
                    </ul>
                )),
            [copyCount, items, renderItem]
        );

        const containerStyle = useMemo(
            (): React.CSSProperties => ({
                width: toCssLength(width) ?? "100%",
                ...cssVariables,
                ...style,
            }),
            [width, cssVariables, style]
        );

        return (
            <div
                ref={containerRef}
                className={rootClasses}
                style={containerStyle}
                role="region"
                aria-label={ariaLabel}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {fadeOut && (
                    <>
                        <div
                            aria-hidden
                            className={cx(
                                "pointer-events-none absolute inset-y-0 left-0 z-[1]",
                                "w-[clamp(24px,8%,120px)]",
                                "bg-[linear-gradient(to_right,var(--slider-fadeColor,var(--slider-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]"
                            )}
                        />
                        <div
                            aria-hidden
                            className={cx(
                                "pointer-events-none absolute inset-y-0 right-0 z-[1]",
                                "w-[clamp(24px,8%,120px)]",
                                "bg-[linear-gradient(to_left,var(--slider-fadeColor,var(--slider-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]"
                            )}
                        />
                    </>
                )}

                <div
                    className={cx(
                        "flex w-max will-change-transform select-none",
                        "motion-reduce:transform-none"
                    )}
                    ref={trackRef}
                >
                    {itemLists}
                </div>
            </div>
        );
    }
);

InfiniteSlider.displayName = "InfiniteSlider";

export default InfiniteSlider;
