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
      title: "Shortly, you will get a confirmation email.",
      icon: <Mail className="w-8 h-8" />,
    },
    {
      id: "2",
      title: "Change your booking up to 24 hours before you leave.",
      icon: <TimerReset className="w-8 h-8" />,
    },
    {
      id: "3",
      title: valet
        ? "Head to the departure hall."
        : "Drive to the parking lot on your departure day.",
      icon: valet ? (
        <PlaneTakeoff className="w-8 h-8" />
      ) : (
        <MapPinIcon className="w-8 h-8" />
      ),
    },
    {
      id: "4",
      title: "Your car will be ready for you when you come back.",
      icon: <Check className="w-8 h-8" />,
    },
  ];
  return (
    <div className="container px-[16px]">
      <div className=" bg-white p-6">
        <h3 className="text-2xl font-bold border-b pb-6">What happens next?</h3>
      
        <div className="flex  justify-between gap-2 mt-3  flex-col lg:flex-row relative">
          <div className="hidden lg:block z-10 absolute h-4 w-full border-t border-dashed top-14  border-site left-0 origin-center  "></div>
          {elements.map((el, index) => (
            <div
              key={el.id}
              className="flex cursor-pointer hover:bg-gray-100 transition lg:flex-col items-center text-center gap-6 relative z-20 bg-white p-2 lg:py-8 rounded-2xl "
           
            >
              <span className="flex items-center justify-center bg-site rounded-xl w-12 h-12 text-white shrink-0">
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
