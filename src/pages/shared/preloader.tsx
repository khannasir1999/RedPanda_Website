import { useCounterAnimation } from "@/hooks/useCounterAnimation";

interface PreloaderProps {
  onFinish: () => void;
  duration?: number;
}

const Preloader = ({ onFinish, duration }: PreloaderProps) => {

  const percentages = Array.from({ length: 11 }, (_, i) => `${i * 10}%`);

  const { containerRef } = useCounterAnimation({
    onComplete: onFinish,
    itemCount: percentages.length,
    duration
  });

  return (
    <div className="h-screen w-full p-4 flex items-end justify-start">
      <div className="fixed inset-0 z-50 h-screen w-full p-4 flex items-end justify-start">

        <div className="relative h-[1.125em] w-full overflow-hidden text-[96px] md:text-[7vw] font-chillax font-medium leading-[1.125] tracking-[-5.45px] text-red-primary-400">

          <div ref={containerRef} className="flex flex-col will-change-transform">
            {percentages.map((percent, index) => (
              <h1
                key={index}
                className="block whitespace-nowrap"
              >
                {percent}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
