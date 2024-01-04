'use client'

import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

type Props = {
    categoryParam:string | string[] | undefined,
    label:string
    link:string
    all?:boolean
}

const ClientButton = ({categoryParam,label,link,all}: Props) => {

    const router = useRouter()
  return (
    <Button
    variant={'secondary'}
    className={cn("first-letter:capitalize text-slate-600 ",(categoryParam ===label || (all && !categoryParam)) && 'bg-site text-white hover:bg-site')}
    
    onClick={()=>router.push(`/${link}`)}>
        {label}
    </Button>
  )
}

export default ClientButton