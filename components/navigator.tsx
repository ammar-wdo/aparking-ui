import { cn } from '@/lib/utils'
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
    <div className='flex items-center gap-3 w-full overflow-x-auto text-neutral-400'>
        <span><Link className='hover:text-site' href={'/'}>Home</Link></span> <span className={cn('flex items-center gap-1 shrink-0')}><ChevronRight className='w-5 h-5' /><Link className={(!entity) ? 'text-black hover:text-site' : 'hover:text-site'} href={`/${airport.href}`}>{airport.name}</Link></span>
        {entity && <span className='flex items-center gap-1 shrink-0'><ChevronRight className='w-5 h-5'/><Link className={(!service) ? 'text-black hover:text-site' : 'hover:text-site'}  href={`/${airport.href}/${entity.href}`}>{entity.name}</Link></span>}
        {(service && entity)&&<span className='flex items-center gap-1 shrink-0'><ChevronRight className='w-5 h-5'/><Link className='text-black hover:text-site' href={`/${airport.href}/${entity.href}/${service.href}`}>{service.name}</Link></span>}
    </div>
  )
}

export default Navigator