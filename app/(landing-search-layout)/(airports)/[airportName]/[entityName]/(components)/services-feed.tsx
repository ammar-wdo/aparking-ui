import ListCard from '@/app/(landing-search-layout)/(search)/search/(components)/list-card'
import { GET_SERVICES } from '@/links'
import { Service } from '@/schemas'
import axios from 'axios'
import React from 'react'

type Props = {
    entityId:string,
 
}

const ServciesFeed = async({entityId}: Props) => {

    
  const res = await axios(GET_SERVICES + `/${entityId}`)
  const services = res.data.services 
  return (
    <div className='p-3 bg-gray-100 py-10'>
      {!services.length && <p className='py-6 text-3xl font-bold text-neutral-400 text-center'>No parking services</p>}
      <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
{services.map((service :Service &{parkingDays?:number,totalPrice?:number,entity:{entityName:string,airport:{name:string}}})=><ListCard key={service.id} show service={service} />)}
      </div>
    </div>
  )
}

export default ServciesFeed