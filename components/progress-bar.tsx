'use client'


import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

type Props = {
    children:React.ReactNode
}

const ProgressBar = ({children}: Props) => {

    const [progress, setProgress] = useState(0)

    useEffect(()=>{

        const timer = setInterval(()=>{
            if(progress < 100) {
                setProgress(progress=> progress+ 1)
            }
          
        },10)

        return ()=>clearInterval(timer)
        
       
    },[progress])

    
  return (
    <div className='mt-12'>
        <div  className={cn('w-full h-2 transition delay-300 ',(progress === 0 || progress === 100) ? 'opacity-0' : 'opacity-100')}>
        <div style={{width:`${progress}%`}}  className='h-full bg-site transition  delay-500 ease-in-out '  />
        </div>
       
        {children}

       
    </div>
  )
}

export default ProgressBar