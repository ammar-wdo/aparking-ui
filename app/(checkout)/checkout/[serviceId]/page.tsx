import { ALL_SERVICES } from '@/links'

import axios from 'axios'
import React from 'react'
import BookingForm from './(components)/booking-form'
import { redirect } from 'next/navigation'
import { Service } from '@/schemas'
import queryString from 'query-string'
import { getFinalDates } from '@/lib/getTotalDate'

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
 
  if (!startDate || !endDate || !startTime || !endTime ) return redirect("/");

  const {adjustedStartDate,adjustedEndDate} = getFinalDates(startDate,endDate,startTime,endTime)

  if(adjustedStartDate.getTime()> adjustedEndDate.getTime())  return redirect("/");


  const url = queryString.stringifyUrl({
    url:`${ALL_SERVICES}/check/${params.serviceId}`,
    query:{
      startDate,endDate,startTime,endTime
    }
  })


  const data = await axios.get(url)
  const service = data.data.service as Service &{totalPrice:number ,extraOptions:{id:string,price:number,image:string,description:string,label:string}[]}

  if(!service) return redirect('/')








  return (
    <div className='md:p-8  bg-gray-100 min-h-screen'>
   
    <BookingForm extraOptions={service.extraOptions} arrivalDate={startDate}  departureDate={endDate} arrivalTime={startTime} departureTime={endTime} totalPrice={service.totalPrice} title={service.name} />
    </div>
  )
}

export default page