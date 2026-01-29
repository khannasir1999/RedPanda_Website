import ScrollReveal from "../../components/animations/ScrollReveal";

const ServiceContent = () => {
  return (
    <section
      className="relative w-full py-[140px] h-screen"
      style={{
        background:
          "radial-gradient(60% 60% at 0% 100%, rgba(43,14,16,0.85) 0%, rgba(20,20,20,0) 70%), linear-gradient(90deg, #1B1B1B 0%, #141414 55%, #2B0E10 100%)",
      }}
    >
      <div className="flex flex-col flex-1 px-[48px]">
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur
          baseRotation={3}
          blurStrength={5}
          containerClassName="max-w-[760px]"
          textClassName="font-chillax font-light text-[32px] md:text-[48px] leading-[44px] md:leading-[69px] tracking-[-0.08em] text-[#FAFAFA]"
        >
          <span className="text-[#FAFAFA]">We Specialize In Transforming </span>
          Digital Products Into Engaging User Experiences That Drive Results &
          Foster Long‑Term Success. Our Services Range From UI/UX Consultation
          To The Design And Development Of High‑Performing Digital Solutions.
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={0.1}
          enableBlur
          baseRotation={0}
          blurStrength={4}
          containerClassName="mt-8 md:self-end max-w-[360px]"
          textClassName="font-chillax text-[#FAFAFA] text-[12px] md:text-[0.9vw] leading-[20px] md:leading-[1.4vw] font-light"
        >
          UI/UX Design Isn’t Just About Looking Good. It’s All About Making
          Things Easy To Use, Cutting Down On Mistakes, And Streamlining How
          Stuff Works. We Focus On Boosting User Experience And Simplifying
          Processes To Create Solutions That Really Make A Difference.
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServiceContent;