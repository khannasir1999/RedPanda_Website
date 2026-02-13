import HeaderFooterLayout from "@/layout/headerfooterlayout";
import Herosection from "./herosection";
import Information from "./information";
import AppScreenshots from "./appscreenshots";

const KlemAppCaseStudy = () => {
  return (
    <HeaderFooterLayout>
      <Herosection />
      <Information />
      <AppScreenshots />
    </HeaderFooterLayout>
  );
};

export default KlemAppCaseStudy;