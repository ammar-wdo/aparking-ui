"use client";

import { Review } from "@/schemas";
import ReactStars from "react-stars";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

type FullReview = Review & {
  id: string;
  booking: { firstName: string; lastName: string };
  entity: { entityName: string };
};
type Props = { reviews: FullReview[] };

const ReviewsSlide = ({ reviews }: Props) => {

    const [mount, setMount] = useState(false)
    useEffect(()=>{setMount(true)},[])

    if(!mount) return <Skeleton className=" mt-12 h-[300px]" />
  return (
    <Swiper
      className=" mt-12 h-[300px] "
      spaceBetween={12}
      slidesPerView={3}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      breakpoints={{
        100: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        600:{  slidesPerView: 2,
            spaceBetween: 20,},
        940: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1100: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
      {reviews.map((review) => {
        const showCase: { [key: string]: string } = {
          FULLNAME: `${review.booking.firstName} ${review.booking.lastName}`,
          FIRSTNAME: `${review.booking.firstName}`,
          ANOUNYMOS: "Anonymous",
        };

        if(review.reviewContent==='') return null

        return (
          <SwiperSlide className="" key={review.id}>
            <div className=" rounded-lg p-6 bg-white flex flex-col h-full">
              <h3 className="text-lg font-semibold text-site">
                {review.entity.entityName}
              </h3>
              {review.reviewContent && (
                <p className="text-sm text-neutral-400 mt-4 line-clamp-5 leading-relaxed">
                  {review.reviewContent}
                </p>
              )}
              <div className="flex items-center gap-3 mt-auto">
                <ReactStars
                  value={review.rate}
                  edit={false}
                  size={14}
                  color2="#003580"
                />
                <p className="font-semibold text-neutral-600 text-sm">
                  {showCase[review.visibility]}
                </p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ReviewsSlide;
