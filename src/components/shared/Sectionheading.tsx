import React from 'react';
import { cn } from '../../utils/cn';

const Sectionheading = ({ heading, className }: { heading: React.ReactNode, className?: React.ComponentProps<"h1">["className"] }) => {
    return (
        <h1 className={cn("font-chillax mb-10 2xl:mb-20 leading-12 tracking-[-8px] md:leading-[7.9vw] text-[55px] md:text-[7vw]", className)}>
            {heading}
        </h1>
    )
}

export default Sectionheading