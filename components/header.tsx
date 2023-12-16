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
import { MeneuDropdown } from "./menue-dropdown";
import NavLinks from "./nav-links";


type Props = {
  contentPages?:boolean
};




const Header = async ({contentPages}: Props) => {


  const res = await axios(GET_AIRPORTS);

  return (
    <div className={cn("bg-white ",contentPages&& 'bg-[#003580]')}>
      <div className={cn("flex  sm:py-5 py-1  text-[#003580] items-center relative z-10 container ",contentPages&&'text-white')}>
        <Logo footer={contentPages} />
        <div className="ml-auto flex items-center gap-6">
        <div className="flex items-center gap-2 md:hidden">
          
          <AirportMenue data={res.data.airports} />
          <MeneuDropdown  contentPages ={contentPages}/>
          </div>

  <NavLinks />
          
              <AirportMenue hidden data={res.data.airports} />
            <SigninOut hidden />
        </div>

      
      </div>
    </div>
  );
};

export default Header;
