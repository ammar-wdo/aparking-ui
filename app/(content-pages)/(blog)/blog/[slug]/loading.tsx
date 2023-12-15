import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

type Props = {}

const loading = (props: Props) => {
  return (
    <div className='min-h-[700px] '>
    <div className='container'>
    <Skeleton className="w-[300px] p-3  my-8" />
        <Skeleton className='w-full aspect-[4/1] relative'/>
           

       
     
   
    <section className='mt-8 px-12 '>
        <Skeleton className='w-[200px] p-3'/>
        <div className='flex gap-12 mt-3 items-center'>
          <Skeleton className='w-[150px] p-3' />
          <Skeleton className='w-[100px] p-2' />

        </div>
        <div className='my-8' />
        <div className='space-y-4'>
        <Skeleton className='w-full max-w-[300px] p-3' />
        <Skeleton className='w-full max-w-[600px] p-3' />
        <Skeleton className='w-full max-w-[600px] p-3' />
        <Skeleton className='w-full max-w-[800px] p-3' />
        <Skeleton className='w-full max-w-[800px] p-3' />
        <Skeleton className='w-full max-w-[800px] p-3' />
        <Skeleton className='w-full max-w-[900px] p-3' />
        <Skeleton className='w-full  h-[600px]' />

        </div>

      

        <div className='my-8 flex items-center gap-4'>
            <Skeleton className='w-[75px] p-5 rounded-lg' />
            <Skeleton className='w-[75px] p-5 rounded-lg' />
            <Skeleton className='w-[75px] p-5 rounded-lg' />
            <Skeleton className='w-[75px] p-5 rounded-lg' />
            <Skeleton className='w-[75px] p-5 rounded-lg' />
        </div>
    </section>



    </div>
</div>
  )
}

export default loading