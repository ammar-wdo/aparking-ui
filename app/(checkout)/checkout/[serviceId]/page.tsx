import { ALL_SERVICES } from '@/links'

import axios from 'axios'
import React from 'react'
import BookingForm from './(components)/booking-form'
import { redirect } from 'next/navigation'
import { Service } from '@/schemas'
import queryString from 'query-string'

type Props = {
    params:{serviceId:string},
    searchParams:{[key:string]:string | string[] | undefined}
}

export const revalidate=0

const page = async({params,searchParams}: Props) => {

  const startDate = searchParams["startDate"] as string;
  const endDate = searchParams["endDate"] as string;
  const startTime = searchParams["startTime"] as string;
  const endTime = searchParams["endTime"] as string;
 



  const url = queryString.stringifyUrl({
    url:`${ALL_SERVICES}/check/${params.serviceId}`,
    query:{
      startDate,endDate,startTime,endTime
    }
  })


  const data = await axios.get(url)
  const service = data.data.service as Service &{totalPrice:string ,extraOptions:{id:string,price:number,image:string,description:string,label:string}[]}

  console.log("myService",data)




  if (!startDate || !endDate || !startTime || !endTime || !service || new Date(startDate).getTime() > new Date(endDate).getTime()) return redirect("/");

  return (
    <div className='md:p-8  bg-gray-100 min-h-screen'>
   
    <BookingForm extraOptions={service.extraOptions} arrivalDate={startDate}  departureDate={endDate} arrivalTime={startTime} departureTime={endTime} totalPrice={service.totalPrice} title={service.name} />
    </div>
  )
}

export default page