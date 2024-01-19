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
      
  

  
    <div className='container mt-12'>
      <div className='max-w-[1000px]'>
      <Skeleton className=' p-3 w-[300px] my-10' />

<Skeleton className=' p-4 w-[300px] ' />
<Skeleton className='mt-4 w-full h-[300px] ' />
      </div>
  
        </div>
 


    </div>
  )
}

export default loading