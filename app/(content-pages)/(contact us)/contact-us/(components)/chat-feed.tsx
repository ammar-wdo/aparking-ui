"use client";

import { Button } from "@/components/ui/button";
import { useCrisp } from "@/hooks/crisp-hook";
import Link from "next/link";
import React from "react";

type Props = {};

const Chatfeed = (props: Props) => {
  const { setOpen } = useCrisp();
  const options = [
    {
      label: "Live chat",
      description: "Live chat support",
      onClick: () => {
        setOpen();
      },
    },
    {
      label: "Contact center",
      description: "Contact center support",
      number: "111 111 111",
    },
    {
      label: "Whats app",
      description: "Customer support",
      onClick: () => {},
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {options.map((option) => (
        <div key={option.label} className="rounded-lg overflow-hidden">
          <div className="bg-gray-100 p-6 pb-12">
            <h3 className="text-site font-bold text-2xl">{option.label}</h3>
            <p className="text-neutral-500 text-sm">{option.description}</p>
          </div>
          {option.number ? (
            <Button
              variant={"siteTwo"}
              className="w-full justify-start rounded-none text-xl py-8 "
              asChild
            >
              <Link href={`tel:${option.number}`}>+{option.number}</Link>
            </Button>
          ) : (
            <Button
              onClick={() => (option.onClick ? option.onClick() : () => {})}
              variant={"siteTwo"}
              className="w-full justify-start rounded-none text-xl py-8 "
            >
              Start chat
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Chatfeed;
