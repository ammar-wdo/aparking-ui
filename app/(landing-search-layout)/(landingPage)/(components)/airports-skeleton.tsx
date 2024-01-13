import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

type Props = {}

const AirportSkeleton = (props: Props) => {
  return (
    <div className=" py-8 ">
    <h3 className="text-center text-4xl font-semibold text-[#003580] ">
      Airports
    </h3>
    <div className="max-w-[1500px] mx-auto mt-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 p-4">
      {Array(4).fill('').map((_el,i) => (
  
        <Skeleton key={i}  className="rounded-md overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="relative aspect-video  ">
           
          </div>
          <div className="bg-white p-4">
<Skeleton  />
<Skeleton  className='p-2' />
<Skeleton  className='p-2 mt-3' />

          </div>
        </Skeleton>
       
      ))}
    </div>
  </div>
  )
}

export default AirportSkeleton