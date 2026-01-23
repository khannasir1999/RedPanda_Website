// import { useVerticalWipeAnimation } from "@/hooks/useVerticalWipeAnimation";
import HeaderFooterLayout from "../../layout/headerfooterlayout";
import Clientsreviews from "../shared/clientsreviews";
import Faqsection from "../shared/faqsection";
import Journeysection from "../shared/journeysection";
import Conceptodesign from "./conceptodesign";
import Herosection from "./herosection";
import Servicesdetail from "./servicesdetail";
import Industries from "./industries";
import { useVerticalWipeAnimation } from "@/hooks/useVerticalWipeAnimation";
import { useScrollOverlaying } from "@/hooks/useScrollOverlaying";

const Services = () => {

  const { containerRef } = useScrollOverlaying(".services-overlay-section", {
    initialBorderRadius: 0,
    finalBorderRadius: 50,
    lastSectionOverflow: "visible"
  });

  const { mainPinRef, conceptRef } = useVerticalWipeAnimation({
    desktopSlideSelector: ".conceptdesign-desktop-section",
    mobileSlideSelector: ".conceptdesign-mobile-section",
  });

  return (
    <HeaderFooterLayout>
      <main ref={mainPinRef}>
        <div ref={containerRef}>
          <div className="hero-section-container services-overlay-section">
            <Herosection />
          </div>
          <div
            className="concept-section-container w-full services-overlay-section relative z-20"
            ref={conceptRef}
          >
            <Conceptodesign />
          </div>
        </div>
      </main>
      <div className="relative z-10 lg:-mt-[150vh]">
        <Industries />
      </div>
      <Servicesdetail />
      <Clientsreviews />
      <Faqsection />
      <Journeysection />
    </HeaderFooterLayout>
  );
};

export default Services;
