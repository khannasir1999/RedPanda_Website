import { motion, type HTMLMotionProps } from "framer-motion";
import type { PropsWithChildren } from "react";

type LeftAnimaterProps = {
    xoffset?: number,
    duration?: number
} & PropsWithChildren<HTMLMotionProps<"div">>;

const LeftAnimater = ({ children, xoffset, duration ,...props }: LeftAnimaterProps) => {
    return (
        <motion.div
            initial={{ x: xoffset ?? -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
                duration: duration ?? 1.5,
                ease: [1, 0.01, 0, 1], // 👈 Custom Bezier curve
            }}
            {...props}
        >{children}</motion.div>
    )
}

export default LeftAnimater