import LeftAnimater from "../../components/animations/leftanimator";
import RightAnimator from "../../components/animations/rightanimator";
import KlemHeroImage from "../../assets/images/KlemApp/Klemherosectionimg.png";
import { Klemdoublearrowicon } from "../../icons";

const Herosection = () => {
  return (
    <section className="relative isolate w-full min-h-screen overflow-hidden bg-[#C9C9C9] pt-20 pb-10">
      {/* Top meta row */}
      <div className="relative z-20 flex flex-col sm:flex-row items-start justify-between gap-4 text-[12px] sm:text-[14px] md:text-[16px] font-anuphan tracking-[-0.04em] text-black">
        <p className="hidden sm:block mt-1">Red Panda Network, LLC</p>

        <div className="hidden sm:flex items-start gap-6">
          <p className="whitespace-pre-line text-right leading-tight">
            {`Home \nCase Studies\nServices\nBlogs`}
          </p>
        </div>

        <div className="flex items-start gap-2 sm:gap-4">
          <p className="hidden sm:block whitespace-pre-line text-right leading-tight">
            {`Designed &\nDeveloped\nfor Malaysian\nResidents\nOnly`}
          </p>
        </div>
        <span className="hidden sm:block">
          <Klemdoublearrowicon />
          </span>
      </div>

      {/* Main content */}
      <div className="relative mt-6 sm:mt-10 flex flex-col xl:flex-row h-full justify-between gap-6 sm:gap-10 xl:mt-16">
        <LeftAnimater className="relative z-20 w-full xl:max-w-[980px]">
          <div className="relative inline-block w-full">
            {/* Base title */}
            <h1
              className="font-anuphan font-normal leading-[0.9]
                         text-[clamp(48px,10vw,170px)] sm:text-[clamp(64px,13vw,170px)] tracking-[-0.09em] text-black"
            >
              <span className="block">Klem App</span>
              <br />
              <span className="block whitespace-nowrap">&amp;&nbsp;Development</span>
            </h1>

            {/* Script "Design" overlay */}
            <span
              className="pointer-events-none absolute left-[30%] sm:left-[34%] top-[40%]
                         -translate-y-1/10 text-[clamp(56px,9vw,170px)] sm:text-[clamp(72px,11vw,170px)] leading-none text-[#E88B41]"
              style={{ fontFamily: "'Aguafina Script', cursive" }}
            >
              Design
            </span>
          </div>

          {/* Inline links / meta text */}
          <div className="mt-6 sm:mt-10 flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-[12px] sm:text-[14px] md:text-[16px] font-anuphan">
            <span>( Download )</span>
            <span>( 01 )</span>
            <span>( View file )</span>
            <span>( 02 )</span>
          </div>

          <p className="mt-3 sm:mt-4 text-[12px] sm:text-[14px] md:text-[16px] font-anuphan">
            ( Scroll Down To Explore Full Case Study )
          </p>
        </LeftAnimater>

        {/* Image / mockup on the right */}
        <RightAnimator className="relative z-10 mt-4 sm:mt-8 flex flex-1 items-center justify-center xl:mt-0 w-full xl:w-auto">
          <div className="relative w-full">
            <img
              src={KlemHeroImage}
              alt="Klem App case study mockups"
              className="relative z-10 mx-auto h-auto w-full max-h-[300px] sm:max-h-[400px] md:max-h-[450px] xl:max-h-[520px] 2xl:max-h-[800px] object-contain"
              draggable={false}
            />
          </div>
        </RightAnimator>
      </div>

      {/* Bottom credits row */}
      <div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-6 md:px-10 lg:px-16">
        <div className="flex flex-col gap-4 text-[12px] sm:text-[14px] md:text-[16px] font-anuphan text-black sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p>Designed by</p>
            <p className="font-medium">Mashhood Malik</p>
          </div>

          <div>
            <p>Developed by</p>
            <p className="font-medium">Red Panda Network</p>
          </div>

          <div>
            <p>Client Name</p>
            <p className="font-medium">Clara</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;