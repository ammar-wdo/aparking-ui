import Banner from "@/app/(landing-search-layout)/(landingPage)/(components)/banner";
import { ALL_SERVICES } from "@/links";
import { Service } from "@/schemas";
import axios from "axios";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import GallarySwiper from "./(components)/gallary-swiper";
import dynamic from "next/dynamic";
import { Separator } from "@/components/ui/separator";
import AccordionInfo from "./(components)/accordion-info";
import ServiceCheckForm from "./(components)/(service-check-form)/service-check-form";
const Editor = dynamic(() => import('@/components/editor'), { ssr: false })


type Props = { params: { serviceName: string ,entityName:string,airportName:string} };

const page = async ({ params }: Props) => {
  const res = await axios(ALL_SERVICES + `/serviceInfo/${params.serviceName}?entityName=${params.entityName}&airportName=${params.airportName}`);

  console.log(params.serviceName);

  const service = res.data.service as Service & {
    entity: { entityName: string; airport: { name: string } };
  };

  if (!service) return redirect("/");
  return (
    <div>
      <Banner noForm>
        <h3 className="text-white text-3xl font-bold capitalize">
          {service.name}
        </h3>
        <ServiceCheckForm serviceId={service.id} />
      </Banner>

      <div className="container mt-10">
        <p className="text-neutral-500 flex items-center gap-1 md:gap-4  text-xs md:text-base flex-wrap ">
          {" "}
          <Link href={"/"}>Home</Link> &gt;{" "}
          <Link href={`/${service?.entity?.airport.name}`}>
            {service?.entity?.airport.name}
          </Link>{" "}
          &gt;{" "}
          <Link href={`/${service?.entity?.airport.name}/${service?.entity.entityName}`}>{service?.entity.entityName}</Link>{" "}
          &gt;{" "}
          <span className="capitalize text-black">{service?.name}</span>{" "}
        </p>
        <div className="mt-12">
            <h3 className="text-site text-3xl font-semibold py-8 capitalize">{service.name} service</h3>
<section className="grid grid-cols-1 lg:grid-cols-3 grid-rows-1  gap-8 mb-8">
    <GallarySwiper gallary={service.images || []} />
    <div className="lg:aspect-video w-full overflow-y-scroll  row-span-1 lg:col-span-2 max-h-[600px]"><Editor initialContent={service.generalInformation}/></div>
    

</section>

<div className="mb-12">
    <AccordionInfo first label="Important information" editorContent={service.importantInfo} timeToAirport={service.timeToAirport} distanceToAirport={service.distanceToAirport}/>
    <AccordionInfo label="Facilities" facilities={service.facilities} />
    <AccordionInfo  label="Highlights"  highlights={service.highlights}/>
    <AccordionInfo  label="Location"  location={{address:service.parkingAddress,zipcode:service.parkingZipcode,country:service.parkingCountry}}/>
</div>
        </div>
      </div>
    </div>
  );
};

export default page;
