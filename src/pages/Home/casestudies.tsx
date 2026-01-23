import { useRef } from "react";
import Singlecasestudy from "../../components/casestudies/singlecasestudy";
import Sectionheading from "../../components/shared/Sectionheading";
import { CASE_STUDIES } from "../../constants/casestudies";
import { useScrollBlurAnimation } from "../../hooks/useScrollBlurAnimation";
import { useScrollFadeIn } from "../../hooks/useScrollFadeIn";

const Casestudies = () => {
  const casestudiesRef = useRef<HTMLDivElement | null>(null);

  useScrollBlurAnimation(".case-study", casestudiesRef);

  const { containerRef: casestudyheadingRef } = useScrollFadeIn({
    selector: ".casestudy-heading",
    direction: "top",
  });

  const { containerRef: casestudycardsRef } = useScrollFadeIn({
    selector: ".casestudy-cards",
    direction: "bottom",
    duration:1
  });

  return (
    <section className="py-15 px-4 bg-background-white min-h-screen">
      <div ref={casestudyheadingRef}>
        <Sectionheading
          className="casestudy-heading"
          heading={
            <>
              Selected{" "}
              <span className="font-medium text-red-primary-400 md:inline-block block">
                Case Studies
              </span>
            </>
          }
        />
      </div>

      <section ref={casestudycardsRef}>
        <div
          className="casestudy-cards grid px-1 grid-cols-1 md:grid-cols-2 grid-rows-3 gap-5"
          ref={casestudiesRef}
        >
          {CASE_STUDIES.map((stdy) => (
            <Singlecasestudy stdy={stdy} key={stdy} />
          ))}
        </div>
      </section>

    </section>
  );
};

export default Casestudies;
