"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Airport } from "@/schemas";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import NavLinks from "./nav-links";
import { AirportCommand } from "./airports-command";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

type Props = {
  contentPages?: boolean;
  airports: Airport[];
};

const links = [
  {
    label: "home",
    link: "/",
  },

  {
    label: "contact",
    link: "/contact",
  },
];

const MobileSheet = ({ contentPages, airports }: Props) => {
  const [show, setShow] = useState(false);
  return (
    <Sheet >
      <SheetTrigger name="menu" title="menu" aria-label="menu" className="flex md:hidden">
        {" "}
        <Menu
          name="Menu"
          className={cn("w-8 h-8 ", contentPages ? "text-white" : "text-site")}
        />
      </SheetTrigger>
      <SheetContent className="z-[99999] w-full" side={"right"} >
    
        <div className="mt-12 text-left w-full">
          {!show ? (
            <nav
              className={cn(
                " gap-6  px-1 md:flex hidden",
                "flex flex-col w-full "
              )}
            >
              {links.map(({ label, link }, i) => (
                <Link
                key={label}
                  href={link}
                  className={cn(
                    "capitalize flex items-center relative  text-sm sm:text-base shrink-0  font-medium text-site border-b w-full p-3"
                  )}
                >
                  {label}{" "}
                </Link>
              ))}

              <button
                onClick={() => setShow(true)}
                className="capitalize flex items-center relative justify-between  text-sm sm:text-base shrink-0  w-full p-3 border-b font-medium text-site"
              >
                Airports <span><ChevronRight  className="text-site"/></span>
              </button>
            </nav>
          ) : (
            <div>
              {" "}
              <button
                onClick={() => setShow(false)}
                className="flex items-center mb-4 text-site font-semibold"
              >
                <ChevronLeft className="mr-3 " />
                Back
              </button>
              <AirportCommand data={airports!} />
            </div>
          )}
        </div>
      </SheetContent>
    
    </Sheet>
  );
};

export default MobileSheet;
