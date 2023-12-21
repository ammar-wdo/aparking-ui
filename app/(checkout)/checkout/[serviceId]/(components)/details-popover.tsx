'use client'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { HelpCircle } from "lucide-react"

type Props = {
    details:string
}

const DetailsPopover = ({details}: Props) => {
  return (
    <Popover>
    <PopoverTrigger><HelpCircle className="text-blue-600 w-4 h-4" /></PopoverTrigger>
    <PopoverContent side="top" className="text-xs p-4">{details}</PopoverContent>
  </Popover>
  )
}

export default DetailsPopover