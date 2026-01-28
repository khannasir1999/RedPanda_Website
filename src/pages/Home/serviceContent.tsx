const ServiceContent = () => {
  return (
    <section
      className="relative w-full py-[48px]"
      style={{
        background:
          "radial-gradient(60% 60% at 0% 100%, rgba(43,14,16,0.85) 0%, rgba(20,20,20,0) 70%), linear-gradient(90deg, #1B1B1B 0%, #141414 55%, #2B0E10 100%)",
      }}
    >
      <div className="flex flex-col flex-1 px-[48px]">
        <p className="font-chillax font-normal text-[#FFFFFF29] text-[32px] md:text-[48px] leading-[44px] md:leading-[69px] tracking-[-0.08em] capitalize max-w-[760px]">
          <span className="text-[#FAFAFA]">We Specialize In Transforming </span> Digital Products Into Engaging User
          Experiences That Drive Results &amp; Foster Long‑Term Success. Our
          Services Range From UI/UX Consultation To The Design And Development
          Of High‑Performing Digital Solutions.
        </p>

      <p className="font-chillax text-[#FAFAFA] text-[12px] md:text-[0.9vw] leading-[20px] md:leading-[1.4vw] max-w-[360px] mt-8 md:self-end">
        UI/UX Design Isn’t Just About Looking Good. It’s All About Making
        Things Easy To Use, Cutting Down On Mistakes, And Streamlining How
        Stuff Works. We Focus On Boosting User Experience And Simplifying
        Processes To Create Solutions That Really Make A Difference.
      </p>
     </div>
    </section>
  );
};

export default ServiceContent;