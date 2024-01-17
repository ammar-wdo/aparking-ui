'use client'

import React from 'react'
import InfoComponent from './info-component'
import { format } from 'date-fns'


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

  const arrival = arrivalDate? format(new Date(arrivalDate),'dd/MM/yyyy') : ''
  const departure = departureDate ? format(new Date(departureDate),'dd/MM/yyyy') : ''
  const newArrival = newArrivalDate ? format(new Date(newArrivalDate),'dd/MM/yyyy') : ''
  const newDeparture = newDepartureDate ? format(new Date(newDepartureDate),'dd/MM/yyyy') : ''
 

  
  return (
    <div className=' mt-4 space-y-7 border-y pb-4'>
    
          <div className='mt-5 flex items-center justify-between font-bold text-xl capitalize'>
<p>{title}</p>
<p>€ {total.toFixed(2).replace('.',',')}</p>
          </div>
          <div className='space-y-4'>
            <div className='flex w-full items-center justify-between gap-4'>
            <InfoComponent title='Aankomst Datum' value={`${arrival} om ${arrivalTime}`} />
          <InfoComponent title='New Aankomst Datum' value={`${newArrival} om ${newArrivalTime}`} />
            </div>
            <div className='flex w-full items-center justify-between gap-4'>
                 
          <InfoComponent title='Vertrek Datum' value={`${departure} om ${departureTime}`} />
          <InfoComponent title='New Vertrek Datum' value={`${newDeparture} om ${newDepartureTime}`} />
            </div>
     
          </div>
       

          

    </div>
  )
}

export default ResultProducts