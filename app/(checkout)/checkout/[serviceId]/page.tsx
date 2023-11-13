import { ALL_SERVICES } from '@/links'
import { Service } from '@/types'
import axios from 'axios'
import React from 'react'
import BookingForm from './(components)/booking-form'
import { redirect } from 'next/navigation'

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
  const totalPrice = searchParams["totalPrice"] as string;

  const data = await axios.get(`${ALL_SERVICES}/${params.serviceId}`)
  const service = data.data as Service




  if (!startDate || !endDate || !startTime || !endTime || !service) return redirect("/");

  return (
    <div className='p-8 bg-gray-100 min-h-screen'>
    <h3>booking</h3>
    <BookingForm arrivalDate={startDate}  departureDate={endDate} arrivalTime={startTime} departureTime={endTime} totalPrice={totalPrice} title={service.title} />
    </div>
  )
}

export default page