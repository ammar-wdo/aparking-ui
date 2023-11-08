import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ALL_SERVICES } from '@/links'
import { Service } from '@/types'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = async(props: Props) => {

    const services = await axios.get(ALL_SERVICES)
    const data = services.data as Service[]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-10 p-10'>
      {!data.length && <p>no data</p>}

{data?.map((service)=><div key={service.id} className='p-3 border rounded-md flex flex-col gap-5'>
    <p>{service.address}</p>
    <p>{service.title}</p>
    <p>{service.city}</p>
    <p>{service.description}</p>
    <div className='w-full aspect-video relative'>
        <Image src={service.logo} alt='logo' fill className='object-cover'/>
    </div>

    <Link className={cn(!service.available && 'cursor-not-allowed')} href={service.available ? `/book/${service.id}` : ''}><Button disabled={!service.available}>complete reservation</Button></Link>
</div>)}

    </div>
  )
}

export default page