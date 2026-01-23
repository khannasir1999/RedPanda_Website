import TopAnimator from "@/components/animations/topanimator";
import InfiniteSlider from "../../components/animations/infiniteslider";
import Herostudycard from "../../components/casestudies/herostudycard";
import { CSTUDY_HERO_MARQUEE_ITEMS } from "../../constants/cstudyheromarqueeitems";
import { HERO_CASE_STUDIES } from "../../constants/herocasestudies";
import BottomAnimator from "@/components/animations/bottomanimator";

const Herosection = () => {
  return (
    <section className="w-full px-3 md:px-5 py-30 md:py-20 min-h-screen">
      <TopAnimator>
        <h1 className="uppercase font-chillax font-medium md:text-[15vw] text-[22vw] tracking-tighter leading-[1]">
          Case Studies
        </h1>
      </TopAnimator>
      <div className="hidden md:grid md:grid-cols-3 grid-rows-1 gap-5 mb-8">
        {HERO_CASE_STUDIES.map((cstudy, index) => (
          <BottomAnimator>
            <Herostudycard key={`hero-cstudy-${index}`} bgimage={cstudy} />
          </BottomAnimator>
        ))}
      </div>
      <div className="md:hidden my-8">
        <Herostudycard bgimage={HERO_CASE_STUDIES[0]} />
      </div>
      <div className="border-2 rounded-2xl border-red-primary-400 overflow-hidden w-full">
        <InfiniteSlider
          items={CSTUDY_HERO_MARQUEE_ITEMS}
          speed={80}
          direction="right"
          gap={25}
          itemsHeight={0}
          pauseOnHover={false}
          scaleOnHover={false}
          fadeOut={true}
          fadeOutColor="transparent"
          ariaLabel="Footer marquees"
          className="overflow-y-hidden p-4"
        />
      </div>
    </section>
  );
};

export default Herosection;
