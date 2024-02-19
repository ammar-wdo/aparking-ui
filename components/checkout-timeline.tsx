"use client";

import { cn } from "@/lib/utils";
import {
  Check,
  Mail,
  MapPin,
  MapPinIcon,
  PlaneTakeoff,
  TimerReset,
} from "lucide-react";
import React, { useState } from "react";

type Props = {
  valet?: boolean;
};

const CheckoutTimeline = ({ valet }: Props) => {


  const elements = [
    {
      id: "1",
      title: "Binnen enkele minuten ontvangst bevestigingsmail.",
      icon: <Mail className="w-8 h-8 text-site" />,
    },
    {
      id: "2",
      title: "Tot 24 uur van te voren gratis annuleren/wijzigen.",
      icon: <TimerReset className="w-8 h-8 text-site" />,
    },
    {
      id: "3",
      title: valet
        ? "Op de dag van vertrek rijdt u naar de parkeeraanbieder"
        : "Op de dag van vertrek rijdt u naar de parkeeraanbieder",
      icon: valet ? (
        <PlaneTakeoff className="w-8 h-8 text-site" />
      ) : (
        <MapPinIcon className="w-8 h-8 text-site" />
      ),
    },
    {
      id: "4",
      title: "Bij terugkomst wordt staat de parkeeraanbieder voor u klaar.",
      icon: <Check className="w-8 h-8 text-site" />,
    },
  ];
  return (
    <div className="container px-[16px]">
      <div className=" bg-white p-6 checkoutElement">
        <h3 className="text-2xl font-bold border-b pb-6">Wat gaat hierna gebeuren?</h3>
      
        <div className="flex  justify-between gap-2 mt-3  flex-col lg:flex-row relative">
          <div className="hidden lg:block z-10 absolute h-4 w-full border-t border-dashed top-14  border-site left-0 origin-center  "></div>
          {elements.map((el, index) => (
            <div
              key={el.id}
              className="flex  transition lg:flex-col items-center text-center gap-6 relative z-20 bg-white p-2 lg:py-8 rounded-2xl "
           
            >
              <span className="flex items-center justify-center bg-slate-100 rounded-xl w-16 h-16 text-white shrink-0">
                {el.icon}
              </span>
              <p className="text-sm lg:max-w-[200px]">{el.title}</p>
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default CheckoutTimeline;
