"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


type Props = {
    date:Date | undefined,
    setDate:React.Dispatch<React.SetStateAction<Date | undefined>>
    fromDate?:Date|undefined,
    open:boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>

}
export function DatePicker({date,setDate,fromDate,open,setOpen}:Props) {

   
  
console.log(new Date())

  return (
    <Popover  open={open}  onOpenChange={setOpen}>
      <PopoverTrigger asChild className="
      "> 
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-norma text-zinc-500 font-light border-none p-3",
            !date && "text-black"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 " />
          {date ? format(new Date(date), "dd-MM-yyyy") : <span className="
          ">Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
        className=""
        disabled={(date)=>{
            if(fromDate){
                return date< new Date(new Date().setHours(0,0,0,0)) || date < new Date( fromDate.setHours(0,0,0,0))
            }
            return date <   new Date(new Date().setHours(0,0,0,0))
        } }
          mode="single"
          selected={date}
          onSelect={(e)=>{setDate(e);}}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
