"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import SwiperType from "swiper";

type TSwiperProps = {
  items: { src: string; card: React.ReactNode }[];
  paginationImages?: boolean;
  className?: string;
  slidesPerView?: number;
};
const SwiperCard = ({
  items,
  paginationImages,
  className,
  slidesPerView,
}: TSwiperProps) => {
  const [swiper, setSwiper] = useState<SwiperType | null>();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progTimer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 3.7));
    }, 110);
    return () => clearTimeout(progTimer);
  }, [progress]);

  useEffect(() => {
    swiper?.on("slideChange", () => {
      setProgress(0);
    });
  }, [swiper]);

  return (
    <div className="flex flex-col gap-4">
      <Swiper
        speed={1000}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={slidesPerView || 1}
        className={`w-full ${className || "h-96"}`}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {items.map(({ card }, index) => (
          <SwiperSlide key={index + 1}>{card}</SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-4">
        {paginationImages &&
          items.map(({ src }, index) => (
            <div
              onClick={() => {
                swiper?.slideTo(index);
                swiper?.autoplay.stop();
              }}
              key={index + 1}
              className={`${
                swiper?.realIndex === index &&
                " shadow-md  -translate-y-5 border-rose-500 border opacity-90"
              } cursor-pointer hover:-translate-y-5 z-10  hover:shadow-md hover:opacity-90 duration-200 rounded-xl overflow-hidden max-w-lg w-full h-40 relative`}
            >
              {swiper?.realIndex === index && (
                <div
                  style={{ width: `${progress}%` }}
                  className={`absolute w-0 h-full inset-0 bg-black z-10 opacity-40 duration-300`}
                ></div>
              )}
              {src && src !== "" ? (
                <Image
                  src={src}
                  fill
                  className="object-cover"
                  alt="Image Pagination"
                />
              ) : null}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SwiperCard;
