import Button from "../../ui/button";
import {
  Accordian,
  AccordianContent,
  AccordianItem,
  AccordianTrigger,
} from "../../ui/accordian";
import type { ServiceDetailProps } from "../../types/servicedetailprops";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { cn } from "@/utils/cn";
const Logo = () => (
  <p className="font-chillax text-[32px] leading-6 lg:text-[2.3vw] text-black lg:leading-[1.75vw] font-medium tracking-[-3px] mb-3">
    <span className="text-red-primary-400 border-red-primary-400 border rounded-full px-[5px] py-[0.1px]">
      Red
    </span>{" "}
    Panda
  </p>
);

const Singleservicedetail = ({
  servicetitle,
  servicedesc,
  SERVICES_CATEGORIES,
  direction = "ltr",
  greatercontent,
}: ServiceDetailProps) => {
  const { containerRef: servicesLeftContainerRef } = useScrollFadeIn({
    selector: ".services-left-section",
    direction: "left",
  });

  const { containerRef: servicesRightContainerRef } = useScrollFadeIn({
    selector: ".services-right-section",
    direction: "right",
  });

  return (
    <div className="w-full px-4 py-15 z-10 overflow-x-hidden">
      <div
        className={`flex justify-between items-center flex-col gap-x-10  ${direction === "ltr" ? "md:flex-row" : "md:flex-row-reverse"
          } md:h-screen w-full`}
      >
        <div
          className="w-full lg:w-[45%] b-8 md:mb-0 py-10 "
          ref={servicesLeftContainerRef}
        >
          <div className="services-left-section">
            <Logo />
            <h1 className="text-[54.3px] lg:text-[7vw] leading-[61.1px] md:leading-[7.9vw] tracking-[-3px] md:tracking-[-4px] font-chillax whitespace-nowrap">
              {servicetitle}
            </h1>
            <p className="text-light-gray font-chillax text-[18px] lg:text-[1.61vw] leading-[35px] lg:leading-[2.5vw] tracking-[-3%] my-4 mr-2">
              {servicedesc}
            </p>
            <Button variant="filled" text="Get a Quote" />
          </div>
        </div>

        {/* [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] */}

        <div
          className="w-full hidden md:inline-block lg:w-[40%] h-full"
          ref={servicesRightContainerRef}
        >
          <div
            className="services-right-section overflow-y-auto [&::-webkit-scrollbar]:hidden 
    [-ms-overflow-style:none] 
    [scrollbar-width:none] h-full flex flex-col"
          >
            <Accordian type="single" collapsible className="flex flex-col justify-around h-full">
              {SERVICES_CATEGORIES.map(({ title, description }) => (
                <AccordianItem value={title}>
                  <AccordianTrigger
                    className="px-0! border-0 border-none shadow-none!"
                    key={title}
                  >
                    <p
                      className={cn(
                        "font-chillax text-[32px] ",
                        greatercontent ? "md:text-[2vw]" : "md:text-[2.34vw]"
                      )}
                    >
                      {title}
                    </p>
                  </AccordianTrigger>
                  <AccordianContent>
                    <p className="text-[19px] md:text-[1.39vw] pt-3">
                      {description}
                    </p>
                  </AccordianContent>
                </AccordianItem>
              ))}
            </Accordian>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleservicedetail;
