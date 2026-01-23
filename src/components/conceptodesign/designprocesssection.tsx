import Middletext from "./designprocessmiddletext";
import type { DesignProcessSectionProps } from "../../types/designprocesssectionprops";
import { cn } from "../../utils/cn";

const DesignProcessSection = ({ heading, leftimage, rightimage, className }: DesignProcessSectionProps) => {
    return <div className={cn("h-screen flex justify-center items-center w-full relative isolate", className)}>
        <Middletext className="concepttodesign-desktop-heading">
            {heading}
        </Middletext>
        <div className="concepttodesign-images absolute inset-0 flex justify-between items-center -z-10">
            <img src={leftimage} className="concepttodesign-left-image h-[80%]" alt="Loading..." />
            <img src={rightimage} className="concepttodesign-right-image h-[92%]" alt="Loading..." />
        </div>
    </div>
}

export default DesignProcessSection;