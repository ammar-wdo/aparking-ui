"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Airport } from "@/schemas";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type Props = {
  data: Airport[];
  hidden?: boolean;
};

export const AirportMenue = ({ data, hidden }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className={cn(
          "flex items-center gap-1  md:text-base text-sm font-medium",
          hidden && "md:flex hidden"
        )}
      >
        Airports <ChevronDown className="w-4 h-4 ml-1" />
      </PopoverTrigger>
      <PopoverContent className="mt-5 flex flex-col items-center">
        {data.map((airport: Airport) => (
          <Button
            variant={"ghost"}
            asChild
            className="w-full justify-start"
            key={airport.id}
            onClick={() => setOpen(false)}
          >
            <Link
              href={`/${airport.slug}`}
              className="shrink-0  text-[#003580]  font-medium"
            >
              {airport.name}
            </Link>
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  );
};
