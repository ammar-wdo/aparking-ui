import React from "react";
import Header from "../../../../components/header";
import SearchForm from "./(search-form)/search-form";
import { cn } from "@/lib/utils";
import axios from "axios";
import { GET_AIRPORTS } from "@/links";

type Props = {children:React.ReactNode
noForm?:boolean
};

const Banner =async ({children,noForm}: Props) => {
  const res = await axios.get(GET_AIRPORTS)
  console.log(res.data)

  return (
    <div className={cn("min-h-[600px] bg-[#003580]",noForm && 'min-h-[300px]')}>
      <div className={"container"}>
      
        <div className={cn("xl:px-32 text-white pt-20",noForm && "xl:px-0")}>
        <div>
          {children}
        </div>
      
       { !noForm && <SearchForm airports={res.data.airports} />}
        </div>
      
      </div>
    </div>
  );
};

export default Banner;
