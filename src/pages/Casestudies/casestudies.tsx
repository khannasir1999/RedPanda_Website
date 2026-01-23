import HeaderFooterLayout from "../../layout/headerfooterlayout";
import Clientsreviews from "../shared/clientsreviews";
import Creativitysection from "../shared/creativitysection";
import Faqsection from "../shared/faqsection";
import Journeysection from "../shared/journeysection";
import Herosection from "./herosection";
import Selectedcasestudies from "./selectedcasestudies";
import { useScrollOverlaying } from "../../hooks/useScrollOverlaying";

const Services = () => {
  const { containerRef } = useScrollOverlaying(".casestudies-overlay-section", {
    initialBorderRadius: 0,
    finalBorderRadius: 50,
  });

  return (
    <HeaderFooterLayout>
      <div ref={containerRef}>
        <section className="casestudies-overlay-section">
          <Herosection />
        </section>
        <section className="casestudies-overlay-section">
          <Selectedcasestudies />
        </section>
      </div>

      <Creativitysection />
      <Clientsreviews />
      <Faqsection />
      <Journeysection />
    </HeaderFooterLayout>
  );
};

export default Services;
