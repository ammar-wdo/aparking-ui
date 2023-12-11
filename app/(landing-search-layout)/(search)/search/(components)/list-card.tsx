import { cn } from "@/lib/utils";

import Link from "next/link";
import React from "react";
import qs from "query-string";
import { Service } from "@/schemas";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Banknote,
  BatteryChargingIcon,
  Bus,
  Car,
  CheckCircle,
  CreditCard,
  HelpCircle,
  Info,
  KeyIcon,
  Loader,
  ParkingCircle,
  Star,
  Warehouse,
} from "lucide-react";

type Props = {
  service: Service & {
    totalPrice?: number;
    parkingDays?: number;
    entity: { entityName: string; airport: { name: string } };
  };
  invalid?: boolean;
  show?: boolean;
};

const theIcons: { [key: string]: React.ReactNode } = {
  car: <Car className="w-5 h-5 " />,
  bus: <Bus className="w-5 h-5 " />,
  key: <KeyIcon className="w-5 h-5 " />,
  info: <Info className="w-5 h-5 " />,
  check: <CheckCircle className="w-5 h-5 " />,
  star: <Star className="w-5 h-5 " />,
  electric: <BatteryChargingIcon className="w-5 h-5 " />,
  payment: <CreditCard className="w-5 h-5 " />,
  cash: <Banknote className="w-5 h-5 " />,
  parking: <ParkingCircle className="w-5 h-5 " />,
  indoor: <Warehouse className="w-5 h-5 " />,
};

const ListCard = ({ service, invalid, show }: Props) => {
  const url = qs.stringifyUrl({
    url: `/checkout/${service.id}`,
    query: {
      startDate: service.startDate,
      endDate: service.endDate,
      startTime: service.startTime,
      endTime: service.endTime,
      totalPrice: service.totalPrice,
    },
  });

  console.log(service.totalPrice);
  return (
    <div
      className={cn(
        " bg-white  rounded-[2px] border-b-2 border-t border-l border-r flex flex-col border-neutral-300 border-b-yellow-500 ",
        invalid &&
          "cursor-not-allowed opacity-50 grayscale-[10] pointer-events-none"
      )}
    >
      <h3 className="font-bold text-lg text-center p-7">
        Routes Airport Parking (ORD)
      </h3>
      <Separator className="bg-neutral-300" />
      <div className="py-4 px-6 space-y-3 flex-1">
        {service.highlights?.map((hightlight) => (
          <div key={hightlight.label} className="flex gap-3 items-center">
            <span>{theIcons[hightlight.icon]}</span>
            <p className="text-sm">{hightlight.label}</p>
          </div>
        ))}
        {!show && (
          <div className="flex gap-3 items-center">
            <span className="p-1 rounded-full flex items-center justify-center bg-[#003580] w-5 h-5 text-white text-sm">
              ?
            </span>
            <Link
              className="text-blue-500 font-light text-sm"
              href={`/${service.entity.airport.name}/${service.entity.entityName}/${service.name}`}
            >
              Details
            </Link>
          </div>
        )}
      </div>
      <div className="bg-gray-50 p-4 py-3 flex flex-col  border-t">
        {!invalid && !show && (
          <div className="text-center">
            <p className="text-gray-500 text-xs">
              Price for {service.parkingDays} day(s)
            </p>
            <p className="font-bold text-3xl mt-1">€{service.totalPrice}</p>
          </div>
        )}

        {!show ? (
          <Button
            asChild
            variant={"siteTwo"}
            className={cn("w-full text-lg py-7 rounded-[3px] mt-2")}
          >
            <Link href={url}>{invalid ? "Not available" : "Book Now"}</Link>
          </Button>
        ) : (
          <Button
            asChild
            variant={"siteTwo"}
            className={cn("w-full text-lg py-7 rounded-[3px] mt-2")}
          >
            <Link
              href={`/${service.entity.airport.name}/${service.entity.entityName}/${service.name}`}
            >
              More details
            </Link>
          </Button>
        )}
        <p className="text-gray-500 text-xs text-center pt-3 mt-auto ">
          Cancel for free up to 24 hours in advance
        </p>
      </div>
    </div>
  );
};

export default ListCard;
