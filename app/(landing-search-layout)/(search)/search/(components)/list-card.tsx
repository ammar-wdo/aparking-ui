import { cn } from "@/lib/utils";

import Link from "next/link";
import React from "react";
import qs from 'query-string'
import { Service } from "@/schemas";

type Props = {
  service: Service;
  invalid?:boolean
};

const ListCard = ({ service,invalid }: Props) => {

  const url = qs.stringifyUrl({
    url:`/checkout/${service.id}`,
    query:{
      startDate:service.startDate,
      endDate:service.endDate,
      startTime:service.startTime,
      endTime:service.endTime,
      totalPrice:service.totalPrice,
     
      
    }
  })

  console.log(service.totalPrice)
  return (
    <div className={cn("p-5 bg-white  rounded-md flex flex-col gap-5",invalid && 'cursor-not-allowed grayscale-0')}>
      <p>{service.name}</p>
      <p>${service.totalPrice}</p>

    

      <div className="flex items-center gap-3 mt-auto">
        <Link
          className={cn("w-1/2", !service.available && "cursor-not-allowed")}
          href={service.available ? url : ""}
        >
          <button
            className={cn(
              "w-full rounded-xl bg-indigo-500 hover:bg-indigo-500/90  transition text-sm flex-shrink-0  py-2 text-white px-3"
            )}
            disabled={!service.available}
          >
            Details
          </button>
        </Link>
        <Link
          className={cn("w-1/2", !service.available && "cursor-not-allowed")}
          href={service.available ? url : ""}
        >
          <button
            className={
              "w-full rounded-xl bg-orange-600 py-2 text-white transition hover:bg-orange-600/90 text-sm flex-shrink-0 px-3"
            }
            disabled={!service.available}
          >
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ListCard;
