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
  airport:string
};

const SearchFeed = async ({
  startDate,
  endDate,
  startTime,
  endTime,
  airport
}: Props) => {
  const url = qs.stringifyUrl({
    url: ALL_SERVICES,
    query: {
      airport,
      startDate,
      endDate,
      startTime,
      endTime,
    },
  });


 
  type FullService =Service &{totalPrice:number}
  const services = await axios.get(url);
  const data = services.data ;
  const validServices = data.valid.filter((service:Service &{totalPrice:number})=>service.totalPrice > 0)
  const invalidServices = [...data.invalid,...data.valid.filter((service:Service &{totalPrice:number})=>service.totalPrice === 0)]
  const total = data.total



console.log("Feed",startDate,endDate)
  return (
    <div>
<p className="py-4 text-lg font-semibold text-neutral-500 mt-12">Available {validServices.length} of {total}</p>
{!data.valid && !data.invalid && <p>no data</p>}


 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-10 mt-6 relative z-10">
     
      
       {validServices?.map((service:Service &{totalPrice:number}) => (
      <ListCard key={service?.id} service={service} />
      ))}
  

     

    
    </div>

    {!!invalidServices.length && <p className="mt-12">Unavailable</p>}
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-10 mt-4 relative z-10">
 {invalidServices?.map((service:Service &{totalPrice:number}) => (
     <ListCard invalid={true} key={service?.id} service={service} />
      ))}

     

    
    </div>
    </div>
   
  );
};

export default SearchFeed;
