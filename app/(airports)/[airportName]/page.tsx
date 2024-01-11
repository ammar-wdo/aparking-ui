import React, { cache } from 'react'
import Banner from '../../(landing-search-layout)/(landingPage)/(components)/banner'
import axios from 'axios'
import { GET_AIRPORTS } from '@/links'
import { Airport } from '@/schemas'
import { notFound, redirect } from 'next/navigation'
import dynamic from "next/dynamic";
import EntitiesFeed from './(components)/entities-feed'
import Link from 'next/link'
import { Metadata } from 'next'
import { getAirport } from '@/lib/getters'
import Header from '@/components/header'
import Navigator from '@/components/navigator'

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
      <Header />
      <Banner airportName={airport?.name} airportSlug={airport?.slug}></Banner>
      
      <div className='container mt-10 min-h-[600px]'>
        <Navigator airport={{name:airport.name,href:airport.slug}} />
   
      <div className='mt-12'>   <Editor initialContent={airport.content}  /></div>
   
   
      </div>
      <EntitiesFeed airportName={airport?.name} airportSlug={airport?.slug} airportId={airport?.id} />
    </div>
  )
}

export default page