"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {
  airports: { name: string; id: string; slug: string }[];
  airport: string;
  setAirport: Dispatch<SetStateAction<string>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const AirportCombo = ({
  airports,
  open,
  setOpen,
  setAirport,
  airport,
}: Props) => {
  const [value, setValue] = React.useState(airports.find((airportE) => airportE.slug === airport)?.name || '');

  useEffect(()=>{
    if(airport){

        const theAirport = airports.find(airportEl=>airportEl.slug===airport)?.name
        setValue(theAirport||'')
    }
  },[airport])
  return (
    <Popover
      // onValueChange={setAirport}
      // defaultValue={airport}
      onOpenChange={setOpen}
      open={open}
    >
      <PopoverTrigger
        asChild
        className="w-full p-0 border-0 text-gray-600
      
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
        <Button
          variant={"ghost"}
          className="w-full px-2 flex items-center text-xs text-gray-600 font-medium justify-between"
        >
          {(airport &&
            airports.find((airportE) => airportE.slug === airport)?.name) ||
            "Choose an airport"}{" "}
          <ChevronDown className="w-4 h-4 text-neutral-400" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-fit">
      <Command>
          <CommandInput placeholder="Choose airport" />
          <CommandEmpty>No airports  found.</CommandEmpty>
          <CommandGroup>
            <ScrollArea className="h-[200px]">
            {airports.map((airportEl) => (
              <CommandItem
                key={airportEl.id}
                className="cursor-pointer"
                value={airportEl.name}
                onSelect={(currentValue) => {
                   
                    setAirport(airportEl.slug);
                    setOpen(false);
                   
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === airportEl.name ? "opacity-100" : "opacity-0"
                  )}
                />
                {airportEl.name}
              </CommandItem>
            ))}
            </ScrollArea>
          
          </CommandGroup>
        </Command>
        </PopoverContent>
    
    </Popover>
  );
};

export default AirportCombo;
