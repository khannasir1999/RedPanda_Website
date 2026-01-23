import { useTextScrollFillAnimation } from "@/hooks/useTextScrollFillAnimation";
import { useRef } from "react";

const IndustryIntroText = () => {

    const textRef = useRef(null);

    useTextScrollFillAnimation({
        targetRef: textRef,
        initialColor: "#9EA2AE",
        finalColor: "#1C1C1C",
    });

    return (
        <h1 ref={textRef} className="font-chillax font-[400] text-[28px] md:text-[2.7vw] leading-[57px] md:leading-[4.1vw] tracking-[-2px] mb-8" >We partner with a diverse range of industries, delivering tailored solutions that drive growth and innovation. Our expertise spans various sectors, helping businesses thrive in a rapidly evolving landscape.</h1>
    )
}

export default IndustryIntroText