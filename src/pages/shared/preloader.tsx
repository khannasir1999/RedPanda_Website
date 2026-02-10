import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onFinish: () => void;
  duration?: number;
}

const Preloader = ({ onFinish, duration = 3 }: PreloaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pandaWrapperRef = useRef<HTMLDivElement>(null);
  const pandaRef = useRef<HTMLImageElement>(null);
  const starRef = useRef<HTMLImageElement>(null);

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 768
  );
  const [assetsReady, setAssetsReady] = useState(false);

  /* -------------------- Resize -------------------- */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* -------------------- Asset Load -------------------- */
  useEffect(() => {
    const panda = pandaRef.current;
    const star = starRef.current;

    if (!panda || !star) return;

    let loaded = 0;
    const onLoad = () => {
      loaded += 1;
      if (loaded === 2) setAssetsReady(true);
    };

    panda.addEventListener("load", onLoad);
    star.addEventListener("load", onLoad);

    // Cached images fallback
    if (panda.complete) onLoad();
    if (star.complete) onLoad();

    return () => {
      panda.removeEventListener("load", onLoad);
      star.removeEventListener("load", onLoad);
    };
  }, []);

  /* -------------------- Calculate Stop Position -------------------- */
  const getPandaStopX = () => {
    const panda = pandaRef.current;
    const wrapper = pandaWrapperRef.current;

    if (!panda || !wrapper) return 0;

    const viewportWidth = window.innerWidth;
    const pandaWidth = panda.getBoundingClientRect().width;

    // Where the HANDS should land on screen
    const handAnchor = isMobile ? 0.62 : 0.58;

    // Where the hands are inside the panda image
    const pandaHandOffset = 0.50;

    return viewportWidth * handAnchor - pandaWidth * pandaHandOffset;
  };

  /* -------------------- GSAP Animation -------------------- */
  useLayoutEffect(() => {
    if (!assetsReady) return;
    if (!containerRef.current || !pandaWrapperRef.current) return;

    const ctx = gsap.context(() => {
      const pandaWrapper = pandaWrapperRef.current!;
      const star = starRef.current;

      // Initial states
      gsap.set(pandaWrapper, { x: "100vw" });

      if (star) {
        gsap.set(star, {
          scale: 0,
          opacity: 0,
          rotation: -180,
        });
      }

      const tl = gsap.timeline({
        onComplete: onFinish,
      });

      // Panda walk-in (precisely aligned)
      tl.to(pandaWrapper, {
        x: getPandaStopX(),
        duration,
        ease: "power2.out",
      });

      // Star pop between hands
      if (star) {
        tl.to(
          star,
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [assetsReady, duration, onFinish, isMobile]);

  /* -------------------- Render -------------------- */
  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url(/assets/images/${
          isMobile ? "mobile_loader_bg.png" : "loader_background.png"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        ref={pandaWrapperRef}
        className="absolute top-1/2 -translate-y-1/2"
      >
        {/* Panda */}
        <img
          ref={pandaRef}
          src="/assets/images/loader_panda.png"
          alt="Loading..."
          className={`block ${
            isMobile ? "h-[175px]" : "h-[200px]"
          } md:h-[335px] lg:h-[400px] xl:h-[600px] 2xl:h-[800px] object-contain`}
        />

        {/* Star locked between hands */}
        <img
          ref={starRef}
          src="/assets/images/Star.svg.png"
          alt="Star"
          className={`absolute pointer-events-none ${
            isMobile ? "h-[40px]" : "h-[60px]"
          } md:h-[120px] object-contain`}
          style={{
            top: "49%",      // fine-tune once if needed
            left: "15%",     // fine-tune once if needed
            transform: "translate(-50%, -50%)",
            opacity: 0,
          }}
        />
      </div>
    </div>
  );
};

export default Preloader;
