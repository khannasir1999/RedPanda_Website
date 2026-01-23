import React from "react";
import uiuxdesign from "../../../public/assets/images/notfound/uiuxdesign.png";
import saasdesign from "../../../public/assets/images/notfound/saasdesign.png";
import webdesign from "../../../public/assets/images/notfound/webdesign.png";
import productdesign from "../../../public/assets/images/notfound/productdesign.png";


const CornerImagesWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={`relative w-full h-full ${className || ""}`}>
            <img src={webdesign} alt="UI UX Design" className="absolute top-0 left-0 w-[200px] md:w-[25vw] z-[10] pointer-events-none select-none -translate-x-1/2 -translate-y-1/4" />
            <img src={uiuxdesign} alt="SaaS Design" className="absolute top-0 right-0 w-[300px] md:w-[30vw] z-[10] pointer-events-none select-none translate-x-1/4 -translate-y-1/3" />
            <img src={productdesign} alt="Web Design" className="absolute bottom-0 left-0 w-[200px] md:w-[25vw] z-[10] pointer-events-none select-none -translate-x-1/3 translate-y-1/4 -rotate-12" />
            <img src={saasdesign} alt="Product Design" className="absolute bottom-0 right-0 w-[200px] md:w-[25vw] z-[10] pointer-events-none select-none translate-x-1/4 translate-y-1/4" />
            {children}
        </div>
    );
};

export default CornerImagesWrapper;
