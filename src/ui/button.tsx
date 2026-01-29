import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowIcon } from "../icons";
import { cn } from "../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    showicon?: boolean,
    variant: "filled" | "outlined",
    className?: React.ComponentProps<"p">["className"],
    btnclassname?: React.ComponentProps<"button">["className"],
}

const Button = ({ text, variant, showicon = true, className,btnclassname, ...props }: ButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            {...props}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={btnclassname}
        >
            <p className={cn(`${variant === "filled" ? "bg-red-primary-500 hover:bg-red-700 text-white" : "border-red-primary-400 border-[1px] text-red-primary-400 hover:bg-red-100"} py-3 px-5 rounded-lg font-chillax font-[500] cursor-pointer text-[16px] tracking-tighter flex items-center gap-3 justify-center`, className)}>
                {text}
                {showicon && (
                    <motion.div
                        animate={isHovered ? {
                            x: [0, 3, 0, 3, 0],
                            scale: [1, 1.1, 1, 1.1, 1]
                        } : { x: 0, scale: 1 }}
                        transition={{
                            duration: isHovered ? 1.2 : 0.3,
                            repeat: isHovered ? Infinity : 0,
                            ease: "easeInOut"
                        }}
                    >
                        <ArrowIcon className="w-5 h-5 md:w-[1.45vw] md:h-[1.45vw]" />
                    </motion.div>
                )}
            </p>
        </button>
    );
};

export default Button;
