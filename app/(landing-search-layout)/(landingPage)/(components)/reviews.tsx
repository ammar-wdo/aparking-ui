import { ADD_REVIEW } from '@/links'
import { Review } from '@/schemas'
import axios from 'axios'
import React from 'react'
import ReviewsSlide from './(search-form)/reviews-slide'

type FullReview =Review &{id:string,booking:{firstName:string,lastName:string},entity:{entityName:string}} 

const Reviews = async() => {

const res = await axios.get(ADD_REVIEW)
const reviews = res.data.reviews as FullReview[]
console.log(reviews)
  return (
    <div className='container py-12'>
           <h3 className='text-center text-4xl font-semibold text-[#003580] '>Reviews</h3>
           <p className='text-sm text-gray-500 text-center'>What do people say about our parking partners?</p>


           <ReviewsSlide reviews={reviews} />



    </div>
  )
}

export default Reviews