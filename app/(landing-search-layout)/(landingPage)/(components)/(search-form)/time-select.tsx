"use client";


import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import React, { Dispatch, SetStateAction } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  times: string[];
  time: string;
  setTime: Dispatch<SetStateAction<string>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const TimeSelect = ({ times, time, setTime, open, setOpen }: Props) => {
  return (
    <Popover
      // onValueChange={setTime}
      // defaultValue={time}
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverTrigger  className="w-[180px] p-0 border-0 h-full rounded-md px-1
       text-zinc-500 text-xs outline-none focus-visible:ring-0 
       focus-visible:ring-transparent ring-0 ring-transparent focus-within:ring-0
        focus-within:ring-transparent hover:bg-gray-100 transition foucs:ring-0 
        focus:ring-transparent pl-4">
       <span className="w-full  flex items-center justify-between">{time || "Select time"} <ChevronDown className="w-4 h-4 text-neutral-400"/></span>
      </PopoverTrigger>

      <PopoverContent className="w-fit">
        <ScrollArea className="h-[200px] w-fit rounded-md  p-4 flex flex-col">
          {times.map((time) => (
            <Button
            variant={'ghost'}
            key={time}
            onClick={()=>setTime(time)}
            className="cursor-pointer justify-start block"
          >
          
              {time}
            </Button>
          ))}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
};

export default TimeSelect;
