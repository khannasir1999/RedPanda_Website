import InfiniteSlider from "../../components/animations/infiniteslider";
import { BRANDING_LOGOS } from "../../constants/brandinglogos";

const Brandinglogos = ({ theme = "light" }: { theme?: "light" | "dark" }) => {
  return (
    <section
      className={`${
        theme === "light"
          ? "bg-[#F2F2F2]"
          : "bg-bg-black-100 [&_img]:brightness-0 [&_img]:invert"
      } py-8 px-5 overflow-hidden`}
    >
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
