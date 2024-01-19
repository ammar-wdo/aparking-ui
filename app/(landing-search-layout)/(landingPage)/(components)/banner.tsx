import React from "react";
import Header from "../../../../components/header";
import SearchForm from "./(search-form)/search-form";
import { cn } from "@/lib/utils";
import axios from "axios";
import { GET_AIRPORTS } from "@/links";
import Image from "next/image";
import { Check } from "lucide-react";

type Props = {
  children?: React.ReactNode;
  noForm?: boolean;
  airportSlug?: string;
  airportName?: string;
};

const Banner = async ({
  children,
  noForm,
  airportSlug,
  airportName,
}: Props) => {
  const res = await axios.get(GET_AIRPORTS);
  const highlights = [
    "Gratis annuleren/wijzigen",
    "Parkeerplaatsen geïnspecteerd",
    "Geen reserveringskosten",
    "Altijd laagste prijs",
  ];

  return (
    <div
      className={cn(
        "md:min-h-[500px] min-h-[400px] py-12 items-center flex bg-[#003580] relative ",
        noForm && "md:min-h-[350px] min-h-[200px]"
      )}
    >
      <Image
        fill
        src="/Banner.jpg"
        alt="banner"
        className="object-cover opacity-10 object-center "
      />
      <div className={"container "}>
        <div className={cn(" text-white relative ", noForm && "xl:px-0")}>
          {airportName && (
            <p className="sm:text-4xl text-xl py-3 font-semibold capitalize">
              {airportName}
            </p>
          )}
          <div>{children}</div>

          {!noForm && (
            <SearchForm
              airports={res.data.airports}
              airportSlug={airportSlug}
            />
          )}
          {!noForm && (
            <div className="mt-8 flex items-center gap-6 flex-wrap">
              {highlights.map((el) => (
                <span className="flex items-center gap-1" key={el}>
                  <Check className="w-4 h-4 text-white" />
                  {el}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
