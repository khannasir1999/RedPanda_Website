import CornerImagesWrapper from "../../components/notfound/cornerimageswrapper";
import Backgroundredglow from "@/components/services/backgroundredglow";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import fishingpanda from "../../../public/assets/images/notfound/fishingpanda.png";
import FloatingIcons from "../../components/notfound/floatingicons";

const Herosection = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-bg-black-100 isolate">
            <CornerImagesWrapper>
                <FloatingIcons />
                <Backgroundredglow className="-top-15 -right-40" />
                <Backgroundredglow className="-bottom-15 -left-40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-1 gap-6">
                    <div className="relative">
                        <img
                            src={fishingpanda}
                            alt="Fishing Panda"
                            className="absolute -top-14 left-[45%] w-[100px] md:w-[10vw] z-10 pointer-events-none select-none"
                        />
                        <h1 className="text-[200px] md:text-[17vw] font-chillax font-medium tracking-tighter leading-none text-white flex items-center relative z-0">
                            40<span className="bg-gradient-to-b from-[#FFFFFF] to-[#878787] bg-clip-text text-transparent -rotate-35 transform origin-center inline-block !m-0 !p-0 -translate-x-3">4</span>
                        </h1>
                    </div>
                    <Link to="/" className="text-white font-chillax text-xl md:text-2xl font-light underline flex items-center gap-1 hover:text-red-primary-400 transition-colors">
                        <ArrowLeft size={24} />
                        <span className="pb-0.5">Go Back Home</span>
                    </Link>
                </div>
            </CornerImagesWrapper>
        </section>
    )
}

export default Herosection