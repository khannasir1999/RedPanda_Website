import HeaderFooterLayout from "@/layout/headerfooterlayout";
import Herosection from "./herosection";
import Designpreview from "./designpreview";
import Clientserviceinformation from "./clientserviceinformation";
import Designinfo from "./designinfo";
import Moreprojects from "./moreprojects";
import { useScrollOverlaying } from "@/hooks/useScrollOverlaying";

const Portfolio = () => {

  const { containerRef } = useScrollOverlaying(".portfolio-overlay-section", {
    initialBorderRadius: 0,
    finalBorderRadius: 0,
  });

  return (
    <HeaderFooterLayout>
      <div ref={containerRef}>
        <section className="portfolio-overlay-section">
          <Herosection />
        </section>
        <section className="portfolio-overlay-section">
          <Designpreview />
          <Clientserviceinformation />
        </section>
        <section className="portfolio-overlay-section">
          <Designinfo />
        </section>
        <Moreprojects />
      </div>
    </HeaderFooterLayout>
  );
};

export default Portfolio;
