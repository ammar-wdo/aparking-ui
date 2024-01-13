
import Image from 'next/image'
import React from 'react'


type Props = {}

const loading = (props: Props) => {
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='w-[150px] h-[150px]  relative animate-pulse '>
            <Image alt='loader' src={'/loader.png'} fill />

        </div>
    
 


    </div>
  )
}

export default loading