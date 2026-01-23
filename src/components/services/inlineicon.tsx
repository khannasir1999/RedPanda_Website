import React from "react";
import { cn } from "../../utils/cn";
import type { ServicesIconsProps } from "../../types/serviceiconsprops";

type InlineiconProps = {
    Icon: React.ComponentType<ServicesIconsProps>;
    size?: number;
    className?: React.ComponentProps<"svg">["className"];
    isHovered?: boolean;
};

const Inlineicon = ({ Icon, className, isHovered }: InlineiconProps) => {
    return (
        <Icon
            isHovered={isHovered}
            className={cn(
                "inline-block align-middle h-[1em] w-[1em] -translate-y-[2px]",
                className
            )}
        />
    );
};

export default Inlineicon;
