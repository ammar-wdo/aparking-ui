import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./logo";
import SigninOut from "./signin-out";
import axios from "axios";
import { GET_AIRPORTS } from "@/links";
import { Airport } from "@/schemas";
import { cn } from "@/lib/utils";
import { AirportMenue } from "./airports-dropdown";


type Props = {
  contentPages?:boolean
};




const Header = async ({contentPages}: Props) => {
  const links = [
    {
      label: "home",
      link:'/'
    },
    {
      label: "airports",
      Icon: <ChevronDown className="w-4 h-4 ml-1" />,
      airports: true,
      link:''
    },
    {
      label: "contact us",
      link:'/contact-us'
    },
  ];

  const res = await axios(GET_AIRPORTS);

  return (
    <div className={cn("bg-white ",contentPages&& 'bg-[#003580]')}>
      <div className={cn("flex justify-between sm:py-5 py-1 pb-5 text-[#003580] items-center relative z-10 container sm:flex-row flex-col",contentPages&&'text-white')}>
        <Logo footer={contentPages} />

        <nav className="flex md:gap-14 gap-3 items-center px-1">
          {links.map(({ label, Icon, airports ,link}) => (
            <div   key={label} className={cn("relative group")}>
           {!airports && <Link
            
              href={link}
              className={cn(
                "capitalize flex items-center relative  text-sm sm:text-base shrink-0   font-medium"
              )}
            >
              {label} {Icon && Icon}{" "}
             
            </Link>}
            {airports && (
               <AirportMenue data={res.data.airports} />
              )}
            </div>
          ))}
          <SigninOut />
        </nav>
      </div>
    </div>
  );
};

export default Header;
