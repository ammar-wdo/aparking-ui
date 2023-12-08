import React from 'react'
import Banner from '../../(landingPage)/(components)/banner'
import axios from 'axios'
import { GET_AIRPORTS } from '@/links'
import { Airport } from '@/schemas'
import { redirect } from 'next/navigation'
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../../../../components/editor"), { ssr: false })

type Props = {params:{airportName:string}}

const page = async({params}: Props) => {

const res = await axios(GET_AIRPORTS + `/${params.airportName}`)

const airport = res.data.airport as Airport

if(!airport) return redirect('/')

  return (
    <div>
      <Banner airportName={airport.name} airportId={airport.id}></Banner>
      <div className='container mt-4 min-h-[600px]'>
      <Editor initialContent={airport.content}  />
      </div>
    </div>
  )
}

export default page