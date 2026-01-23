import { type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface UseTextScrollFillProps {
  targetRef: RefObject<HTMLElement | null>;
  initialColor: string;
  finalColor: string;
  highlightColor?: string;
  highlightSelector?: string;
}

export const useTextScrollFillAnimation = ({
  targetRef,
  initialColor,
  finalColor,
  highlightColor,
  highlightSelector,
}: UseTextScrollFillProps) => {
  useGSAP(
    () => {
      const target = targetRef.current;
      if (!target) return;

      let highlightContainer: HTMLElement | null = null;

      if (highlightSelector && highlightColor) {
        highlightContainer =
          target.querySelector<HTMLElement>(highlightSelector);
      }


      const split = new SplitText(target, {
        type: "words,chars",
        charsClass: "split-char",
      });

      gsap.set(split.chars, { color: initialColor });

      gsap.to(split.chars, {
       color: (_, el) => {
          if (highlightContainer && highlightContainer.contains(el as Element)) {
            return highlightColor!;
          }
          
          return finalColor;
        },
        opacity: 1,
        ease: "none",
        stagger: 0.05,
        scrollTrigger: {
          trigger: target,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      });

      return () => {
        try {
          split?.revert();
        } catch {}
      };
    },
    {
      scope: targetRef,
      dependencies: [
        targetRef,
        initialColor,
        finalColor,
        highlightColor,
        highlightSelector,
      ],
    }
  );
};
