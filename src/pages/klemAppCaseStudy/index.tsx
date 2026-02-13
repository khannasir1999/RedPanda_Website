import HeaderFooterLayout from "@/layout/headerfooterlayout";
import Herosection from "./herosection";
import Information from "./information";
import AppScreenshots from "./appscreenshots";
import FullScreenshots from "./fullscreenshots";

const KlemAppCaseStudy = () => {
  return (
    <HeaderFooterLayout>
      <Herosection />
      <Information />
      <AppScreenshots />
      <FullScreenshots />
    </HeaderFooterLayout>
  );
};

export default KlemAppCaseStudy;