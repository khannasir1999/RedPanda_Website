import Sectionheading from "../shared/Sectionheading";
import { useState } from "react";
import { BUDGET_BADGES, SERVICE_BADGES } from "@/constants/journeybadges";
import { useActive } from "@/hooks/useActive";
import JourneyBadge from "./journeybadge";
import Contactinput from "./contactinput";
import { Checkbox, CheckboxIndicator } from "../../ui/checkbox";
import { CheckboxtickIcon } from "@/icons";
import Button from "@/ui/button";
import { cn } from "@/utils/cn";
import { useLocation } from "react-router";

const Badgesheading = ({
  text,
  darkmode = false,
}: {
  text: string;
  darkmode?: boolean;
}) => (
  <p
    className={`font-chillax text-[500] text-[23px] md:text-[1.68vw] font-medium my-4 ${darkmode ? "text-white" : ""
      }`}
  >
    {text}
  </p>
);

const Journeyrightsection = ({ darkmode = false }: { darkmode?: boolean }) => {
  const [activeServices, setActiveServices] = useState<number[]>([]);

  const toggleService = (index: number) => {
    setActiveServices((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const { setActive: setActiveBudget, checkIsActive: checkBudgetActive } =
    useActive(null);

  const location = useLocation();

  const isQuotePage = location.pathname === "/get-quote"

  return (
    <div className="journey-right-section">
      {!isQuotePage && <Sectionheading
        heading={
          <>
            Start your <br className="md:inline-block hidden" />
            <span className="font-medium text-red-primary-400">Journey</span>
          </>
        }
        className="inline-block md:hidden"
      />}
      <Badgesheading darkmode={darkmode} text="Service*" />
      <div className="my-7 2xl:my-10 flex gap-x-3 gap-y-4 flex-wrap">
        {SERVICE_BADGES.map((badge, index) => {
          return (
            <JourneyBadge
              key={badge}
              text={badge}
              handleClick={() => toggleService(index)}
              active={activeServices.includes(index)}
              showrighticon
              darkmode={darkmode}
            />
          );
        })}
      </div>
      <Badgesheading
        darkmode={darkmode}
        text="Your Budget on That Project In USD*"
      />
      <div className="my-7 2xl:my-10 flex gap-2 md:gap-5 flex-wrap">
        {BUDGET_BADGES.map((badge, index) => {
          return (
            <JourneyBadge
              key={badge}
              text={badge}
              handleClick={() => setActiveBudget(index)}
              active={checkBudgetActive(index)}
              className="px-7"
              darkmode={darkmode}
            />
          );
        })}
      </div>
      <Badgesheading darkmode={darkmode} text="Your Contact Information" />
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-x-3">
        <div>
          <Contactinput
            darkmode={darkmode}
            type="text"
            placeholder="Your Name*"
          />
        </div>
        <div>
          <Contactinput
            darkmode={darkmode}
            type="email"
            placeholder="Your E-mail*"
          />
        </div>
        <div>
          <Contactinput darkmode={darkmode} type="tel" placeholder="Phone*" />
        </div>
        <div>
          <Contactinput darkmode={darkmode} type="text" placeholder="Company" />
        </div>
      </div>
      <div className="flex justify-between items-center pr-3 my-3 flex-col md:flex-row gap-4">
        <div className="flex items-center justify-center gap-2">
          <Checkbox id="c1">
            <CheckboxIndicator>
              <CheckboxtickIcon width={13} height={13} />
            </CheckboxIndicator>
          </Checkbox>
          <label
            htmlFor="c1"
            className={cn(
              "font-chillax font-medium",
              darkmode ? "text-white" : "text-black",
              isQuotePage ? "text-[15px] md:text-[1vw]" : "text-[20px] md:text-[1.46vw]"
            )}
          >
            Please send me a non-disclosure agreement. {isQuotePage && <span>(Optional)</span>}
          </label>
        </div>
        <Button
          variant="filled"
          text="Start Your Journey"
          btnclassname="w-full min-w-fit md:w-auto"
        />
      </div>
    </div>
  );
};

export default Journeyrightsection;
