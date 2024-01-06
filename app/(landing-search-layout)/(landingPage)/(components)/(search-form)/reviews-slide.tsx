"use client";

import { Review } from "@/schemas";
import ReactStars from "react-stars";

import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { NLtimezone } from "@/lib/nl-timezone";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Slicer from "./slicer";

type FullReview = Review & {
  id: string;
  booking: { firstName: string; lastName: string };
  entity: { entityName: string,slug:string,airport:{name:string,slug:string}};
  createdAt:Date
};
type Props = { reviews: FullReview[] };

const ReviewsSlide = ({ reviews }: Props) => {


    const [mount, setMount] = useState(false)
    useEffect(()=>{setMount(true)},[])

    if(!mount) return <Skeleton className=" mt-12 h-[300px]" />
  return (
   <Carousel className="mt-8">
    <CarouselContent>
      {reviews.map((review) => {
        const showCase: { [key: string]: string } = {
          FULLNAME: `${review.booking.firstName} ${review.booking.lastName}`,
          FIRSTNAME: `${review.booking.firstName}`,
          ANOUNYMOS: "Anonymous",
        };

        if(review.reviewContent==='') return null

        return (
          <CarouselItem className="lg:basis-1/3 md:basis-1/2 " key={review.id}>
            <div className=" rounded-lg p-3 bg-white flex flex-col h-fit">
              <Link className="" href={`/${review.entity.airport.slug}/${review.entity.slug}`}>
              <h3 className="text-lg font-semibold text-site">
                {review.entity.entityName}
              </h3></Link>
              {review.reviewContent && (<Slicer content={review.reviewContent} />
               
              )}
              <div className=" mt-6 ">
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
              <p className="text-xs mt-1 text-neutral-500">{NLtimezone(new Date(review.createdAt),'Europe/Amsterdam')}</p>
              </div>
            
            </div>
          </CarouselItem>
        );
      })}
      </CarouselContent>
   
      </Carousel>
  );
};

export default ReviewsSlide;
