import { cn } from "@/lib/utils";
import { ALL_SERVICES } from "@/links";
import { Service } from "@/types";
import axios from "axios";
import Link from "next/link";
import qs from "query-string";
import ListCard from "./list-card";

type Props = {
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
};

const SearchFeed = async ({
  startDate,
  endDate,
  startTime,
  endTime,
}: Props) => {
  const url = qs.stringifyUrl({
    url: ALL_SERVICES,
    query: {
      startDate,
      endDate,
      startTime,
      endTime,
    },
  });

  const services = await axios.get(url);
  const data = services.data as Service[];


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-10 mt-20 relative z-10">
      {!data.length ? <p>no data</p>:  data?.map((service) => (
     service.totalPrice > 0 && <ListCard key={service?.id} service={service} />
      ))}

    
    </div>
  );
};

export default SearchFeed;
