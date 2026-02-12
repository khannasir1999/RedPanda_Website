const Information = () => {
  return (
    <section className="relative w-full bg-bg-black-100 overflow-hidden text-[#FAFAFA] px-4 sm:px-6 md:px-10 lg:px-12 pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-8 rounded-t-[30px] sm:rounded-t-[40px] md:rounded-t-[48px]">
      <div className="pointer-events-none absolute -top-12 left-0 h-[220px] w-[220px] sm:h-[280px] sm:w-[280px] bg-[#CFB71B]/35 blur-[90px]" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/0 via-black/25 to-black/45" />

      <div className="relative mx-auto w-full max-w-[1700px]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div>
            <p className="font-lufga text-[9px] sm:text-[10px] text-white/65">Client</p>
            <p className="font-lufga text-[16px] sm:text-[20px] md:text-[24px] leading-tight mt-1">The Problem</p>
          </div>
          <div>
            <p className="font-lufga text-[9px] sm:text-[10px] text-white/65">Client Name</p>
            <p className="font-lufga text-[16px] sm:text-[20px] md:text-[24px] leading-tight mt-1">Pamperpro</p>
          </div>
          <div className="sm:text-right">
            <p className="font-lufga text-[9px] sm:text-[10px] text-white/65">Creators</p>
            <p className="font-lufga text-[16px] sm:text-[20px] md:text-[24px] leading-tight mt-1">Red Panda Network</p>
          </div>
        </div>

        <p className="mt-6 sm:mt-8 md:mt-10 font-lufga font-normal tracking-[-0.02em] sm:tracking-[-0.03em] capitalize text-[24px] leading-[1.18] sm:text-[32px] sm:leading-[1.15] md:text-[44px] md:leading-[1.12] lg:text-[56px] lg:leading-[1.12] xl:text-[60px] max-w-[1500px]">
          In Nigeria, Finding Reliable Beauty &amp; Grooming Professionals For Home
          Services Was Largely Informal Managed Through WhatsApp Chats, Instagram
          DMs, &amp; Word Of Mouth. This Led To Scheduling Conflicts, Unclear Pricing,
          And A Lack Of Trust Between Clients And Providers.
        </p>

        <div className="relative mt-6 sm:mt-8 h-[180px] sm:h-[240px] md:h-[300px] lg:h-[360px]">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1200 360"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M12 0 V170 Q12 215 58 215 H1085 Q1140 215 1140 262 V338"
              fill="none"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="1.25"
            />
            <path
              d="M1135 334 L1140 340 L1145 334"
              fill="none"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="1.25"
            />
          </svg>

          <div className="absolute bottom-3 sm:bottom-6 left-0">
            <p className="font-lufga text-[9px] sm:text-[10px] text-white/65">Designed By</p>
            <p className="font-lufga text-[14px] sm:text-[18px] md:text-[24px] leading-tight mt-1">Mashhood Ahmad Malik</p>
          </div>

          <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 text-left sm:text-center">
            <p className="font-lufga text-[9px] sm:text-[10px] text-white/65">Creator &amp; Agency</p>
            <p className="font-lufga text-[14px] sm:text-[18px] md:text-[24px] leading-tight mt-1">Red Panda Network</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;