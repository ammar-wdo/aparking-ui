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
    hidden?: boolean;
    contentPages?:boolean
  };

export function AirportCombpBox({ data, hidden,contentPages }: Props) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger  aria-label="airports" className={cn('text-site text-base hover:text-site bg-transparent border-0 sm:p-3 p-1',hidden && "md:flex hidden border-0  ",contentPages && ' text-white hover:bg-transparent hover:text-white')} asChild>
        <Button
        name="airports"
          variant="outline"
          aria-label="airports"
          role="combobox"
          aria-expanded={open}
          className={cn("w-fit justify-between text-sm sm:text-base" )}
        >
          {value
            ? data?.find((airport) => airport.slug === value)?.name
            : "Vliegvelden"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit p-0 ">
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
            onClick={() => setOpen(false)}
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
      </PopoverContent>
    </Popover>
  )
}
