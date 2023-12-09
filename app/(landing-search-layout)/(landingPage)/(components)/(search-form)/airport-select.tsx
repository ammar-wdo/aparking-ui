"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React, { Dispatch, SetStateAction } from "react";

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
    <Select
      onValueChange={setAirport}
      defaultValue={airport}
      onOpenChange={setOpen}
      open={open}
    >
      <SelectTrigger
        className="w-full p-0 border-0 text-zinc-500
      text-xs outline-none
       focus-visible:ring-0 
       focus-visible:ring-transparent 
       ring-0 pr-2 ring-transparent
        focus-within:ring-0 focus-within:ring-transparent
        font-semibold
         hover:bg-gray-100 transition foucs:ring-0 focus:ring-transparent 
         pl-4"
      >
        <SelectValue className="" placeholder="Choose airport" />
      </SelectTrigger>
      <SelectContent>
        {airports.map((airport) => (
          <SelectItem
            key={airport.id}
            value={airport.id}
            className="cursor-pointer"
          >
            {airport.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default AirportSelect;
