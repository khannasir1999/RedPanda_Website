import HeaderFooterLayout from "@/layout/headerfooterlayout";
import Herosection from "./herosection";

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
      </div>
    </HeaderFooterLayout>
  );
};

export default Portfolio;
