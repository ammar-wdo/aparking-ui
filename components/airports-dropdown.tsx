
'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Airport } from "@/schemas";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Props ={
    data: Airport[]
}


export const AirportMenue = ({data}:Props) => {


    const [open, setOpen] = useState(false)
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger onMouseOver={()=>setOpen(true)}  className="flex items-center gap-1  md:text-base text-sm font-medium">Airports <ChevronDown className="w-4 h-4 ml-1" /></DropdownMenuTrigger>
      <DropdownMenuContent onMouseLeave={()=>setOpen(false)}  className="mt-5">
        {data.map((airport: Airport) => (
          <DropdownMenuLabel        key={airport.id} onClick={()=>setOpen(false)}>
            {" "}
            <Link
              href={`/${airport.name}`}
       
              className="shrink-0 block p-3 rounded-lg text-[#003580] hover:bg-gray-100 transition font-medium"
            >
              {airport.name}
            </Link>
          </DropdownMenuLabel>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
