import {
  UIUXDesignIcon,
  ProductdesignIcon,
  Webdesignicon,
  SaasdesignIcon,
  BrandingIcon,
  WebdevelopmentIcon,
} from "../icons";
import uiuxdesignvideo from "../../public/assets/videos/splines/uiuxdesignvideo.mp4";
import productdesignvideo from "../../public/assets/videos/splines/productdesignvideo.mp4";
import webdesignvideo from "../../public/assets/videos/splines/webdesignvideo.mp4";
import saasdesignvideo from "../../public/assets/videos/splines/saasdesignvideo.mp4";
import brandingvideo from "../../public/assets/videos/splines/brandingvideo.mp4";
import developmentvideo from "../../public/assets/videos/splines/developmentvideo.mp4";
import type { ServiceItem } from "../types/serviceitem";

export const SERVICES: ServiceItem[] = [
  {
    id: "uiux",
    label: "UI UX Design",
    Icon: UIUXDesignIcon,
    spline: uiuxdesignvideo,
  },
  {
    id: "product",
    label: "Product Design",
    Icon: ProductdesignIcon,
    spline: productdesignvideo,
  },
  {
    id: "web",
    label: "Web Design",
    Icon: Webdesignicon,
    spline: webdesignvideo,
  },
  {
    id: "saas",
    label: "SaaS Design",
    Icon: SaasdesignIcon,
    spline: saasdesignvideo,
  },
  {
    id: "branding",
    label: "Branding",
    Icon: BrandingIcon,
    spline:brandingvideo,
  },
  {
    id: "development",
    label: "Web Development",
    Icon: WebdevelopmentIcon,
    spline: developmentvideo,
  },
];
