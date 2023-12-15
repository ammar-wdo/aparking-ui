import Link from 'next/link'
import React from 'react'
import FaqFeed from './(components)/faq-feed'
import { Skeleton } from '@/components/ui/skeleton'

type Props = {}

const page = async(props: Props) => {
  return (
    <div className="min-h-[700px]">
           <div className="container">

           <Skeleton className='w-[300px] p-2 mt-8' />

        <Skeleton className="w-[200px] p-3 mt-4" />
    
        <div className='mt-12'>
    

        <div className='flex flex-col  gap-2'>

<Skeleton className='w-full h-[70px] ' />
<Skeleton className='w-full h-[70px] ' />
<Skeleton className='w-full h-[70px] ' />
<Skeleton className='w-full h-[70px] ' />
<Skeleton className='w-full h-[70px] ' />
        </div>
    </div>
           </div>
    </div>
  )
}

export default page