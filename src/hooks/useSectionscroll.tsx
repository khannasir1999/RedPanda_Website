import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type React from 'react';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// The hook now accepts the refs it needs to work with
export const useSectionscroll = (sectionRef: React.RefObject<HTMLElement | null>, videoContainerRef: React.RefObject<HTMLDivElement | null>) => {
    useGSAP(
        () => {
            // Ensure both refs are available before creating the animation
            if (sectionRef.current && videoContainerRef.current) {
                gsap.fromTo(
                    videoContainerRef.current,
                    {
                        // Initial (from) state: tilted and scaled down
                        rotateX: 25,
                        rotateY: -10,
                        scale: 0.85,
                    },
                    {
                        // Final (to) state: straight and full size
                        rotateX: 0,
                        rotateY: 0,
                        scale: 1,
                        ease: 'none', // A linear ease provides the most direct link to scroll
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top bottom', // Animation starts when the top of the section hits the bottom of the viewport
                            end: 'center center', // Animation ends when the center of the section is at the center of the viewport
                            scrub: 1, // This is the magic! It smoothly links the animation to the scrollbar. '1' adds a 1-second smoothing effect.
                        },
                    }
                );
            }
        },
        { scope: sectionRef }
    );
};