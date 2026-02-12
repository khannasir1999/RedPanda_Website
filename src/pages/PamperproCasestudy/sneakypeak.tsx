import pamperProVideo from "../../assets/videos/pamperpro.mp4";

const Sneakypeak = () => {
  return (
    <div className="relative h-svh w-screen overflow-hidden bg-black">
      <video
        className="block h-full w-full object-contain"
        src={pamperProVideo}
        autoPlay
        muted
        loop
        playsInline
        controls
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Sneakypeak;