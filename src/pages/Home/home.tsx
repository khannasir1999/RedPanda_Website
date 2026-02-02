import HeaderFooterLayout from "../../layout/headerfooterlayout";
import Brandinglogos from "./brandinglogos";
import Casestudies from "./casestudies";
import Clientsreviews from "../shared/clientsreviews";
import Creativitysection from "../shared/creativitysection";
import Designflowsection from "./designflowsection";
import Faqsection from "../shared/faqsection";
import Herosection from "./herosection";
import Journeysection from "../shared/journeysection";
import Services from "./services";
// import Videosection from "./videosection";
import { useScrollOverlaying } from "../../hooks/useScrollOverlaying";
import ServiceContent from "./serviceContent";

const Home = () => {
  const { containerRef } = useScrollOverlaying(".home-overlay-section", {
    initialBorderRadius: 0,
    finalBorderRadius: 50,
  });

  return (
    <HeaderFooterLayout>
      <Herosection />
      <Brandinglogos theme="light" />
      <ServiceContent />

      <div ref={containerRef}>
        {/* <section className="home-overlay-section">
          <Videosection />
        </section> */}
        <section>
          <Services />
        </section>

        <section className="home-overlay-section px-[48px]">
          <Casestudies />
        </section>
        <section className="sm:home-overlay-section">
          <Designflowsection />
        </section>
        <Creativitysection />
        <Clientsreviews />
        <Journeysection />
        <Faqsection />
      </div>
    </HeaderFooterLayout>
  );
};

export default Home;
