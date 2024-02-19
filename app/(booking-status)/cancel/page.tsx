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
        <p className='text-xl font-semibold'>Uw reservering is succesvol geannuleerd.</p>
        <p className='text-sm text-neutral-500'>Er is een probleem opgetreden.? <Link href={'/contact-us'} className='text-blue-500'>Neem contact met ons op.</Link ></p>
        <Button asChild variant={'siteTwo'} className='mt-3'><Link href={'/'}>Home pagina</Link></Button>
      </div>
    </div>
    </>
  )
}

export default page