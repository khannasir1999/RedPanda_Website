import { motion, useInView } from "framer-motion";

const Workflowtext = ({ sectionRef, text, index }: { sectionRef: React.RefObject<HTMLDivElement | null>, text: string, index: number }) => {

    const isInView = useInView(sectionRef, { once: true });

    const zindexes = [0, 99, -1, 99];

    const zIndex = zindexes[index];

    return (
        <motion.div
            style={{ zIndex, position: "relative", pointerEvents: "none" }}
            key={index}
            initial={{
                translateY: -50,
                opacity: 0,
            }}
            animate={
                isInView
                    ? { translateY: 0, opacity: 1 }
                    : { translateY: -100, opacity: 0 }
            }
            transition={{
                duration: 0.8,
                delay: index * 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
        >
            <h1
                className='font-chillax uppercase text-white select-none whitespace-nowrap m-0 leading-[0.8] '
                style={{
                    fontSize: 'min(14vw, 30vh)',
                    textShadow: '0 0 20px rgba(0,0,0,0.5)',
                }}
            >
                {text}
            </h1>
        </motion.div>
    )
}

export default Workflowtext