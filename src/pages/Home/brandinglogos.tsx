import InfiniteSlider from "../../components/animations/infiniteslider";
import { BRANDING_LOGOS } from "../../constants/brandinglogos";

const Brandinglogos = () => {
  return (
    <section className="bg-[#F2F2F2] py-8 px-5 overflow-hidden">
      <InfiniteSlider
        items={BRANDING_LOGOS}
        speed={150}
        direction="left"
        gap={120}
        itemsHeight={30}
        pauseOnHover={false}
        scaleOnHover={false}
        fadeOut={false}
        ariaLabel="Branding Logos"
      />
    </section>
  );
};

export default Brandinglogos;
