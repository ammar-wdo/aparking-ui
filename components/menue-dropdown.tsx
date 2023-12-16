
'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Airport } from "@/schemas";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import NavLinks from "./nav-links";
import SigninOut from "./signin-out";
import { cn } from "@/lib/utils";



type Props = {
    contentPages?:boolean
}
export const MeneuDropdown = ({contentPages}:Props) => {

    const [openPop, setOpenPop] = useState(false)

    const closePop = (val:boolean)=>{
        setOpenPop(val)
    }

const [mount,setMount] = useState(false)

useEffect(()=>{setMount(true)},[])
    if(!mount) return null

  return (
    <Popover open={openPop} onOpenChange={setOpenPop}  >
      <PopoverTrigger asChild className="flex items-center gap-1  md:text-base text-sm font-medium"><Button  className="bg-transparent hover:bg-transparent"><Menu className={cn("",contentPages ? 'text-white' : "text-site")}/></Button></PopoverTrigger>
      <PopoverContent  className="mt-5 flex flex-col items-center gap-6">
        
          <NavLinks close={closePop} col />
          
  
      </PopoverContent>
    </Popover>
  );
};
