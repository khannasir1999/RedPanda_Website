import { useState } from "react";
import Klems1 from "../../assets/images/KlemApp/Klemsfullss.png";
import Klems2 from "../../assets/images/KlemApp/Klemfullss2.png";
import Klems3 from "../../assets/images/KlemApp/klemsfullss3.png";
import Klems4 from "../../assets/images/KlemApp/klemsfullss4.png";
import Klems5 from "../../assets/images/KlemApp/Klemsfullss5.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/ui/carousel";

const FullScreenshots = () => {
  const allScreenshots = [
    Klems1,
    Klems2,
    Klems3,
    Klems4,
    Klems5
  ];
  const [api, setApi] = useState<CarouselApi>();


  return (
    <section className="relative w-full bg-[#C9C9C9] overflow-hidden py-5">
      <div className="w-full h-full relative flex flex-col gap-5 px-4">
        {/* Slider Carousel */}
        <div className="w-full">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {allScreenshots.map((screenshot, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div
                    className="relative min-h-2.5">
                    <img
                      src={screenshot}
                      alt={`Klem App screenshot ${index + 1}`}
                      className="w-full h-full object-contain"
                      draggable={false}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FullScreenshots;
