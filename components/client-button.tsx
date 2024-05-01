'use client'

import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

type Props = {
    categoryParam:string | undefined,
    label:string
    link:string
    all?:boolean
}

const ClientButton = ({categoryParam,label,link,all}: Props) => {

    const router = useRouter()

    console.log('category param',categoryParam)
    console.log('category label',label)
    console.log(categoryParam?.toLocaleLowerCase().trim() ===label.toLocaleLowerCase().trim())
  return (
    <Button
    variant={'secondary'}
    className={cn("first-letter:capitalize text-slate-600 ",(categoryParam?.toLocaleLowerCase().trim() ===label.toLocaleLowerCase().trim() || (all && !categoryParam)) && 'bg-site text-white hover:bg-site')}
    
    onClick={()=>router.push(`/${link}`)}>
        {label}
    </Button>
  )
}

export default ClientButton