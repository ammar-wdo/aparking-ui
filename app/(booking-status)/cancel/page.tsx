import CheckoutHeader from '@/app/(checkout)/(components)/checkout-header'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

type Props = {
    params:{bookingId:string}
}

const page = ({params}: Props) => {

  return (
    <>
    <CheckoutHeader />
    <div className='h-screen flex items-center justify-center bg-[#F3F3F3]'>
      <div className='text-center'>
        <p className='text-xl font-semibold'>Your booking has been cancelled succefully</p>
        <p className='text-sm text-neutral-500'>You faced a problem? <Link href={'/contact-us'} className='text-blue-500'>Contact Us</Link ></p>
        <Button asChild variant={'siteTwo'} className='mt-3'><Link href={'/'}>Home page</Link></Button>
      </div>
    </div>
    </>
  )
}

export default page