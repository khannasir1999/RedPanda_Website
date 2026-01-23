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
            className={cn('bg-[#FFFFFF1A] mb-3 backdrop-blur-[100px] rounded-[28px] w-full md:w-[38vw] h-[151px] md:h-[11vw] p-5 flex flex-col justify-between', className)}
            style={{
                backdropFilter: 'blur(100px)'
            }}
        >
            <div className="flex items-center gap-3">
                <div 
                    className="w-[8.09px] md:w-[0.59vw] h-[8.09px] md:h-[0.59vw] rounded-full bg-[#00D30E]" />
                
                <h3 className="font-chillax font-medium text-[17.65px] md:text-[1.29vw] leading-[100%] text-white">
                    {country}
                </h3>
            </div>

            <p className="font-chillax font-light text-[20px] md:text-[1.46vw] leading-[24px] md:leading-[1.75vw] tracking-[-0.05em] text-[#FAFAFA] mt-4">
                {description}
            </p>

            {children}
        </div>
    );
};

export default QuoteCard;