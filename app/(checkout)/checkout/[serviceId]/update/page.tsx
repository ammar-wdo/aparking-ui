import { ALL_SERVICES } from '@/links'
import { Service } from '@/types'
import axios from 'axios'
import { redirect } from 'next/navigation'

import React from 'react'

type Props = {params:{serviceId:string}}

const page = async({params}: Props) => {


    const data = await axios.get(`${ALL_SERVICES}/${params.serviceId}`)
  const service = data.data as Service


if(!service) return redirect('/')
  return (
    <div>{params.serviceId}</div>
  )
}

export default page