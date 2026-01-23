import { useRef } from "react";
import type { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseVerticalWipeAnimationOptions {
  /**
   * Selector for desktop slides within the concept section
   * @default ".conceptdesign-desktop-section"
   */
  desktopSlideSelector?: string;

  /**
   * Selector for mobile slides within the concept section
   * @default ".conceptdesign-mobile-section"
   */
  mobileSlideSelector?: string;

  /**
   * Scroll scrub smoothness (0-1, higher = smoother but more lag)
   * @default 1
   */
  scrub?: number;

  /**
   * Total scroll distance as percentage
   * @default "+=200%"
   */
  scrollDistance?: string;

  /**
   * Whether to invalidate on window resize
   * @default true
   */
  invalidateOnRefresh?: boolean;
}

interface UseVerticalWipeAnimationReturn {
  mainPinRef: RefObject<HTMLDivElement | null>;
  conceptRef: RefObject<HTMLDivElement | null>;
}

export const useVerticalWipeAnimation = (
  options: UseVerticalWipeAnimationOptions = {}
): UseVerticalWipeAnimationReturn => {
  const {
    mobileSlideSelector = ".conceptdesign-mobile-section",
    scrub = 1,
    scrollDistance = "+=200%",
    invalidateOnRefresh = true,
  } = options;

  const mainPinRef = useRef<HTMLDivElement>(null);
  const conceptRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!conceptRef.current) return;

      const mm = gsap.matchMedia();

      mm.add("(max-width: 1023px)", () => {
        const slides = gsap.utils.toArray<HTMLElement>(
          mobileSlideSelector,
          conceptRef.current
        );

        console.log(`Using selector: ${mobileSlideSelector}, Found slides:`, slides.length);

        if (slides.length < 2) {
          console.warn("Not enough slides found for animation");
          return;
        }

        // Create master timeline
        const masterTimeline = gsap.timeline();

        masterTimeline.to(conceptRef.current, {
          yPercent: -100,
          ease: "none",
          duration: 1,
        });

        const [firstSlide, secondSlide] = slides;

        gsap.set(firstSlide, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          zIndex: 1,
        });
        gsap.set(secondSlide, {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          zIndex: 2,
        });

        masterTimeline.to(secondSlide, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "none",
          duration: 1,
        });

        ScrollTrigger.create({
          trigger: mainPinRef.current,
          start: "top top",
          end: scrollDistance,
          pin: true,
          scrub,
          animation: masterTimeline,
          invalidateOnRefresh,
          refreshPriority: 10,
        });
      });

      return () => mm.revert();
    },
    { scope: mainPinRef, dependencies: [mobileSlideSelector] }
  );

  return { mainPinRef, conceptRef };
};