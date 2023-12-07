import { cn } from "@/lib/utils";
import { ALL_SERVICES } from "@/links";

import axios from "axios";
import Link from "next/link";
import qs from "query-string";
import ListCard from "./list-card";
import { Service } from "@/schemas";

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


 
  type FullService =Service &{totalPrice:number,parkingDays:number}
  const services = await axios.get(url);
  const data = services.data ;
  const validServices = data.valid.filter((service:FullService)=>service.totalPrice > 0)
  const invalidServices = [...data.invalid,...data.valid.filter((service:FullService)=>service.totalPrice === 0)]
  const total = data.total



console.log(url)
  return (
    <div>
{!data.valid.length && !data.invalid.length && <p className="p-5 text-center text-xl capitalize font-semibold text-gray-400">no data</p>}
{!!validServices.length&&<p className="py-4 text-lg font-semibold text-neutral-500 mt-12">Available {validServices.length} of {total}</p>}


 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10 mt-6 relative z-10">
     
      
       {validServices?.map((service:FullService) => (
      <ListCard key={service?.id} service={service} />
      ))}
  

     

    
    </div>

    {!!invalidServices.length && <p className="py-4 text-lg font-semibold text-neutral-500 mt-12">Unavailable {invalidServices.length} of {total}</p>}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   gap-10 mt-4 relative z-10">
 {invalidServices?.map((service:FullService) => (
     <ListCard invalid={true} key={service?.id} service={service} />
      ))}

     

    
    </div>
    </div>
   
  );
};

export default SearchFeed;
