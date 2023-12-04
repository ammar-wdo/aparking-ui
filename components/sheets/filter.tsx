'use client'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { SlidersHorizontal } from "lucide-react"

  import React from 'react'
  
  type Props = {}
  
  const Filter = (props: Props) => {
    return (
        <Sheet >
        <SheetTrigger className="flex items-center gap-3 border border-orange-500 text-orange-500 bg-white rounded-xl cursor-pointer p-6  justify-center"><SlidersHorizontal />  Filters</SheetTrigger>
        <SheetContent side={'left'}>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    )
  }
  
  export default Filter