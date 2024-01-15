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
import nl from 'date-fns/locale/nl'


type Props = {
    date:Date | undefined,
    setDate:React.Dispatch<React.SetStateAction<Date | undefined>>
    fromDate?:Date|undefined,
    open:boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>,
    title?:string

}
export function DatePicker({date,setDate,fromDate,open,setOpen,title}:Props) {

   
  
React.useEffect(()=>{

},[date])

  return (
    <Popover  open={open}  onOpenChange={setOpen}>
      <PopoverTrigger asChild className="
      "> 
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-norma text-gray-600 font-light border-none p-1",
            !date && "text-black"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-xs text-gray-600 " />
          {date ? <span className="text-xs text-gray-600 font-medium ">{format(new Date(date), "dd-MM-yyyy")}</span>: <span className="
          font-medium  text-xs text-gray-600 ">Kies datum</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <p className="text-center pt-1 text-site font-medium">{title}</p>
        <Calendar
       locale={nl}
       
        className="border-0"
        disabled={(date)=>{
            if(fromDate){
                return date< new Date(new Date().setHours(0,0,0,0)) || date < new Date( fromDate.setHours(0,0,0,0))
            }
            return date <   new Date(new Date().setHours(0,0,0,0))
        } }
   
          mode="single"
          selected={date}
          onSelect={(e)=>{setDate(e)}}
          defaultMonth={date}
        />
      </PopoverContent>
    </Popover>
  )
}
