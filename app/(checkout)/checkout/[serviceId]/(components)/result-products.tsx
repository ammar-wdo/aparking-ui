import React from 'react'
import InfoComponent from './info-component'

type Props = {
    title:string,
    total:string | number,
    arrivalDate:Date,
    arrivalTime:string,
    departureDate:Date,
    departureTime:string
}

const ResultProducts = ({title,total,arrivalDate,arrivalTime,departureDate,departureTime}: Props) => {
  return (
    <div className='p-6 mt-4 space-y-7 border-y-2 border-zinc-200'>
        
          <div className='mt-5 flex items-center justify-between  capitalize text-2xl font-bold'>
<p>{title}</p>
<p>€ {total}</p>
          </div>
          <InfoComponent title='Entry date' value={`${arrivalDate.toLocaleDateString()} at ${arrivalTime}`} />
          <InfoComponent title='Exit date' value={`${departureDate.toLocaleDateString()} at ${departureTime}`} />

          

    </div>
  )
}

export default ResultProducts