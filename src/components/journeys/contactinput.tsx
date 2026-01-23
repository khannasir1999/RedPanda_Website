import { cn } from "@/utils/cn";
import React from "react";

const Contactinput = ({ darkmode, ...props }: React.ComponentProps<"input"> & { darkmode?: boolean }) => {
  return (
    <input
      className={cn("w-full font-chillax text-[16px] md:text-[1.17vw] p-3 px-4 rounded-full border mr-4 mb-4 ",
        darkmode ? "border-white text-white" : "border-black",
      )}
      {...props}
    />
  );
};

export default Contactinput;
