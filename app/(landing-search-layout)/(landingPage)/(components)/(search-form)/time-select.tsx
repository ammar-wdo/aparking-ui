'use client'


import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { ScrollArea } from "@/components/ui/scroll-area"

  
  import React, { Dispatch, SetStateAction } from 'react'
  
  type Props = {
    times:string[]
    time:string,
    setTime:Dispatch<SetStateAction<string>>
    open:boolean,
    setOpen:Dispatch<SetStateAction<boolean>>
  }
  
  const TimeSelect = ({times,time,setTime,open,setOpen}: Props) => {
    return (
        <Select onValueChange={setTime} defaultValue={time} open={open} onOpenChange={setOpen}>
      <SelectTrigger className="w-[180px] p-0 border-0 text-zinc-500 text-xs outline-none focus-visible:ring-0 focus-visible:ring-transparent ring-0 ring-transparent focus-within:ring-0 focus-within:ring-transparent hover:bg-gray-100 transition foucs:ring-0 focus:ring-transparent pl-4">
        <SelectValue  placeholder="Select Time" />
      </SelectTrigger>
      
      <SelectContent>
        <ScrollArea className="h-[200px] w-fit rounded-md  p-4">
       {times.map((time=>
         <SelectItem key={time} className="cursor-pointer w-fit" value={time}>{time}</SelectItem>))}
          
          </ScrollArea>
         
        
      </SelectContent>
    </Select>
    )
  }
  
  export default TimeSelect