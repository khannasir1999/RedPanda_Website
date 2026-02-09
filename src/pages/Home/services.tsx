import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router";
import Serviceitem from "../../components/services/serviceitem";
import Button from "../../ui/button";
import type { ServiceItem } from "../../types/serviceitem";
import { SERVICES } from "../../constants/services";
import { useScrollFadeIn } from "../../hooks/useScrollFadeIn";
import { useScrollSequence } from "../../hooks/useScrollSequence";
import { useHeaderHeight } from "../../hooks/useHeaderHeight";
import image2 from "../../assets/images/hero/image2.png";
import image3 from "../../assets/images/hero/image3.png";
import image4 from "../../assets/images/hero/image4.png";
import image5 from "../../assets/images/hero/image5.png";
import image6 from "../../assets/images/hero/image6.png";
import Brandinglogos from "./brandinglogos";

const Services = () => {
  const [activeSid, setActiveSid] = useState<string>(SERVICES[0].id);
  const navigate = useNavigate();
  const { headerHeight } = useHeaderHeight();

  const activeImages = useMemo(() => {
    const imageMap: Record<string, [string, string]> = {
      uiux: [image5, image2],
      product: [image2, image3],
      web: [image4, image5],
      saas: [image3, image6],
      branding: [image6, image4],
      development: [image2, image5],
    };
    return imageMap[activeSid] ?? [image5, image2];
  }, [activeSid]);

  const { containerRef: serviceItemsRef } = useScrollFadeIn({
    selector: ".service-item",
    direction: "left",
    duration: 0.5,
  });

  const { containerRef: splinesContainerRef } = useScrollFadeIn({
    selector: ".services-media",
    direction: "right",
    duration: 0.8,
  });

  const handleScrollStep = (index: number) => {
    if (SERVICES[index] && SERVICES[index].id !== activeSid) {
      setActiveSid(SERVICES[index].id);
    }
  };

  useScrollSequence({
    containerRef: serviceItemsRef,
    itemCount: SERVICES.length,
    onStepChange: handleScrollStep,
    isActive: window.innerWidth >= 768 ? true : false,
    stepScrollPercent: 50,
  });

  return (
    <section className="w-full bg-bg-black-100 py-0 px-[10px] sm:px-[48px] video-services-overlay overflow-x-hidden relative"
      // style={headerHeightStyle}
    >
      {/* <Servicesintrotext /> */}

      <div
        className="flex gap-10 md:flex-row flex-col-reverse md:mt-[var(--header-h)]!"
        style={{
          minHeight: window.innerWidth >= 768 ? `calc(100vh - ${headerHeight}px)` : "auto",
        }}
        ref={serviceItemsRef}
      >

        <div className="w-full h-full flex flex-col gap-[20.23px] 2xl:mt-[30px]">
          {SERVICES.map(({ label, Icon, id }: ServiceItem) => (
            <Serviceitem
              key={id}
              label={label}
              Icon={Icon}
              isActive={activeSid === id}
              onClick={() => setActiveSid(id)}
            />
          ))}
        </div>

        <div
          className="hidden md:flex relative flex-col justify-end items-center w-full h-[600px] md:h-auto"
          ref={splinesContainerRef}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSid}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="absolute left-0 right-0 flex items-center justify-center services-media"
            >
              <div className="w-full md:w-[45vw] h-[360px] relative flex items-center justify-center">
                {activeImages.map((imgSrc, index) => (
                  <img
                    key={`${activeSid}-${index}`}
                    src={imgSrc}
                    alt={`${activeSid} service ${index + 1}`}
                    className="absolute w-[70%] max-w-[420px] h-[450px] min-[1600px]:h-auto rounded-[24px]"
                    style={{
                      transform:
                        index === 0
                          ? "matrix(0.92, -0.39, -0.13, 0.99, 0, 0)"
                          : "matrix(0.92, -0.39, -0.13, 0.99, 0, 0)",
                      left: index === 0 ? "35%" : "20%",
                      bottom: index === 0 ? "28%" : "32%",
                      zIndex: index === 0 ? 2 : 1,
                    }}
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div
            className="w-full xl:max-w-[500px] 2xl:max-w-[600px] mx-auto bg-white/10 border border-white/10 rounded-[24px] p-6 md:p-8
                            backdrop-blur-[40px] shadow-[0_12px_40px_rgba(0,0,0,0.35)] flex flex-col gap-4 z-50 mb-7"
          >
            <p className="font-chillax text-white font-light text-[16px] md:text-[1.15vw] leading-[24px] md:leading-[1.6vw]">
              we specialize exclusively in creating exceptional user
              interfaces and experiences. We cover the full spectrum of UI/UX
              design to ensure your product is not just beautiful, but also
              functional, accessible, and drives results.
            </p>
            <div className="mt-8">
              <Button
                text="Get a Quote"
                onClick={() => navigate("/get-quote")}
                variant="filled"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:mt-30">
        <Brandinglogos theme="dark" />
      </div>
    </section>
  );
};

export default Services;
