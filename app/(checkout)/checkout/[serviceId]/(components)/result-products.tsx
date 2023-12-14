import React from 'react'
import InfoComponent from './info-component'
import { format } from 'date-fns'

type Props = {
    title:string,
    total:string | number,
    arrivalDate:Date,
    arrivalTime:string,
    departureDate:Date,
    departureTime:string
}

const ResultProducts = ({title,total,arrivalDate,arrivalTime,departureDate,departureTime}: Props) => {

  const arrival = format(new Date(arrivalDate),'dd/MM/yyyy')
  const departure = format(new Date(departureDate),'dd/MM/yyyy')
  return (
    <div className=' mt-4 space-y-7 border-y-2 border-zinc-200 py-6'>
        
          <div className=' flex items-center justify-between  capitalize text-2xl font-bold'>
<p>{title}</p>
<p>€ {total}</p>
          </div>
          <InfoComponent title='Entry date' value={`${arrival} at ${arrivalTime}`} />
          <InfoComponent title='Exit date' value={`${departure} at ${departureTime}`} />

          

    </div>
  )
}

export default ResultProducts