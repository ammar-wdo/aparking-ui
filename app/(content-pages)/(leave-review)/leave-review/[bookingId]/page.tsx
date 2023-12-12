import React from 'react'
import ReviewForm from './(components)/review-form'
import axios from 'axios'
import queryString from 'query-string'
import { GET_BOOKING } from '@/links'
import { redirect } from 'next/navigation'

type Props = {params:{bookingId:string}}

const page =async({params}: Props) => {

  const url = queryString.stringifyUrl({
    url:GET_BOOKING,
    query:{
      bookingId:params.bookingId,
      review:'true'
    }
  })
const res = await axios(url)


console.log("review",res.data)

if(res.data.booking===null) return redirect('/')

  return (
    <div className='min-h-[70vh] flex py-10 justify-center items-center'>
      <ReviewForm booking={res.data.booking} />
    </div>
  )
}

export default page