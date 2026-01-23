import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

interface UseCounterAnimationProps {
  onComplete?: () => void;
  itemCount: number;
  duration?: number;
}

export const useCounterAnimation = ({ 
  onComplete, 
  itemCount, 
  duration = 2.5 
}: UseCounterAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Calculate the percentage to move based on item count.
    // e.g., 11 items (0-100), we move up 10 slots.
    const yPercentTarget = -((itemCount - 1) / itemCount) * 100;

    timelineRef.current = gsap.timeline({
      onComplete: onComplete,
      defaults: { ease: "power3.inOut" } 
    });

    timelineRef.current
      .to(containerRef.current, {
        yPercent: yPercentTarget,
        duration: duration,
        force3D: true, // Hardware acceleration
      })
      // Add a subtle breathing effect during the movement
      .to(containerRef.current, {
        duration: duration * 0.5,
        yoyo: true,
        repeat: 1,
        ease: "sine.inOut"
      }, "<"); 

  }, { scope: containerRef, dependencies: [itemCount, duration] });

  return { containerRef };
};