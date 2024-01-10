import React, { cache } from 'react'
import Banner from '../../(landingPage)/(components)/banner'
import axios from 'axios'
import { GET_AIRPORTS } from '@/links'
import { Airport } from '@/schemas'
import { notFound, redirect } from 'next/navigation'
import dynamic from "next/dynamic";
import EntitiesFeed from './(components)/entities-feed'
import Link from 'next/link'
import { Metadata } from 'next'
import { getAirport } from '@/lib/getters'

const Editor = dynamic(() => import('@/components/editor'), { ssr: false })

type Props = {params:{airportName:string}}


export async function generateMetadata(
  { params,  }: Props,

): Promise<Metadata> {


const airport = await getAirport(params.airportName)

if(!airport) return {
  title:'Not found',
  description:'This slug does not exist'
}



 
  return {
    title:`Compare Airport Parking Options - ${airport.name} | Aparking"` ,
    description:`Find and compare the best airport parking options at ${airport.name}. Save time and money by booking secure and affordable parking with Aparking. Reserve your spot now!`,
    
    openGraph: {
      title:`Compare Airport Parking Options - ${airport.name} | Aparking"` ,
    description:`Find and compare the best airport parking options at ${airport.name}. Save time and money by booking secure and affordable parking with Aparking. Reserve your spot now!`,
      images: [...airport.images],
    },
  }
}

const page = async({params}: Props) => {



const airport = await getAirport(params.airportName)


console.log(airport)
if(!airport) return   notFound()
  

  return (
    <div>
      <Banner airportName={airport?.name} airportSlug={airport?.slug}></Banner>
      
      <div className='container mt-10 min-h-[600px]'>
      <p className='text-neutral-500 flex items-center gap-1 md:gap-4  text-xs md:text-base flex-wrap '> <Link href={'/'}>Home</Link>   &gt; <span className='capitalize text-black'>{airport.name}</span> </p>
      <div className='mt-12'>   <Editor initialContent={airport.content}  /></div>
   
   
      </div>
      <EntitiesFeed airportName={airport?.name} airportSlug={airport?.slug} airportId={airport?.id} />
    </div>
  )
}

export default page