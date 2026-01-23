import { motion } from "framer-motion";

const Casebadge = ({
  text,
  isPrimary,
  onClick,
}: {
  text: string;
  isPrimary?: boolean;
  onClick?: () => void;
}) => {
  return (
    <motion.div
      onClick={onClick}
      initial={false}
      whileHover={{
        backgroundColor: "#ea2227",
        borderColor: "rgb(234, 34, 39)",
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      className={`rounded-full min-w-fit px-3 py-[0.2vw] 2xl:py-[0.8vw] 2xl:px-[0.8vw] cursor-pointer ${isPrimary ? "bg-red-primary-400 " : "bg-transparent border border-white"
        }`}
    >
      <p className="text-white font-chillax leading-[26.77px] tracking-[-3%%] text-[13px] md:text-[1.3vw]">{text}</p>
    </motion.div>
  );
};

export default Casebadge;
