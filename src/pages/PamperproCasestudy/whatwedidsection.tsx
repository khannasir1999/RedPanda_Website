import dashboardImage1 from "../../assets/images/pamperpro/dashboardimage1.png";
import dashboardImage2 from "../../assets/images/pamperpro/dashboardimage2.png";
import dashboardImage3 from "../../assets/images/pamperpro/dasboardimage3.png";

type PillProps = {
  text: string;
  variant?: "green" | "gold";
  className?: string;
};

const Pill = ({ text, variant = "green", className }: PillProps) => {
  const base =
    "inline-flex items-center justify-center rounded-full px-4 py-2 text-[12px] sm:text-[13px] md:text-[14px] font-chillax font-medium leading-none whitespace-nowrap";
  const styles =
    variant === "gold"
      ? "bg-[#B08B13] text-white"
      : "bg-[#0B3D3A] text-white";

  return <span className={`${base} ${styles} ${className ?? ""}`}>{text}</span>;
};

const Whatwedidsection = () => {
  return (
    <section className="w-full bg-bg-black-100 overflow-hidden">
      {/* Top light panel */}
      <div className="bg-[#F3F3F3] rounded-b-[44px] sm:rounded-b-[56px] md:rounded-br-[90px] md:rounded-bl-none lg:rounded-br-[120px]">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-[150px] pt-10 sm:pt-12 md:pt-14">
          <div className="flex flex-col md:flex-row items-start gap-8 md:justify-between">
            {/* Left title */}
            <div className="shrink-0 w-full md:w-auto md:max-w-[360px] relative z-20">
              <h2 className="font-chillax text-[#00796B] font-medium tracking-tight leading-none text-[28px] sm:text-[32px] md:text-[34px]">
                What We Did.
              </h2>
              <div className="mt-6 md:mt-8 w-full md:w-[520px] lg:w-[620px] xl:w-[800px] max-w-none md:-translate-x-[18%] lg:-translate-x-[24%] xl:-translate-x-[20%] md:translate-y-4 lg:translate-y-40 md:mb-[-220px] lg:mb-[-300px]">
                <img
                  src={dashboardImage1}
                  alt="Dashboard Image 1"
                  className="w-full h-full rounded-[29px] object-cover"
                />
              </div>
            </div>

            {/* Right content */}
            <div className="w-full md:max-w-[847px] flex flex-col gap-3 md:gap-2 z-100 relative">
              {/* Top pills row */}
              <div className="w-full flex items-center gap-2 md:gap-3 flex-nowrap overflow-x-auto md:overflow-visible md:justify-between pb-1">
                <div className="shrink-0">
                  <Pill text="Book" />
                </div>
                <div className="shrink-0">
                  <Pill text="Anytime" />
                </div>
                <div className="shrink-0">
                  <Pill text="At-Home Luxury Care" variant="gold" />
                </div>
              </div>

              <p className="font-['Lufga'] font-normal text-[#131313] tracking-[-0.05em] capitalize text-[18px] leading-[30px] sm:text-[22px] sm:leading-[36px] md:text-[32px] 2xl:text-[40px] md:leading-[50px] 2xl:leading-[65px] w-full md:max-w-[847px] md:min-h-[180px]">
                Pamperpro Connects Customers With At-Home Beauty Professionals. We
                Designed The Marketing Website Plus Three Dashboards — Customer,
                Provider And Admin — To Simplify Booking, Scheduling And Payment.
              </p>

              {/* Bottom pills row */}
              <div className="w-full flex items-center justify-between gap-2 md:grid md:grid-cols-3 md:items-center md:gap-2 pb-1">
                <div className="shrink-0 md:justify-self-center md:col-start-2">
                  <Pill text="Anywhere" />
                </div>
                <div className="shrink-0 md:justify-self-end md:col-start-3">
                  <Pill text="Relax" variant="gold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    
        <div className="w-full md:ml-auto md:w-[1000px] flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto md:overflow-visible items-stretch md:justify-end mt-[30px] z-100 relative">
          <div className="shrink-0 w-[78%] sm:w-[62%] md:flex-[1.7] h-[220px] sm:h-[280px] md:h-[360px] lg:h-[420px]">
            <img
              src={dashboardImage2}
              alt="Dashboard Image 2"
              className="w-full h-full object-cover rounded-[29px] pb-7"
            />
          </div>
          <div className="shrink-0 w-[72%] sm:w-[52%] md:flex-1 h-[220px] sm:h-[280px] md:h-[360px] lg:h-[420px]">
            <img
              src={dashboardImage3}
              alt="Dashboard Image 3"
              className="w-full h-full object-cover pb-7"
            />
          </div>
        </div>
    
    </section>
  );
};

export default Whatwedidsection;