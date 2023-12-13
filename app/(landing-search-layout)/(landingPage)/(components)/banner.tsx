import React from "react";
import Header from "../../../../components/header";
import SearchForm from "./(search-form)/search-form";
import { cn } from "@/lib/utils";
import axios from "axios";
import { GET_AIRPORTS } from "@/links";
import Image from "next/image";

type Props = {children?:React.ReactNode
noForm?:boolean,
airportId?:string,
airportName?:string
};

const Banner =async ({children,noForm,airportId,airportName}: Props) => {
  const res = await axios.get(GET_AIRPORTS)
 

  return (
    <div className={cn("md:min-h-[500px] min-h-[600px] items-center flex bg-[#003580] relative ",noForm && 'min-h-[500px] ')}>
      <Image fill src='/Banner.jpg' alt="banner" className="object-cover opacity-10 object-center "/>
      <div className={"container "} >
      
        <div className={cn(" text-white relative ",noForm && "xl:px-0")}>
          {airportName && <p className="text-4xl py-3 font-semibold capitalize">{airportName}</p>}
        <div>
          {children}
        </div>
      
       { !noForm && <SearchForm airports={res.data.airports} airportId={airportId} />}
        </div>
      
      </div>
    </div>
  );
};

export default Banner;
