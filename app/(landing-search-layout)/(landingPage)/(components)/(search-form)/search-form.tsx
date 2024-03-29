"use client";

import { useRef, useState } from "react";
import { DatePicker } from "./date-picker";
import { useSearchForm } from "./search-form.hook";
import TimeSelect from "./time-select";
import { cn } from "@/lib/utils";
import { ALL_SERVICES } from "@/links";
import AirportSelect from "./airport-select";
import Filter from "@/components/sheets/filter";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { unstable_noStore as noStore } from 'next/cache';
import AirportCombo from "./airport-combo";

type Props = {
  startDateProp?: Date;
  endDateProp?: Date;
  startTimeProp?: string;
  endTimeProp?: string;
  change?: boolean;
  airports?: { id: string; name: string; slug: string }[];
  airportProp?: string;
  airportSlug?: string;
  serviceId?: string;
  serviceShow?:boolean
};

const SearchForm = ({
  startDateProp,
  endDateProp,
  startTimeProp,
  endTimeProp,
  change,
  airports,
  airportProp,
  airportSlug,
  serviceId,
  serviceShow
  
}: Props) => {
  const {
    airport,
    setAirport,
    openAirport,
    setOpenAirport,
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
  } = useSearchForm({
    startDateProp,
    endDateProp,
    startTimeProp,
    endTimeProp,
    airportProp,
    change,
    airportSlug,
    serviceId,
  });

  noStore()

  return (
    <div className="text-white ">
      {
        <div
          className={cn(
            "fixed inset-0 opacity-0 duration-300 bg-black/60 delay-100",
            openStart || openEnd || openStartTime || openEndTime || openAirport
              ? "opacity-100 z-20"
              : "-z-10"
          )}
        ></div>
      }

      <section className={cn("rounded-xl flex lg:flex-row flex-col overflow-hidden mt-10 gap-1 relative z-30",serviceShow && 'lg:flex-col')}>
        <div
          className={cn(
            "grid lg:grid-cols-3 flex-1 gap-1",
            (airportSlug || serviceId) && "lg:grid-cols-2",serviceShow && 'lg:grid-cols-1'
          )}
        >
          {!airportSlug && !serviceId && !!airports && !!airports.length && (
            <div className="p-2 bg-white flex flex-col gap-1 pb-1">
              <p className="text-black font-semibold pl-2">Vliegveld</p>
              <AirportCombo
                airport={airport!}
                setAirport={setAirport}
                airports={airports}
                open={openAirport}
                setOpen={setOpenAirport}
              />
            </div>
          )}
          <div className="p-2 bg-white flex flex-col gap-1 pb-1">
            <p className="text-black font-semibold">Datum van</p>
            <div className="flex items-center gap-2">
              {" "}
              <DatePicker
                open={openStart}
                setOpen={setOpenStart}
                date={startDate}
                setDate={setStartDate}
                title="Datum van"
              />
              <TimeSelect
              title="Aankomsttijd"
                showAll
                startDate={startDate}
                endDate={endDate}
                startTime={startTime}
                endTime={endTime}
                open={openStartTime}
                setOpen={setOpenStartTime}
                time={startTime}
                setTime={setStartTime}
                times={timeArray}
              />
            </div>
          </div>
          <div className="p-2 bg-white flex flex-col gap-1 pb-1">
            <p className="text-black font-semibold"> Datum tot</p>
            <div className="flex items-center gap-2">
              <DatePicker
                open={openEnd}
                setOpen={setOpenEnd}
                fromDate={startDate}
                date={endDate}
                setDate={setEndDate}
                title="Datum tot"
              />
              <TimeSelect
              title="Vertrektijd"
                open={openEndTime}
                setOpen={setOpenEndTime}
                startTime={startTime}
                endTime={endTime}
                time={endTime}
                setTime={setEndTime}
                times={timeArray}
                startDate={startDate}
                endDate={endDate}
              />
            </div>
          </div>
        </div>
        <button
          disabled={isLoading}
          onClick={handleClick}
          className={cn("px-8 flex items-center justify-center  disabled:opacity-50 disabled:cursor-default bg-[#FEBA02]  hover:bg-[#FEBA02]/90 transition  text-[#003580] font-semibold   capitalize py-3   lg:py-0 rounded-xl lg:rounded-l-none rounded-tl-none   rounded-tr-none lg:rounded-tr-xl",serviceShow &&'lg:rounded-tl-none  lg:py-4 lg:rounded-tr-none')}
        >
          {change ? "Wijzig" : " Zoek"}
          {isLoading && (
            <Loader className="ml-3 h-3 w-3 text-[#003580] animate-spin" />
          )}
        </button>
        {change && <Filter />}
      </section>
    </div>
  );
};

export default SearchForm;
