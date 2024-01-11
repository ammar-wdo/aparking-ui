import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {
    airport:{name:string,href:string},
    entity?:{name:string,href:string},
    service?:{name:string,href:string},
}

const Navigator = ({airport,entity,service}: Props) => {
  return (
    <div className='flex items-center gap-3 flex-wrap text-neutral-500'>
        <span><Link href={'/'}>Home</Link></span> <span className='flex items-center gap-1'><ChevronRight className='w-5 h-5' /><Link href={`/${airport.href}`}>{airport.name}</Link></span>
        {entity && <span className='flex items-center gap-1'><ChevronRight className='w-5 h-5'/><Link href={`/${airport.href}/${entity.href}`}>{entity.name}</Link></span>}
        {(service && entity)&&<span className='flex items-center gap-1'><ChevronRight className='w-5 h-5'/><Link href={`/${airport.href}/${entity.href}/${service.href}`}>{service.name}</Link></span>}
    </div>
  )
}

export default Navigator