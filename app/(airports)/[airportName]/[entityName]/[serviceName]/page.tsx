import Banner from "@/app/(landing-search-layout)/(landingPage)/(components)/banner";
import { ALL_SERVICES } from "@/links";
import { Service } from "@/schemas";
import axios from "axios";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import React, { cache } from "react";
import GallarySwiper from "./(components)/gallary-swiper";
import dynamic from "next/dynamic";
import { Separator } from "@/components/ui/separator";
import AccordionInfo from "./(components)/accordion-info";

import AvailableService from "./(components)/available-service";
import Reviews from "@/app/(landing-search-layout)/(landingPage)/(components)/reviews";
import SearchForm from "@/app/(landing-search-layout)/(landingPage)/(components)/(search-form)/search-form";
import { Metadata } from "next";
import { getService } from "@/lib/getters";
import { StarIcon } from "lucide-react";
import Header from "@/components/header";
import Navigator from "@/components/navigator";
const Editor = dynamic(() => import("@/components/editor"), { ssr: false });

type Props = {
  params: { serviceName: string; entityName: string; airportName: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = await getService(
    params.serviceName,
    params.entityName,
    params.airportName
  );

  if (!service)
    return {
      title: "Not found",
      description: "This slug does not exist",
    };

  return {
    title: `${service.name} reviews & prices - Compare Parking Services | Aparking"`,
    description: `${service.name} a ${service.parkingType} parking service, located just ${service.distanceToAirport} km away from ${service.entity.airport.name}. Save time and book your parking spot now with Aparking. `,

    openGraph: {
      title: `${service.name} reviews & prices - Compare Parking Services | Aparking"`,
      description: `${service.name} a ${service.parkingType} parking service, located just ${service.distanceToAirport} km away from ${service.entity.airport.name}. Save time and book your parking spot now with Aparking. `,
      images: [...(service.images || [])],
    },
  };
}

export const revalidate = 0;

const page = async ({ params, searchParams }: Props) => {
  const startDate = searchParams.startDate;
  const endDate = searchParams.endDate;
  const startTime = searchParams.startTime;
  const endTime = searchParams.endTime;

  console.log(startDate, endDate, startTime, endTime);
  const service = await getService(
    params.serviceName,
    params.entityName,
    params.airportName
  );

  if (!service) return notFound();
  return (
    <div className="">
      <Header contentPages={true} />

      <div className="mx-auto max-w-[1200px] px-3">
        <div className="mt-10">
        <Navigator
          airport={{
            name: service.entity.airport.name,
            href: service.entity.airport.slug,
          }}
          entity={{
            name: service.entity.entityName,
            href: service.entity.slug,
          }}
          service={{ name: service.name, href: service.slug }}
        />
        </div>

        <h3 className="text-site text-3xl font-semibold  capitalize mt-10">
                {service.name}
              </h3>

        <div className="grid grid-cols-1   lg:grid-cols-9   py-4 gap-x-20 mt-8 gap-y-12">
          <div className="p-5 pb-6 rounded-lg bg-site h-fit lg:col-span-3 order-1 lg:order-2">
            <h3 className="text-white capitalize py-2 font-semibold text-2xl">
              Check availability
            </h3>
            <SearchForm
              serviceShow={true}
              serviceId={service.id}
              startDateProp={new Date(startDate as string) as Date | undefined}
              endDateProp={new Date(endDate as string) as Date | undefined}
              startTimeProp={startTime as string | undefined}
              endTimeProp={endTime as string | undefined}
            />
          </div>
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="flex items-center gap-12 ">
            
              {service.totalReviews > 0 && (
                <div className="my-2 flex items-center gap-3">
                  <StarIcon className="text-yellow-500 h-5 w-5 fill-yellow-500 " />{" "}
                  <span className="font-bold">
                    {service.totalReviews.toFixed(1)}
                  </span>
                </div>
              )}
            </div>

            <section className="mb-8 ">
              <GallarySwiper gallary={service.images || []} />
              <div className=" mt-8">
                <Editor initialContent={service.generalInformation} />
              </div>
            </section>

            <div className="mb-12">
              <AccordionInfo
                first
                label="Important information"
                editorContent={service.importantInfo}
                timeToAirport={service.timeToAirport}
                distanceToAirport={service.distanceToAirport}
              />
              <AccordionInfo
                label="Facilities"
                facilities={service.facilities}
              />
              <AccordionInfo
                label="Highlights"
                highlights={service.highlights}
              />
              <AccordionInfo
                label="Location"
                location={{
                  address: service.parkingAddress,
                  zipcode: service.parkingZipcode,
                  country: service.parkingCountry,
                }}
              />
            </div>

            <AvailableService
              serviceId={service.id}
              searchParams={searchParams}
            />
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-100">
        <Reviews serviceId={service.id} />
      </div>
    </div>
  );
};

export default page;
