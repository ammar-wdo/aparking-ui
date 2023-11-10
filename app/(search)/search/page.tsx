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
import React from 'react'

type Props = {
  searchParams:{[key:string]:string | string[]  | undefined}
}

const page = async({searchParams}: Props) => {

    const services = await axios.get(ALL_SERVICES)
    const data = services.data as Service[]

const startDate = searchParams['startDate'] as string 
const endDate = searchParams['endDate'] as string 
const startTime = searchParams['startTime'] as string 
const endTime = searchParams['endTime'] as string 



  return (
    <div className='bg-gray-200'>
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



      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-10 p-10 relative z-10'>
      {!data.length && <p>no data</p>}

{data?.map((service)=><div key={service.id} className='p-3 border rounded-md flex flex-col gap-5'>
    <p>{service.address}</p>
    <p>{service.title}</p>
    <p>{service.city}</p>
    <p>{service.description}</p>
    <div className='w-full aspect-video relative'>
        <Image src={service.logo} alt='logo' fill className='object-cover'/>
    </div>

    <Link className={cn(!service.available && 'cursor-not-allowed')} href={service.available ? `/book/${service.id}` : ''}><Button disabled={!service.available}>complete reservation</Button></Link>
</div>)}

    </div>
      </div>
    
    </div>
  )
}

export default page