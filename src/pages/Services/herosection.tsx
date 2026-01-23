import { BrandingIcon, UIUXDesignIcon } from "../../icons";
import Button from "../../ui/button";
import Inlineicon from "../../components/services/inlineicon";
import Backgroundredglow from "../../components/services/backgroundredglow";
import TopAnimator from "../../components/animations/topanimator";
import Spline from "@splinetool/react-spline";
import { cn } from "../../utils/cn";
import { useState } from "react";
import BottomAnimator from "@/components/animations/bottomanimator";

const InteractiveHeading = ({
    children,
    className,
}: {
    children: (isHovered: boolean) => React.ReactNode;
    className?: string;
}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <h1
            className={className}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children(isHovered)}
        </h1>
    );
};

const Introtext = () => {
    const baseclasses =
        "text-5xl md:text-[5vw] text-white uppercase font-chillax leading-[1.15] tracking-tighter";

    return (
        <>
            <div className="md:block hidden">
                <InteractiveHeading className={cn(baseclasses, "font-[400]")}>
                    {(isHovered) => (
                        <span className="inline-flex items-center gap-2">
                            Branding
                            <Inlineicon Icon={BrandingIcon} isHovered={isHovered} />
                            UI/UX
                        </span>
                    )}
                </InteractiveHeading>
                <InteractiveHeading className={cn(baseclasses, "font-[400]")}>
                    {(isHovered) => (
                        <span className="inline-flex items-center gap-3">
                            Design
                            <Inlineicon Icon={UIUXDesignIcon} isHovered={isHovered} />
                            To Scale Your
                        </span>
                    )}
                </InteractiveHeading>
                <h1 className={cn(baseclasses, "font-[400]")}>
                    Digital Experiences.
                </h1>
            </div>

            {/* Mobile View */}
            <div className="md:hidden block">
                <InteractiveHeading className={cn(baseclasses, "font-[200]")}>
                    {(isHovered) => (
                        <span className="inline-flex items-center gap-2">
                            Branding
                            <Inlineicon Icon={BrandingIcon} isHovered={isHovered} />
                        </span>
                    )}
                </InteractiveHeading>
                <InteractiveHeading className={cn(baseclasses, "font-[200]")}>
                    {(isHovered) => (
                        <span className="inline-flex items-center gap-2">
                            UI/UX Design
                            <Inlineicon Icon={UIUXDesignIcon} isHovered={isHovered} />
                        </span>
                    )}
                </InteractiveHeading>
                <h1 className={cn(baseclasses, "font-[200]")}>
                    To Scale Your
                </h1>
                <h1 className={cn(baseclasses, "font-[200]")}>
                    Digital Experiences.
                </h1>
            </div>
        </>
    );
};

const Herosection = () => {
    return (
        <section className="relative w-full h-screen bg-bg-black-100 px-4 pt-26 overflow-hidden isolate">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0 translate-y-80 overflow-visible">
                <BottomAnimator className="md:scale-[1] scale-[0.5]">
                    <Spline
                        scene="https://prod.spline.design/hAgUkY3HybzhUBy9/scene.splinecode"
                        style={{ width: "100%", height: "100%" }}
                    />
                </BottomAnimator>
            </div>
            <Backgroundredglow className="-top-15 -right-40 " />
            <Backgroundredglow className="-bottom-15 -left-40" />
            <TopAnimator>
                <div className="relative z-10">
                    <Introtext />
                    <Button variant="filled" text="Talk To a Designer" className="my-5 ml-1" />
                </div>
            </TopAnimator>
            <div className="absolute bottom-0 hidden md:flex right-0 left-0 px-5 pb-8 justify-between">
                <BottomAnimator className="flex flex-col justify-end">
                    <p className="text-white font-chillax font-[400] uppercase text-[12px] md:text-[0.87vw] tracking-[0px] self-end leading-[1vw]">
                        Dedicated Design & Strategy Support To <br /> Empower Every Digital
                        Product.
                    </p>
                </BottomAnimator>
                <BottomAnimator>
                    <p className="text-white font-chillax font-[400] uppercase text-[12px] md:text-[0.87vw] tracking-[0px] self-end leading-[1vw]">
                        we specialize exclusively in creating <br /> exceptional user
                        interfaces and experiences. <br /> We cover the full spectrum of
                        UI/UX design to <br /> ensure your product is not just beautiful,
                        but <br />
                        also functional, accessible, and drives <br /> results.
                    </p>
                </BottomAnimator>
            </div>
        </section>
    );
};

export default Herosection;
