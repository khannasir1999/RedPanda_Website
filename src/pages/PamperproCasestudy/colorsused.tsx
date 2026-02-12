
const COLOR_SWATCHES = [
  { hex: "#004D4D", label: "#004D4D" },
  { hex: "#AD971F", label: "#AD971F" },
  { hex: "#FAFAFA", label: "#FAFAFA" },
  { hex: "#101010", label: "#101010" },
];

import flowerImage from "../../assets/images/pamperpro/flower.png";
const ColorsUsed = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#1C1C1C] flex flex-col items-center justify-center px-[clamp(24px,5vw,80px)] py-[clamp(80px,12vw,160px)]">
      <div
        className="absolute bottom-0 right-0 w-[50%] h-[55%] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 100% 100%, rgba(173, 151, 31, 0.18) 0%, rgba(173, 151, 31, 0.08) 40%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-[1400px] flex flex-col items-start">
        <div className="relative inline-flex items-center justify-center  mb-12 lg:mb-16 w-full">
          <span
            className="font-lufga font-extrabold uppercase text-center leading-none tracking-[-0.08em] text-[#FFFFFF]"
            style={{ fontSize: "clamp(80px, 16vw, 420px)" }}
          >
            COLORS
          </span>
          <span
            className="absolute left-[50%] lg:left-[50%] -translate-x-1/2  top-[0.7em] leading-[1.2] tracking-[-0.03em] text-[#AD971F] capitalize whitespace-nowrap"
            style={{
              fontFamily: "'Aguafina Script', cursive",
              fontWeight: 400,
              fontSize: "clamp(44px, 9vw, 210px)",
            }}
          >
            Used
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-10 w-full max-w-[1400px]">
          <div className="grid grid-cols-2 gap-6 w-full max-w-[850px]">
            {COLOR_SWATCHES.map(({ hex, label }) => {
              const isLight = hex === "#FAFAFA";
              return (
                <div
                  key={hex}
                  className="relative w-full aspect-[5/4] rounded-[20px] border border-white/10 overflow-hidden"
                  style={{ backgroundColor: hex }}
                >
                  <span
                    className="absolute bottom-0 left-0 right-0 block w-full px-4 py-3 font-['Outfit'] font-normal tracking-tight text-base"
                    style={{
                      color: isLight ? "#101010" : "#FFFFFF",
                      fontSize: 26,
                    }}
                  >
                    {label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="relative flex-1 min-w-0 min-h-[340px] lg:min-h-0 flex items-center justify-center overflow-hidden rounded-[20px]">
            <div
              className="absolute inset-0 w-full h-full rounded-[20px]"
              style={{
                background:
                  "radial-gradient(ellipse 80% 80% at 30% 20%, rgba(0, 77, 77, 0.35) 0%, rgba(173, 151, 31, 0.22) 50%, rgba(16, 16, 16, 0.95) 100%)",
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-[60%] h-[45%] rounded-[20px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 100% 100%, rgba(173, 151, 31, 0.3) 0%, transparent 60%)",
              }}
            />
           <img src={flowerImage} alt="Flower" className="absolute bottom-0 right-0 w-full h-full rounded-[20px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorsUsed;
