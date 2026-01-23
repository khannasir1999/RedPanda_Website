import Industrygraycard from "@/components/industries/industrygraycard";
import IndustryIntroText from "@/components/industries/IndustryIntroText";
import Industryredcard from "@/components/industries/industryredcard";
import cryptoandweb3image from "../../../public/assets/images/industries/cryptoandweb3.png";
import packagingimage from "../../../public/assets/images/industries/packaging.png";
import healthcareimage from "../../../public/assets/images/industries/healthcare.png";
import logisticsimage from "../../../public/assets/images/industries/logistics.png";
import redpandalogo from "../../../public/logo.png";
import Industryredcardheading from "@/components/industries/industryredcardheading";
import flyingarrowimg from "../../../public/assets/images/industries/flyingarrow.png";
import brokenheartimg from "../../../public/assets/images/industries/brokenheart.png";
import halfballimg from "../../../public/assets/images/industries/halfball.png";
import redpatternsimg from "../../../public/assets/images/industries/redpatterns.png";
import { useRef } from "react";
import { useScrollGrowIn } from "@/hooks/useScrollGrowIn";
import InfiniteSlider from "@/components/animations/infiniteslider";
import { INDUSTRIES_MARQUEE_ITEMS } from "@/constants/industriesmarqueeitems";

const Industries = () => {

    const sectionRef = useRef(null);

    useScrollGrowIn({
        triggerRef: sectionRef,
        redTargets: ".gsap-red-card",
        grayTargets: ".gsap-gray-card",
    });

    return (
        <div ref={sectionRef} className="bg-background-white w-full px-4 lg:px-5 py-12">
            <IndustryIntroText />
            <div className="flex gap-5 flex-col md:flex-row">
                <div className="flex-1 flex-col md:flex-row flex gap-5">
                    <div className="flex flex-col flex-1 gap-5 overflow-hidden">
                        <Industrygraycard
                            containerClassName="h-[370px] md:h-[27vw] md:min-w-[318px] w-full p-5"
                            title="Crypto & Web3"
                            description="We help you navigate blockchain, NFTs, and the future of the internet."
                            imgsrc={cryptoandweb3image}
                            imgClassName="bottom-0 right-0 left-0 w-full"
                        />
                        <Industryredcard containerClassName="h-[229px] md:h-[16.7vw] w-full pl-8 flex-col">
                            <img
                                src={flyingarrowimg}
                                className="absolute right-0 left-0 top-0 w-full"
                                alt="Flying Arrow"
                            />
                            <Industryredcardheading text={"Travel & Tourism"} />
                            <img
                                src={redpatternsimg}
                                className="absolute right-0 left-0 bottom-0 w-full"
                                alt="Flying Arrow"
                            />
                        </Industryredcard>
                    </div>
                    <div className="flex-1 flex justify-between flex-col">
                        <Industryredcard containerClassName="h-[199px] md:h-[14.5vw] w-full overflow-hidden justify-start ">
                            <Industryredcardheading
                                text={
                                    <>
                                        Fin <br /> tech
                                    </>
                                }
                                textClassName="pl-7"
                            />
                            <img src={halfballimg} className="absolute bottom-0 top-0 right-0 h-full" alt="Half Ball" />
                        </Industryredcard>
                        <Industrygraycard
                            containerClassName="h-[401px] md:h-[29.3vw] w-full p-5"
                            title="Packaging"
                            description="Crafting custom packaging solutions that stand out. We provide innovative designs and high-quality materials for your brand."
                            imgsrc={packagingimage}
                            imgClassName="bottom-0 right-0 left-0 w-full"
                        />
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-5">
                    <div className="flex flex-col md:flex-row gap-5">
                        <Industrygraycard
                            containerClassName="w-full md:min-w-[432px] h-[199px] md:h-[14.5vw] flex p-5 flex-col"
                            title="Healthcare"
                            description="Transforming healthcare with technology. We build solutions that improve patient care, streamline operations, and enhance data security."
                            descClassName="max-w-[75%]"
                            imgsrc={healthcareimage}
                            imgClassName="right-0 top-0 bottom-0 h-full"
                        />
                        <div className="w-full gsap-gray-card md:min-w-[204px] h-[199px] md:h-[14.5vw] flex justify-center items-center rounded-[28px] bg-[#FFDEDE]">
                            <img
                                src={redpandalogo}
                                className="object-cover w-[85px] h-[63px] md:w-[6.2vw] md:h-[9.8vh]"
                                width={85}
                                height={63}
                                alt="Loading..."

                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5">
                        <Industryredcard
                            containerClassName="h-[229px] md:h-[16.7vw] w-full md:min-w-[318px] p-5 items-stretch justify-stretch"
                        >
                            <Industryredcardheading
                                text={
                                    <>
                                        Health <br /> & Fitness
                                    </>
                                }
                            />
                            <img src={brokenheartimg} className="absolute bottom-0 right-0" alt="Half Ball" />
                        </Industryredcard>


                        <Industrygraycard
                            containerClassName="w-full min-w-[318px] h-[229px] md:h-[16.7vw] px-5 py-7"
                            title="Logistic"
                            description="Efficient, transparent solutions for modern logistics."
                            imgsrc={logisticsimage}
                            imgClassName="bottom-0 right-0 left-0 w-full"
                        />

                    </div>
                    <div className=" bg-red-primary-400 gsap-red-card h-[147px] md:h-[10.7vw] rounded-[28px] flex items-center overflow-hidden gap-4 w-full md:max-w-[50vw]">
                        <InfiniteSlider
                            items={INDUSTRIES_MARQUEE_ITEMS}
                            speed={80}
                            direction="right"
                            gap={50}
                            itemsHeight={0}
                            pauseOnHover={false}
                            scaleOnHover={false}
                            fadeOut={false}
                            fadeOutColor="transparent"
                            ariaLabel="Industries marquees"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Industries;
