"use client";

import { Review } from "@/schemas";
import ReactStars from "react-stars";

import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { NLtimezone } from "@/lib/nl-timezone";
import { Swiper, SwiperSlide,} from 'swiper/react';
import { Navigation ,Pagination} from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slicer from "./slicer";

type FullReview = Review & {
  id: string;
 firstName:string,lastName:string
  entity: { entityName: string,slug:string,airport:{name:string,slug:string}};
  createdAt:Date
  placeHolderDate:Date
};
type Props = { reviews: FullReview[] };




const ReviewsSlide = ({ reviews }: Props) => {

    const [mount, setMount] = useState(false)
    useEffect(()=>{setMount(true)},[])

    if(!mount) return <Skeleton className=" mt-12 h-[300px]" />
  return (
    <Swiper
    modules={[Navigation,Pagination]}
   className='mt-8'
   style={{paddingInline:35}}
   spaceBetween={40}
     slidesPerView={1}
     navigation
     pagination={{clickable:true,dynamicBullets:true}}
     breakpoints={{
       700: {
         slidesPerView: 2, 
       },
       1200: {
         slidesPerView: 3, 
       },
    
      
     }}
   
  
   >

   
    
      {reviews.map((review) => {
        const showCase: { [key: string]: string } = {
          FULLNAME: `${review.firstName} ${review.lastName}`,
          FIRSTNAME: `${review.firstName}`,
          ANOUNYMOS: "Anonymous",
        };

        if(review.reviewContent==='') return null

        return (
          <SwiperSlide className="h-full" key={review.id}>
            <div className=" rounded-lg p-3 bg-white flex flex-col shadow-sm hover:shadow-md transition min-h-[300px]">
              <Link className="pb-2 border-b" href={`/${review.entity.airport.slug}/${review.entity.slug}`}>
              <h3 className="text-lg font-semibold text-site">
                {review.entity.entityName}
              </h3></Link>
              {review.reviewContent && (
               <Slicer content={review.reviewContent} />
              )}
              <div className=" mt-auto border-t pt-3 ">
              <div className="flex items-center gap-3 ">
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
              <p className="text-xs mt-1 text-neutral-500">{NLtimezone(new Date(review.placeHolderDate || review.createdAt),'Europe/Amsterdam')}</p>
              </div>
            
            </div>
          </SwiperSlide>
        );
      })}
  
      </Swiper>
  );
};

export default ReviewsSlide;
