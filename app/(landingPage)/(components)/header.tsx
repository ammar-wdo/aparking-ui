import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <div className="flex justify-between py-10 text-white items-center relative z-10">
      <Link href={'/'}>
      <div className="relative w-32 aspect-video ">
        <Image src={'/aparking-logo.svg'} fill alt="logo"/>

      </div></Link>
      
      <nav className="flex md:gap-14 gap-6">
        {links.map(({label,Icon})=><Link key={label} href={'/'} className="capitalize flex items-center">{label} {Icon && Icon}</Link>)}
        <button className="siteButton rounded-xl">Sign in</button>
        <button type="button" className="flex items-center ">EN <ChevronDown className="w-4 h-4 ml-1" /></button>
      </nav>
    </div>
  );
};

export default Header;
