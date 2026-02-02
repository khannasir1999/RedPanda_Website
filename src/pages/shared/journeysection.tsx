import Sectionheading from "../../components/shared/Sectionheading";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import Journeyrightsection from "@/components/journeys/journeyrightsection";
import QuoteCard from "@/components/getquotes/quotecard";
import { QUOTES } from "@/constants/quotes";
import GetQuoteBgImages from "@/pages/GetAQuote/getquotebgimages";

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
    <section className="relative isolate w-full px-[48px] overflow-hidden bg-black py-12 md:py-16 min-h-screen">
      <GetQuoteBgImages />
      <div className="absolute inset-0 bg-linear-to-b from-bg-black-100 to-[rgba(0,0,0,0.35)] z-1" />

      <div className="relative z-2 w-full flex gap-20 flex-col md:flex-row mt-10">
        <div className="shrink-0" ref={journeyLeftSectionRef}>
          <div className="journey-left-section">
            <Sectionheading
              heading={
                <>
                  Start your <span className="md:inline-block hidden"> </span>
                  <span className="font-medium text-red-primary-400">Journey</span>
                </>
              }
              className="text-white mb-8!"
            />

            <div className="flex flex-col gap-5">
              {QUOTES.map(({ country, description }, index) => (
                <QuoteCard
                  key={`country-${index}`}
                  description={description}
                  country={country}
                />
              ))}
            </div>
          </div>
        </div>

        <div ref={journeyRightSectionRef} className="journey-right-section w-full mt-15">
          <Journeyrightsection darkmode />
        </div>
      </div>
    </section>
  );
};

export default Journeysection;