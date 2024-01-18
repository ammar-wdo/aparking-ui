'use client'

import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import SigninOut from './signin-out';
import { Airport } from '@/schemas';
import { AirportCombpBox } from './airports-combobox';
import { AirportCommand } from './airports-command';

type Props = {
    col?:boolean,
    close?:(val:boolean)=>void
    airports?:Airport[]
    contentPages?:boolean
}

const NavLinks = ({col,close,airports,contentPages}: Props) => {


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
  return (
    <nav className={cn(" gap-6 items-center px-1 md:flex hidden",col && 'flex flex-col w-full items-end')}>
    {links.map(({ label  ,link},i) => 
      
    { return  <div   key={label} className={cn("relative group")}>
     {<Link
     onClick={()=>close && close(false)}
      
        href={link}
        className={cn(
          "capitalize flex items-center relative  text-sm sm:text-base shrink-0   font-medium",close && 'text-site'
        )}
      >
        {label}{" "}
       
      </Link>}
     
  
        
      </div>}
    )}
   
    
   
  </nav>
  )
}

export default NavLinks