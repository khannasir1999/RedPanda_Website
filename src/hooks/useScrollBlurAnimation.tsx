// src/hooks/useScrollBlurAnimation.js

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export const useScrollBlurAnimation = (selector:string, containerRef:React.RefObject<HTMLElement | null>) => {
  useGSAP(
    () => {
      // Select all elements that match the selector
      const elements = gsap.utils.toArray(selector);

      elements.forEach((el) => {
        gsap.fromTo(
          el as gsap.TweenTarget,
          {
            // Initial state: blurred, slightly moved down, and invisible
            filter: 'blur(10px)',
            opacity: 0,
            y: 20,
          },
          {
            // Final state: clear, in original position, and fully visible
            filter: 'blur(0px)',
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power3.out',
            // Associate the animation with a ScrollTrigger
            scrollTrigger: {
              trigger: el as gsap.DOMTarget, // The element that triggers the animation
              start: "top bottom", 
              end: "top center",
              scrub: 1, // Smoothly scrubs the animation in sync with the scroll (1-second lag)
            },
          }
        );
      });
    },
    { scope: containerRef } // Scope the animation to the container to avoid conflicts
  );
};
