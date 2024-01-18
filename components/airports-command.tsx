"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Airport } from "@/schemas"
import Link from "next/link"
import { ScrollArea } from "./ui/scroll-area"



type Props = {
    data: Airport[];
  
  };

export function AirportCommand({ data }: Props) {
 

  return (
   
        <Command>
          <CommandInput placeholder="Search airport..." />
          <CommandEmpty>No airport found.</CommandEmpty>
          <CommandGroup>
            <ScrollArea className="h-[300px]">
            {data?.map((airport) => (
              <CommandItem
                key={airport.id}
               
              >
            <Button
            variant={"ghost"}
            asChild
            className="w-full justify-start"
            key={airport.id}
          
          >
            <Link
              href={`/${airport.slug}`}
              className="shrink-0  text-[#003580]  font-medium hover:text-site"
            >
              {airport.name}
            </Link>
          </Button>
              </CommandItem>
            ))}
            </ScrollArea>
            
          </CommandGroup>
        </Command>

  )
}
