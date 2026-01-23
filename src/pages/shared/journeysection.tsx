import Sectionheading from "../../components/shared/Sectionheading";
import Ratingscard from "../../components/reviews/ratingscard";
import Button from "../../ui/button";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import Journeyrightsection from "@/components/journeys/journeyrightsection";

const Journeysection = () => {


  const { containerRef: journeyLeftSectionRef } = useScrollFadeIn({
    selector: ".journey-left-section",
    direction: "left",
  });
  const { containerRef: journeyRightSectionRef } = useScrollFadeIn({
    selector: ".journey-right-section",
    direction: "right",
  });


  return (
    <section className="w-full py-5 md:h-screen overflow-x-hidden flex px-4 bg-background-white gap-10 flex-col-reverse md:flex-row md:min-h-screen">
      <div className="shrink-0" ref={journeyLeftSectionRef}>
        <div className="journey-left-section ">
          <Sectionheading
            heading={
              <>
                Start your <br className="md:inline-block hidden" />
                <span className="font-medium text-red-primary-400">Journey</span>
              </>
            }
            className="md:inline-block hidden !mb-0"
          />

          <Ratingscard
            showgoggleratings={false}
            isClientReview={false}
          />

          <Button variant="filled" text="Schedule a Call" btnclassname="w-full md:w-auto" className="mt-8" />
        </div>
      </div>

      <div ref={journeyRightSectionRef}>
        <Journeyrightsection />
      </div>
    </section>
  );
};

export default Journeysection;