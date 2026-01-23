import { useEffect, type ReactNode } from "react";
import { preloadvideo } from "../utils/preloadvideo";
import landingpageanimation from "../../public/assets/videos/splines/landinganimation.mp4";
import uiuxdesignvideo from "../../public/assets/videos/splines/uiuxdesignvideo.mp4";
import productdesignvideo from "../../public/assets/videos/splines/productdesignvideo.mp4";
import webdesignvideo from "../../public/assets/videos/splines/webdesignvideo.mp4";
import saasdesignvideo from "../../public/assets/videos/splines/saasdesignvideo.mp4";
import brandingvideo from "../../public/assets/videos/splines/brandingvideo.mp4";
import developmentvideo from "../../public/assets/videos/splines/developmentvideo.mp4";

const VideosPreLoaderProvider = ({ children }: { children: ReactNode }) => {
    const videos = [
        landingpageanimation,
        uiuxdesignvideo,
        productdesignvideo,
        webdesignvideo,
        saasdesignvideo,
        brandingvideo,
        developmentvideo,
    ];

    useEffect(() => {
        videos.forEach((video) => preloadvideo(video));
    }, []);

    return children;
};

export default VideosPreLoaderProvider;
