import Header from '@/components/header'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

type Props = {}

const loading = (props: Props) => {
  return (
    <div className='h-[1200px] pb-12 '>
      <Header />
        <div className={cn("md:min-h-[500px] min-h-[600px] items-center flex bg-[#003580] relative ")}>
      <Image fill src='/Banner.jpg' alt="banner" className="object-cover opacity-10 object-center "/>
      <div className='  h-full w-full gap-3  flex flex-col'>
    <Skeleton className='p-4 w-[300px] my-3' />
    <Skeleton className='p-12 w-full' />
</div>

    </div>

    <div className='container '>
    <div className='max-w-[1000px]  mt-12'>
    <Skeleton className=' p-3 w-[300px] my-10' />
    <Skeleton className=' p-4 w-[300px] ' />
    <Skeleton className='mt-4 w-full h-[300px] ' />
        </div>
    </div>
  
 


    </div>
  )
}

export default loading