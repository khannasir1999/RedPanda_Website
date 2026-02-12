import identityvisualsImage from "../../assets/images/pamperpro/identity-visuals.png";
import whiteSmallCloudImage from "../../assets/images/pamperpro/White_Small_Cloud.png";
import whiteSmallCloudImage2 from "../../assets/images/pamperpro/White_Small_Cloud_2.png";
import whiteSmallCloudImage3 from "../../assets/images/pamperpro/White_Cloud_image_3.png";

const Identityvisuals = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <section className=" min-h-screen w-full overflow-hidden bg-[#1C1C1C] flex flex-col items-center justify-start">
          <div className="absolute inset-0 md:top-64 z-20 flex items-center justify-center mx-auto w-full">
            <img
              src={identityvisualsImage}
              alt="Identity Visuals"
              className="absolute inset-0 w-[524px]  z-20 h-[786px] object-cover object-center mx-auto"
              style={{ objectPosition: "center 40%" }}
            />
          </div>

          <div
            className="absolute top-0 left-0 w-[60%] h-[50%] pointer-events-none "
            style={{
              background: "radial-gradient(ellipse 80% 60% at 0% 0%, rgba(232, 197, 71, 0.35) 0%, rgba(232, 197, 71, 0.12) 40%, transparent 70%)",
            }}
            aria-hidden
          />

          <div className="relative z-10 flex justify-center w-full pt-[clamp(60px,5vw,4px)]">
            <div className="relative inline-flex items-baseline">
              <span className="font-lufga font-extrabold uppercase leading-none tracking-[-0.08em] text-[clamp(80px,22vw,317.6px)] text-[#FFFFFF]">
                IDENTITY
              </span>
              <h2
                className="pointer-events-none absolute left-[58%] -translate-x-2/2 -bottom-5 text-[clamp(48px,14vw,185px)] leading-[1.2] tracking-[-0.03em] text-[#E8C547] capitalize whitespace-nowrap"
                style={{ fontFamily: "'Aguafina Script', cursive", fontWeight: 400 }}
              >
                Visual
              </h2>
            </div>
          </div>
        </section>
        <div className="absolute bottom-0 left-0 right-0 w-full h-full pointer-events-none z-30">
          <div className="relative h-1/2 w-full">

            <img
              src={whiteSmallCloudImage2}
              className="absolute inset-0 w-full h-full object-cover min-h-[200px] z-10 top-50 -left-60"
              aria-hidden
            />

            <img
              src={whiteSmallCloudImage}
              className="absolute inset-0 w-full h-full object-cover min-h-[200px] z-20"
              aria-hidden
            />

            <img
              src={whiteSmallCloudImage2}
              className="absolute inset-0 w-full h-full object-fill rotate-180 min-h-[200px] z-30 top-2/2"
              aria-hidden
            />

            <img
              src={whiteSmallCloudImage}
              className="absolute inset-0 w-full h-full object-fill rotate-180 min-h-[200px] z-30 top-2/2"
              aria-hidden
            />
            <img
              src={whiteSmallCloudImage3}
              className="absolute w-full h-full object-cover min-h-[200px] z-50 top-160  -left-10"
              aria-hidden
            />
            <img
              src={whiteSmallCloudImage3}
              className="absolute w-full h-full object-cover min-h-[200px] z-50 top-160  -left-10"
              aria-hidden
            />
            <img
              src={whiteSmallCloudImage3}
              className="absolute w-full h-full object-fill min-h-[200px] z-50 top-103 -right-300"
              aria-hidden
            />
            <img
              src={whiteSmallCloudImage3}
              className="absolute w-full h-full object-fill min-h-[200px] z-50 top-103 -right-300"
              aria-hidden
            />
            <img
              src={whiteSmallCloudImage3}
              className="absolute w-full h-full object-cover min-h-[200px] z-50 top-130 -left-100"
              aria-hidden
            />

          </div>
        </div>
        <div className="min-h-screen">

        </div>
      </div>

    </>
  );
};

export default Identityvisuals;
