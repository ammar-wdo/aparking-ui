"use client";

import { Button } from "@/components/ui/button";
import { useCrisp } from "@/hooks/crisp-hook";
import Link from "next/link";
import React from "react";

type Props = {};

const Chatfeed = (props: Props) => {
  const { setOpen } = useCrisp();
  const option= 
    {
      label: "Live chat",
      description: "Live chat support",
      onClick: () => {
        setOpen();
      },
    }
  

  ;
  return (

     
        <div key={option.label} className="rounded-lg overflow-hidden">
          <div className="bg-gray-100 p-6 pb-12">
            <h3 className="text-site font-bold text-2xl">{option.label}</h3>
            <p className="text-neutral-500 text-sm">{option.description}</p>
          </div>
      
          
       
            <Button
              onClick={() => (option.onClick ? option.onClick() : () => {})}
              variant={"siteTwo"}
              className="w-full justify-start rounded-none text-xl py-8 "
            >
              Start chat
            </Button>
         
        </div>
   
   
  );
};

export default Chatfeed;
