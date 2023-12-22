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

const Editor = dynamic(() => import('@/components/editor'), { ssr: false })

type Props = {params:{airportName:string}}

export const getAirport=cache(async(name:string)=>{
  const res = await axios(GET_AIRPORTS + `/${name}`)


  const airport = res.data.airport as Airport
  return airport
})

export async function generateMetadata(
  { params,  }: Props,

): Promise<Metadata> {


const airport = await getAirport(params.airportName)



 
  return {
    title: airport.name,
    
    openGraph: {
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
      <Banner airportName={airport.name} airportSlug={airport.slug}></Banner>
      
      <div className='container mt-10 min-h-[600px]'>
      <p className='text-neutral-500 flex items-center gap-1 md:gap-4  text-xs md:text-base flex-wrap '> <Link href={'/'}>Home</Link>   &gt; <span className='capitalize text-black'>{airport.name}</span> </p>
      <div className='mt-12'>   <Editor initialContent={airport.content}  /></div>
   
   
      </div>
      <EntitiesFeed airportName={airport.name} airportSlug={airport.slug} airportId={airport.id} />
    </div>
  )
}

export default page