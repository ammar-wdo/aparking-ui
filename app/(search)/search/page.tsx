import SearchForm from '@/app/(landingPage)/(components)/(search-form)/search-form'
import Header from '@/app/(landingPage)/(components)/header'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ALL_SERVICES } from '@/links'
import { Service } from '@/types'
import axios from 'axios'
import format from 'date-fns/format'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'
import qs from 'query-string'

type Props = {
  searchParams:{[key:string]:string | string[]  | undefined}
}

const page = async({searchParams}: Props) => {

  const startDate = searchParams['startDate'] as string 
const endDate = searchParams['endDate'] as string 
const startTime = searchParams['startTime'] as string 
const endTime = searchParams['endTime'] as string 

if(!startDate || !endDate || !startTime|| !endTime) return redirect('/')

const url = qs.stringifyUrl({
  url:ALL_SERVICES,
  query:{
    startDate,endDate,startTime,endTime
  }
})

    const services = await axios.get(url)
    const data = services.data as Service[]





  return (
    <div className='bg-gray-200 pb-10 min-h-screen'>
      <div className='min-h-[300px] bg-indigo-500'>
        <div className='container'>
          <Header />

          <div>
          <p className='text-white'>{`From ${format(new Date(startDate),"MMMM d, yyyy")} at ${startTime} to ${format(new Date(endDate),'MMMM d,y')} at ${endTime}`}</p>
          </div>


        </div>

      </div>

      <div className='container'>

        <SearchForm startDateProp={new Date(startDate)} endDateProp={new Date(endDate)} startTimeProp={startTime} endTimeProp={endTime} />



      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-10 mt-20 relative z-10'>
      {!data.length && <p>no data</p>}

{data?.map((service)=><div key={service.id} className='p-5 bg-white  rounded-md flex flex-col gap-5'>
    <p>{service.title}</p>
   
    <p>{service.city}</p>
    <p>{service.description}</p>
    <p>${service.totalPrice}</p>
    
<div className='flex items-center gap-3 mt-auto'>

<Link className={cn("w-1/2",!service.available && 'cursor-not-allowed')} href={service.available ? `/book/${service.id}` : ''}><button className={cn('w-full rounded-xl bg-indigo-500 hover:bg-indigo-500/90  transition text-sm flex-shrink-0  py-2 text-white px-3')} disabled={!service.available}>Details</button></Link>
<Link className={cn("w-1/2",!service.available && 'cursor-not-allowed')} href={service.available ? `/book/${service.id}` : ''}><button className={('w-full rounded-xl bg-orange-600 py-2 text-white transition hover:bg-orange-600/90 text-sm flex-shrink-0 px-3')} disabled={!service.available}>Book Now</button></Link>
</div>
    
</div>)}

    </div>
      </div>
    
    </div>
  )
}

export default page