import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

type Props = {}

const SearchFeedSkeleton = (props: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-10 mt-20 relative z-10">

        {Array(10).fill('').map((el,i)=><div key={i}>
        <Skeleton className="w-full h-[250px] rounded-md" />

        </div>)}
    </div>
  )
}

export default SearchFeedSkeleton