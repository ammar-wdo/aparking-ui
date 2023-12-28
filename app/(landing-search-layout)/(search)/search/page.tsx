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
import { Airport } from "@/schemas";
import ProgressBar from "@/components/progress-bar";
import { getClientDates } from "@/app/(checkout)/checkout/[serviceId]/update/(helpers)/getClientDates";
import { handleTimezone } from "@/lib/timezone-handler";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = async ({ searchParams }: Props) => {
  const res = await axios.get(GET_AIRPORTS);

  const service = searchParams['service'] as string[] | undefined
  const location = searchParams['location'] as string[] | undefined
  const key = searchParams['key'] as string[] | undefined
  const electric = searchParams['electric'] as string | undefined

  const airport = searchParams["airport"] as string;
  const startDate = searchParams["startDate"] as string;
  const endDate = searchParams["endDate"] as string;
  const startTime = searchParams["startTime"] as string;
  const endTime = searchParams["endTime"] as string;





  if (!airport || !startDate || !endDate || !startTime || !endTime )
return redirect("/");

const {clientArrivalDate,clientDepartureDate} = getClientDates(startDate,endDate,startTime,endTime)

if(clientArrivalDate.getTime()>= clientDepartureDate.getTime()) return redirect('/')



  // console.log(
  //   "startDate",
  //   clientArrivalDate.toISOString(),
  //   "endDate",
  //   clientDepartureDate.toISOString(),
  //   "startTime",
  //   startTime,
  //   "endTime",
  //   endTime
  // );


  // console.log(service,location,key,electric)

  const airportName = res.data.airports.find((airportElement:Airport) =>airportElement.slug ===airport) as Airport



const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;



const {adjustedStartDate} = handleTimezone(clientArrivalDate,clientDepartureDate)

console.log(adjustedStartDate,clientArrivalDate)


  return (
    <div className="bg-gray-200 pb-10 min-h-screen">
      <Banner noForm={true} airportName={airportName.name}>
        <p className="text-white">{`From ${format(
          new Date(startDate),
          "dd-MM-yyyy"
        )} at ${startTime} to ${format(
          new Date(endDate),
          "dd-MM-yyyy"
        )} at ${endTime}`}</p>

<p>{JSON.stringify(adjustedStartDate)}</p>
<p>{JSON.stringify(clientArrivalDate)}</p>
        
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
        <Suspense key={`${airport} ${startDate} ${endDate} ${startTime} ${endTime} ${location} ${service} ${key} ${electric}`} fallback={<ProgressBar><SearchFeedSkeleton /></ProgressBar>}>
          <SearchFeed
            airport={airport}
            startDate={startDate}
            endDate={endDate}
            startTime={startTime}
            endTime={endTime}

            carsKey={key}
            serviceType={service}
            location={location}
            electric={electric}
            
            
          />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
