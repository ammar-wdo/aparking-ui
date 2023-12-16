
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
import { useState } from "react";
import { Button } from "./ui/button";
import NavLinks from "./nav-links";
import SigninOut from "./signin-out";




export const MeneuDropdown = () => {


    
  return (
    <Popover >
      <PopoverTrigger asChild className="flex items-center gap-1  md:text-base text-sm font-medium"><Button variant={'siteTwo'}><Menu /></Button></PopoverTrigger>
      <PopoverContent  className="mt-5 flex flex-col items-center gap-6">
        
          <NavLinks col />
          <SigninOut  />
  
      </PopoverContent>
    </Popover>
  );
};
