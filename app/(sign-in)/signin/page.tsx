import React from 'react'
import SigninForm from './(components)/signin-form'
import CheckoutHeader from '@/app/(checkout)/(components)/checkout-header'
import Image from 'next/image'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='h-screen flex flex-col'>
      <CheckoutHeader />
      <div className='flex-1 flex  gap-20  items-center justify-center '>
        <div className='h-[500px] aspect-square relative rounded-lg overflow-hidden lg:block hidden shrink-0'>
<Image alt='parking' fill src={'/parking-signin.jpeg'}  className='object-cover'/>
        </div>
   
        <SigninForm />
        

      
      </div>
   
    </div>
  )
}

export default page