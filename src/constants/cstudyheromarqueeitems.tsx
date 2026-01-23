import type { SliderItem } from "../types/slideritem";
import { StarburstIcon } from "../icons";

export const CSTUDY_HERO_MARQUEE_ITEMS: SliderItem[] = [
  { node: <h1 className="text-[32px] md:text-[2.34vw] font-chillax text-black font-medium whitespace-nowrap">Projects</h1> },
  { node: <StarburstIcon className="shrink-0 flex-none w-[24px] h-[24px] md:w-[1.75vw] md:h-[3.74vh]" /> },
  { node: <h1 className="text-[32px] md:text-[2.34vw] font-chillax text-black font-medium whitespace-nowrap">Work</h1> },
  { node: <StarburstIcon className="shrink-0 flex-none w-[24px] h-[24px] md:w-[1.75vw] md:h-[3.74vh]" /> },
  { node: <h1 className="text-[32px] md:text-[2.34vw] font-chillax text-black font-medium whitespace-nowrap">Case Studies</h1> },
  { node: <StarburstIcon className="shrink-0 flex-none w-[24px] h-[24px] md:w-[1.75vw] md:h-[3.74vh]" /> },
];