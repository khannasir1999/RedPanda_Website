import React from "react";
import { cn } from "../../utils/cn";
import { WorkflowElementArrowIcon } from "../../icons";
import redpandaicon from "/assets/images/redpandaicon.png";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants, Transition } from "framer-motion";

const baseclasses =
    "absolute cursor-pointer select-none flex items-center justify-center ";

type Dir = "left" | "right";

const springTransition: Transition = {
    type: "spring",
    stiffness: 120,
    damping: 18,
    mass: 0.8,
};

const slideIn = {
    hidden: (c: { dir: Dir; delay?: number }) => ({
        opacity: 0,
        x: c.dir === "left" ? -90 : 90,
        filter: "blur(6px)",
        scale: 0.98,
    }),
    visible: (c: { dir: Dir; delay?: number }) => ({
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        scale: 1,
        transition: { ...springTransition, delay: c.delay ?? 0 },
    }),
} satisfies Variants;

const DesignandIdeaComp = ({
    className,
    textclassName,
    appearFrom = "left",
    delay = 0,
    children
}: {
    className: React.ComponentProps<"div">["className"];
    textclassName?: React.ComponentProps<"p">["className"];
    appearFrom?: Dir;
    delay?: number;
    children?: React.ReactNode;
}) => {
    return <motion.div
        className={cn(
            "transition-colors border-2 duration-[2000ms] active:duration-0 group",
            baseclasses,
            className
        )}
        variants={slideIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        custom={{ dir: appearFrom, delay }}
    >
        <p
            className={cn(
                "font-chillax font-semibold uppercase text-[3.3vw] leading-[3vw] md:tracking-[-5px]",
                "transition-colors duration-[2000ms] group-active:duration-0",
                textclassName
            )}
        >
            {children}
        </p>
    </motion.div>
};

const PlanningandIdeaComp = ({
    wrapperClassName,
    appearFrom = "left",
    delay = 0.15,
}: {
    wrapperClassName?: React.ComponentProps<"div">["className"];
    appearFrom?: Dir;
    delay?: number;
}) => {
    const [hovered, setHovered] = React.useState(false);

    return (
        <motion.div
            variants={slideIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            custom={{ dir: appearFrom, delay }}
            className={cn("absolute cursor-pointer z-10", wrapperClassName)}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
        >
            <svg
                viewBox="0 0 387 223"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[28vw] h-[16vw]"
            >
                <path
                    d="M193.124 223L0 111.5L193.124 0L386.247 111.5L193.124 223Z"
                    fill="#9CFF38"
                />
                <foreignObject x="90" y="40" width="200" height="150">
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {hovered ? (
                                <motion.img
                                    key="icon"
                                    src={redpandaicon}
                                    width={100}
                                    height={100}
                                    alt="Red Panda"
                                    className="object-contain"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0, ease: "easeOut" }}
                                />
                            ) : (
                                <motion.p
                                    key="text"
                                    className="text-black text-[30px] font-comforter text-center"
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                >
                                    Planning
                                    <br /> & <br />
                                    Research
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                </foreignObject>
            </svg>
        </motion.div>
    );
};

const CursorComp = ({
    className,
    appearFrom = "right",
    delay = 0.15,
}: {
    className: React.ComponentProps<"div">["className"];
    appearFrom?: Dir;
    delay?: number;
}) => (
    <motion.div
        className={cn(
            "rounded-full transition-colors duration-[2000ms]",
            baseclasses,
            className
        )}
        variants={slideIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        custom={{ dir: appearFrom, delay }}
    >
        <div className="rotate-0 hover:rotate-45 transition-transform duration-[500ms]">
            <WorkflowElementArrowIcon className="w-[3vw] h-[3vh] xl:w-[5vw] xl:h-[5vh]" />
        </div>
    </motion.div>
);

const Workflowelements = () => {

    return (
        <div className="absolute inset-0">
            <DesignandIdeaComp
                appearFrom="left"
                delay={0.5}
                className={cn(
                    "bg-purple-primary hover:bg-purple-dark border-transparent active:border-purple-dark active:bg-white rounded-[10px] md:rounded-[20px] ",
                    "w-[17vw] h-[10vw] left-[11vw] top-[10%]"
                )}
                textclassName="text-white group-active:text-purple-dark"
            >
                Design <br /> & Idea
            </DesignandIdeaComp>

            <PlanningandIdeaComp
                appearFrom="left"
                delay={0.5}
                wrapperClassName="left-[11vw] top-[58%]"
            />

            <DesignandIdeaComp
                appearFrom="right"
                delay={0.5}
                className={cn("bg-yellow-primary-500 hover:bg-yellow-primary-400 border-transparent active:border-yellow-primary-500 active:bg-white rounded-[10px] md:rounded-[20px]",
                    "w-[16vw] h-[13vw]",
                    "top-[8%] right-[5vw]"
                )}
                textclassName="text-white group-active:text-yellow-primary-500 text-[2.5vw] leading-[2.5vw]"
            >
                Design <br />
                & Dev
            </DesignandIdeaComp>
            <CursorComp
                appearFrom="right"
                delay={0.5}
                className={cn("bg-red-primary-400 hover:bg-red-primary-500",
                    "w-[8vw] h-[8vw]",
                    "right-[19vw] top-[42%]",
                )}
            />
        </div>
    );
};

export default Workflowelements;
