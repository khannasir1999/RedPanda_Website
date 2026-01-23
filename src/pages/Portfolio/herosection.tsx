import Introtext from "@/components/portfolio/IntroText";
import Backgroundredglow from "@/components/services/backgroundredglow";
import portfolioimg from "../../../public/assets/images/casestudies/study5.png";
import { PORTFOLIO_DATA } from "@/constants/designdata";
import Designdatacomp from "@/components/portfolio/Designdatacomp";
import LeftAnimater from "@/components/animations/leftanimator";
import BottomAnimator from "@/components/animations/bottomanimator";
import RightAnimator from "@/components/animations/rightanimator";

const Herosection = () => {
  return (
    <section className="relative md:h-screen bg-bg-black-100 overflow-hidden px-4 pt-25 pb-10 isolate">
      <Backgroundredglow className="-top-15 -right-40 " />
      <Backgroundredglow className="-bottom-15 -left-40" />
      <div className="w-full flex md:flex-row flex-col gap-12 h-full">
        <div className="w-[100%] md:w-[40%] pl-4 flex flex-col gap-15">
          <LeftAnimater>
            <Introtext />
            <p className="font-chillax mt-5 font-[400] text-[12px] md:text-[0.87vw] w-full md:max-w-[85%] leading-[14px] md:leading-[1.0vw] tracking-[0px] uppercase text-white">
              we specialize exclusively in creating exceptional user interfaces
              and experiences. We cover the full spectrum of UI/UX design to
              ensure your product is not just beautiful, but also functional,
              accessible, and drives results.
            </p>
          </LeftAnimater>
          <BottomAnimator className="w-full flex gap-10 mt-auto">
            {PORTFOLIO_DATA.map(({ id, value, label }) => (
              <Designdatacomp key={id} label={label} value={value} />
            ))}
          </BottomAnimator>
        </div>
        <RightAnimator className="w-[60%]">
          <img
            src={portfolioimg}
            className="w-full h-full object-cover rounded-2xl"
            alt=""
          />
        </RightAnimator>
      </div>
    </section>
  );
};

export default Herosection;
