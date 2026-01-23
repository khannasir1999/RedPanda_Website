import { cn } from "@/utils/cn";
import React from "react";

const Industryredcardheading = ({
  text,
  textClassName,
}: {
  text: string | React.ComponentType | React.ReactNode;
  textClassName?: React.ComponentProps<"h1">["className"];
}) => {

    const renderText = () => {
    if (typeof text === 'string') {
      return text;
    }
    
    if (typeof text === 'function') {
      const TextComponent = text as React.ComponentType;
      return <TextComponent />;
    }
    
    return text;
  };

// "text-[66px] font-chillax text-white leading-[54px] tracking-[-5.51px] font-medium",

  return (
    <h1
      className={cn(
        "text-[66px] leading-[54px]  md:text-[4.83vw] font-chillax text-white md:leading-[3.95vw] tracking-[-5.51px] font-medium",
        textClassName
      )}
    >
      {renderText()}
    </h1>
  );
};

export default Industryredcardheading;
