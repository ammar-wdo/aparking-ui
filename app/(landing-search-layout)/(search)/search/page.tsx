import SearchForm from "@/app/(landing-search-layout)/(landingPage)/(components)/(search-form)/search-form";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ALL_SERVICES } from "@/links";
import { Service } from "@/types";
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
  const startDate = searchParams["startDate"] as string;
  const endDate = searchParams["endDate"] as string;
  const startTime = searchParams["startTime"] as string;
  const endTime = searchParams["endTime"] as string;

  if (!startDate || !endDate || !startTime || !endTime) return redirect("/");

  return (
    <div className="bg-gray-200 pb-10 ">
      <Banner noForm={true}>
        <p className="text-white">{`From ${format(
          new Date(startDate),
          "MMMM d, yyyy"
        )} at ${startTime} to ${format(
          new Date(endDate),
          "MMMM d,y"
        )} at ${endTime}`}</p>
      </Banner>

      <div className="container">
        <SearchForm
          startDateProp={new Date(startDate)}
          endDateProp={new Date(endDate)}
          startTimeProp={startTime}
          endTimeProp={endTime}
          change={true}
        />
<Suspense fallback={<SearchFeedSkeleton />}>
<SearchFeed
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
