"use client";

import { useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { ALL_SERVICES } from "@/links";

import Filter from "@/components/sheets/filter";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { DatePicker } from "@/app/(landing-search-layout)/(landingPage)/(components)/(search-form)/date-picker";
import TimeSelect from "@/app/(landing-search-layout)/(landingPage)/(components)/(search-form)/time-select";
import { useCheckForm } from "./service-check-hook";

type Props = {
  change?: boolean;
  serviceId:string,
  startDateProp:string | undefined,
  endDateProp:string | undefined,
  startTimeProp:string | undefined,
  endTimeProp:string | undefined
};

const ServiceCheckForm = ({ change,serviceId,startDateProp,endDateProp,startTimeProp,endTimeProp }: Props) => {
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    openStart,
    setOpenStart,
    openEnd,
    setOpenEnd,
    timeArray,
    startTime,
    endTime,
    openStartTime,
    setOpenStartTime,
    openEndTime,
    setOpenEndTime,
    setStartTime,
    setEndTime,
    handleClick,
    isLoading,
  } = useCheckForm({ change,serviceId ,startDateProp,endDateProp,startTimeProp,endTimeProp});

  return (
    <div className="text-white ">
      {
        <div
          className={cn(
            "fixed inset-0 opacity-0 duration-300 bg-black/60 delay-100",
            openStart || openEnd || openStartTime || openEndTime
              ? "opacity-100 z-20"
              : "-z-10"
          )}
        ></div>
      }

      <section className="rounded-xl flex lg:flex-row flex-col overflow-hidden mt-10 gap-1 relative z-30">
        <div className={cn("grid lg:grid-cols-2 flex-1 gap-1")}>
          <div className="p-2 bg-white flex flex-col gap-1 pb-1">
            <h3 className="text-black font-semibold">From</h3>
            <div className="flex items-center gap-2">
              {" "}
              <DatePicker
                open={openStart}
                setOpen={setOpenStart}
                date={startDate}
                setDate={setStartDate}
              />
              <TimeSelect
                open={openStartTime}
                setOpen={setOpenStartTime}
                time={startTime}
                setTime={setStartTime}
                times={timeArray}
              />
            </div>
          </div>
          <div className="p-2 bg-white flex flex-col gap-1 pb-1">
            <h3 className="text-black font-semibold">To</h3>
            <div className="flex items-center gap-2">
              <DatePicker
                open={openEnd}
                setOpen={setOpenEnd}
                fromDate={startDate}
                date={endDate}
                setDate={setEndDate}
              />
              <TimeSelect
                open={openEndTime}
                setOpen={setOpenEndTime}
                time={endTime}
                setTime={setEndTime}
                times={timeArray}
              />
            </div>
          </div>
        </div>
        <button
          disabled={isLoading}
          onClick={handleClick}
          className="px-8 flex items-center
           justify-center disabled:opacity-50
            disabled:cursor-default bg-[#FEBA02]
             hover:bg-[#FEBA02]/90 transition  text-[#003580] font-semibold  capitalize py-3   lg:py-0 rounded-xl lg:rounded-l-none rounded-tl-none rounded-tr-none lg:rounded-tr-xl"
        >
          {change ? "Change" : "Check "}
          {isLoading && (
            <Loader className="ml-3 h-3 w-3 text-[#003580] animate-spin" />
          )}
        </button>
        {change && <Filter />}
      </section>
    </div>
  );
};

export default ServiceCheckForm;
