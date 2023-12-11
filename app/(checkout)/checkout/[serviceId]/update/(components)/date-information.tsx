'use client'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useUser } from '@/hooks/user-hook'
import { handleTimezone } from '@/lib/timezone-handler'
import { cn } from '@/lib/utils'
import { bookingSchema } from '@/schemas'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

type Props = {
    form: UseFormReturn<z.infer<typeof bookingSchema>>,
    timeArray:string[],
    setPersonalStep: Dispatch<SetStateAction<boolean>>;
    personalStep: boolean;
    differentDate:boolean
}

const DateInformation = ({form,timeArray,personalStep,setPersonalStep,differentDate}: Props) => {



 

   




  return (
    <div className='space-y-5 bg-white p-6'>
         <h3 className={cn("text-2xl font-bold")}>
            1.Date information
          </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

   

<div className="flex flex-col gap-1">
<FormField
          control={form.control}
          name="arrivalDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>New Arrival date</FormLabel>
              <Popover>
                <PopoverTrigger
                 asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(new Date(field.value), "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    className='w-full'
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date< new Date(new Date().setHours(0,0,0,0)) || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
           
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="arrivalTime"
          render={({ field }) => (
            <FormItem className="space-y-0 w-full">
              <FormLabel>New Arrival Time</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
              
                <SelectContent>
                <ScrollArea className="h-[200px] w-full rounded-md  p-4">
                  {timeArray.map((el)=> <SelectItem key={el} value={el}>{el}</SelectItem>)}
                 </ScrollArea>
               
                </SelectContent>
              
              </Select>
             
              <FormMessage />
            </FormItem>
          )}
        />
</div>

        <div className="flex flex-col  gap-1">
        <FormField
          control={form.control}
          name="departureDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>New Departure Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(new Date(field.value), "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={new Date(field.value)}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date(form.getValues('arrivalDate')?.setHours(0,0,0,0))
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
           
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="departureTime"
          render={({ field }) => (
            <FormItem className="space-y-0 p-0 w-full">
              <FormLabel className="p-0 ">New Departure Time</FormLabel>
              <Select  onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
              
                <SelectContent className="">
                <ScrollArea className="h-[200px]  w-full rounded-md  p-4">
                  {timeArray.map((el)=> <SelectItem key={el} value={el}>{el}</SelectItem>)}
                 </ScrollArea>
               
                </SelectContent>
         
              </Select>
         
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        </div>
        <Button variant={'siteTwo'} className='w-full'>{differentDate ? 'Check availability' : "Next step"}</Button>
    </div>
  )
}

export default DateInformation