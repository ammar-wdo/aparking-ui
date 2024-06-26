import React from 'react'
import SigninForm from './(components)/signin-form'
import CheckoutHeader from '@/app/(checkout)/(components)/checkout-header'
import Image from 'next/image'
import { Metadata } from 'next'

type Props = {}



export const metadata: Metadata = {
  title: "Mijn reservering | Aparking",
  description:
    "login om uw reserveringsinformatie te bekijken. ",
  openGraph: {
    title: "Mijn reservering | Aparking",
    description:
      "login om uw reserveringsinformatie te bekijken. ",
  },
};

const page = async(props: Props) => {

  return (
    <div className='h-screen flex flex-col'>
      <CheckoutHeader />
      <div className='flex-1 flex  gap-20  sm:items-center justify-center '>
        <div className='h-[500px] aspect-square relative rounded-lg overflow-hidden lg:block hidden shrink-0'>
<Image alt='parking' fill src={'/parking-signin.jpeg'}  className='object-cover'/>
        </div>
   
        <SigninForm />
        

      
      </div>
   
    </div>
  )
}

export default page