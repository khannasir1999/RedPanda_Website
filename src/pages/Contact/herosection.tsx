import { useEffect } from "react";
import Sectionheading from "../../components/shared/Sectionheading"

const Herosection = () => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <section className="w-full flex flex-col md:flex-row items-start pt-30 px-6 bg-background-white gap-20">
            <div className="h-full w-full md:w-[45%]">
                <Sectionheading
                    heading={
                        <>
                            Book a{" "}
                            <span className="font-medium text-red-primary-400">
                                Call
                            </span>
                        </>
                    }
                />
                <p className="font-chillax font-[400] tracking-tight md:max-w-[65%] mt-4">Dedicated Design & Strategy Support To give boost to Every Digital Product.</p>
            </div>
            <div className="flex-1 w-full">
                {/* <div
                    className="calendly-inline-widget w-full !m-0"
                    data-url="https://calendly.com/rpnglobal/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                    style={{ minWidth: "320px", height: "700px" }}
                ></div> */}
                <div className="calendly-inline-widget w-full"
                    data-url="https://calendly.com/rpnglobal/30min?month=2025-12"
                    style={{ height: "1000px", width: "100%" }}></div>
            </div>
        </section>
    )
}

export default Herosection