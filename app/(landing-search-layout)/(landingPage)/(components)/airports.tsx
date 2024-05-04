import { GET_AIRPORTS } from "@/links";
import { Airport } from "@/schemas";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { unstable_noStore as noStore } from 'next/cache';
import AirportsSwiper from "./airports-swiper";

type Props = {
  airportPage?:boolean,
  airportSlug?:string
};




const Airports = async ({airportPage,airportSlug}: Props) => {
  noStore();
  const res = await axios(GET_AIRPORTS);





  return (
    <div className=" py-8 ">
      {!airportPage && <h3 className="text-center text-4xl font-semibold text-[#003580] ">
        Vliegvelden
      </h3>}
      <div className="max-w-[1500px] mx-auto mt-6   hidden md:block  p-4">
    <AirportsSwiper airports={res.data.airports} />
      </div>
      <div className="md:hidden flex items-stretch gap-4 overflow-x-auto w-full relative z-50 p-8">
      {res.data.airports.map((airport: Airport) => {

        if(!!airportSlug && airportSlug === airport.slug) return 
        
        return   <Link key={airport.id} href={`/${airport.slug}`} className="flex-shrink-0 max-w-[270px] w-full  ">
          <div  className="rounded-md overflow-hidden shadow-sm hover:shadow-md transition flex flex-col h-full">
            <div className="relative aspect-video  ">
              <Image
                fill
                src={airport.images[0]}
                alt="airport-image"
                className="object-cover  "
              />
            </div>
            <div className="bg-white p-4 flex-1">
<h3 className="text-center text-[#003580] text-lg font-semibold">{airport.name}</h3>
{!!airport.cheapestSeventhDayPrice && <p className="text-xs text-gray-600 text-center pt-3">{`vanaf € ${airport.cheapestSeventhDayPrice.toFixed(2)} per week`}</p>}
            </div>
          </div>
          </Link>
        })}
      </div>
    </div>
  );
};

export default Airports;
