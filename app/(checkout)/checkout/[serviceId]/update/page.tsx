import { ALL_SERVICES } from '@/links'

import axios from 'axios'
import { redirect } from 'next/navigation'

import React from 'react'
import EditBookingForm from './(components)/edit-form'
import { Rule, Service } from '@/schemas'

type Props = {params:{serviceId:string}}

export const revalidate = 0

const page = async({params}: Props) => {


    const data = await axios.get(`${ALL_SERVICES}/${params.serviceId}`)
  const service = data.data as Service & {rules:Rule[],availability:any[],bookings:any[]}
  if(!service) redirect('/')

if(!service) return redirect('/')
  return (
    <div className='p-8 bg-gray-100 min-h-screen'>
   
    <EditBookingForm  service={service} />
    </div>
  )
}

export default page