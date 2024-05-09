import React, { Suspense, cache } from "react";
import Banner from "../../(landing-search-layout)/(landingPage)/(components)/banner";
import axios from "axios";
import { GET_AIRPORTS } from "@/links";
import { Airport } from "@/schemas";
import { notFound, redirect } from "next/navigation";
import dynamic from "next/dynamic";
import EntitiesFeed from "./(components)/entities-feed";
import Link from "next/link";
import { Metadata } from "next";
import { getAirport } from "@/lib/getters";
import Header from "@/components/header";
import Navigator from "@/components/navigator";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import AirportFaqComponent from "./(components)/faq-component";
import { Bus, CalendarCheck, CalendarHeart, Clock4 } from "lucide-react";
import AirportSkeleton from "@/app/(landing-search-layout)/(landingPage)/(components)/airports-skeleton";
import Airports from "@/app/(landing-search-layout)/(landingPage)/(components)/airports";
import AirportUpButton from "@/components/airport-up-button";

const Editor = dynamic(() => import("@/components/editor"), { ssr: false });

type Props = { params: { airportName: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const airport = await getAirport(params.airportName);

  if (!airport)
    return {
      title: "Not found",
      description: "This slug does not exist",
    };

  return {
    title: `Vergelijk Airport Parking opties - ${airport.name} | Aparking"`,
    description: `Vind en vergelijk de beste parkeeropties op ${airport.name}. Bespaar tijd en geld door veilige en betaalbare parkeergelegenheid te boeken bij Aparking. Reserveer nu uw plek!`,

    openGraph: {
      title: `Vergelijk Airport Parking opties - ${airport.name} | Aparking"`,
      description: `Vind en vergelijk de beste parkeeropties op ${airport.name}. Bespaar tijd en geld door veilige en betaalbare parkeergelegenheid te boeken bij Aparking. Reserveer nu uw plek!`,
      images: [...airport.images],
    },
  };
}

const explaination = [
  {
    icon: <CalendarCheck className="text-site" size={20} />,
    title: "Eenvoudig reserveren",
    description:
      "Maak eenvoudig eenreservering en ontvang duidelijke instructies per e- mail",
  },
  {
    icon: <Clock4 className="text-site" size={20} />,
    title: "Keurig op tijd",
    description: "Direct klaar voor u bijaankomst: een punctuele chauffeur",
  },
  {
    icon: <Bus className="text-site" size={20} />,
    title: "Zorgeloze reizen",
    description:
      "Geniet van zorgeloos reizen met onze betrouwbare en professionele service",
  },
  {
    icon: <CalendarHeart className="text-site" size={20} />,
    title: "Altijd laagste prijs",
    description:
      "Geniet van zorgeloos reizen met onze betrouwbare en professionele service",
  },
];

const page = async ({ params }: Props) => {
  const airport = await getAirport(params.airportName);

  console.log(airport);
  if (!airport) return notFound();

  return (
    <div className="pb-20">
      <Header />
      <Banner airportName={airport?.name} airportSlug={airport?.slug}></Banner>
      <div className="p-6 bg-muted">
        <div className="container">
          <Navigator airport={{ name: airport.name, href: airport.slug }} />
        </div>
      </div>

      <div className="container mt-10 min-h-[600px]">
        {/* first block */}
        <section className="lg:my-32 my-12">
          <article className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-6 items-center">
            <div className="space-y-4">
              <Editor initialContent={airport.blockOneContent} />
              <AirportUpButton className="rounded-lg px-6" />
            </div>

            <div className="relative w-full h-full min-h-[400px] hidden lg:block">
              <Image
                src={airport.blockOneImage}
                fill
                alt={airport.blockOneImageAlt}
                className="object-cover rounded-xl"
              />
            </div>
          </article>
        </section>

        {/* explaination */}

        <section className="container p-4 sm:p-12 bg-muted rounded-xl mt-20">
          <div className="py-10  flex justify-between items-center flex-col md:flex-row gap-12">
            <h3 className="text-site font-bold text-2xl ">
              Hierom is Aparking de best keuze
            </h3>
            <div className="p-6 rounded-lg shadow-sm flex md:gap-12 gap-4 bg-white flex-col sm:flex-row">
              <div>
                <h3 className="text-site font-semibold text-lg">
                  Beoordeeld met een
                </h3>
                <div className="flex items-center gap-0.5">
                  <p className="shrink-0 text-muted-foreground">Op basis van 1.429</p>
                  <Image
                    width={30}
                    height={30}
                    src={"/google-icon-small.webp"}
                    alt="google-icon"
                  />
                  <p className="shrink-0 text-muted-foreground">reviews</p>
                </div>
              </div>
              <div className="rounded-lg bg-[#FEBA02] p-1 flex items-center justify-center w-22 h-22">
                <p className="text-3xl font-bold text-site ">9.9</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {explaination.map((el, i) => (
              <article className="bg-white rounded-lg p-4 " key={i}>
                <div>{el.icon}</div>
                <h3 className="text-site font-semibold text-lg mt-4">
                  {el.title}
                </h3>
                <p className="text-site font-light mt-4">{el.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* second block */}
        <section className="lg:my-32 my-12">
          <article className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-6 items-center">
            <div className="relative w-full h-full min-h-[400px] hidden lg:block">
              <Image
                src={airport.blockTwoImage}
                fill
                alt={airport.blockTwoImageAlt}
                className="object-cover rounded-xl"
              />
            </div>
            <div className="space-y-4">
              <Editor initialContent={airport.blockTwoContent} />
              <AirportUpButton className="rounded-lg px-6" />
            </div>
          </article>
        </section>
        {/* airports */}

        <section className="bg-muted p-4 sm:p-12 mt-12">
          <article className="">
            <h3 className="text-site font-bold text-2xl py-10 ">
              Eenvoudig vergelijken & parkeren bij vliegvelden
            </h3>
            <p className="text-site">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </p>
          </article>
          <Suspense fallback={<AirportSkeleton />}>
            <Airports airportPage={true} airportSlug={airport.slug} />
          </Suspense>
        </section>

        {/* entities */}
        <EntitiesFeed
          airportName={airport?.name}
          airportSlug={airport?.slug}
          airportId={airport?.id}
        />
      </div>
      {/* FAQs */}
      <div className="py-12 bg-muted">
        <section className=" container py-4">
          <h2 className="text-site font-bold text-2xl py-10 ">
            FAQs {airport.name}
          </h2>

          <Accordion type="single" collapsible>
            {airport.faq.map((faq, i) => (
              <AirportFaqComponent
                key={i}
                i={i.toString()}
                answer={faq.answer}
                question={faq.question}
              />
            ))}
          </Accordion>
        </section>
      </div>
      {/* Main content */}

      <div className="mt-12 max-w-[1000px] container">
        {" "}
        <Editor initialContent={airport.content} />
      </div>
    </div>
  );
};

export default page;
