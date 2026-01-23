import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface UseScrollOverlayingOptions {
  initialBorderRadius?: number;

  finalBorderRadius?: number;
  // Controls overflow of the last section. 
  // 'hidden' (default): Good for masking/cards effect (Home page).
  // 'visible': Good for nested pinning logic (Services page).
  lastSectionOverflow?: "hidden" | "visible";
}

export const useScrollOverlaying = (
  scrollingsectionsclassname: string,
  options: UseScrollOverlayingOptions = {}
) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    initialBorderRadius = 40,
    finalBorderRadius = 0,
    lastSectionOverflow = "hidden" // Default to hidden to preserve original behavior
  } = options;

  useGSAP(() => {
    const overlayingsections = gsap.utils.toArray<HTMLElement>(scrollingsectionsclassname);

    overlayingsections.forEach((section, index) => {
      const isLast = index === overlayingsections.length - 1;
      const overflowValue = isLast ? lastSectionOverflow : "hidden";

      // If overflow is visible, we typically want to avoid will-change: transform
      // to prevent creating a stacking context that breaks fixed children.
      const willChangeValue = (isLast && lastSectionOverflow === "visible")
        ? "auto"
        : "transform, border-radius";

      gsap.set(section, {
        position: "relative",
        zIndex: index + 1,
        willChange: willChangeValue,
        borderTopLeftRadius: `${initialBorderRadius}px`,
        borderTopRightRadius: `${initialBorderRadius}px`,
        overflow: overflowValue,
      });
    });

    overlayingsections.forEach((section, index) => {
      if (index < overlayingsections.length - 1) {
        const nextSection = overlayingsections[index + 1];

        ScrollTrigger.create({
          trigger: section,
          start: "bottom bottom",
          endTrigger: overlayingsections[overlayingsections.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        });

        // Animate border radius of the next section as it overlays
        gsap.fromTo(
          nextSection,
          {
            borderTopLeftRadius: `${initialBorderRadius}px`,
            borderTopRightRadius: `${initialBorderRadius}px`,
          },
          {
            borderTopLeftRadius: `${finalBorderRadius}px`,
            borderTopRightRadius: `${finalBorderRadius}px`,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: section,
              start: "bottom bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }
    });

  }, { scope: containerRef });

  return {
    containerRef,
  };
};
