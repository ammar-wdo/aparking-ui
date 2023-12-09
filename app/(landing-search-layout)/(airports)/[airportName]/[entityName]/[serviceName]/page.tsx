import Banner from "@/app/(landing-search-layout)/(landingPage)/(components)/banner";
import { ALL_SERVICES } from "@/links";
import { Service } from "@/schemas";
import axios from "axios";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

type Props = { params: { serviceName: string ,entityName:string} };

const page = async ({ params }: Props) => {
  const res = await axios(ALL_SERVICES + `/serviceInfo/${params.serviceName}?entityName=${params.entityName}`);

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
      </Banner>

      <div className="container mt-10">
        <p className="text-neutral-500 flex items-center gap-4">
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

        </div>
      </div>
    </div>
  );
};

export default page;
