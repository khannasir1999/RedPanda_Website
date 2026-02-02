import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../../ui/button";
import LeftAnimater from "../../components/animations/leftanimator";
import RightAnimator from "../../components/animations/rightanimator";
import pandaimage from "../../../public/assets/images/panda.png";
import cloudyimage1 from "../../../public/assets/images/hero/cloudy1.png";
import cloudyimage2 from "../../../public/assets/images/hero/cloudy2.png";
import image5 from "../../assets/images/hero/image5.png";
import image2 from "../../assets/images/hero/image2.png";
import image1 from "/assets/images/hero/image1.png";
import image3 from "../../assets/images/hero/image3.png";
import image4 from "../../assets/images/hero/image4.png";
import image6 from "../../assets/images/hero/image6.png";

const heroBackgroundImages = [
  {
    image: image5,
    link: 'https://www.google.com'
  },
  {
    image: image2,
    link: 'https://www.google.com'
  },
  {
    image: image1,
    link: 'https://www.google.com'
  },
  {
    image: image3,
    link: 'https://www.google.com'
  },
  {
    image: image4,
    link: 'https://www.google.com'
  },
  {
    image: image6,
    link: 'https://www.google.com'
  },
  {
    image: image3,
    link: 'https://www.google.com'
  }
];


const Frontheading = () => {
  return (
    <h1 className="uppercase font-chillax font-medium flex flex-col text-left">
      <span className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-7xl leading-[38px] sm:leading-[56px] md:leading-[64px] lg:leading-[67px] tracking-[-0.5px] md:tracking-[-2px] lg:tracking-[-4px]">
        <span className="text-[#FAFAFA]">Building </span>
        <span className="text-red-primary-400">Digital</span>
      </span>

      <span className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-7xl leading-[38px] sm:leading-[56px] md:leading-[64px] lg:leading-[67px] tracking-[-0.5px] md:tracking-[-2px] lg:tracking-[-4px]">
        <span className="text-red-primary-400">Experiences </span>
        <span className="text-[#FAFAFA]">That Stick</span>
      </span>
    </h1>
  );
};



const Herosection = () => {
  const cloudyLayerRef = useRef<HTMLDivElement>(null);
  const pandaRef = useRef<HTMLImageElement>(null);
  const imageRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useGSAP(() => {
    const timeline = gsap.timeline();
    gsap.set(imageRefs.current, { opacity: 0, scale: 0.8 });
    gsap.set(cloudyLayerRef.current, { opacity: 0 });
    gsap.set(pandaRef.current, { opacity: 0, y: 50 });

    imageRefs.current.forEach((imageRef, index) => {
      if (imageRef) {
        timeline.to(
          imageRef,
          {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          },
          index * 0.15 
        );
      }
    });

    const lastImageIndex = heroBackgroundImages.length - 1;
    const lastImageEndTime = (lastImageIndex * 0.15) + 0.3;

    timeline.to(
      cloudyLayerRef.current,
      {
        opacity: 1,
        duration: 1.3,
        ease: "power2.out",
      },
      lastImageEndTime
    );

    timeline.to(
      pandaRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.4"
    );
  }, []);

  return (
    <div className="relative h-screen bg-zinc-900 flex p-4 overflow-hidden w-full">
      <div className="w-[30%] h-[50%] absolute right-[10%] top-[20%] md:-right-[3%] md:top-[2%] bg-red-primary-400 rounded-full blur-[250px] opacity-40 pointer-events-none" />
      <div className="w-[25%] h-[50%] absolute left-[3%] bottom-[20%] md:left-[3%] md:bottom-[20%] bg-red-primary-400 rounded-full blur-[307.70px] opacity-40 pointer-events-none" />

      <div className="flex  items-center justify-between z-10 pointer-events-none w-full mt-40">
        <LeftAnimater
          className="relative w-full sm:w-2/3 lg:w-1/2 h-full flex flex-col z-10 pointer-events-none">
          <Frontheading />
          <div className="mt-5 flex gap-3 pointer-events-auto">
            <Button variant="filled" text="Get a Quote" />
          </div>
        </LeftAnimater>
        <RightAnimator className="hidden sm:flex w-full h-full flex-col items-end p-12 pt-0">
          <div className="flex items-center gap-1 text-left">
            <ArrowUpRight className="text-red-primary-400 w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] shrink-0" />
            <h1 className="uppercase text-[#FAFAFA] font-chillax font-medium text-[28px] sm:text-[36px] md:text-[42px] lg:text-5xl leading-[34px] sm:leading-[42px] md:leading-[48px] lg:leading-[49.87px] tracking-tighter">
              100% Growth
            </h1>
          </div>

          <p className="text-[#FAFAFA] font-chillax font-normal uppercase text-left mt-4 text-[10px] sm:text-[11px] md:text-xs leading-[14px] sm:leading-[15px] md:leading-4 tracking-[0px] max-w-[288px]">
            our growth rate higher than expected, <br />
            trust us and just relax while we handle your
            digital presence
          </p>
        </RightAnimator>
      </div>




      <div className="absolute bottom-0 left-0 -right-30 h-[53%] pointer-events-auto z-10 overflow-visible opacity-30">
        <div className="relative w-full h-full flex justify-center items-center -space-x-20 mt-50">
          {heroBackgroundImages.map((item, index) => {
            return (
              <a
                key={index}
                ref={(el) => {
                  imageRefs.current[index] = el;
                }}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="origin-top-left rounded-[33.76px] opacity-40 hover:opacity-60 transition-opacity cursor-pointer"
                style={{
                  transform: `matrix(0.92, -0.39, -0.13, 0.99, 0, 0)`,
                  zIndex: index + 1,
                }}
              >
                <img
                  src={item.image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-contain rounded-[33.76px]"
                  style={{
                    filter: 'brightness(0.7) saturate(0.8)',
                  }}
                  onError={(e) => {
                    console.warn(`Image ${item.image} failed to load`);
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </a>
            );
          })}
        </div>
      </div>
      
      <div 
        ref={cloudyLayerRef}
        className="absolute bottom-0 left-0 right-0 h-[60%] pointer-events-none z-30 w-full flex "
      >
        <img src={cloudyimage2} alt="" className="w-full h-full object-cover" />
        <img src={cloudyimage1} alt="" className="w-full h-full object-cover " />
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center z-50">
        <img 
          ref={pandaRef}
          src={pandaimage} 
          alt="Hero Section Image" 
          className="w-auto h-[50vh] xl:h-[70vh]" 
        />
      </div>
    </div>
  )
}

export default Herosection