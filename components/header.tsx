import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./logo";
import SigninOut from "./signin-out";

type Props = {};

const Header = (props: Props) => {
  const links = [
    {
      label: "home",
    },
    {
      label: "airports",
      Icon:<ChevronDown className="w-4 h-4 ml-1" />
    },
    {
      label: "contact us",
    },
  
  ];
  return (
    <div className="bg-white ">
       <div className="flex justify-between py-5 text-[#003580] items-center relative z-10 container sm:flex-row flex-col">
    <Logo />
      
      <nav className="flex md:gap-14 gap-3  px-1">
        {links.map(({label,Icon})=><Link key={label} href={'/'} className="capitalize flex items-center  text-sm sm:text-base shrink-0  font-medium">{label} {Icon && Icon}</Link>)}
      <SigninOut />
      
      </nav>
    </div>
    </div>
   
  );
};

export default Header;
