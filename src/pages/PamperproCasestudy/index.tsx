import HeaderFooterLayout from "@/layout/headerfooterlayout";
import Herosection from "./herosection";
import Whatwedidsection from "./whatwedidsection";
import { useScrollOverlaying } from "@/hooks/useScrollOverlaying";
import Information from "./information";
import Informationextended from "./informationextended";
import Footer from "./footer";
import Sneakypeak from "./sneakypeak";
const PamperProCasestudy = () => {

  const { containerRef } = useScrollOverlaying(".pamperpro-casestudy-overlay-section", {
    initialBorderRadius: 0,
    finalBorderRadius: 0,
  });

  return (
    <HeaderFooterLayout>
      <div ref={containerRef} >
        <section className="pamperpro-casestudy-overlay-section">
          <Herosection />
        </section>
        <section className="pamperpro-casestudy-overlay-section">
          <Whatwedidsection />
        </section>
        <section>
          <Information />
        </section>
        <section>
          <Informationextended />
        </section>
        <section>
          <Sneakypeak />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </HeaderFooterLayout>
  );
};

export default PamperProCasestudy;
