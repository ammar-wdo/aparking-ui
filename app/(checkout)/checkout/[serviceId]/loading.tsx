import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'
import CheckoutHeader from '../../(components)/checkout-header'

type Props = {}

const loading = (props: Props) => {
  return (
    <div className='container'>
      
          <div className=" grid lg:grid-cols-3 grid-cols-1 mt-12 gap-10">

            <div className='space-y-5  lg:col-span-2 py-2' >
                <Skeleton className='h-[500px]' />
                <Skeleton className='h-[75px]' />
                <Skeleton  className='h-[75px]'/>
            </div>
            <Skeleton className='min-h-[400px]'/>
          </div>
    </div>
  )
}

export default loading