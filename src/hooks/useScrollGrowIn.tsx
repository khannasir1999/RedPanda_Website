import { type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface UseScrollGrowInProps {
  triggerRef: RefObject<HTMLElement | null>;
  redTargets: string;
  grayTargets: string;
}

export const useScrollGrowIn = ({ triggerRef, redTargets, grayTargets }: UseScrollGrowInProps) => {

  useGSAP(() => {

    const reds = gsap.utils.toArray(redTargets);
    const grays = gsap.utils.toArray(grayTargets);
    const allCards = [...reds, ...grays];


  gsap.set(allCards, {
      opacity: 0,
      scale: 0,
      transformOrigin: 'top left',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top 60%',
        toggleActions: 'play none none none',
        refreshPriority: -10,
      },
    });

    const animationProps = {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: 'cubic-bezier(1, 0.07, 0, 0.99)',
      stagger: 0.15,
    };

    tl.to(reds, animationProps, 0);

    tl.to(grays, animationProps, 0.1);

    return () => {
      if (tl) tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };

  }, {
    scope: triggerRef,
    dependencies: [redTargets, grayTargets], 
  });
};