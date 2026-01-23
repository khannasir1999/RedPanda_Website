import JourneyBadge from "@/components/journeys/journeybadge";
import Colorcomp from "@/components/portfolio/Colorcomp";
import Informationheading from "@/components/portfolio/Informationheading";
import Sectionheading from "@/components/shared/Sectionheading";
import { DESIGN_COLORS } from "@/constants/designcolors";
import { DESIGN_TOOLS } from "@/constants/designtools";
import { useActive } from "@/hooks/useActive";
import Button from "@/ui/button";
import designmig from "../../../public/assets/images/portfolio/designimg.jpg"

const Designinfo = () => {
    const { setActive: setActiveTool, checkIsActive: checkActiveTool } =
        useActive(null);

    return (
        <div className="w-full px-4 pt-10 pb-5 bg-white">
            <Sectionheading
                heading={
                    <>
                        Design{" "}
                        <span className="font-medium text-red-primary-400">
                            Info
                        </span>
                    </>
                }
            />
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-15 md:gap-10 ">
                <div>
                    <Informationheading text={"Colors"} />
                    <div className="flex gap-5 flex-wrap">
                        {DESIGN_COLORS.map((c) => (
                            <Colorcomp color={c} />
                        ))}
                    </div>
                </div>
                <div>
                    <Informationheading
                        text={
                            <>
                                Typeface <span className="text-red-primary-400">Used</span>
                            </>
                        }
                    />
                    <h1 className="font-chillax font-[400] text-[48px] leading-[100%] tracking-[-4px]">
                        Chillax
                    </h1>
                </div>
                <div>
                    <Informationheading
                        text={
                            <>
                                Tools <span className="text-red-primary-400">Used</span>
                            </>
                        }
                    />
                    <div className="flex flex-wrap gap-3">
                        {DESIGN_TOOLS.map(({ text, icon }, index) => (
                            <JourneyBadge
                                text={text}
                                icon={icon}
                                showlefticon
                                className="py-1"
                                active={checkActiveTool(index)}
                                handleClick={() => setActiveTool(index)}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <Informationheading
                        text={
                            <>
                                Design <span className="text-red-primary-400">Preview</span>
                            </>
                        }
                    />
                    <Button variant="filled" text="Figma File" />
                </div>
            </div>

            <div className="pt-12">
                <img src={designmig} alt="Loading..." className="h-[484px] w-full object-cover rounded-2xl mb-4" />
                <div className="flex md:flex-row flex-col gap-4">
                    <div className="w-full">

                        <img src={designmig} alt="Loading..." className=" h-[484px] w-full object-cover rounded-2xl" />
                    </div>
                    <div className="w-full">

                        <img src={designmig} alt="Loading..." className=" h-[484px] w-full object-cover rounded-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Designinfo;
