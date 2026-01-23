import { useState, useEffect } from "react";

export const usePageLoad = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);

    // Check if the page is already loaded when the hook mounts
    if (document.readyState === "complete") {
      setIsLoaded(true);
    } else {
      // Wait for all assets (images, scripts) to finish loading
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return isLoaded;
};