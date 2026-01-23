import backgroundvideo from "/assets/videos/backgroundvideo.mp4";
import { useVideoplayer } from "../../hooks/useVideoplayer";
import { useSectionscroll } from "../../hooks/useSectionscroll";
import BlobCursor from "../../components/videos/blobcursor";
import { useRef } from "react";

const Videosection = () => {
  const { videoRef, isMuted, togglePlayPause } = useVideoplayer();

  const sectionRef = useRef(null);
  const videoContainerRef = useRef(null);

  useSectionscroll(sectionRef, videoContainerRef);

  return (
    <section
      ref={sectionRef}
      className="relative video-services-overlay h-screen w-full flex items-center justify-center overflow-hidden bg-background-white cursor-none"
    >
      <BlobCursor
        onClick={togglePlayPause}
        centerText={isMuted ? "PAUSE" : "PLAY"}
        zIndex={50}
      />
      <div
        ref={videoContainerRef}
        className="absolute inset-0 w-full h-full z-0 overflow-x-hidden"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        <video
          ref={videoRef}
          className="absolute w-full h-full object-cover"
          autoPlay
          muted={isMuted}
          loop
          playsInline
        >
          <source src={backgroundvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Videosection;
