'use client'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"


import { SlidersHorizontal } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

  import React from 'react'
import { Button } from "../ui/button"
  
  type Props = {}
  
  const Filter = (props: Props) => {
    return (
        <Sheet >
        <SheetTrigger className="flex items-center gap-3 border border-orange-500 text-orange-500 bg-white rounded-xl cursor-pointer p-6  justify-center"><SlidersHorizontal />  Filters</SheetTrigger>
      
        <SheetContent side={'left'} className="p-0">
        <SheetHeader>
            <SheetTitle className="p-4">Filter the results</SheetTitle>
        </SheetHeader>
        <div className=" flex flex-col  h-[95vh] pb-12">
            <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className="hover:no-underline p-4 text-sm text-neutral-500">Parking Service</AccordionTrigger>
    <AccordionContent className="px-4">

    <div className="flex items-center space-x-2 ">
      <Checkbox id="valet"  />
      <label
        htmlFor="valet"
        className="text-xs font-medium leading-none  "
      >
       Valet-parking
      </label>
    </div>
    <div className="flex items-center space-x-2 mt-2">
      <Checkbox id="self"  />
      <label
        htmlFor="self"
        className="text-xs font-medium leading-none  "
      >
       Self-park
      </label>
    </div>
 
    </AccordionContent>
  </AccordionItem>
</Accordion>
            <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className="hover:no-underline p-4 text-sm text-neutral-500">Location</AccordionTrigger>
    <AccordionContent className="px-4">

    <div className="flex items-center space-x-2 ">
      <Checkbox id="valet"  />
      <label
        htmlFor="valet"
        className="text-xs font-medium leading-none  "
      >
       Valet-parking
      </label>
    </div>
    <div className="flex items-center space-x-2 mt-2">
      <Checkbox id="self"  />
      <label
        htmlFor="self"
        className="text-xs font-medium leading-none  "
      >
       Self-park
      </label>
    </div>
 
    </AccordionContent>
  </AccordionItem>
</Accordion>
            <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className="hover:no-underline p-4 text-sm text-neutral-500">Car keys</AccordionTrigger>
    <AccordionContent className="px-4">

    <div className="flex items-center space-x-2 ">
      <Checkbox id="valet"  />
      <label
        htmlFor="valet"
        className="text-xs font-medium leading-none  "
      >
       Valet-parking
      </label>
    </div>
    <div className="flex items-center space-x-2 mt-2">
      <Checkbox id="self"  />
      <label
        htmlFor="self"
        className="text-xs font-medium leading-none  "
      >
       Self-park
      </label>
    </div>
 
    </AccordionContent>
  </AccordionItem>
</Accordion>
            <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className="hover:no-underline p-4 text-sm text-neutral-500">Services</AccordionTrigger>
    <AccordionContent className="px-4">

    <div className="flex items-center space-x-2 ">
      <Checkbox id="valet"  />
      <label
        htmlFor="valet"
        className="text-xs font-medium leading-none  "
      >
       Valet-parking
      </label>
    </div>
    <div className="flex items-center space-x-2 mt-2">
      <Checkbox id="self"  />
      <label
        htmlFor="self"
        className="text-xs font-medium leading-none  "
      >
       Self-park
      </label>
    </div>
 
    </AccordionContent>
  </AccordionItem>
</Accordion>
            <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className="hover:no-underline p-4 text-sm text-neutral-500">Other services</AccordionTrigger>
    <AccordionContent className="px-4">

    <div className="flex items-center space-x-2 ">
      <Checkbox id="valet"  />
      <label
        htmlFor="valet"
        className="text-xs font-medium leading-none  "
      >
       Valet-parking
      </label>
    </div>
    <div className="flex items-center space-x-2 mt-2">
      <Checkbox id="self"  />
      <label
        htmlFor="self"
        className="text-xs font-medium leading-none  "
      >
       Self-park
      </label>
    </div>
 
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Button variant={'site'} className="mt-auto mx-4">Filter</Button>
</div>
   
        </SheetContent>
      </Sheet>
    )
  }
  
  export default Filter