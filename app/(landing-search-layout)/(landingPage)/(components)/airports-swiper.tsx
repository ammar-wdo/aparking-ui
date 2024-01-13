"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Airport } from "@/schemas";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  airports: Airport[];
};

const AirportsSwiper = ({ airports }: Props) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount)
    return (
      <div className="max-w-[1500px] mx-auto mt-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 p-4">
        {Array(4)
          .fill("")
          .map((_el, i) => (
            <Skeleton
              key={i}
              className="rounded-md overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative aspect-video  "></div>
              <div className="bg-white p-4">
                <Skeleton />
                <Skeleton className="p-2" />
                <Skeleton className="p-2 mt-3" />
              </div>
            </Skeleton>
          ))}
      </div>
    );
  return (
    <Swiper
      style={{ paddingInline: 0 }}
      modules={[Navigation]}
      className="h-[300px] p-0 w-full"
      spaceBetween={20}
      slidesPerView={4}
      navigation
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      }}
    >
      {airports.map((airport) => (
        <SwiperSlide key={airport.id} className="w-[300px]">
          <Link key={airport.id} href={`/${airport.slug}`}>
            <div className="rounded-md overflow-hidden shadow-sm hover:shadow-md transition flex flex-col h-full">
              <div className="relative aspect-video  ">
                <Image
                  fill
                  src={airport.images[0]}
                  alt="airport-image"
                  className="object-cover   "
                />
              </div>
              <div className="bg-white p-4 flex-1">
                <h3 className="text-center text-[#003580] text-lg font-semibold">
                  {airport.name}
                </h3>
                <p className="text-xs text-gray-600 text-center pt-3">
                  vanaf € 32,00 per week
                </p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AirportsSwiper;
