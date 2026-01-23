import CornerImagesWrapper from "../../components/notfound/cornerimageswrapper";
import FloatingIcons from "../../components/notfound/floatingicons";
import thankyoupanda from "../../../public/assets/images/notfound/thankyoupanda.png";
import bottomthankyoupanda from "../../../public/assets/images/notfound/bottomthankyoupanda.png";

const Herosection = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-white isolate">
            <CornerImagesWrapper>
                <FloatingIcons />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-1">
                    <div className="relative">
                        <img
                            src={thankyoupanda}
                            alt="Celebrating Panda"
                            className="absolute -top-[28%] -left-[3%] w-[80px] md:w-[8vw] z-10"
                        />

                        <h1 className="text-[150px] md:text-[12vw] font-chillax font-medium tracking-tighter leading-[0.8] text-red-primary-400 flex flex-col items-center relative z-0">
                            <span>Thank</span>
                            <div className="flex items-center">
                                yo<span className="bg-gradient-to-r from-red-primary-400 to-[#8B0000] bg-clip-text text-transparent origin-center inline-block rotate-5">u</span>
                            </div>
                        </h1>

                        <img
                            src={bottomthankyoupanda}
                            alt="Panda on Ladder"
                            className="absolute -bottom-[72%] -right-[3%] w-[100px] md:w-[10vw] -z-1"
                        />
                    </div>
                </div>
            </CornerImagesWrapper>
        </section>
    )
}

export default Herosection;