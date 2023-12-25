"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import React, { Dispatch, SetStateAction } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getClientDates } from "@/app/(checkout)/checkout/[serviceId]/update/(helpers)/getClientDates";

type Props = {
  times: string[];
  time: string;
  setTime: Dispatch<SetStateAction<string>> 
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  startDate: Date | undefined;
  endDate: Date | undefined;
showAll?:boolean
  startTime: string;
  endTime: string;
};

const TimeSelect = ({
  times,
  time,
  setTime,
  open,
  setOpen,
  startDate,
  endDate,
  startTime,
  endTime,
  showAll
}: Props) => {
  return (
    <Popover
      // onValueChange={setTime}
      // defaultValue={time}
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverTrigger
        asChild
        className="w-[180px] p-0 border-0 h-full rounded-md px-1
       text-gray-600 text-xs outline-none focus-visible:ring-0 
       focus-visible:ring-transparent ring-0 ring-transparent focus-within:ring-0
        focus-within:ring-transparent hover:bg-slate-100 transition foucs:ring-0 
        focus:ring-transparent pl-4"
      >
        <Button
          variant={"ghost"}
          className="w-full  flex items-center justify-between"
        >
          {time || "Select time"}{" "}
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-fit">
        <ScrollArea className="h-[200px] w-fit rounded-md  p-4 flex flex-col">
          {times.map((time) => {

            if(endDate && startDate && !showAll){
              const {clientArrivalDate,clientDepartureDate} = getClientDates(
                startDate?.toString() || new Date().toString(),
                endDate?.toString() || new Date().toString(),
                startTime,
                endTime
              );
  const [hours,minutes] = time.split(":")
              endDate?.setHours(+hours)
              endDate?.setMinutes(+minutes)
  
              if (clientArrivalDate.getTime()  >= endDate?.getTime() ) {
                return null
              }

              return   <Button
              variant={"ghost"}
              key={time}
              onClick={() => {
                setTime(time);
                setOpen(false);
              }}
              className="cursor-pointer justify-start block"
            >
              {time}
            </Button>
            }
           else if(startDate  && showAll){
            const [hours,minutes] = time.split(':')
            startDate.setHours(+hours)
            startDate.setMinutes(+minutes)

            if(new Date() > startDate) return null
 
              
            }
        
              return (
                <Button
                  variant={"ghost"}
                  key={time}
                  onClick={() => {
                    setTime(time);
                    setOpen(false);
                  }}
                  className="cursor-pointer justify-start block"
                >
                  {time}
                </Button>
              );
          })}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
};

export default TimeSelect;
