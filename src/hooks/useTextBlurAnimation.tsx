import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Options = {
  scopeRef?: React.RefObject<HTMLDivElement | null>;
  start?: string;
  end?: string;
  maxBlur?: number;
};

export const useTextBlurAnimation = (
  sectionsSelector: string,
  headingSelector: string,
  options?: Options
) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const {
    scopeRef = containerRef,
    start = "top bottom",
    end = "top top",
    maxBlur = 14,
  } = options || {};

  useGSAP(
    () => {
      const sections = gsap.utils.toArray<HTMLElement>(sectionsSelector);

      sections.forEach((section, index) => {
        const nextSection = sections[index + 1] as HTMLElement | undefined;
        if (!nextSection) return;

        const heading = section.querySelector<HTMLElement>(headingSelector);
        if (!heading) return;

        // perf + initial state
        gsap.set(heading, { filter: "blur(0px)", autoAlpha: 1, willChange: "filter, opacity" });

        gsap.to(heading, {
          filter: `blur(${maxBlur}px)`,
          autoAlpha: 0,          // fully hidden by the time overlay completes
          ease: "none",
          scrollTrigger: {
            trigger: nextSection,
            start,
            end,
            scrub: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              // snap exact edges to avoid flicker
              if (self.progress === 0) gsap.set(heading, { filter: "blur(0px)", autoAlpha: 1 });
              if (self.progress === 1) gsap.set(heading, { filter: `blur(${maxBlur}px)`, autoAlpha: 0 });
            },
            onLeave: () => gsap.set(heading, { filter: `blur(${maxBlur}px)`, autoAlpha: 0 }),
            onEnterBack: () => gsap.set(heading, { autoAlpha: 1 }),
          },
        });
      });
    },
    { scope: scopeRef }
  );

  return { containerRef };
};

// Keep existing import name working