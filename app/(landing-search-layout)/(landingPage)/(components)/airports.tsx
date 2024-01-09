import { GET_AIRPORTS } from "@/links";
import { Airport } from "@/schemas";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { unstable_noStore as noStore } from 'next/cache';

type Props = {};




const Airports = async (props: Props) => {
  noStore();
  const res = await axios(GET_AIRPORTS);





  return (
    <div className=" py-8 ">
      <h3 className="text-center text-4xl font-semibold text-[#003580] ">
        Airports
      </h3>
      <div className="max-w-[1500px] mx-auto mt-6  lg:grid-cols-4 md:grid-cols-3 hidden md:grid gap-10 p-4">
        {res.data.airports.map((airport: Airport) => (
          <Link key={airport.id} href={`/${airport.slug}`}>
          <div  className="rounded-md overflow-hidden shadow-sm hover:shadow-md transition flex flex-col h-full">
            <div className="relative aspect-video  ">
              <Image
                fill
                src={airport.images[0]}
                alt="airport-image"
                className="object-cover   "
              />
            </div>
            <div className="bg-white p-4 flex-1">
<h3 className="text-center text-[#003580] text-lg font-semibold">{airport.name}</h3>
<p className="text-xs text-gray-600 text-center pt-3">vanaf € 32,00 per week</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
      <div className="md:hidden flex items-stretch gap-4 overflow-x-auto w-full relative z-50 p-8">
      {res.data.airports.map((airport: Airport) => (
          <Link key={airport.id} href={`/${airport.slug}`} className="flex-shrink-0 max-w-[270px] w-full  ">
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
<p className="text-xs text-gray-600 text-center pt-3">vanaf € 32,00 per week</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Airports;
