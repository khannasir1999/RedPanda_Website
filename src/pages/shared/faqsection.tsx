import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import Sectionheading from "../../components/shared/Sectionheading";
import { QUESTIONS_AND_ANSWERS } from "../../constants/FAQS";
import type { QuestionAndAnswerType } from "../../types/questionanswer";
import {
  Accordian,
  AccordianContent,
  AccordianItem,
  AccordianTrigger,
} from "../../ui/accordian";

const Faqsection = () => {
  const { containerRef: faqsheadingRef } = useScrollFadeIn({
    selector: ".faqs-heading",
    direction: "top",
  });

  const { containerRef: faqsRef } = useScrollFadeIn({
    selector: ".faqs-accordians",
    direction: "bottom",
    duration: 0.5,
  });

  return (
    <section className="px-[48px] py-[100px] bg-background-white flex flex-col overflow-hidden">
      <div ref={faqsheadingRef} className="shrink-0">
        <Sectionheading
          className="faqs-heading mb-2!"
          heading={
            <>
              Frequently <br className="md:hidden inline-block" /> Asked{" "}
              <br className="md:inline-block hidden" />
              <span className="font-medium text-red-primary-400">
                Questions
              </span>
            </>
          }
        />
      </div>

      <div ref={faqsRef} className="w-full">
        <Accordian
          type="single"
          defaultValue="item-1"
          collapsible
          className="px-1 faqs-accordians"
        >
          {QUESTIONS_AND_ANSWERS.map(
            ({ question, answer, key }: QuestionAndAnswerType) => (
              <AccordianItem value={`item-${key}`}>
                <AccordianTrigger
                  key={key}
                  value={`item-${key}`}
                  className="text-[24px] md:text-[1.75vw] bg-white"
                >
                  {question}
                </AccordianTrigger>
                <AccordianContent>
                  <p className="px-5 py-4 text-[19px] md:!text-[1.39vw]">
                    {answer}
                  </p>
                </AccordianContent>
              </AccordianItem>
            )
          )}
        </Accordian>
      </div>
    </section>
  );
};

export default Faqsection;
