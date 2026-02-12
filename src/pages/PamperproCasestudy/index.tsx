import HeaderFooterLayout from "@/layout/headerfooterlayout";
import Herosection from "./herosection";
import Whatwedidsection from "./whatwedidsection";
import { useScrollOverlaying } from "@/hooks/useScrollOverlaying";
import Information from "./information";
import Informationextended from "./informationextended";
import Footer from "./footer";
import Sneakypeak from "./sneakypeak";
import Identityvisuals from "./identityvisuals";
import TypefaceUsed from "./typefaceused";
import ColorsUsed from "./colorsused";
const PamperProCasestudy = () => {

  const { containerRef } = useScrollOverlaying(".pamperpro-casestudy-overlay-section", {
    initialBorderRadius: 0,
    finalBorderRadius: 0,
  });

  return (
    <HeaderFooterLayout>
      <div ref={containerRef} className="bg-bg-black-100" >
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
          <Identityvisuals />
        </section>
        <section>
          <TypefaceUsed />
        </section>
        <section>
          <ColorsUsed />
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
