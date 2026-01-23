import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router";
import ScrollTopProvider from "./ScrollTopProvider";
import SmoothScrollProvider from "./SmoothScrollProvider";
import VideosPreLoaderProvider from "./VideosPreLoaderProvider";
import Preloader from "@/pages/shared/preloader";
import { usePageLoad } from "@/hooks/usePageLoad";

const RootProvider = () => {
  const [showApp, setShowApp] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);
  const location = useLocation();
  const isFirstLoad = useRef(true);
  
  const isPageLoaded = usePageLoad();

  // Reset the loader when location changes (Navigation)
  useEffect(() => {
    if (!isFirstLoad.current) {
      setAnimationFinished(false);
      setShowApp(false);
    }
  }, [location.pathname]);

  const handlePreloaderFinish = () => {
    setAnimationFinished(true);
    isFirstLoad.current = false;
  };

  useEffect(() => {
    if (animationFinished && isPageLoaded) {
      setShowApp(true);
    }
  }, [animationFinished, isPageLoaded]);

  const currentDuration = isFirstLoad.current ? 3.5 : 2.0;

  return (
    <VideosPreLoaderProvider>
      <ScrollTopProvider>
        <SmoothScrollProvider>
          {showApp ? <Outlet /> : <Preloader onFinish={handlePreloaderFinish} duration={currentDuration} />}
        </SmoothScrollProvider>
      </ScrollTopProvider>
    </VideosPreLoaderProvider>
  );
};

export default RootProvider;
