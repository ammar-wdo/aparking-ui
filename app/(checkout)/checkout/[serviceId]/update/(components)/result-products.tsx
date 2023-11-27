'use client'

import React from 'react'
import InfoComponent from './info-component'


type Props = {
    title:string,
    total:  number,
    arrivalDate:Date,
    arrivalTime:string,
    departureDate:Date,
    departureTime:string
}

const ResultProducts = ({title,total,arrivalDate,arrivalTime,departureDate,departureTime}: Props) => {

  const arrival =new Date (arrivalDate).toLocaleDateString()
  const departure =new Date (departureDate).toLocaleDateString()
  return (
    <div className='p-6 mt-4 space-y-7 border-y-2 border-zinc-200'>
          <h3 className='text-xl font-light'>Products</h3>
          <div className='mt-5 flex items-center justify-between font-bold text-lg capitalize'>
<p>{title}</p>
<p>$ {total}</p>
          </div>
          <InfoComponent title='Entry date' value={`${arrival} at ${arrivalTime}`} />
          <InfoComponent title='Exit date' value={`${departure} at ${departureTime}`} />

          

    </div>
  )
}

export default ResultProducts