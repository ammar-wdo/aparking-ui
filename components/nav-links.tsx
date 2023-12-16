import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'

type Props = {
    col?:boolean
}

const NavLinks = ({col}: Props) => {


    const links = [
        {
          label: "home",
          link:'/'
        },
    
        {
          label: "contact us",
          link:'/contact-us'
        },
      ];
  return (
    <nav className={cn(" gap-6 items-center px-1 md:flex hidden",col && 'flex flex-col')}>
    {links.map(({ label  ,link}) => (
      <div   key={label} className={cn("relative group")}>
     {<Link
      
        href={link}
        className={cn(
          "capitalize flex items-center relative  text-sm sm:text-base shrink-0   font-medium"
        )}
      >
        {label}{" "}
       
      </Link>}
     
       
        
      </div>
    ))}
  </nav>
  )
}

export default NavLinks