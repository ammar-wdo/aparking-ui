import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import SearchFeedSkeleton from './(components)/searchFeed-skeleton'

type Props = {}

const loading = (props: Props) => {
  return (
    <div className='min-h-[1200px] pb-12'>
        <div className={cn("md:min-h-[500px] min-h-[600px] items-center flex bg-[#003580] relative ")}>
      <Image fill src='/Banner.jpg' alt="banner" className="object-cover opacity-10 object-center "/>
      <div className='container h-full w-full gap-3  flex flex-col'>
    <Skeleton className='p-4 w-[300px] my-3' />
    <Skeleton className='p-2 w-[200px]' />
</div>

    </div>
    
    <div className='container'>
    <Skeleton className=' mt-10 w-full p-10 ' />
    <SearchFeedSkeleton />
    </div>


        
 


    </div>
  )
}

export default loading