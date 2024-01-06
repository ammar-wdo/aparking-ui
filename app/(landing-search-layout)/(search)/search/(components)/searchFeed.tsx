import { cn } from "@/lib/utils";
import { ALL_SERVICES } from "@/links";

import axios from "axios";
import Link from "next/link";
import qs from "query-string";
import ListCard from "./list-card";
import { Service } from "@/schemas";
import SearchScroller from "./scroller";
import ProgressBar from "@/components/progress-bar";
import { AlarmCheck, AlertTriangle } from "lucide-react";

type Props = {
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  airport:string;
  serviceType:string[] | undefined;
  location:string[] | undefined;
  carsKey:string[] | undefined,
  electric:string | undefined
};

const SearchFeed = async ({
  startDate,
  endDate,
  startTime,
  endTime,
  airport,
  serviceType,
  location,
  carsKey,
  electric
}: Props) => {
  const url = qs.stringifyUrl({
    url: ALL_SERVICES,
    query: {
      airport,
      startDate,
      endDate,
      startTime,
      endTime,
      serviceType,
      location,
      carsKey,
      electric
    },
  });


 
  type FullService =Service &{totalPrice:number,parkingDays:number, entity: { entityName: string,slug:string, airport: { name: string,slug:string} },totalReviews:number}
  const services = await axios.get(url);
  const data = services.data ;
  const validServices = data.valid
  const invalidServices = data.invalid
  const total = data.total
  const totalValid = data.totalValid
  const totalInvalid = data.totalInvalid
  const message = data.response




console.log('data',data)


  return (
    <div className="">


     
       <SearchScroller />
{!totalValid && !totalInvalid && <p className="p-5 text-center text-xl capitalize font-semibold text-gray-400">no data</p>}
{!!totalValid&&<p className="py-4 text-lg font-semibold text-neutral-500 mt-12">Available {totalValid} of {total}</p>}
{!!message && <p className="p-4 flex justify-between text-rose-500 bg-rose-500/20 border border-rose-500 my-4">{message}<AlertTriangle /></p>}


 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10 mt-6 relative z-10">
     
      
       {validServices?.map((service:FullService) => (
      <ListCard key={service?.id} service={service} />
      ))}
  

     

    
    </div>

    {!!totalInvalid&& <p className="py-4 text-lg font-semibold text-neutral-500 mt-12">Unavailable {totalInvalid} of {total}</p>}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   gap-10 mt-4 relative z-10">
 {invalidServices?.map((service:FullService) => (
     <ListCard invalid={true} key={service?.id} service={service} />
      ))}

     

    
    </div>
   
    </div>
   
  );
};

export default SearchFeed;
