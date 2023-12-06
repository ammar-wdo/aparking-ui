"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { SlidersHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

import React from "react";
import { Button } from "../ui/button";
import { useFilter } from "./filter.hook";
import { Separator } from "../ui/separator";

type Props = {};

const Filter = (props: Props) => {
  const {
    addKey,
    addLocation,
    addService,
    serviceActive,
    keyActive,
    locationActive,
    electric,
    toggleElectric,
    pushFilter,
    open,
    setOpen,
  } = useFilter();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex items-center gap-3 border transition  border-[#003580] text-[#003580]  bg-white rounded-xl cursor-pointer p-3  px-6 ml-4  justify-center">
        <SlidersHorizontal className="w-5 h-5" />{" "}
        <span className="font-semibold">Filter</span>
      </SheetTrigger>

      <SheetContent side={"left"} className="p-0">
        <SheetHeader>
          <SheetTitle className="p-4">Filter the results</SheetTitle>
        </SheetHeader>
        <div className=" flex flex-col  h-[95vh] pb-2">
          <div className="mt-6 ">
            <h3 className="p-1 px-4 text-sm text-neutral-500 font-semibold ">
              Parking Service
            </h3>
            <div className="px-4">
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox
                  id="valet"
                  name="valet"
                  checked={!!serviceActive("valet")}
                  onClick={() => addService("valet")}
                />
                <label
                  htmlFor="valet"
                  className="text-xs font-medium leading-none  "
                >
                  Valet-parking
                </label>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox
                  id="shuttle"
                  name="shuttle"
                  checked={!!serviceActive("shuttle")}
                  onClick={() => addService("shuttle")}
                />
                <label
                  htmlFor="shuttle"
                  className="text-xs font-medium leading-none  "
                >
                  Shuttle-park
                </label>
              </div>
            </div>
          </div>
          <Separator className="mt-6" />

          <div className="mt-6">
            <h3 className="p-1 px-4 text-sm text-neutral-500 font-semibold ">
              Parking location
            </h3>
            <div className="px-4">
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox
                  id="Indoor"
                  name="indoor"
                  checked={!!locationActive("INDOOR")}
                  onClick={() => addLocation("INDOOR")}
                />
                <label
                  htmlFor="Indoor"
                  className="text-xs font-medium leading-none  "
                >
                  Indoor
                </label>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox
                  id="Outdoor"
                  name="outdoor"
                  checked={!!locationActive("OUTDOOR")}
                  onClick={() => addLocation("OUTDOOR")}
                />
                <label
                  htmlFor="Outdoor"
                  className="text-xs font-medium leading-none  "
                >
                  Outdoor
                </label>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox
                  id="location-both"
                  name="both"
                  checked={!!locationActive("BOTH")}
                  onClick={() => addLocation("BOTH")}
                />
                <label
                  htmlFor="location-both"
                  className="text-xs font-medium leading-none  "
                >
                  Both
                </label>
              </div>
            </div>
          </div>
          <Separator className="mt-6" />

          <div className="mt-6">
            <h3 className="p-1 px-4 text-sm text-neutral-500 font-semibold ">
              Electric charge
            </h3>
            <div className="px-4">
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox
                  id="charge"
                  checked={!!electric}
                  onClick={() => toggleElectric()}
                />
                <label
                  htmlFor="charge"
                  className="text-xs font-medium leading-none  "
                >
                  Electric charge
                </label>
              </div>
            </div>
          </div>

          <Separator className="mt-6" />
          <div className="mt-6">
            <h3 className="p-1 px-4 text-sm text-neutral-500 font-semibold ">
              Car keys
            </h3>
            <div className="px-4">
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox
                  id="Keep"
                  name="keep"
                  checked={!!keyActive("KEEP")}
                  onClick={() => addKey("KEEP")}
                />
                <label
                  htmlFor="Keep"
                  className="text-xs font-medium leading-none  "
                >
                  Keep
                </label>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox
                  id="Leave"
                  name="leave"
                  checked={!!keyActive("LEAVE")}
                  onClick={() => addKey("LEAVE")}
                />
                <label
                  htmlFor="Leave"
                  className="text-xs font-medium leading-none  "
                >
                  Leave
                </label>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox
                  id="key-both"
                  name="both"
                  checked={!!keyActive("BOTH")}
                  onClick={() => addKey("BOTH")}
                />
                <label
                  htmlFor="key-both"
                  className="text-xs font-medium leading-none  "
                >
                  Both
                </label>
              </div>
            </div>
          </div>

          <Button
            variant={"siteTwo"}
            className="mt-auto mx-4 rounded-full"
            onClick={pushFilter}
          >
            Filter
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Filter;
