import React from "react";
import logo from "../../public/assets/images/logo.png"
import { DropdownMenuIcon, MenuIcon } from "../icons";
import Button from "../ui/button";
import { Dropdown } from "../ui/dropdown";
import { useLocation, useNavigate } from "react-router";
import redpandalogo from "/assets/images/footerlogo.png";
import { InfiniteSlider } from "../components/animations/infiniteslider";
import { MENU_ITEMS } from "../constants/menuitems";
import type { MenuItem } from "../types/menuitem";
import { FOOTER_CASE_STUDIES, FOOTER_MARQUEE_ITEMS, FOOTER_POLICIES, FOOTER_QUICK_LINKS, FOOTER_SOCIAL_LINKS } from "../constants/footerlinks";
import { useCurrentLocation } from "../hooks/useCurrrentLocation";
import { usePageLabel } from "../hooks/usePageLabel";
import TopAnimator from "../components/animations/topanimator";
import quotepagelogo from "../../public/assets/images/getquote/quotepagelogo.png"


const Footerlinksheading = ({ text }: { text: string }) => (
  <h1 className="font-chillax text-[24px] md:text-[1.75vw] mb-3 font-medium tracking-tight text-white">
    {text}
  </h1>
);

const Footerlink = ({ label }: { label: string }) => (
  <p className="text-[14px] md:text-[1.05vw] text-[#FAFAFA] font-chillax font-light cursor-pointer">
    {label}
  </p>
);

const Header = ({ title }: { title?: string }) => {

  const location = useLocation();

  const navigate = useNavigate();

  const defaultConfigPageLabel = usePageLabel();
  const pageLabel = title || defaultConfigPageLabel;

  const isQuotePage = location.pathname === "/get-quote";

  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <header>
      <TopAnimator className="p-4 flex justify-between items-center fixed w-full z-[99] header">
        <>
          <Dropdown>
            <Dropdown.Trigger asChild>
              <div
                className={`flex ${isQuotePage ? "bg-[#242424]" : "bg-white"} items-center justify-between ${pageLabel === "" ? "gap-10" : "gap-8"} p-3 rounded-md w-full md:w-auto md:gap-15 shadow-sm`}
              >
                <img
                  src={isQuotePage ? quotepagelogo : logo}
                  alt="Logo"
                  // className="cursor-pointer w-[180px] h-[35px] md:w-[13.1vw] md:h-[2.56vw]"
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/");
                  }}
                  onPointerDown={(e) => e.stopPropagation()}
                />
                <p className={`${(location.pathname === "/blog" || isQuotePage) ? "text-[15px] md:text-[1.09vw]" : "text-[22px] md:text-[1.6vw]"} hidden md:block font-chillax tracking-tight ${isQuotePage ? "text-white" : "text-black"}`}>{pageLabel}</p>
                <MenuIcon color={isQuotePage ? "white" : "#1C1C1C"} className="cursor-pointer w-[3.14vw] h-[1.75vw]" />
              </div>
            </Dropdown.Trigger>

            <Dropdown.Content className="w-[400px]">
              {MENU_ITEMS.map(({ label, href }: MenuItem, index) => {
                const activepage = useCurrentLocation(href);
                return (
                  <Dropdown.Item
                    key={label}
                    onClick={() => navigate(href ?? "/")}
                    className={index === MENU_ITEMS.length - 1 ? "" : "mb-2"}
                    active={activepage}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <p className="font-chillax">{label}</p>
                    <DropdownMenuIcon height={20} width={20} isHovered={hoveredIndex === index} />
                  </Dropdown.Item>
                );
              })}
              <div className="font-chillax flex justify-between items-center text-[14px] font-[300]">
                <p className="cursor-pointer">Terms & Conditions</p>
                <p className="cursor-pointer">Privacy & Policy</p>
              </div>
            </Dropdown.Content>
          </Dropdown>


          <div className="hidden md:inline-block">
            <Button
              variant="filled"
              text={location.pathname === "/" ? "Book a Consultation" : "Let’s Talk"}
              onClick={() => navigate("/contact")}
              className="px-5"
            />
          </div>
        </>
      </TopAnimator>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-bg-black-100 px-4 md:px-6 lg:px-[48px] py-12">
      <div className="flex justify-between items-center flex-col md:flex-row">
        <div className="w-full md:max-w-[30%] mb-8 md:mb-0">
          <img src={redpandalogo} alt="Loading..." width={300} />
          <p className="text-[#FAFAFA] font-chillax text-[16px] md:text-[1.1vw] leading-relaxed mt-6 mb-4 font-light">
            We work hand-in-hand with your team, integrating seamlessly into
            your process. Your vision combined with our expertise leads to
            stronger, more impactful outcomes.
          </p>
          <div className="flex gap-6 md:hidden my-6">
            {FOOTER_SOCIAL_LINKS.map(({ label }: MenuItem) => (
              <p className="text-sm text-white font-chillax cursor-pointer transition-colors hover:text-red-primary-400">
                {label}
              </p>
            ))}
          </div>
          <Button variant="filled" text="Company Profile" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-8 lg:gap-16 w-full md:w-auto">
          <div>
            <Footerlinksheading text="Quick Links" />
            <div className="flex flex-col gap-3">
              {FOOTER_QUICK_LINKS.map(({ label }: MenuItem) => (
                <Footerlink key={label} label={label} />
              ))}
            </div>
          </div>
          <div>
            <Footerlinksheading text="Policies" />
            <div className="flex flex-col gap-3">
              {FOOTER_POLICIES.map(({ label }: MenuItem) => (
                <Footerlink key={label} label={label} />
              ))}
            </div>
          </div>
          <div>
            <Footerlinksheading text="Case Studies" />
            <div className="flex flex-col gap-3">
              {FOOTER_CASE_STUDIES.map(({ label }: MenuItem) => (
                <Footerlink key={label} label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-[16px] md:text-[1.1vw] font-chillax text-white text-left md:text-right font-normal mt-16">
        Red Panda Networks LLC © 2025
      </p>
      <div className="flex justify-between items-center">
        <div className="md:flex gap-6 hidden">
          {FOOTER_SOCIAL_LINKS.map(({ label }: MenuItem) => (
            <p className="text-[16px] md:text-[1.1vw] text-white font-chillax cursor-pointer transition-colors hover:text-red-primary-400">
              {label}
            </p>
          ))}
        </div>
        <div className="border-2 rounded-2xl border-red-primary-400 overflow-hidden w-full sm:max-w-[55vw] mt-5">
          <div className="flex gap-5 items-center justify-center ">
            <InfiniteSlider
              items={FOOTER_MARQUEE_ITEMS}
              speed={80}
              direction="left"
              gap={20}
              itemsHeight={0}
              pauseOnHover={false}
              scaleOnHover={false}
              fadeOut={false}
              fadeOutColor="transparent"
              ariaLabel="Footer marquees"
              className="overflow-y-hidden p-4"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

const HeaderFooterLayout = ({ children, headerTitle }: { children: React.ReactNode; headerTitle?: string }) => {
  return (
    <div>
      <Header title={headerTitle} />

      {children}

      <Footer />
    </div>
  );
};

export default HeaderFooterLayout;
