import {
  BRANDING_DETAIL,
  DEVELOPMENT_DETAIL,
  PRODUCT_DESIGN_DETAIL,
  SAAS_DESIGN_DETAIL,
  UI_UX_DETAIL,
  WEB_DESIGN_DETAIL,
} from "../../constants/servicesdetails.tsx";
import Singleservicedetail from "../../components/services/singleservicedetail";
import ServicePairWrapper from "@/components/services/servicepairwrapper.tsx";

const Servicesdetail = () => {
  return (
    <section className="relative isolate bg-background-white">
      <ServicePairWrapper
        splineUrl="https://prod.spline.design/FPiPGCpgvIO0EPSH/scene.splinecode"
        splineScale="scale-150 2xl:scale-180"
      >
        {UI_UX_DETAIL.map((d, index) => (
          <Singleservicedetail key={`ui-ux-${index}`} {...d} />
        ))}
        {WEB_DESIGN_DETAIL.map((d, index) => (
          <Singleservicedetail key={`web-design-${index}`} {...d} />
        ))}
      </ServicePairWrapper>
      <ServicePairWrapper
        splineUrl="https://prod.spline.design/GX6M1X44k9Qahyvv/scene.splinecode"
        splineScale="scale-150 2xl:scale-250"
      >
        {PRODUCT_DESIGN_DETAIL.map((d, index) => (
          <Singleservicedetail key={`product-design-${index}`} {...d} />
        ))}
        {SAAS_DESIGN_DETAIL.map((d, index) => (
          <Singleservicedetail key={`saas-design-${index}`} {...d} />
        ))}
      </ServicePairWrapper>
      <ServicePairWrapper
        splineUrl="https://prod.spline.design/H8hANfgJStLQQ-rx/scene.splinecode"
        splineScale="scale-100 2xl:scale-120"
      >
        {BRANDING_DETAIL.map((d, index) => (
          <Singleservicedetail key={`branding-${index}`} {...d} />
        ))}
        {DEVELOPMENT_DETAIL.map((d, index) => (
          <Singleservicedetail key={`development-${index}`} {...d} />
        ))}
      </ServicePairWrapper>
    </section>
  );
};

export default Servicesdetail;
