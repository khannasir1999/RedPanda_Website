import { useEffect, useRef, useState } from "react";

export const useVideoplayer = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play();
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  const togglePlayPause = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;

    if(videoRef.current.muted){
      setIsMuted(true);
    }else {
      setIsMuted(false);
    }
  };
  
  return { videoRef, isMuted, togglePlayPause };
};
