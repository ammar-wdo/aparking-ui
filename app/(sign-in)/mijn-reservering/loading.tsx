import CheckoutHeader from '@/app/(checkout)/(components)/checkout-header'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

type Props = {}

const loading = (props: Props) => {
  return (
    <div>
         <CheckoutHeader />
         <div className='h-screen w-screen flex items-center justify-center'>
          <div className='flex gap-12 min-h-[600px] mt-20 w-[1000px]'>

<Skeleton className='flex-1 lg:block hidden' />
<div className='flex-1 p-12 space-y-4 max-w-[500px] mx-auto' >
    <Skeleton className='p-4' />
<Skeleton className='h-[90px]' />
<Skeleton className='h-[90px]' />
<Skeleton className='h-[50px]' />
<Skeleton className='h-[50px]' />
<div className='flex items-center justify-between '>
    <Skeleton className='w-[80px] p-2' />
    <Skeleton className='w-[80px] p-2'/>
</div>


</div>

</div>
    </div>
    </div>
  
  )
}

export default loading