import Banner from '@/app/(landing-search-layout)/(landingPage)/(components)/banner'
import { ALL_SERVICES } from '@/links'
import { Service } from '@/schemas'
import axios from 'axios'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {params:{serviceName:string}}

const page =async ({params}: Props) => {



    const res = await axios(ALL_SERVICES + `/serviceInfo/${params.serviceName}`)

    console.log(params.serviceName)

    const service = res.data.service as Service &{entity:{entityName:string,airport:{name:string}}}

    if(!service) return redirect('/')
  return (
    <div>
          <Banner noForm>
<h3 className='text-white text-3xl font-bold capitalize'>{service.name}</h3>
        </Banner>
    </div>
  )
}

export default page