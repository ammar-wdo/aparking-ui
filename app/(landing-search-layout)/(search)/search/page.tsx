import SearchForm from "@/app/(landing-search-layout)/(landingPage)/(components)/(search-form)/search-form";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ALL_SERVICES, GET_AIRPORTS } from "@/links";

import axios from "axios";
import format from "date-fns/format";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import qs from "query-string";
import Banner from "@/app/(landing-search-layout)/(landingPage)/(components)/banner";
import SearchFeed from "./(components)/searchFeed";
import SearchFeedSkeleton from "./(components)/searchFeed-skeleton";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = async ({ searchParams }: Props) => {
  const res = await axios.get(GET_AIRPORTS);

  const airport = searchParams["airport"] as string;
  const startDate = searchParams["startDate"] as string;
  const endDate = searchParams["endDate"] as string;
  const startTime = searchParams["startTime"] as string;
  const endTime = searchParams["endTime"] as string;

  if (!airport || !startDate || !endDate || !startTime || !endTime)
    return redirect("/");

  console.log(
    "startDate",
    new Date(startDate),
    "endDate",
    new Date(endDate),
    "startTime",
    startTime,
    "endTime",
    endTime
  );

  return (
    <div className="bg-gray-200 pb-10 ">
      <Banner noForm={true}>
        <p className="text-white">{`From ${format(
          new Date(startDate),
          "dd-MM-yyyy"
        )} at ${startTime} to ${format(
          new Date(endDate),
          "dd-MM-yyyy"
        )} at ${endTime}`}</p>
      </Banner>

      <div className="container">
        <SearchForm
          airports={res.data.airports}
          airportProp={airport}
          startDateProp={new Date(startDate)}
          endDateProp={new Date(endDate)}
          startTimeProp={startTime}
          endTimeProp={endTime}
          change={true}
        />
        <Suspense fallback={<SearchFeedSkeleton />}>
          <SearchFeed
            airport={airport}
            startDate={startDate}
            endDate={endDate}
            startTime={startTime}
            endTime={endTime}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
