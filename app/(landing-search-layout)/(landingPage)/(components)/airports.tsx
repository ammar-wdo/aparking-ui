import { GET_AIRPORTS } from "@/links";
import { Airport } from "@/schemas";
import axios from "axios";
import Image from "next/image";
import React from "react";

type Props = {};

const Airports = async (props: Props) => {
  const res = await axios(GET_AIRPORTS);

  console.log(res);
  return (
    <div className=" py-8">
      <h3 className="text-center text-4xl font-semibold text-[#003580] ">
        Airports
      </h3>
      <div className="max-w-[1500px] mx-auto mt-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {res.data.airports.map((airport: Airport) => (
          <div key={airport.id} className="rounded-md overflow-hidden shadow-sm">
            <div className="relative aspect-video  ">
              <Image
                fill
                src={airport.images[0]}
                alt="airport-image"
                className="object-cover "
              />
            </div>
            <div className="bg-white p-4">
<h3 className="text-center text-[#003580] text-lg font-semibold">{airport.name}</h3>
<p className="text-xs text-gray-400 text-center pt-3">vanaf € 32,00 per week</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Airports;
