import type { ReactNode } from "react";

export type JourneyBadgeProps = {
  active?: boolean;
  text: string;
  handleClick?: () => void;
  showlefticon?: boolean;
  showrighticon?: boolean;
  icon?: ReactNode;
  className?: React.ComponentProps<"div">["className"];
  darkmode?: boolean;
};
