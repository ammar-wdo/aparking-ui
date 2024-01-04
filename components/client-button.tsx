'use client'

import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

type Props = {
    categoryParam:string | string[] | undefined,
    label:string
}

const ClientButton = ({categoryParam,label}: Props) => {

    const router = useRouter()
  return (
    <Button
    className={cn("first-letter:capitalize text-slate-600 ",categoryParam ===label && 'bg-site text-white hover:bg-site')}
    
    onClick={()=>router.push(`/${label}`)}>
        {label}
    </Button>
  )
}

export default ClientButton