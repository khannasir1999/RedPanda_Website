import KlemApp from "../../assets/videos/klenApp.mp4";

const Information = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#C9C9C9] py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-[1688px]">
        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full">
          {/* Top-Left: Klem Description */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
            <div className="font-anuphan text-black">
              <p className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] font-medium leading-[1.3] tracking-[-0.04em]">
                Klem is a smart tax app that simplifies financial records and claims. Users can track spending, manage receipts, and submit claims easily. Designed for accessibility and efficiency, Klem connects taxpayers and service providers for effortless tax management.
              </p>
            </div>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-anuphan font-normal leading-[1.3] tracking-[-0.04em] text-black">
              ( 01 )
            </p>
            <div className="relative w-full flex items-center justify-center right-120">
              <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-[#F28F40] rounded-full flex items-center justify-center">
                <span className="text-white text-[48px] sm:text-[64px] md:text-[80px] lg:text-[110px] font-light" style={{ fontFamily: "'Aguafina Script', cursive" }}>
                  .Klem
                </span>
              </div>
            </div>
          </div>

          {/* Top-Right: Klem Video */}
          <div className="flex items-center justify-center bg-bg-black-100 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden w-full aspect-video md:aspect-square lg:aspect-video">
            <video
              src={KlemApp}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom-Left: The Problem */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-5">
              <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-anuphan font-normal leading-[1.3] tracking-[-0.04em] text-black">
                The Problem
              </h3>
              <span className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-anuphan font-normal leading-[1.3] tracking-[-0.04em] text-black">
                ( 02 )
              </span>
            </div>
            <p className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] font-anuphan font-medium leading-[1.3] tracking-[-0.04em] text-black">
              Taxpayers struggle to keep organized records of expenses for claims and service providers. A centralized system reduces confusion, lost data, and manual work, allowing users to manage their tax information simply.
            </p>
          </div>

          {/* Bottom-Right: The Solution */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-5">
              <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-anuphan font-normal leading-[1.3] tracking-[-0.04em] text-black">
                The Solution we provided
              </h3>
              <span className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-anuphan font-normal leading-[1.3] tracking-[-0.04em] text-black">
                ( 03 )
              </span>
            </div>
            <p className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] font-anuphan font-medium leading-[1.3] tracking-[-0.04em] text-black">
              We built Klem an intuitive platform that empowers taxpayers to control their records and claims. Users can log expenses, organize claims, and connect with providers, transforming a tedious process into a seamless experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
