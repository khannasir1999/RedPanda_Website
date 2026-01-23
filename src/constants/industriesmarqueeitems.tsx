import type { SliderItem } from "@/types/slideritem";
import { StarburstIcon } from "../icons";

export const INDUSTRIES_MARQUEE_ITEMS: SliderItem[] = [
    {
        node: <p className="font-chillax whitespace-nowrap font-medium text-[50px] leading-[76px] md:text-[3.6vw] md:leading-[5.5vw] tracking-[-2.66px] text-white">
            Award Winning Agency
        </p>
    },
    { node: <StarburstIcon width={51} height={51} color="white" /> },
    {
        node: <p className="font-chillax font-medium text-[50px] leading-[76px] md:text-[3.6vw] md:leading-[5.5vw] tracking-[-2.66px] text-white whitespace-nowrap">
            Award Winning Agency
        </p>
    },
];