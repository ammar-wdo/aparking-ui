'use client'


import { cn } from '@/lib/utils'
import { Loader, Loader2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'


type Props = {
    children:React.ReactNode
}

const ProgressBar = ({children}: Props) => {

    const [progress, setProgress] = useState(0)

  

    useEffect(()=>{

        const timer = setInterval(()=>{
         
            if(progress < 100) {
                setProgress(progress=> progress+ 0.2)
            }
          
        },10)

        return ()=>clearInterval(timer)
        
       
    },[progress])

    
  return (
    <div className='mt-12 '>
        <div  className={cn('w-full h-2 transition   relative')}>
        <div style={{width:`${progress}%`}}  className={cn('h-full bg-gradient-to-l bg-site transition-all  rounded-xl',(progress === 0 ) ? 'opacity-0' : 'opacity-100')}  />
     
        <span className=' p-1 shadow-md bg-white     -translate-x-[50%] -translate-y-[50%] left-[50%] top-[50%] absolute rounded-full flex items-center justify-center'><Loader className='w-12 h-12 animate-spin text-site' /></span>
        </div>
       
        {children}

       
    </div>
  )
}

export default ProgressBar