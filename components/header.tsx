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
      label: "about us",
    },
    {
      label: "customer services",
    },
  ];
  return (
    <div className="bg-indigo-500 ">
       <div className="flex justify-between py-10 text-white items-center relative z-10 container">
    <Logo />
      
      <nav className="flex md:gap-14 gap-6">
        {links.map(({label,Icon})=><Link key={label} href={'/'} className="capitalize flex items-center">{label} {Icon && Icon}</Link>)}
      <SigninOut />
        <button type="button" className="flex items-center ">EN <ChevronDown className="w-4 h-4 ml-1" /></button>
      </nav>
    </div>
    </div>
   
  );
};

export default Header;
