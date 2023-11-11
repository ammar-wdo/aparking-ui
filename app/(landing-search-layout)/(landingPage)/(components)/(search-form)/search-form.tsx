"use client";

import { useRef, useState } from "react";
import { DatePicker } from "./date-picker";
import { useSearchForm } from "./search-form.hook";
import TimeSelect from "./time-select";
import { cn } from "@/lib/utils";

type Props = {
  startDateProp?:Date,
  endDateProp?:Date,
  startTimeProp?:string,
  endTimeProp?:string,
  change?:boolean

};

const SearchForm = ({startDateProp,endDateProp,startTimeProp,endTimeProp,change}: Props) => {
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
    setStartTime,setEndTime,
    handleClick
  } = useSearchForm({startDateProp,endDateProp,startTimeProp,endTimeProp});

  return (
    <div className="text-white ">
      {<div className={cn("fixed inset-0 opacity-0 duration-300 bg-black/60 delay-100",(openStart||openEnd||openStartTime||openEndTime) && 'opacity-100 ')}></div>}
   

      <section className="rounded-xl flex lg:flex-row flex-col overflow-hidden mt-10 gap-1 relative ">
        <div className="grid lg:grid-cols-3 flex-1 gap-1">
          <div className="p-4 bg-white flex flex-col gap-1 pb-1">
            <h3 className="text-black font-semibold">Airport</h3>
            <span className="text-zinc-500 text-xs">choose</span>
          </div>
          <div className="p-4 bg-white flex flex-col gap-1 pb-1">
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
              open={openStartTime} setOpen={setOpenStartTime} time={startTime} setTime={setStartTime} times={timeArray} />
            </div>
          </div>
          <div className="p-4 bg-white flex flex-col gap-1 pb-1">
            <h3 className="text-black font-semibold">To</h3>
            <div className="flex items-center gap-2">
            <DatePicker
              open={openEnd}
              setOpen={setOpenEnd}
              fromDate={startDate}
              date={endDate}
              setDate={setEndDate}
            />
            <TimeSelect open={openEndTime} setOpen={setOpenEndTime} time={endTime} setTime={setEndTime} times={timeArray} />
            </div>
           
          </div>
        </div>
        <button onClick={handleClick} className="px-8  bg-orange-600 hover:bg-orange-600/90 transition  text-white capitalize py-3">
         {change ?  "Change":"Search"}
        </button>
      </section>
    </div>
  );
};

export default SearchForm;
