import { motion, type HTMLMotionProps } from "framer-motion";
import type { PropsWithChildren } from "react";

type BottomAnimatorProps = {
    yoffset?: number;
    duration?: number;
} & PropsWithChildren<HTMLMotionProps<"div">>;

const BottomAnimator = ({ children, yoffset, duration, ...props }: BottomAnimatorProps) => {
    return (
        <motion.div
            initial={{ y: yoffset ?? 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: duration ?? 1.5,
                ease: [1, 0.01, 0, 1], // 👈 Custom Bezier curve
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default BottomAnimator;