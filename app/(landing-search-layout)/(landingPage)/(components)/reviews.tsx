import { ADD_REVIEW } from "@/links";
import { Review } from "@/schemas";
import axios from "axios";
import React from "react";
import ReviewsSlide from "./(search-form)/reviews-slide";
import queryString from "query-string";
import { unstable_noStore as noStore } from 'next/cache';

type FullReview = Review & {
  id: string;
firstName:string,lastName:string
  entity: { entityName: string,slug:string ,airport:{name:string,slug:string}};
  createdAt:Date,
  placeHolderDate:Date
};

const Reviews = async ({
  serviceId,
  entityId,
}: {
  serviceId?: string;
  entityId?: string;
}) => {
  const url = queryString.stringifyUrl({
    url: ADD_REVIEW,
    query: {
      serviceId,
      entityId,
    },
  });
  noStore();
  const res = await axios.get(url);
  const reviews = res.data.reviews as FullReview[];
  console.log(reviews);
  return (
    <div className="container py-12">
      <h3 className="text-center text-4xl font-semibold text-[#003580] ">
        Beoordeling
      </h3>
      <p className="text-sm text-gray-600 text-center">
        Wat zeggen de klanten over onze parkeeraanbieders
      </p>

   
        <ReviewsSlide reviews={reviews} />
     
    </div>
  );
};

export default Reviews;
