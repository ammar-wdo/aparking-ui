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
import { AirportCombpBox } from "./airports-combobox";


type Props = {
  contentPages?:boolean,

};




const Header = async ({contentPages}: Props) => {


  const res = await axios(GET_AIRPORTS);

  return (
    <div className={cn("bg-white sm:relative sticky top-0 z-[999] border-b sm:border-b-0 sm:z-0",contentPages&& 'bg-[#003580]')}>
      <div className={cn("flex  py-5   text-[#003580] items-center relative z-10 container justify-between",contentPages&&'text-white')}>
        <Logo footer={contentPages} />
     
        <div className=" flex items-center gap-6">
        <div className="flex items-center gap-2 md:hidden">
          
        <AirportCombpBox contentPages={contentPages}  data={res.data.airports} />
          <MeneuDropdown  contentPages ={contentPages}/>
          </div>

  <NavLinks  />
 
  <AirportCombpBox hidden data={res.data.airports} contentPages={contentPages}/>
          
         
         
        </div>

      
      </div>
    </div>
  );
};

export default Header;
