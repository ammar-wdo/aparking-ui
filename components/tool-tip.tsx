"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"




  import React, { useEffect, useState } from 'react'
  
  type Props = {
    children:React.ReactNode,
    title:string,
    side?:"top" | "right" | "bottom" | "left" | undefined
  }
  
  const ActionToolTip = ({children,title,side}: Props) => {

    const [mount,setMount] = useState(false)
    useEffect(()=>{
        setMount(true)
    },[])

    if(!mount) return null
    return (
        <TooltipProvider>
        <Tooltip delayDuration={150} >
          <TooltipTrigger asChild>
            {children}
          </TooltipTrigger>
          <TooltipContent side={side} align="start" sideOffset={7} className="bg-secondary-foreground text-secondary border-none ">
            <p className=" text-xs capitalize max-w-[120px] whitespace-pre-line">
              {title}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }
  
  export default ActionToolTip