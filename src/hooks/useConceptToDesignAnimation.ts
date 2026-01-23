import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

interface UseConceptToDesignAnimationProps {
    containerRef: RefObject<HTMLElement | null>;
    section1Ref: RefObject<HTMLElement | null>;
    section2Ref: RefObject<HTMLElement | null>;
    whiteOverlayRef?: RefObject<HTMLElement | null>;
}

export const useConceptToDesignAnimation = ({
    containerRef,
    section1Ref,
    section2Ref,
    whiteOverlayRef,
}: UseConceptToDesignAnimationProps) => {
    useGSAP(
        () => {
            if (!containerRef.current || !section1Ref.current || !section2Ref.current) return;

            const mm = gsap.matchMedia();

            mm.add("(min-width: 1024px)", () => {
                const section1 = section1Ref.current;
                const section2 = section2Ref.current;
                
                if (!section1 || !section2) return;

                // Elements in Section 1
                const text1 = section1.querySelector(".concepttodesign-desktop-heading");
                const images1 = section1.querySelector(".concepttodesign-images");

                // Elements in Section 2
                const text2 = section2.querySelector(".concepttodesign-desktop-heading");
                const images2 = section2.querySelector(".concepttodesign-images");
                const leftImage2 = section2.querySelector(".concepttodesign-left-image");

                // Initial States
                gsap.set(section2, { opacity: 1, zIndex: 2 }); 
                gsap.set(images2, { opacity: 0, y: "20%" });
                gsap.set(text2, { y: "150vh", opacity: 1 });
                
                gsap.set(section1, { opacity: 1, zIndex: 1 });
                gsap.set(images1, { opacity: 1, y: "0%" });
                gsap.set(text1, { y: "0%", opacity: 1 });
                
                gsap.set(leftImage2, { transformOrigin: "center center", zIndex: 10 });

                if(whiteOverlayRef && whiteOverlayRef.current) {
                    gsap.set(whiteOverlayRef.current, { opacity: 0, zIndex: 60 });
                }

                // Remove nextSectionRef logic as we are using negative margin on parent now
                // if(nextSectionRef && nextSectionRef.current) {
                //    gsap.set(nextSectionRef.current, { opacity: 0, zIndex: 50 });
                // }

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "+=500%", 
                        pin: true,
                        preventOverlaps: true,
                        refreshPriority: -1,
                        scrub: 1,
                    },
                });

                // Phase 1: Text Swap and Image Crossfade (0-25%)
                tl.to(section2, { opacity: 1, duration: 1, ease: "power2.inOut" }, "phase1")
                  .to(text1, { y: "-100%", opacity: 0, duration: 1, ease: "power2.inOut" }, "phase1")
                  .to(images1, { opacity: 0, y: "-20%", duration: 1, ease: "power2.inOut" }, "phase1")
                  .to(text2, { y: "0%", opacity: 1, duration: 1, ease: "power2.inOut" }, "phase1")
                  .to(images2, { opacity: 1, y: "0%", duration: 1, ease: "power2.inOut" }, "phase1");

                // Phase 2: Right Image Zoom (25-50%)
                tl.set(images2, { zIndex: 10 }, "phase2");
                if (leftImage2) {
                    tl.to(leftImage2, {
                        scale: 15, 
                        xPercent: -50,
                        duration: 2,
                        ease: "power2.inOut",
                    }, "phase2");
                }

                // Phase 3: White Overlay Fade In (50-62.5%)
                if (whiteOverlayRef && whiteOverlayRef.current) {
                    tl.to(whiteOverlayRef.current, {
                        opacity: 1,
                        duration: 1,
                        ease: "power2.inOut",
                    }, "phase3");
                }

                // Phase 4: Reveal - Curtain Swap
                // 1. Instantly hide the content and background (while covered by white overlay)
                // 2. Fade out the white overlay to reveal what's underneath
                if (whiteOverlayRef && whiteOverlayRef.current) {
                    tl.set([section2, containerRef.current], { 
                        opacity: 0, 
                        visibility: "hidden" 
                    }, "phase4");
                    
                    tl.set(containerRef.current, { 
                        pointerEvents: "none",
                        backgroundColor: "transparent"
                    }, "phase4");

                    tl.to(whiteOverlayRef.current, {
                        opacity: 0,
                        duration: 1.5,
                        ease: "power2.inOut",
                    }, "phase4+=0.1"); // Slight delay to ensure swap is registered
                }
            });

            return () => mm.revert();
        },
        { scope: containerRef }
    );
};
