"use client";

import { Review } from "@/schemas";
import ReactStars from "react-stars";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination ,Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

type FullReview = Review & {
  id: string;
  booking: { firstName: string; lastName: string };
  entity: { entityName: string,airport:{name:string}};
};
type Props = { reviews: FullReview[] };

const ReviewsSlide = ({ reviews }: Props) => {

    const [mount, setMount] = useState(false)
    useEffect(()=>{setMount(true)},[])

    if(!mount) return <Skeleton className=" mt-12 h-[300px]" />
  return (
    <Swiper
      className=" mt-12  "
     
      navigation
      spaceBetween={40}
      pagination={{ clickable: true }}
      modules={[Pagination, Navigation]}
      breakpoints={{
        100: {
          slidesPerView: 1,
         
        },
        600:{  slidesPerView: 1,
           },
        940: {
          slidesPerView: 2,
         
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
              <Link className="" href={`/${review.entity.airport.name}/${review.entity.entityName}`}>
              <h3 className="text-lg font-semibold text-site">
                {review.entity.entityName}
              </h3></Link>
              {review.reviewContent && (
                <p className="text-sm text-gray-600 mt-4 max-h-[125px] h-full overflow-y-auto leading-relaxed">
                  {review.reviewContent}
                </p>
              )}
              <div className="flex items-center gap-3 mt-auto">
                <ReactStars
                  value={review.rate}
                  edit={false}
                  size={14}
                  color2="#FEBA02"
                />
                <p className="font-semibold text-gray-600 text-sm">
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
