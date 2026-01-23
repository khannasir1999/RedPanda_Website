import BlobCursor from "@/components/videos/blobcursor";
import Ratingscard from "../../components/reviews/ratingscard";
import Recommendationcard from "../../components/reviews/recommendationcard";
import Sectionheading from "../../components/shared/Sectionheading";
import { useScrollFadeIn } from "../../hooks/useScrollFadeIn";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/ui/carousel";
import { useCallback, useState } from "react";
import { LeftArrowIcon, RightArrowIcon } from "@/icons";
import { useMoveCarousel } from "@/hooks/useMoveCarousel";

const Clientsreviews = () => {
    const [showBlobCursor, setShowBlobCursor] = useState(false);

    const {
        setApi,
        canScroll,
        handleMouseMove,
        effectiveDirection,
        handleCursorClick
    } = useMoveCarousel();

    const handleMouseEnter = useCallback(() => {
        setShowBlobCursor(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setShowBlobCursor(false);
    }, []);

    const CursorArrowIcon = effectiveDirection === 'next' ? RightArrowIcon : LeftArrowIcon;
    const cursorText = effectiveDirection === 'next' ? "NEXT REVIEWS" : "PREV REVIEWS";

    const { containerRef: reiviewsheadingRef } = useScrollFadeIn({
        selector: ".reviews-heading",
        direction: "top",
    });

    const { containerRef: reviewscardsRef } = useScrollFadeIn({
        selector: ".reviews-cards",
        direction: "right",
        duration: 0.5,
        distance: 200,
    });

    return (
        <section className="px-2 sm:px-4 md:h-screen bg-background-white overflow-x-hidden flex flex-col cursor-none pt-5">
            <div className="shrink-0" ref={reiviewsheadingRef}>
                <Sectionheading
                    className="reviews-heading"
                    heading={
                        <>
                            What Our <br />
                            <span className="font-medium text-red-primary-400 md:inline-block block">
                                Clients Say About <br className="md:hidden inline-block" /> Us!
                            </span>
                        </>
                    }
                />
            </div>

            <div
                className="relative flex-1"
                ref={reviewscardsRef}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >

                {showBlobCursor && canScroll && (
                    <div className="absolute inset-0">
                        <BlobCursor onClick={handleCursorClick} rotatingText={cursorText} Arrow={CursorArrowIcon} showarrows zIndex={50} />
                    </div>
                )}

                <div className="reviews-cards h-full ">
                    <Carousel
                        className="h-full "
                        setApi={setApi}
                        opts={{
                            align: "start",
                        }}

                    >
                        <CarouselContent className="h-full ">
                            <CarouselItem className="h-full md:basis-1/2 lg:basis-2/5 flex">
                                <div className="w-full h-full">
                                    <Ratingscard />
                                </div>
                            </CarouselItem>
                            <CarouselItem className="h-full md:basis-1/2 lg:basis-2/5 flex">
                                <div className="w-full h-full">
                                    <Recommendationcard />
                                </div>
                            </CarouselItem>
                            <CarouselItem className="h-full md:basis-1/2 lg:basis-2/5 flex">
                                <div className="w-full h-full">
                                    <Recommendationcard />
                                </div>
                            </CarouselItem>
                            <CarouselItem className="h-full md:basis-1/2 lg:basis-2/5 flex">
                                <div className="w-full h-full">
                                    <Recommendationcard />
                                </div>
                            </CarouselItem>
                            <CarouselItem className="h-full md:basis-1/2 lg:basis-2/5 flex">
                                <div className="w-full h-full">
                                    <Recommendationcard />
                                </div>
                            </CarouselItem>
                            <CarouselItem className="h-full md:basis-1/2 lg:basis-2/5 flex">
                                <div className="w-full h-full">
                                    <Recommendationcard />
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Clientsreviews;
