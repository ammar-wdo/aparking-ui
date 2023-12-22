import { GET_ENTITIES } from "@/links";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  airportId: string;
  airportName:string,
  airportSlug:string
};

const EntitiesFeed = async ({ airportId ,airportName,airportSlug}: Props) => {
  const res = await axios.get(GET_ENTITIES + `?airportName=${airportSlug}`);
  const entities = res.data?.entities as {
    entityName: string;
    slug:string,
    images: string[];
    id: string;
  }[];

  return (
    <div className="bg-gray-100 p-12">
      <div className="container">

        <h3 className="text-site font-bold text-2xl py-10 ">Parking providers at {airportName}</h3>
        {!entities.length && <h3 className="py-12 text-center text-neutral-500 text-3xl font-bold">No companies</h3>}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
          {entities.map((entity) => (
            <Link key={entity.id} href={`/${airportSlug}/${entity.slug}`}><div  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
                <div className="w-full aspect-video relative">
                    <Image alt="entity image" fill src={entity.images[0] || ''}  className="object-contain"/>
                </div>
                <h3 className="text-center py-12  font-semibold text-site">{entity.entityName}</h3>
            </div></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EntitiesFeed;
