import { StarburstIcon } from "../icons";
import type { MenuItem } from "../types/menuitem";
import { ArrowUpRight } from "lucide-react";
import type { SliderItem } from "../types/slideritem";

export const FOOTER_QUICK_LINKS: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Hire Designers", href: "/hire-designers" },
  { label: "Blog", href: "/blog" },
];

export const FOOTER_POLICIES: MenuItem[] = [
  { label: "Privacy & Policy", href: "/privacy-policy" },
  { label: "Laws & Regulations", href: "/laws-regulations" },
  { label: "NDA", href: "/nda" },
  { label: "Refund Policy", href: "/refund-policy" },
];

export const FOOTER_CASE_STUDIES: MenuItem[] = [
  { label: "Case Study Name 1", href: "/case-studies/name-1" },
  { label: "Case Study Name 2", href: "/case-studies/name-2" },
  { label: "Case Study Name 3", href: "/case-studies/name-3" },
  { label: "Case Study Name 4", href: "/case-studies/name-4" },
];

export const FOOTER_SOCIAL_LINKS: MenuItem[] = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "Facebook", href: "https://facebook.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
];

export const FOOTER_MARQUEE_ITEMS: SliderItem[] = [
  { node: <h1 className="text-[49px] md:text-[3.58vw] font-chillax text-white font-medium whitespace-nowrap">Award Winning Agency</h1> },
  { node: <StarburstIcon className="shrink-0 flex-none w-[30px] h-[30px] md:w-[2.19vw] md:h-[2.19vw]" /> },
  { node: <h1 className="text-[49px] md:text-[3.58vw] font-chillax text-white font-medium whitespace-nowrap">Grow Digital</h1> },
  { node: <ArrowUpRight className="text-red-primary-400 shrink-0 flex-none w-[35px] h-[35px] md:w-[2.19vw] md:h-[2.19vw]" /> }
];