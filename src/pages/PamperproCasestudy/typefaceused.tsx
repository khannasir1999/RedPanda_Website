const TypefaceUsed = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#1C1C1C]">
      <div
        className="absolute right-0 top-0 bottom-0 h-full w-[45%] min-w-[400px] flex items-end justify-end pointer-events-none z-0"
        aria-hidden
      >
        <svg
          className="h-full w-auto object-contain object-bottom"
          viewBox="0 0 762 690"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_g_3193_14736)">
            <path d="M99.9998 645.3L311.506 100H444.562L653.76 645.3H509.936L352.268 186.91H402.261L240.747 645.3H99.9998ZM228.441 549.93V440.717H529.164V549.93H228.441ZM817.389 652.991C782.522 652.991 751.502 644.531 724.326 627.611C697.151 610.69 675.872 587.617 660.49 558.391C645.108 528.652 637.417 495.067 637.417 457.637C637.417 419.694 645.108 385.853 660.49 356.114C675.872 326.375 697.151 303.302 724.326 286.894C751.502 269.974 782.522 261.514 817.389 261.514C840.975 261.514 862.51 265.872 881.994 274.588C901.478 282.792 917.373 294.585 929.679 309.968C942.498 325.35 950.189 342.783 952.753 362.267V551.469C950.189 571.466 942.498 589.155 929.679 604.537C917.373 619.407 901.478 631.2 881.994 639.917C862.51 648.633 840.975 652.991 817.389 652.991ZM845.846 533.779C867.894 533.779 885.583 526.601 898.915 512.244C912.759 497.887 919.681 479.429 919.681 456.868C919.681 441.998 916.604 428.924 910.451 417.643C904.299 406.363 895.582 397.39 884.302 390.724C873.534 384.059 860.972 380.726 846.615 380.726C832.258 380.726 819.44 384.059 808.16 390.724C797.392 397.39 788.675 406.619 782.01 418.412C775.857 429.693 772.78 442.511 772.78 456.868C772.78 471.737 775.857 485.069 782.01 496.862C788.163 508.142 796.879 517.115 808.16 523.781C819.44 530.446 832.002 533.779 845.846 533.779ZM914.297 645.3V544.547L933.525 452.253L914.297 361.498V269.205H1045.82V645.3H914.297Z" fill="white" />
          </g>
          <defs>
            <filter id="filter0_g_3193_14736" x="0" y="0" width="1145.81" height="752.991" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feTurbulence type="fractalNoise" baseFrequency="0.99900001287460327 0.99900001287460327" numOctaves="3" seed="8777" />
              <feDisplacementMap in="shape" scale="200" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
              <feMerge result="effect1_texture_3193_14736">
                <feMergeNode in="displacedImage" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-start justify-end pl-[clamp(24px,5vw,150px)] pb-[clamp(80px,12vw,160px)] pr-0 pt-0">
        <div className="max-w-[600px] shrink-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white mb-8">
            <span className="font-['Outfit'] font-normal text-[#131313] text-sm tracking-tight">
              Typeface Used
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-primary-500" aria-hidden />
          </div>
          <h3 className="font-['Outfit'] font-extrabold text-white text-[clamp(48px,8vw,96px)] leading-[1.1] tracking-[-0.03em] mb-6">
            Outfit
          </h3>
          <p className="font-['Outfit'] font-normal text-white/90 text-[clamp(16px,1.8vw,20px)] leading-[1.6] tracking-[-0.02em] max-w-[520px]">
            A Beautiful Geometric Sans: The Official Typeface For Brand Automation Company Outfit.lo. Inspired By The Ligature-Rich Outfit Wordmark, Outfit.lo Is Delighted To Release It&apos;s Own Type Family. The Outfit Typeface Links The Outfit Written Voice To Outfit Product Marks; On Brand By Default.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TypefaceUsed;
