"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Airport } from "@/schemas";
import { ArrowLeft, Menu } from "lucide-react";
import NavLinks from "./nav-links";
import { AirportCommand } from "./airports-command";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

type Props = {
  contentPages?: boolean;
  airports:Airport[]
};

const links = [
  {
    label: "home",
    link:'/'
  },

  {
    label: "contact",
    link:'/contact'
  },
];

const MobileSheet = ({ contentPages ,airports}: Props) => {

  const [show, setShow] = useState(false)
  return (
    <Sheet>
      <SheetTrigger>
        {" "}
        <Menu
          name="Menu"
          className={cn("", contentPages ? "text-white" : "text-site")}
        />
      </SheetTrigger>
      <SheetContent className="z-[99999] w-full" side={"right"}>
        <div className="mt-12 text-left">
        {!show ?<nav className={cn(" gap-6 items-center px-1 md:flex hidden", 'flex flex-col w-full items-end')}>
    {links.map(({ label  ,link},i) => 
      
    { return  <div   key={label} className={cn("relative group")}>
     {<Link
    
      
        href={link}
        className={cn(
          "capitalize flex items-center relative  text-sm sm:text-base shrink-0   font-medium",  'text-site'
        )}
      >
        {label}{" "}
       
      </Link>}
     
  
        
      </div>}
    )}

    <button onClick={()=>setShow(true)} className="capitalize flex items-center relative  text-sm sm:text-base shrink-0   font-medium text-site">Airports</button>
   
    
   
  </nav> :    <div> <button onClick={()=>setShow(false)} className="flex items-center mb-4 text-site font-semibold"><ArrowLeft className="mr-3 w-3 h-3 " />Back</button><AirportCommand  data={airports!}/></div>}
    
        </div>
      
      </SheetContent>
    </Sheet>
  );
};

export default MobileSheet;
