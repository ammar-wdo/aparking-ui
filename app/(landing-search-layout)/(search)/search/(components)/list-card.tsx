import { cn } from "@/lib/utils";

import Link from "next/link";
import React from "react";
import qs from 'query-string'
import { Service } from "@/schemas";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Props = {
  service:Service &{totalPrice:number,parkingDays:number};
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
    <div className={cn(" bg-white  rounded-[2px] border-b-2 border-yellow-500 ",invalid && 'cursor-not-allowed opacity-50 grayscale-[10] pointer-events-none')}>
      <h3 className="font-bold text-lg text-center p-7">Routes Airport Parking (ORD)</h3>
     <Separator />
     <div className="py-24">
      {/* highlights */}
     </div>
     <div className="bg-gray-50 p-4 py-2">
    
      {!invalid &&(<div className="text-center">
        <p className="text-gray-500 text-xs">Price for {service.parkingDays} day(s)</p>
        <p className="font-bold text-3xl mt-1">€{service.totalPrice}</p>
        </div>)}

      <Button
          variant={'siteTwo'}
        className={cn("w-full text-lg py-7 rounded-[3px] mt-2")}
           
          >
            <Link href={url}>
              {invalid? 'Not available' : 'Book Now'}
            
            </Link>
           
          </Button>
          <p className="text-gray-500 text-xs text-center pt-3">Cancel for free up to 24 hours in advance</p>
     </div>
   

    

    
    </div>
  );
};

export default ListCard;
