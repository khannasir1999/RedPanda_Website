import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollSequenceProps {
  containerRef: React.RefObject<HTMLElement | null>;
  itemCount: number;
  onStepChange: (index: number) => void;
  isActive?: boolean;
  stepScrollPercent?: number;
}

export const useScrollSequence = ({
  containerRef,
  itemCount,
  onStepChange,
  isActive = true,
  stepScrollPercent = 100,
}: ScrollSequenceProps) => {
  const currentIndexRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current || !isActive || itemCount === 0) return;

    const element = containerRef.current;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: element,
        start: "top top",
        end: `+=${itemCount * stepScrollPercent}%`,
        pin: true,
        pinType: "transform", 
        scrub: 0.5,
        anticipatePin: 1,
        refreshPriority: 1, 

        onUpdate: (self) => {
          const progress = self.progress;
          const newIndex = Math.floor(progress * itemCount);
          const clampedIndex = Math.min(Math.max(newIndex, 0), itemCount - 1);

          if (clampedIndex !== currentIndexRef.current) {
            currentIndexRef.current = clampedIndex;
            onStepChange(clampedIndex);
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, itemCount, onStepChange, isActive, stepScrollPercent]);
};