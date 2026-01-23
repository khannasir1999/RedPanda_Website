import brandingicon from "../../../public/assets/images/notfound/brandingicon.png";
import developmenticon from "../../../public/assets/images/notfound/developmenticon.png";
import productdesignicon from "../../../public/assets/images/notfound/productdesignicon.png";
import saasicon from "../../../public/assets/images/notfound/saasicon.png";
import uiuxicon from "../../../public/assets/images/notfound/uiuxicon.png";
import webdesignicon from "../../../public/assets/images/notfound/webdesignicon.png";

const FloatingIcons = () => {
    return (
        <div className="hidden md:block absolute inset-0 pointer-events-none z-20 w-screen h-screen overflow-hidden ">

            <img
                src={developmenticon}
                alt="Development"
                className="absolute top-[25%] left-[25%] w-[60px] md:w-[4vw]"
            />

            <img
                src={uiuxicon}
                alt="UI/UX"
                className="absolute top-[45%] left-[15%] w-[50px] md:w-[3.5vw]"
            />

            <img
                src={webdesignicon}
                alt="Web Design"
                className="absolute bottom-[25%] left-[25%] w-[60px] md:w-[4vw]"
            />


            <img
                src={productdesignicon}
                alt="Product Design"
                className="absolute top-[25%] right-[25%] w-[60px] md:w-[4vw]"
            />

            <img
                src={saasicon}
                alt="SaaS"
                className="absolute top-[45%] right-[15%] w-[50px] md:w-[3.5vw]"
            />

            <img
                src={brandingicon}
                alt="Branding"
                className="absolute bottom-[20%] right-[25%] w-[80px] md:w-[5vw]"
            />

        </div>
    );
};

export default FloatingIcons;
