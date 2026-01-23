import type { SliderItem } from "./slideritem";

export interface InfiniteSliderProps {
  items: SliderItem[];
  speed?: number;
  direction?: "left" | "right";
  width?: number | string;
  itemsHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}
