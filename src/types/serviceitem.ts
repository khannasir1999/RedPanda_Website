import type { ServicesIconsProps } from "./serviceiconsprops";

export type ServiceItem = {
  id: string;
  label: string;
  Icon: React.ComponentType<ServicesIconsProps>;
  spline: string;
};