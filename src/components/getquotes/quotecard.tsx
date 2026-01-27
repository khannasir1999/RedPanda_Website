import { cn } from "@/utils/cn";
import React, { type PropsWithChildren } from "react";

interface QuoteCardProps extends PropsWithChildren {
    className?: string;
    country: string;
    description: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ children, className = "", country, description }) => {
    return (
        <div
            className={cn(
                "bg-[#FFFFFF1A] rounded-[28px] w-full max-w-[520px] min-h-[140px] p-6 flex flex-col justify-between",
                "border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-[60px]",
                className
            )}
        >
            <div className="flex items-center gap-3">
                <div
                    className="w-2 h-2 rounded-full bg-[#00D30E]" />
                
                <h3 className="font-chillax font-medium text-[16px] md:text-[1.15vw] leading-[100%] text-white">
                    {country}
                </h3>
            </div>

            <p className="font-chillax font-light text-[14px] md:text-[1vw] leading-[20px] md:leading-[1.4vw] tracking-[-0.02em] text-[#FAFAFA] mt-3">
                {description}
            </p>

            {children}
        </div>
    );
};

export default QuoteCard;