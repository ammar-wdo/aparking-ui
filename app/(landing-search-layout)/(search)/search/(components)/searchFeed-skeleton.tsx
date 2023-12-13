import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

type Props = {}

const SearchFeedSkeleton = (props: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10 mt-20 relative z-10">

        {Array(8).fill('').map((el,i)=><div key={i}>
        <div key={i} className="w-full min-h-[400px]  rounded-md border border-b-2 border-b-yellow-500 bg-white" >
        <div className=" text-center p-7   ">
          <Skeleton className=' p-4' />
        </div>
        <Separator className="bg-neutral-300" />

        <div className='p-7 flex flex-col gap-3'>
          {Array(4).fill('').map((_el,i)=>(
          <div key={i} className='flex gap-4 '>
<Skeleton  className='w-8 h-8 rounded'/>
<Skeleton className='flex-1 p-3 max-w-[100px]' />
          </div>))}
          </div>
          <Separator />

          <div className=' bg-gray-50 p-4 py-3 flex flex-col  gap-1 items-center border-t'>
            <Skeleton className='p-2 w-[100px]' />
            <Skeleton className='p-3 w-[75px] ' />
            <Skeleton className='p-7 w-full mt-4' />
            <Skeleton className='p-2 w-full mt-4' />

            </div>
          </div>

        </div>)}
    </div>
  )
}

export default SearchFeedSkeleton