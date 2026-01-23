import React from "react";

const Moreprojectcard = ({
    img,
    isNext,
}: {
    img: React.ComponentProps<"img">["src"];
    isNext?: boolean;
}) => {
    return (
        <div className="w-full aspect-square relative h-[660px] rounded-[28px] overflow-hidden bg-white cursor-pointer">
            <img src={img} className="w-full h-full object-cover" alt="Loading..." />
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) -10.08%, #EA2227 100%)'
                }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-chillax font-[400] text-[96px] md:text-[7vw] leading-[108px] md:leading-[7.9vw] tracking-[-4px] text-white">
                    {isNext ? "Next" : "Prev"}
                </p>
            </div>
        </div>
    );
};

export default Moreprojectcard;
