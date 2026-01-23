import { BadgesDiamondIcon } from "../../icons";
import { cn } from "../../utils/cn";

type BadgeProps = {
  active: boolean;
  text: string;
  handleClick: () => void;
  showicon?: boolean;
  className?: React.ComponentProps<"div">["className"]
};

const Badge = ({ active, text, handleClick, showicon, className }: BadgeProps) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center gap-2 border rounded-4xl p-2 cursor-pointer",
        `${active ? "bg-red-primary-400 border-[#EE443F]" : ""}`,
        className
      )}
      onClick={handleClick}
    >
      <p
        className={`font-chillax text-[400] text-sm ${active ? "text-white" : ""
          }`}
      >
        {text}
      </p>
      {showicon && <BadgesDiamondIcon strokewidth={active ? 0 : null} width={10} height={10} fill="#FAFAFA" />}
    </div>
  );
};

export default Badge;
