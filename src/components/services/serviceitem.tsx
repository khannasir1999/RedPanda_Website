import { useState } from "react";
import { motion } from "framer-motion";
import type { ServiceItem } from "../../types/serviceitem";
import { cn } from "../../utils/cn";

const Serviceitem = ({
  label,
  Icon,
  isActive,
  onClick,
}: Omit<ServiceItem, "id" | "spline"> & {
  isActive: boolean;
  onClick?: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "flex justify-between items-center mb-8 md:mb-0 cursor-pointer group service-item px-4 py-3 rounded-[16px] transition-colors",
        isActive ? "bg-[#2A2A2A]" : ""
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.p
        className={cn(
          `font-chillax tracking-[-2px] text-[35px] md:text-[2.56vw] `,
          "text-[#6B7280] transition-colors duration-500 group-hover:text-[#EA2227]",
          isActive ? "text-[#FAFAFA]" : ""
        )}
      >
        {label}
      </motion.p>
      <Icon className="w-[70px] h-[70px] md:w-[5.12vw] md:h-[5.12vw] " durationMs={800} isHovered={isActive || isHovered} />
    </div>
  );
};

export default Serviceitem;
