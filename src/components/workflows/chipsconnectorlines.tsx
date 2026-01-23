import React from "react";
import { cn } from "../../utils/cn";

const Innerdiv = ({
    className,
}: {
    className: React.ComponentProps<"div">["className"];
}) => <div className={cn("w-full h-full bg-black/90", className)}></div>;

const Singleline = ({
    className,
    children,
    styles
}: {
    className: React.ComponentProps<"div">["className"];
    children: React.ReactNode,
    styles: React.CSSProperties
}) => {
    return <div
        className={cn("md:w-[65%] lg:w-[80%] h-full", className)}
        style={{
            WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "2px",
            ...styles
        }}
    >
        {children}
    </div>
}


const Chipsconnectorlines = () => {
    return (
        <div className="absolute h-full w-full hidden md:flex flex-col items-center z-0 inset-0 pt-17 pb-3 px-50">
            <Singleline className="self-center  rounded-r-full "  styles={{
                background:
                    "linear-gradient(to right, transparent 0%, transparent 2%, #FAFAFA 20%, transparent 100%)",
            }}>
                <Innerdiv className="rounded-r-full" />
            </Singleline>
            
            <Singleline className="p-[2px] pr-0 mb-3 self-start rounded-l-full -translate-y-0.5 bg-[linear-gradient(to_right,transparent_1%,#FAFAFA_70%,transparent_100%)]" styles={{
                background:
                    "linear-gradient(to right, transparent 0%, #FAFAFA 70%, transparent 98%, transparent 100%)",
            }}>
                <Innerdiv className="rounded-l-full" />
            </Singleline>

        </div>
    );
};

export default Chipsconnectorlines;
