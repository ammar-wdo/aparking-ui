import Header from '@/components/header'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

type Props = {}

const loading = (props: Props) => {
  return (
    <div className='h-[1200px] pb-12'>
      <Header contentPages={true} />
    
    <div className='container mt-12 grid grid-cols-1   lg:grid-cols-6   py-4 gap-10'>
      <Skeleton className='p-3 pb-6 rounded-lg h-[400px]  lg:col-span-2 order-1 lg:order-2' />
      <div className='lg:col-span-4 order-2 lg:order-1'>
      <Skeleton className=' p-3 w-[300px] my-10' />
   
   <Skeleton className='mt-4 w-full h-[300px] ' />
      </div>
  
        </div>
 


    </div>
  )
}

export default loading