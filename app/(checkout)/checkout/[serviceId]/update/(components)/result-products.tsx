'use client'

import React from 'react'
import InfoComponent from './info-component'


type Props = {
    title:string,
    total:  number,
    arrivalDate:Date,
    arrivalTime:string,
    departureDate:Date,
    departureTime:string,
    newArrivalDate:Date,
    newDepartureDate:Date,
    newArrivalTime:string,
    newDepartureTime:string

}

const ResultProducts = ({title,total,arrivalDate,arrivalTime,departureDate,departureTime,newArrivalDate,newArrivalTime,newDepartureDate,newDepartureTime}: Props) => {

  const arrival =new Date (arrivalDate).toLocaleDateString()
  const departure =new Date (departureDate).toLocaleDateString()
  const newArrival =new Date (newArrivalDate).toLocaleDateString()
  const newDeparture =new Date (newDepartureDate).toLocaleDateString()

  
  return (
    <div className=' mt-4 space-y-7 border-y-2 border-zinc-200'>
    
          <div className='mt-5 flex items-center justify-between font-bold text-xl capitalize'>
<p>{title}</p>
<p>€ {total}</p>
          </div>
          <div className='space-y-4'>
            <div className='flex w-full items-center justify-between gap-4'>
            <InfoComponent title='Entry date' value={`${arrival} at ${arrivalTime}`} />
          <InfoComponent title='New entry date' value={`${newArrival} at ${newArrivalTime}`} />
            </div>
            <div className='flex w-full items-center justify-between gap-4'>
                 
          <InfoComponent title='Exit date' value={`${departure} at ${departureTime}`} />
          <InfoComponent title='New exit date' value={`${newDeparture} at ${newDepartureTime}`} />
            </div>
     
          </div>
       

          

    </div>
  )
}

export default ResultProducts