import React from 'react'
import { cn } from '../../utils/cn'

const designprocessmiddletext = ({ children, className }: { children: React.ReactNode,className?: React.ComponentProps<"h1">["className"] }) => {
    return (
        <div>
            <h1 className={cn("text-[54.31px] md:text-[5vw] leading-[61.1px] md:leading-[7.3vw] tracking-[-3.08px] md:tracking-[-5.45px] font-chillax text-white text-center", className)}>{children}</h1>
        </div>
    )
}

export default designprocessmiddletext