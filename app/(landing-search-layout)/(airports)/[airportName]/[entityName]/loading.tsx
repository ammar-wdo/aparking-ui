import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

type Props = {}

const loading = (props: Props) => {
  return (
    <div className='h-[1200px] py-12'>
        <div className={cn("md:min-h-[500px] min-h-[600px] items-center flex bg-[#003580] relative ")}>
      <Image fill src='/Banner.jpg' alt="banner" className="object-cover opacity-10 object-center "/>
      <div className='container h-full w-full gap-3  flex flex-col'>
    <Skeleton className='p-4 w-[300px]' />
  
</div>

    </div>
  

  
    <div className='container mt-12'>
    <Skeleton className=' p-1 w-[300px] my-10' />

    <Skeleton className=' p-4 w-[300px] ' />
    <Skeleton className='mt-4 w-full h-[300px] ' />
        </div>
 


    </div>
  )
}

export default loading