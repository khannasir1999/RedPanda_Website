import React from 'react';
import { cn } from '../../utils/cn';

const Sectionheading = ({ heading, className }: { heading: React.ReactNode, className?: React.ComponentProps<"h1">["className"] }) => {
    return (
        <h1 className={cn("font-chillax mb-10 2xl:mb-20 leading-10 tracking-[-2px] md:leading-[4.6vw] text-[32px] md:text-[4vw]", className)}>
            {heading}
        </h1>
    )
}

export default Sectionheading