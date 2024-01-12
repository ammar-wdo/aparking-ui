'use client'

import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import SigninOut from './signin-out';
import { Airport } from '@/schemas';

type Props = {
    col?:boolean,
    close?:(val:boolean)=>void
    airports?:Airport[]
}

const NavLinks = ({col,close,airports}: Props) => {


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
    <nav className={cn(" gap-6 items-center px-1 md:flex hidden",col && 'flex flex-col w-full')}>
    {links.map(({ label  ,link},i) => 
      
    { return  <div   key={label} className={cn("relative group")}>
     {<Link
     onClick={()=>close && close(false)}
      
        href={link}
        className={cn(
          "capitalize flex items-center relative  text-sm sm:text-base shrink-0   font-medium"
        )}
      >
        {label}{" "}
       
      </Link>}
     
  
        
      </div>}
    )}
        <SigninOut col={col}  close={close}  />
  </nav>
  )
}

export default NavLinks