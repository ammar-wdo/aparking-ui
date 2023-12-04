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
  const data = services.data as FullService[];


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-10 mt-20 relative z-10">
      {!data.length ? <p>no data</p>:  data?.map((service) => (
     service.totalPrice > 0 && <ListCard key={service?.id} service={service} />
      ))}

    
    </div>
  );
};

export default SearchFeed;
