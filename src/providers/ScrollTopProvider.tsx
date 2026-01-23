import { useLayoutEffect, type ReactNode } from "react";
import { useLocation } from "react-router";
import { useLenis } from "lenis/react";

const ScrollTopProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  const lenis = useLenis();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [location.pathname, lenis]);

  return children;
};

export default ScrollTopProvider;
