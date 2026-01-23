import { useState, useCallback, useMemo } from "react";
import type { CarouselApi } from "@/ui/carousel";

export type PatrolDirection = "next" | "prev";

export const useMoveCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);

  const [carouselDirection, setCarouselDirection] =
    useState<PatrolDirection>("next");

  const [cursorSide, setCursorSide] = useState<'next' | 'prev'>('next');

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;

    const canNext = api.canScrollNext();
    const canPrev = api.canScrollPrev();

    setCanScrollNext(canNext);
    setCanScrollPrev(canPrev);

    setCarouselDirection((prevDirection) => {
      if (prevDirection === "next" && !canNext) {
        return "prev";
      }
      if (prevDirection === "prev" && !canPrev) {
        return "next";
      }
      return prevDirection;
    });
  }, []);

  const carouselScroll = useCallback(() => {
    if (!api) return;

    if (carouselDirection === "next") {
      api.scrollNext();
    } else {
      api.scrollPrev();
    }
  }, [api, carouselDirection]);

  const handleSetApi = useCallback(
    (api: CarouselApi) => {
      if (!api) return;
      setApi(api);
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
    },
    [onSelect]
  );

  const canScroll = useMemo(
    () => canScrollNext || canScrollPrev,
    [canScrollNext, canScrollPrev]
  );

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    setCursorSide(x > width / 2 ? 'next' : 'prev');
  }, []);

  const effectiveDirection = !canScrollPrev ? 'next' : (!canScrollNext ? 'prev' : cursorSide);

  const handleCursorClick = useCallback(() => {
    if (effectiveDirection === 'next') {
      scrollNext();
    } else {
      scrollPrev();
    }
  }, [effectiveDirection, scrollNext, scrollPrev]);

  return {
    setApi: handleSetApi,
    carouselScroll,
    scrollNext,
    scrollPrev,
    carouselDirection,
    canScroll,
    canScrollNext,
    canScrollPrev,
    handleMouseMove,
    effectiveDirection,
    handleCursorClick,
  };
};
