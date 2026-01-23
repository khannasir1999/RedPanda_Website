import { ArrowUpRight } from "lucide-react";


const Introtext = () => {
    return (
        <h1 className="font-chillax font-[500] text-[54px] md:text-[5.34vw] leading-[82px] md:leading-[6vw] flex flex-col tracking-[-4.13px] md:tracking-[-0.30vw] uppercase">
            <span className="text-white">UI UX Design</span>
            <span className="text-red-primary-400 flex pl-8">
                <ArrowUpRight size={85} />
                redpanda
            </span>
            <span className="text-red-primary-400">agency</span>
        </h1>
    );
};

export default Introtext;