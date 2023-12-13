import React from 'react'
import Banner from '../../(landingPage)/(components)/banner'
import axios from 'axios'
import { GET_AIRPORTS } from '@/links'
import { Airport } from '@/schemas'
import { redirect } from 'next/navigation'
import dynamic from "next/dynamic";
import EntitiesFeed from './(components)/entities-feed'
import Link from 'next/link'

const Editor = dynamic(() => import('@/components/editor'), { ssr: false })

type Props = {params:{airportName:string}}

const page = async({params}: Props) => {

const res = await axios(GET_AIRPORTS + `/${params.airportName}`)

const airport = res.data.airport as Airport

if(!airport) return redirect('/')
  


  return (
    <div>
      <Banner airportName={airport.name} airportId={airport.id}></Banner>
      
      <div className='container mt-10 min-h-[600px]'>
      <p className='text-neutral-500 flex items-center gap-1 md:gap-4  text-xs md:text-base flex-wrap '> <Link href={'/'}>Home</Link>   &gt; <span className='capitalize text-black'>{airport.name}</span> </p>
      <div className='mt-12'>   <Editor initialContent={airport.content}  /></div>
   
   
      </div>
      <EntitiesFeed airportName={airport.name} airportId={airport.id} />
    </div>
  )
}

export default page