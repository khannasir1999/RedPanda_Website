import Sectionheading from "../../components/shared/Sectionheading";
import Interactivesection from "../../components/creativity/Interactivesection";
import { useScrollFadeIn } from "../../hooks/useScrollFadeIn";


const Creativitysection = () => {

  const { containerRef: creativityheadingRef } = useScrollFadeIn({
    selector: ".creativity-heading",
    direction: "top",
  });

  const { containerRef: interactivesectionRef } = useScrollFadeIn({
    selector: ".interactive-section",
    direction: "bottom",
    duration: 0.5,
    distance: 200
  });

  return (
    <section className="pt-[100px] px-[48px] bg-[#F2F2F2] h-screen w-full flex flex-col overflow-hidden" >
      <div ref={creativityheadingRef} >
        <Sectionheading
          className="creativity-heading m-0! mb-5!"
          heading={
            <>
              Where <br className="inline-block md:hidden" /> <span className="text-red-primary-400 font-[500]">Creativity</span> <br className="hidden md:inline-block" /> Meets Functionality
            </>
          }
        />
      </div>

      <section ref={interactivesectionRef} className="flex-1 w-full h-full pt-7">
        <Interactivesection />
      </section>
    </section>
  );
};


export default Creativitysection;
