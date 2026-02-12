import laptopImage from "../../assets/images/pamperpro/laptop-pamperpro.png";
import LeftAnimater from "../../components/animations/leftanimator";
import RightAnimator from "../../components/animations/rightanimator";

const BADGES = [
    "Dashboards & Web Design",
    "Public Pages",
    "User",
    "Service Providers",
    "Admin",
];

const Herosection = () => {
    return (
        <section className="relative isolate w-full h-screen overflow-hidden bg-[#FAFAFA] px-4 pt-25 pb-10">
            <h1
                className="font-['Lufga'] font-black uppercase text-[#EDEDED] text-center
                           whitespace-nowrap leading-none tracking-[-0.05em] md:tracking-[-0.30vw]
                           text-[clamp(48px,14vw,280px)]
                           w-screen max-w-none relative left-1/2 -translate-x-1/2 px-4"
            >
                Pamper Pro
            </h1>

            {/* Mid content (left text + right badges) */}
            <div className="absolute inset-x-0 top-[30%] sm:top-[40%]  lg:top-[48%] -translate-y-1/2 z-20 pointer-events-none">
                <div className="flex-col 2xl:flex-row flex  items-start justify-between gap-6 px-4 md:px-12 lg:px-16">
                    <LeftAnimater className="pointer-events-none">
                        <div className="pointer-events-auto">
                            <h2 className="font-chillax text-black tracking-tight leading-[1.05] text-[26px] sm:text-[30px] md:text-[36px] max-w-[320px] sm:max-w-[360px] md:max-w-[420px] mb-2">
                                <span className="block">
                                    <span className="font-semibold">Pamperpro On-</span> Demand Home Beauty
                                </span>
                                <span className="block">&amp; Grooming</span>
                            </h2>

                            {/* Mobile badges (stack under heading) */}
                            <div className="mt-6 flex flex-wrap gap-2 md:hidden max-w-[360px] mb-10">
                                {BADGES.map((b) => (
                                    <span
                                        key={b}
                                        className="rounded-full bg-[#0B3D3A] text-white px-3 py-1 text-[11px] sm:text-[16px] font-chillax font-normal tracking-tight whitespace-nowrap"
                                    >
                                        {b}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </LeftAnimater>

                    {/* Desktop badges on right */}
                    <RightAnimator className="hidden md:flex pointer-events-none">
                        <div className="pointer-events-auto flex flex-col items-start">
                            <div className="flex flex-wrap justify-start gap-2 md:gap-3 max-w-[400px]">
                                {BADGES.map((b) => (
                                    <span
                                        key={b}
                                        className="rounded-full bg-[#0B3D3A] text-white px-3 py-1 md:px-4 md:py-1.5 text-[11px] sm:text-[12px] md:text-[16px] font-chillax font-normal tracking-tight whitespace-nowrap"
                                    >
                                        {b}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </RightAnimator>
                </div>
            </div>
            <div className="absolute bottom-0 left-25 right-0 top-40 flex justify-center items-center pointer-events-none z-10">
            <img src={laptopImage} alt="Laptop"  className="w-auto h-[35vh] md:h-[60vh]  lg:h-[70vh] xl:h-[90vh]  2xl:h-screen " draggable={false} />
            </div>
        </section>
    );
};

export default Herosection;