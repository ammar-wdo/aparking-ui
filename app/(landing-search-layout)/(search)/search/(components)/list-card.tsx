import { cn } from "@/lib/utils";

import Link from "next/link";
import React from "react";
import qs from 'query-string'
import { Service } from "@/schemas";
import { Button } from "@/components/ui/button";

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
    <div className={cn("p-5 bg-white  rounded-md flex flex-col gap-5",invalid && 'cursor-not-allowed grayscale-[10] pointer-events-none')}>
      <p>{service.name}</p>
      {!invalid &&<p>${service.totalPrice}</p>}

    

      <div className={("flex items-center gap-3 mt-auto")}>
  
    
          <Button
          variant={'siteTwo'}
        className="w-full text-lg"
           
          >
            <Link href={url}>
            Book Now
            </Link>
           
          </Button>
    
      </div>
    </div>
  );
};

export default ListCard;
