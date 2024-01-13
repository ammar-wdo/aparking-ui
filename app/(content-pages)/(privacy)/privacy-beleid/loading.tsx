
import Image from 'next/image'
import React from 'react'


type Props = {}

const loading = (props: Props) => {
  return (
    <div className='h-screen flex items-center justify-center fixed w-full top-0 left-0 z-[99999] bg-white'>
        <div className='w-[150px] h-[150px]  relative animate-pulse '>
            <Image alt='loader' src={'/loader.png'} fill />

        </div>
    
 


    </div>
  )
}

export default loading