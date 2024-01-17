import { BadgeCheck, PlusCircle, ShieldCheck, TimerReset } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {};

const CheckoutExtraInfo = (props: Props) => {
  const elements = [
    {
      title: "Veilige betaling",
      icon: <ShieldCheck className="text-site w-8 h-8 shrink-0" />,
    },
    {
      title: "Alle parkeerterreinen worden grondig gecontroleerd",
      icon: <BadgeCheck className="text-site w-8 h-8 shrink-0" />,
    },
    {
      title: "Gratis annuleren tot 24 uur van tevoren",
      icon: <TimerReset className="text-site w-8 h-8 shrink-0" />,
    },
    {
      title: "Toegang tot extra services bij uw parkeerplaats",
      icon: <PlusCircle className="text-site w-8 h-8 shrink-0" />,
    },
  ];
  return (
    <div className="mt-4 ">
      <div className="bg-white p-6  flex flex-col gap-7 checkoutElement">
        {elements.map((el) => (
          <div key={el.title} className="flex items-center gap-4 ">
            {el.icon}
            <p>{el.title}</p>
          </div>
        ))}
      </div>
      <div className="bg-white  p-6 mt-4 checkoutElement">
        <p className="font-semibold text-lg">Heeft u nog vragen?</p>
        <p className="mt-4 ">Wij helpen u graag! <Link target="_blank" className="underline text-blue-500" href={'/contact'}>Contact</Link></p>

      </div>
    </div>
  );
};

export default CheckoutExtraInfo;
