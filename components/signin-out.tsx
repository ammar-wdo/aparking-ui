"use client";

import { useUser } from "@/hooks/user-hook";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { toast } from "sonner";
import { Loader, User } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  col?: boolean;
  close?: (val: boolean) => void;
};

const SigninOut = ({ col, close }: Props) => {
  return (
    <div>
      <Button
        onClick={() => close && close(false)}
        asChild
        variant={"site"}
        className={cn(
          "rounded-[4px] sm:py-4  hidden md:flex sm:text-base sm:px-6 text-sm py-1 px-3 ",
          col && "flex w-full"
        )}
      >
        <Link href={"/mijn-reservering"}>Mijn reservering</Link>
      </Button>
      <Link className="text-site block md:hidden mr-3 p-1 rounded-full border-[#FEBA02] border-2 bg-[#FEBA02]" href={"/mijn-reservering"}><User /></Link>
    </div>
  );
};
export default SigninOut;
