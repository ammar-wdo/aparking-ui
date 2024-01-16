import React from 'react'
import InfoComponent from './info-component'
import { format } from 'date-fns'

type Props = {
    title:string,
    total: number,
    arrivalDate:Date,
    arrivalTime:string,
    departureDate:Date,
    departureTime:string
}

const ResultProducts = ({title,total,arrivalDate,arrivalTime,departureDate,departureTime}: Props) => {

  const arrival = format(new Date(arrivalDate),'dd/MM/yyyy')
  const departure = format(new Date(departureDate),'dd/MM/yyyy')
  return (
    <div className=' mt-4 space-y-7 border-b py-6'>
        
        <div className='flex justify-between items-center'>
        <p className='capitalize  font-bold'>{title}</p>
        <p className='font-bold'>€{total.toFixed(2).replace('.',',')}</p>
        </div>


        
          <InfoComponent title='Aankomst datum' value={`${arrival} om ${arrivalTime}`} />
          <InfoComponent title='Vertrek datum' value={`${departure} om ${departureTime}`} />
         

          

    </div>
  )
}

export default ResultProducts