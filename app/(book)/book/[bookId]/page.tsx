import { ALL_SERVICES } from '@/links'
import { Service } from '@/types'
import axios from 'axios'
import React from 'react'
import BookingForm from './(components)/bokking-form'

type Props = {
    params:{bookId:string}
}

export const revalidate=0

const page = async({params}: Props) => {

const service = await axios.get(`${ALL_SERVICES}/${params.bookId}`)
const data = service.data as Service

  return (
    <div className='p-8'>
    <h3>booking</h3>
    <BookingForm service={data} />
    </div>
  )
}

export default page