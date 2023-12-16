"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import React, { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

type Props = {
  airports: { name: string; id: string }[];
  airport: string;
  setAirport: Dispatch<SetStateAction<string>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const AirportSelect = ({
  airports,
  open,
  setOpen,
  setAirport,
  airport,
}: Props) => {

  return (
    <Popover
      // onValueChange={setAirport}
      // defaultValue={airport}
      onOpenChange={setOpen}
      
      open={open}
    >
      <PopoverTrigger
    asChild
        className="w-full p-0 border-0 text-zinc-500
      
        items-center
      text-xs outline-none
       focus-visible:ring-0 
       focus-visible:ring-transparent 
       ring-0 pr-2 ring-transparent
        focus-within:ring-0 focus-within:ring-transparent
       
        font-semibold
       
        rounded-md
         hover:bg-slate-100 transition foucs:ring-0 focus:ring-transparent 
         pl-4"
      >
        <Button variant={'ghost'}  className="w-full px-2 flex items-center justify-between">{airport && airports.find((airportE)=>airportE.id === airport)?.name || 'Choose an airport'} <ChevronDown className="w-4 h-4 text-neutral-400"/></Button>
        
      </PopoverTrigger>
      <PopoverContent className="flex flex-col ">
        {airports.map((airport) => (
          <Button
          variant={'ghost'}
            key={airport.id}
            onClick={()=>{setAirport(airport.id);setOpen(false)}}
            className="cursor-pointer justify-start"
          >
            {airport.name}
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default AirportSelect;
