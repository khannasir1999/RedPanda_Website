import React from "react";

const Informationheading = ({ text }: { text: React.ReactNode | string }) => {
  return (
    <p
      className={`font-chillax text-[600] text-[24px] md:text-[1.75vw] font-semibold mb-4 leading-[120%] tracking-[-2%] text-[#1E1E1E]`}
    >
      {text}
    </p>
  );
};

export default Informationheading;
