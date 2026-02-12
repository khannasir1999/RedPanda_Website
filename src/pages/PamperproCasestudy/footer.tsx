const Footer = () => {
  return (
      
      <div className="relative mx-auto w-full overflow-hidden min-h-[240px] sm:min-h-[280px] md:min-h-[330px] bg-[#191c1f]">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#1f2226] via-[#1a1d21] to-[#14171a]" />
        <div className="pointer-events-none absolute -left-16 top-1/2 h-[210px] w-[210px] -translate-y-1/2 rounded-full bg-[#d3b31a]/30 blur-[80px]" />
        <svg
          className="pointer-events-none absolute left-0 top-0 h-[885px] w-[1849px]"
          viewBox="0 0 1849 885"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M1358.03 27.76C1174.58 50.4784 1044.85 253.592 1002.91 352.309C1053.64 282.666 1195.69 138.918 1358.03 121.067C1560.95 98.7547 1700.97 259.001 1715.17 392.877C1729.37 526.753 1648.21 634.26 1493.99 703.226C1370.61 758.4 1250.48 674.828 1205.84 626.146C1100.32 513.23 871.824 267.114 802.018 185.977C732.213 104.84 656.589 54.8055 627.502 39.9304C265.485 -94.7572 72.1691 143.38 20.7631 279.285C-4.94055 362.451 -27.5327 562.048 87.7277 695.113C231.803 861.444 406.317 883.757 562.568 822.904C687.569 774.222 806.752 599.777 850.719 518.64C709.484 651.704 599.771 712.016 562.568 725.539C304.855 824.932 181.071 609.919 154.691 555.151C128.311 500.384 93.8142 254.944 296.737 173.807C459.076 108.897 584.888 181.92 627.502 226.546L1098.28 743.795C1181.08 818.441 1250.48 849.273 1274.83 855.359C1479.78 924.325 1741.55 887.814 1826.78 585.578C1912.01 283.342 1725.32 155.551 1715.17 133.238C1705.02 110.926 1587.33 -0.638022 1358.03 27.76Z"
            fill="url(#paint0_linear_3869_4839)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3869_4839"
              x1="285.734"
              y1="499.437"
              x2="1790.37"
              y2="482.977"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#252525" />
              <stop offset="1" stopColor="#252525" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative flex h-full flex-col justify-between px-5 py-6 sm:px-7 sm:py-8 md:px-9 md:py-10 lg:px-12">
          <div className="flex justify-end">
            <div className="text-right leading-tight">
              <p className="font-lufga text-[8px] sm:text-[9px] text-white/45">Creators</p>
              <p className="font-lufga text-[10px] sm:text-[11px] text-white/90">Red Panda Network</p>
            </div>
          </div>

          <div className="mt-2 sm:mt-0 flex flex-col md:flex-row md:items-start md:gap-5">
            <span className="inline-flex w-fit h-[80px] items-center justify-center rounded-full bg-[#ed2c2f] px-4 sm:px-5 py-2 font-lufga text-white text-[18px] sm:text-[30px] leading-none">
              Next Up:
            </span>
            <h2 className="mt-4 md:mt-0 font-lufga font-normal text-[#f0f0f0] tracking-[-0.03em] leading-[1.06] text-[42px] sm:text-[52px] md:text-[64px] lg:text-[72px] max-w-[980px]">
              Your Project,
              <br />
              Designed By
              <br />
              Red Panda Network
            </h2>
          </div>
        </div>
      </div>

  );
};

export default Footer;