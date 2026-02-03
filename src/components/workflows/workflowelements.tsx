import React from "react";
import { cn } from "../../utils/cn";
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

const ComposingHandoffComp = ({
    wrapperClassName,
    appearFrom = "right",
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
                viewBox="0 0 312 166"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20vw] h-[8vw]"
            >
                <path
                    d="M0 28C0 12.536 12.536 0 28 0H284C299.464 0 312 12.536 312 28V138C312 153.464 299.464 166 284 166H28C12.536 166 0 153.464 0 138V28Z"
                    fill="#EA2227"
                />
                <path
                    d="M38.1365 78.7159C28.1137 78.7159 20.2898 70.7897 20.2898 60.818C20.2898 50.8464 28.1137 42.9201 38.1365 42.9201C44.1195 42.9201 49.8469 46.0906 52.4037 51.46L46.3184 54.8862C44.6309 51.9202 41.9718 50.0282 37.8297 50.0282C32.1024 50.0282 27.9603 54.5793 27.9603 60.818C27.9603 67.0567 32.0513 71.6079 37.8297 71.6079C41.9718 71.6079 44.7332 69.7158 46.3184 66.7499L52.4037 70.1761C49.8469 75.5454 44.1195 78.7159 38.1365 78.7159ZM66.695 78.6648C56.5188 78.6648 48.7971 70.9943 48.7971 60.818C48.7971 50.6929 56.5188 42.9713 66.695 42.9713C76.9224 42.9713 84.6441 50.6929 84.6441 60.818C84.6441 70.9943 76.8713 78.6648 66.695 78.6648ZM66.695 71.6079C72.4224 71.6079 76.9224 66.9033 76.9224 60.818C76.9224 54.7328 72.4735 50.0282 66.695 50.0282C60.9677 50.0282 56.4677 54.7328 56.4677 60.818C56.4677 66.9033 60.9677 71.6079 66.695 71.6079ZM90.3304 78H82.7622L87.4156 48.3918C88.0293 44.8122 90.535 42.9201 94.0123 42.9201C97.0805 42.9201 99.6884 44.2497 100.507 47.5736L106.285 69.0511C106.285 69.2045 106.336 69.2045 106.336 69.2045C106.387 69.2045 106.439 69.2045 106.439 69.0511L112.115 47.727C112.984 44.4031 115.643 42.9201 118.762 42.9201C122.189 42.9201 124.643 44.8633 125.155 48.5452L129.399 78H121.831L118.507 50.9998C118.507 50.7441 118.456 50.5907 118.251 50.5907C118.098 50.5907 117.995 50.6929 117.944 50.8975L111.552 73.7045C110.836 76.3125 108.791 77.5909 106.336 77.5909C103.984 77.5909 101.785 76.3636 101.171 73.8579L94.7793 50.8975C94.7282 50.6418 94.6259 50.5907 94.5236 50.5907C94.3702 50.5907 94.2168 50.6929 94.2168 50.9486L90.3304 78ZM137.863 77.9489L130.397 78V43.5849H142.517C152.284 43.5849 158.267 48.1361 158.267 56.1134C158.267 64.3976 152.386 68.8976 142.926 68.8976H137.863V77.9489ZM142.721 50.4884H137.863V61.9942H142.721C147.631 61.9942 150.597 60.1021 150.597 56.1134C150.597 52.3293 147.631 50.4884 142.721 50.4884ZM173.391 78.6648C163.215 78.6648 155.493 70.9943 155.493 60.818C155.493 50.6929 163.215 42.9713 173.391 42.9713C183.618 42.9713 191.34 50.6929 191.34 60.818C191.34 70.9943 183.567 78.6648 173.391 78.6648ZM173.391 71.6079C179.118 71.6079 183.618 66.9033 183.618 60.818C183.618 54.7328 179.169 50.0282 173.391 50.0282C167.664 50.0282 163.164 54.7328 163.164 60.818C163.164 66.9033 167.664 71.6079 173.391 71.6079ZM202.703 78.6648C196.515 78.6648 191.555 76.0568 189.356 71.1477L195.594 68.0283C196.719 70.534 199.123 71.8124 202.703 71.8124C205.924 71.8124 208.379 70.4829 208.379 68.0283C208.379 65.1647 205.668 64.7044 202.089 64.0908C196.924 63.2215 189.918 61.3805 189.918 53.6077C189.918 47.5736 195.339 42.9713 202.447 42.9713C208.123 42.9713 213.032 45.5793 215.231 50.4884L208.992 53.6077C207.867 51.4089 205.617 49.8748 202.14 49.8748C199.327 49.8748 197.384 51.2043 197.384 53.3009C197.384 56.0623 200.248 56.7782 203.981 57.443C209.095 58.3123 215.845 60.1533 215.845 67.9772C215.845 74.1647 210.015 78.6648 202.703 78.6648ZM216.769 43.5849H224.234V78H216.769V43.5849ZM234.148 78H227.04V48.2895C227.04 44.8633 229.546 42.869 232.358 42.869C234.608 42.869 236.398 43.6872 237.523 45.5793L251.125 68.8976V43.5849H258.182V73.2954C258.182 76.7216 255.677 78.6648 252.966 78.6648C250.767 78.6648 248.875 77.8977 247.75 76.0057L234.148 52.5339V78ZM276.133 78.7159C266.059 78.7159 258.286 70.7386 258.286 60.818C258.286 50.8975 265.957 42.9713 276.133 42.9713C282.014 42.9713 287.843 45.9372 290.4 51.46L284.315 54.8862C282.576 51.818 279.917 49.977 275.826 49.977C270.048 49.977 265.957 54.6816 265.957 60.9203C265.957 67.3635 270.099 71.9147 276.133 71.9147C279.508 71.9147 281.963 71.0454 283.548 69.409L283.497 61.7896H290.758V71.9147C288.253 75.6988 282.934 78.7159 276.133 78.7159ZM38.6479 93.977C36.2956 93.977 34.9149 95.6134 34.9149 97.3521C34.9149 99.2441 36.3979 101.187 39.5172 104.358L45.1934 110.085C46.5741 108.091 47.648 105.738 48.2616 103.284L54.5003 106.096C53.4264 109.318 51.8923 112.284 49.898 114.79L57.0572 122H46.9832L44.682 119.648C41.7161 121.591 38.1365 122.716 34.0456 122.716C26.0171 122.716 21.1591 118.267 21.1591 112.079C21.1591 108.04 23.5625 104.256 28.7785 102.312C27.7046 100.523 27.0398 98.6305 27.0398 96.6361C27.0398 91.1134 31.3865 86.9201 37.7786 86.9201C43.3525 86.9201 47.4434 89.6815 49.54 94.2838L43.7104 97.71C42.6366 95.4089 40.7957 93.977 38.6479 93.977ZM28.9319 111.722C28.9319 114.329 31.1819 116.324 34.8638 116.324C36.7047 116.324 38.4945 115.812 40.0797 114.943L33.4831 108.142C33.1251 107.784 32.8183 107.426 32.4603 107.068C30.2615 107.886 28.9319 109.574 28.9319 111.722ZM72.9511 122H65.4851V87.5849H72.9511V101.443H88.6501V87.5849H96.1161V122H88.6501V108.295H72.9511V122ZM95.2629 122L104.365 92.4429C105.541 88.7099 108.61 86.9201 111.831 86.9201C115.104 86.9201 118.172 88.7099 119.348 92.4429L128.451 122H120.831L118.837 114.943L104.877 114.994L102.882 122H95.2629ZM110.757 94.6418L106.82 108.295H116.894L113.007 94.6418C112.803 93.9259 112.496 93.6191 111.882 93.6191C111.32 93.6191 110.962 93.9259 110.757 94.6418ZM135.093 122H127.985V92.2895C127.985 88.8633 130.49 86.869 133.303 86.869C135.553 86.869 137.343 87.6872 138.468 89.5793L152.07 112.898V87.5849H159.127V117.295C159.127 120.722 156.621 122.665 153.911 122.665C151.712 122.665 149.82 121.898 148.695 120.006L135.093 96.5339V122ZM193.442 104.818C193.442 115.403 185.566 122 174.725 122H162.044V87.5849H174.879C186.027 87.5849 193.442 94.4373 193.442 104.818ZM185.771 104.818C185.771 98.6305 181.373 94.4884 174.879 94.4884H169.51V115.301H174.725C181.169 115.301 185.771 111.261 185.771 104.818ZM209.432 122.665C199.255 122.665 191.534 114.994 191.534 104.818C191.534 94.6929 199.255 86.9713 209.432 86.9713C219.659 86.9713 227.381 94.6929 227.381 104.818C227.381 114.994 219.608 122.665 209.432 122.665ZM209.432 115.608C215.159 115.608 219.659 110.903 219.659 104.818C219.659 98.7328 215.21 94.0282 209.432 94.0282C203.704 94.0282 199.204 98.7328 199.204 104.818C199.204 110.903 203.704 115.608 209.432 115.608ZM234.806 122H227.34V94.0282C227.34 90.0906 229.232 87.5849 233.936 87.5849H252.039V94.4884H234.806V103.488H250.863V110.341H234.806V122ZM259.168 122H251.702V94.0282C251.702 90.0906 253.594 87.5849 258.299 87.5849H276.401V94.4884H259.168V103.488H275.225V110.341H259.168V122Z"
                    fill="#FAFAFA"
                />
                <foreignObject x="0" y="0" width="312" height="166">
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
                            {hovered && (
                                <motion.img
                                    key="panda"
                                    src="/assets/images/loader_panda.png"
                                    alt="Red Panda"
                                    width={180}
                                    height={180}
                                    className="object-contain"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                />
                            )}
                        </AnimatePresence>
                    </div>
                </foreignObject>
            </svg>
        </motion.div>
    );
};

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
            <ComposingHandoffComp
                appearFrom="right"
                delay={0.5}
                wrapperClassName="right-[15vw] top-[63%]"
            />
        </div>
    );
};

export default Workflowelements;
