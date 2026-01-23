import Middletext from "../../components/conceptodesign/designprocessmiddletext";
import type { DesignProcessSectionProps } from "../../types/designprocesssectionprops";
import { cn } from "../../utils/cn";

const Designprocessmobilesection = ({
  heading,
  imagesrc,
  className,
}: Omit<DesignProcessSectionProps,"leftimage" | "rightimage"> & {
  imagesrc: React.ComponentProps<"img">["src"];
}) => {
  return (
    <div
      className={cn(
        "w-full h-full bg-bg-black-100 flex justify-center items-center flex-col py-5 px-3",
        className
      )}
    >
      <Middletext className="py-12 concepttodesign-mobile-heading">{heading}</Middletext>
      <img src={imagesrc} className="w-full" alt="Loading..." />
    </div>
  );
};

export default Designprocessmobilesection;
