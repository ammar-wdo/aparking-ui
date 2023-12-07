import React from 'react'
import Banner from '../../(landingPage)/(components)/banner'
import axios from 'axios'
import { GET_AIRPORTS } from '@/links'
import { Airport } from '@/schemas'
import { redirect } from 'next/navigation'

type Props = {params:{airportName:string}}

const page = async({params}: Props) => {

const res = await axios(GET_AIRPORTS + `/${params.airportName}`)

const airport = res.data.airport as Airport

if(!airport) return redirect('/')

  return (
    <div>
      <Banner airportId={airport.id}></Banner>
      <div className='container mt-4 min-h-[600px]'>
        {airport.name}
      </div>
    </div>
  )
}

export default page