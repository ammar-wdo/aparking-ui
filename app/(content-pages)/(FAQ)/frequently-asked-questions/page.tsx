import Link from 'next/link'
import React from 'react'
import FaqFeed from './(components)/faq-feed'
import FaqCatFeed from './(components)/faq-cat-feet'
import { Metadata } from 'next'

type Props = {searchParams:{[ket:string]:string | string [] | undefined}}




export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Aparking Airport Parking Services',
  description: `Find answers to commonly asked questions about Aparking's airport parking services. Get information about booking, payment, cancellations, and more to make your parking experience hassle-free.`,
  openGraph:{
    title:'Frequently Asked Questions - Aparking Airport Parking Services',
    description:`Find answers to commonly asked questions about Aparking's airport parking services. Get information about booking, payment, cancellations, and more to make your parking experience hassle-free.`,
  
  }
  
}

export const revalidate = 0


const page = async({searchParams}: Props) => {


  return (
    <div className="min-h-[900px]">
           <div className="container">

           <p className="text-neutral-500 flex items-center gap-1 md:gap-4  text-xs md:text-base flex-wrap my-8">
          {" "}
          <Link href={"/"}>Home</Link> &gt;{" "}
          <span className="capitalize text-black">FAQ</span>{" "}
        </p>

        <h3 className="text-site text-3xl font-bold">FAQ</h3>

        <FaqCatFeed searchParams={searchParams} />
        <FaqFeed  searchParams={searchParams}/>

           </div>
    </div>
  )
}

export default page