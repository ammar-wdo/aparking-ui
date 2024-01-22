'use client'

import { Button } from '@/components/ui/button'
import { Service } from '@/schemas'
import Link from 'next/link'
import qs from 'query-string'
import React, { useEffect, useRef } from 'react'

type Props = {
    response:string | undefined
    service:Service & {totalPrice:string,startDate:string,endDate:string,startTime:string,endTime:string,parkingDays:string}
}

const AvailableServiceCard = ({response,service}: Props) => {


    const cardRef = useRef<HTMLDivElement | null>(null)

    useEffect(()=>{

        cardRef.current?.scrollIntoView({behavior:'smooth',block:'center'})
    },[response,service])


let url = ''
    if(service){
         url = qs.stringifyUrl({
            url:`/checkout/${service?.id}`,
            query:{
                startDate:service.startDate,
                endDate:service.endDate,
                startTime:service.startTime,
                endTime:service.endTime,
                totalPrice:service.totalPrice
            }
        })
    }
 

    if(!response && !service ) return null
  return (
    <div  ref={cardRef} className='  '>
        {response && <div className='w-full grid grid-cols-1 lg:grid-cols-3 items-center gap-4 border-b-2 border-b-yellow-500 border rounded-[2px] bg-gray-50 grayscale-[10] opacity-70'>
            <h3 className='p-6 text-neutral-500 font-semibold lg:col-span-3'>
            Deze dienst is niet beschikbaar voor deze datumbereik.
                </h3></div>}
        {service &&  <div className='w-full grid grid-cols-1 lg:grid-cols-3 border-b-2 border-b-yellow-500 border rounded-[2px]'>
            <h3 className='font-bold text-lg self-center capitalize text-center lg:text-start p-3'>{service.name}</h3>
            <div className='text-center gap-2 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 items-center bg-gray-50 p-3 border-t lg:border-t-0 lg:border-l'> 
            <div >
            <p className='text-sm text-neutral-500'>price for {service.parkingDays} day(s)</p>
                <p className='text-xl font-bold'>€{service.totalPrice}</p>
                </div>
               
                <div>
                <Button asChild variant={'siteTwo'} className='w-full'><Link href={url}>Book now</Link></Button>
                </div>
            </div>

           
            
            </div>}
    </div>
  )
}

export default AvailableServiceCard