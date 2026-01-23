import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router";
import Serviceitem from "../../components/services/serviceitem";
import Button from "../../ui/button";
import Servicesintrotext from "../../components/services/servicesintrotext";
import type { ServiceItem } from "../../types/serviceitem";
import { SERVICES } from "../../constants/services";
import { useScrollFadeIn } from "../../hooks/useScrollFadeIn";
import { useScrollSequence } from "../../hooks/useScrollSequence";
import { useHeaderHeight } from "../../hooks/useHeaderHeight";

const Services = () => {
  const [activeSid, setActiveSid] = useState<string>(SERVICES[0].id);
  const navigate = useNavigate();
  const { headerHeight, headerHeightStyle } = useHeaderHeight();

  const activeSpline = useMemo(
    () => SERVICES.find((s) => s.id === activeSid)?.spline,
    [activeSid]
  );

  const { containerRef: serviceItemsRef } = useScrollFadeIn({
    selector: ".service-item",
    direction: "left",
    duration: 0.5,
  });

  const { containerRef: splinesContainerRef } = useScrollFadeIn({
    selector: ".services-spline",
    direction: "right",
    duration: 2,
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
  });

  return (
    <section className="w-full bg-bg-black-100 py-15 px-4 video-services-overlay overflow-x-hidden relative"
      style={headerHeightStyle}
    >
      <Servicesintrotext />

      <div
        className="flex gap-10 md:flex-row flex-col-reverse md:mt-[var(--header-h)]!"
        style={{
          minHeight: window.innerWidth >= 768 ? `calc(100vh - ${headerHeight}px)` : "auto",
        }}
        ref={serviceItemsRef}
      >

        <div className="w-full h-full flex flex-col justify-between">
          {SERVICES.map(({ label, Icon, id }: ServiceItem) => (
            <Serviceitem
              key={id}
              label={label}
              Icon={Icon}
              isActive={activeSid === id}
            />
          ))}
        </div>

        <div
          className="relative flex flex-col justify-end items-center w-full h-[600px] md:h-auto"
          ref={splinesContainerRef}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSid}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="absolute left-0 right-0 flex items-center justify-center"
            >
              <div className="services-spline w-full md:w-[45vw]">
                <video
                  src={activeSpline}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <div
            className="bg-[rgba(60,50,50,0.5)] p-5 py-8 rounded-2xl flex flex-col gap-5
                            bg-clip-padding backdrop-filter backdrop-blur-[30px] backdrop-saturate-100 backdrop-contrast-125 
                            w-full shadow-lg absolute top-[40%] md:top-[60%] left-0 right-0 mx-auto"
          >
            <p className="font-chillax text-white font-extralight text-[20px] md:text-[1.5vw]">
              we specialize exclusively in creating exceptional user
              interfaces and experiences. We cover the full spectrum of UI/UX
              design to ensure your product is not just beautiful, but also
              functional, accessible, and drives results.
            </p>
            <div>
              <Button
                text="Get a Quote"
                onClick={() => navigate("/get-quote")}
                variant="filled"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
