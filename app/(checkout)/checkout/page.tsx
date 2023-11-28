import { GET_BOOKING } from '@/links'
import { Booking } from '@/schemas'

import axios from 'axios'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    searchParams:{[key:string]:string | string[] | undefined}
}



const page = async({searchParams}: Props) => {


  if(!searchParams.success) return redirect('/')

const res = await axios.get(GET_BOOKING + `?bookingId=${searchParams.success}`)
const booking = res.data.booking  as Booking &{bookingCode:string}
if(!booking) return redirect('/')


 return <div className='p-12 '>

  <p className='font-semibold'>Thank you for your payment </p>

  <div className='mt-4 flex items-center gap-5'>
    <p className='font-semibold'> Email address</p>
    <p>{booking.email}</p>
  </div>
  <div className='mt-3 flex items-center gap-5'>
    <p className='font-semibold'> Booking code</p>
    <p>{booking.bookingCode}</p>
  </div>
  <div className='mt-3 flex items-center gap-5'>
    <p className='font-semibold'> Total</p>
    <p>${booking.total}</p>
  </div>

  <p className='mt-4 text-xs'>You can use your email and booking code to signin and change your information</p>

    
</div>


}

export default page