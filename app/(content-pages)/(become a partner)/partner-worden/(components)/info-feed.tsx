'use client'

import { Button } from "@/components/ui/button";
import { Mail, SearchCheck, UserCheck } from "lucide-react";
import React from "react";

type Props = {};

const InfoFeed = (props: Props) => {
  const options = [
    {
      label: "Contact",
      description: "Stuur ons een bericht waarin u aangeeft dat u zich wilt aanmelden als partner",
      icon: <Mail  className="text-white w-5 h-5"/>
    },
    {
      label: "Beoordeling",
      description: "Wij beoordelen uw aanvraag en nemen contact met u op om de samenwerking te bespreken",
      icon: <SearchCheck  className="text-white w-5 h-5"/>
    },
    {
      label: "Welkom",
      description: "Welkom aan boord! Op naar een succesvolle samenwerking",
   icon:<UserCheck  className="text-white w-5 h-5"/>
    },
  ];
  return (
    <div className="py-12 bg-gray-100">
      <div className="container">
      <h3 className="text-site font-bold text-3xl">Hoe werkt het</h3>
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
