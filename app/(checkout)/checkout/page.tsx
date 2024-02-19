import { GET_BOOKING } from '@/links'
import { Booking } from '@/schemas'

import axios from 'axios'
import { redirect } from 'next/navigation'
import React from 'react'
import ResetUser from './reset-user'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type Props = {
    searchParams:{[key:string]:string | string[] | undefined}
}



const page = async({searchParams}: Props) => {


  if(!searchParams.success) return redirect('/')

const res = await axios.get(GET_BOOKING + `?bookingId=${searchParams.success}`)
const booking = res.data.booking  as Booking &{bookingCode:string}
if(!booking) return redirect('/')


 return <div className='p-12 h-screen flex items-center justify-center text-center bg-[#F3F3F3]'>
  <div className=''>
  <p className=''>Bedankt voor uw reservering.</p>
  <div className='relative w-40 aspect-square mx-auto'>
    <Image src={'/success.gif'} alt='success' fill className='object-cover'  />
  </div>


<div className='mt-2 flex items-center gap-5 justify-center'>
  <p className='font-semibold text-3xl'>Reservering  <span className=' text-[#003580]'>{booking.bookingCode}</span> bevestigd.</p>
 
</div>
<p className='text-sm py-4 text-neutral-500'>U ontvangt een e-mail met alle informatie die u nodig heeft.</p>
<Button asChild variant={'siteTwo'}><Link replace href={'/'}>Home page</Link></Button>



  </div>

 
    
</div>


}

export default page