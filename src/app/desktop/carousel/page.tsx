"use client";

import { IconButton } from "@/components/ui/icon-button";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function CarouselPage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-16 px-4">
      <Carousel />
    </main>
  );
}

type EmblaCarousel = NonNullable<UseEmblaCarouselType[1]>;

const Carousel = () => {
  const [canMovePrev, setCanMovePrev] = useState(false);
  const [canMoveNext, setCanMoveNext] = useState(false);

  const [carouselRef, carousel] = useEmblaCarousel();

  const scrollPrev = () => {
    if (carousel) carousel.scrollPrev();
  };

  const scrollNext = () => {
    if (carousel) carousel.scrollNext();
  };

  const onSelect = (carousel: EmblaCarousel) => {
    setCanMovePrev(carousel.canScrollPrev());
    setCanMoveNext(carousel.canScrollNext());
  };

  useEffect(() => {
    if (!carousel) return;

    onSelect(carousel);

    carousel.on("reInit", onSelect).on("select", onSelect);
  }, [carousel]);

  return (
    <div className="flex flex-col">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">합격 가능성이 높은 포지션</h3>
        <div className="flex justify-end">
          <IconButton
            className="rounded-r-none border-r-0"
            variant="outlined"
            aria-label="이전 슬라이드"
            onClick={scrollPrev}
            size="small"
            disabled={!canMovePrev}
          >
            <ChevronLeftIcon size={20} />
          </IconButton>
          <IconButton
            className="rounded-l-none"
            variant="outlined"
            aria-label="다음 슬라이드"
            onClick={scrollNext}
            size="small"
            disabled={!canMoveNext}
          >
            <ChevronRightIcon size={20} />
          </IconButton>
        </div>
      </div>
      <div className="overflow-hidden" ref={carouselRef}>
        <div className="-ml-5 flex">
          <CarouselSlide />
          <CarouselSlide />
          <CarouselSlide />
          <CarouselSlide />
          <CarouselSlide />
          <CarouselSlide />
          <CarouselSlide />
          <CarouselSlide />
          <CarouselSlide />
        </div>
      </div>
    </div>
  );
};

const CarouselSlide = () => {
  return (
    <div className="flex shrink-0 basis-1/3 flex-col border-x border-red-200 pl-5">
      <div className="flex h-[167.5px] w-full items-center justify-center rounded-2xl bg-gray-100" />
      <span className="mt-2 text-[15px] font-medium">웹(Web) 프론트엔드 개발자</span>
      <span className="text-subtle mt-1 text-[13px] font-medium">그릿스탠다드</span>
    </div>
  );
};
