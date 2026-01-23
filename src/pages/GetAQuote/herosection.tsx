import Sectionheading from "@/components/shared/Sectionheading"
import GetQuoteBgImages from "./getquotebgimages"
import Journeyrightsection from "@/components/journeys/journeyrightsection"
import QuoteCard from "@/components/getquotes/quotecard"
import { QUOTES } from "@/constants/quotes"
import TopAnimator from "@/components/animations/topanimator"
import LeftAnimater from "@/components/animations/leftanimator"
import RightAnimator from "@/components/animations/rightanimator"

const Herosection = () => {

  return (
    <section className="relative isolate py-30 px-2 sm:px-4 w-full bg-black">
      <GetQuoteBgImages />

      <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C] to-[rgba(0,0,0,0.3)] z-[2]"></div>

      <div className="relative z-[3]">
        <TopAnimator>
          <Sectionheading
            className="getaquote-heading text-white z-[3] px-4"
            heading={
              <>
                Get a{" "}
                <span className="font-medium text-red-primary-400 ">
                  Quote
                </span>
              </>
            }
          />
        </TopAnimator>

        <section className="w-full overflow-x-hidden flex px-2 sm:px-5 bg-transparent gap-10 flex-col md:flex-row">
          <LeftAnimater className="shrink-0">
            {
              QUOTES.map(({ country, description }, index) => <QuoteCard key={`country-${index}`} description={description} country={country} />)
            }
          </LeftAnimater>

          <RightAnimator >
            <Journeyrightsection darkmode />
          </RightAnimator>
        </section>
      </div>
    </section>
  )
}

export default Herosection