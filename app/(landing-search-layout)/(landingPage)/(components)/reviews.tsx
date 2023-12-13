import { ADD_REVIEW } from '@/links'
import { Review } from '@/schemas'
import axios from 'axios'
import React from 'react'
import ReviewsSlide from './(search-form)/reviews-slide'
import queryString from 'query-string'

type FullReview =Review &{id:string,booking:{firstName:string,lastName:string},entity:{entityName:string}} 

const Reviews = async({serviceId,entityId}:{serviceId?:string,entityId?:string}) => {

  const url = queryString.stringifyUrl({
    url:ADD_REVIEW ,
    query:{
      serviceId,entityId
    }
  })

const res = await axios.get(url)
const reviews = res.data.reviews as FullReview[]
console.log(reviews)
  return (
    <div className='container py-12'>
           <h3 className='text-center text-4xl font-semibold text-[#003580] '>Reviews</h3>
           <p className='text-sm text-gray-500 text-center'>What do people say about our parking partners?</p>

{!reviews.length && <h3 className='py-10 text-xl text-neutral-500 text-center font-bold'>No reviews</h3>}
           <ReviewsSlide reviews={reviews} />



    </div>
  )
}

export default Reviews