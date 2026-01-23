import { useRef } from "react";

import leftwireframe from "../../../public/assets/images/conceptodesign/leftwireframe.jpg";
import rightwireframe from "../../../public/assets/images/conceptodesign/rightwireframe.png";
import leftdesign from "../../../public/assets/images/conceptodesign/leftdesign.png";
import rightdesign from "../../../public/assets/images/conceptodesign/rightdesign.png";
import mobiledesign from "../../../public/assets/images/conceptodesign/mobiledesign.png";
import mobilewireframe from "../../../public/assets/images/conceptodesign/mobilewireframe.jpg";
import Designprocessmobilesection from "../../components/conceptodesign/designprocessmobilesection";
import DesignProcessSection from "../../components/conceptodesign/designprocesssection";
import { useConceptToDesignAnimation } from "@/hooks/useConceptToDesignAnimation";

const Conceptodesign = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const whiteOverlayRef = useRef<HTMLDivElement>(null);

  useConceptToDesignAnimation({
    containerRef,
    section1Ref,
    section2Ref,
    whiteOverlayRef,
  });

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden lg:block">
        <div
          ref={containerRef}
          className="relative w-full h-screen overflow-hidden bg-bg-black-100"
        >
          <div ref={section1Ref} className="conceptdesign-desktop-section absolute inset-0 w-full h-screen">
            <DesignProcessSection
              className="w-full h-full"
              heading={
                <>
                  From Concept To <br /> Actual{" "}
                  <span className="font-medium text-red-primary-400">Design</span>
                </>
              }
              leftimage={leftwireframe}
              rightimage={rightwireframe}
            />
          </div>

          <div ref={section2Ref} className="conceptdesign-desktop-section absolute inset-0 w-full h-screen">
            <DesignProcessSection
              className="w-full h-full"
              heading={
                <>
                  Every great design <br /> starts with a{" "}
                  <span className="font-medium text-red-primary-400">
                    solid <br /> plan.
                  </span>
                </>
              }
              leftimage={leftdesign}
              rightimage={rightdesign}
            />
          </div>



          <div ref={whiteOverlayRef} className="absolute inset-0 w-full h-screen bg-white opacity-0 pointer-events-none z-50"></div>
        </div>
      </div>

      <div className="lg:hidden">
        <div
          // ref={mobileRef}
          className="relative w-full h-screen overflow-hidden"
        >
          <div className="conceptdesign-mobile-section absolute inset-0 w-full h-screen">
            <Designprocessmobilesection
              className="w-full h-full"
              heading={
                <>
                  From Concept To <br /> Actual{" "}
                  <span className="font-medium text-red-primary-400">Design</span>
                </>
              }
              imagesrc={mobilewireframe}
            />
          </div>

          <div className="conceptdesign-mobile-section absolute inset-0 w-full h-screen">
            <Designprocessmobilesection
              className="w-full h-full"
              heading={
                <>
                  Every great <br /> design starts <br /> with a{" "}
                  <span className="font-medium text-red-primary-400">
                    {" "}
                    solid <br /> plan.{" "}
                  </span>
                </>
              }
              imagesrc={mobiledesign}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Conceptodesign;

