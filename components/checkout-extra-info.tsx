import { BadgeCheck, PlusCircle, ShieldCheck, TimerReset } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {};

const CheckoutExtraInfo = (props: Props) => {
  const elements = [
    {
      title: "Secure payment",
      icon: <ShieldCheck className="text-site w-8 h-8 shrink-0" />,
    },
    {
      title: "All parking areas are throughly checked",
      icon: <BadgeCheck className="text-site w-8 h-8 shrink-0" />,
    },
    {
      title: "Free cancelation up to 24 hours in advance",
      icon: <TimerReset className="text-site w-8 h-8 shrink-0" />,
    },
    {
      title: "Access to extra services with your parking",
      icon: <PlusCircle className="text-site w-8 h-8 shrink-0" />,
    },
  ];
  return (
    <div className="mt-4">
      <div className="bg-white p-6 flex flex-col gap-7">
        {elements.map((el) => (
          <div key={el.title} className="flex items-center gap-4 ">
            {el.icon}
            <p>{el.title}</p>
          </div>
        ))}
      </div>
      <div className="bg-white p-6 mt-4">
        <p className="font-semibold text-lg">Do you have any questions?</p>
        <p className="mt-4 ">We are happy to help you! <Link target="_blank" className="underline text-blue-500" href={'/contact-us'}>Contact us</Link></p>

      </div>
    </div>
  );
};

export default CheckoutExtraInfo;
