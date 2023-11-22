import React from "react";
import Header from "../../../../components/header";
import SearchForm from "./(search-form)/search-form";
import { cn } from "@/lib/utils";

type Props = {children:React.ReactNode
noForm?:boolean
};

const Banner = ({children,noForm}: Props) => {
  return (
    <div className={cn("min-h-[600px] bg-indigo-500",noForm && 'min-h-[300px]')}>
      <div className={"container"}>
      
        <div className={cn("xl:px-32 text-white pt-20",noForm && "xl:px-0")}>
        <div>
          {children}
        </div>
      
       { !noForm && <SearchForm />}
        </div>
      
      </div>
    </div>
  );
};

export default Banner;