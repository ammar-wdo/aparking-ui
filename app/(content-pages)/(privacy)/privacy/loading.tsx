import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

type Props = {}

const loading = (props: Props) => {
  return (
    <div className="min-h-[700px]">
    <div className="container">
        <Skeleton className='my-8 w-[250px] p-3' />
        <Skeleton className=' w-[200px] p-3' />

        <div className='mt-12'>
        <Skeleton className='my-8 w-[250px] p-3' />
        <Skeleton className='my-8 w-[250px] p-3' />
        <Skeleton className='my-8  w-full h-[600px] p-3' />
        </div>
    </div>
    </div>
  )
}

export default loading