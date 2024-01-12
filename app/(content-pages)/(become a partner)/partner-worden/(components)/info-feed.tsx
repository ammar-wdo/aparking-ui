'use client'

import { Button } from "@/components/ui/button";
import { Mail, SearchCheck, UserCheck } from "lucide-react";
import React from "react";

type Props = {};

const InfoFeed = (props: Props) => {
  const options = [
    {
      label: "Contact",
      description: "Send us a message telling us that you want to register as a partner",
      icon: <Mail  className="text-white w-5 h-5"/>
    },
    {
      label: "Review",
      description: "We will review your application and contact you to discuss the collaboration",
      icon: <SearchCheck  className="text-white w-5 h-5"/>
    },
    {
      label: "Welcome",
      description: "Welcome a board! On to a successful collaboration",
   icon:<UserCheck  className="text-white w-5 h-5"/>
    },
  ];
  return (
    <div className="py-12 bg-gray-100">
      <div className="container">
      <h3 className="text-site font-bold text-3xl">How it works</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {options.map((option) => (
        <div key={option.label} className="rounded-lg overflow-hidden bg-white p-8 flex flex-col gap-4 items-center text-center">
         <span className="bg-site rounded-full w-10 h-10 flex items-center justify-center  ">{option.icon}</span>
         <h3 className="text-neutral-500 text-lg font-bold">{option.label}</h3>
         <p className="text-neutral-500 text-sm">{option.description}</p>
      
        </div>
      ))}
    </div>
      </div>

    </div>
  
  );
};

export default InfoFeed;
