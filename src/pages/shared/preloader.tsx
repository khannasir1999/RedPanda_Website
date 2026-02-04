import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onFinish: () => void;
  duration?: number;
}

const Preloader = ({ onFinish, duration = 3 }: PreloaderProps) => {
  const pandaRef = useRef<HTMLImageElement>(null);
  const starRef = useRef<HTMLImageElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!pandaRef.current || !starRef.current) return;

    // Animate panda from right to left
    const tl = gsap.timeline({
      onComplete: onFinish,
    });

    // Move panda
    tl.fromTo(
      pandaRef.current,
      { x: "100vw" },
      { 
        x: "85%", 
        duration: duration,
        ease: "power2.out"
      }
    );

    // Pop up star when panda reaches the hand
    tl.fromTo(
      starRef.current,
      { scale: 0, opacity: 0, rotation: -180 },
      { 
        scale: 1, 
        opacity: 1, 
        rotation: 0,
        duration: 0.5,
        ease: "back.out(1.7)"
      },
      "-=0.3" // Start slightly before panda stops
    );

    return () => {
      tl.kill();
    };
  }, [onFinish, duration]);

  return (
    <div 
      className="fixed inset-0 z-50 h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url(/assets/images/${isMobile ? "mobile_loader_bg.png" : "loader_background.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        ref={pandaRef}
        src="/assets/images/loader_panda.png"
        alt="Loading..."
        className={`absolute top-1/2 -translate-y-1/2 ${isMobile ? "h-[175px]" : "h-[200px]"} md:h-[335px] lg:h-[400px] xl:h-[600px] 2xl:h-[800px] object-contain`}
      />
      
      {/* Star that pops up between the hands */}
      <img
        ref={starRef}
        src="/assets/images/Star.svg.png"
        alt="Star"
        className={`absolute top-1/2 -translate-y-1/2 ${isMobile ? "h-screen" : "h-[80px]"} md:h-[150px] object-contain pointer-events-none`}
        style={{ opacity: 0, right: isMobile ? "0%" : "55%" }}
      />
    </div>
  );
};

export default Preloader;
