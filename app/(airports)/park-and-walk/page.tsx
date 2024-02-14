import Header from "@/components/header";
import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title:
    "Snel en Veilig Parkeren bij de Luchthaven met Aparking Park and Walk",
  description:
    "Kies voor het gemak van Aparking's Park and Walk: parkeer veilig dichtbij de terminal en wandel op eigen tempo naar de luchthaven. Ideaal voor zowel zakelijke reizigers als vakantiegangers.",
  openGraph: {
    title:
      "Snel en Veilig Parkeren bij de Luchthaven met Aparking Park and Walk",
    description:
      "Kies voor het gemak van Aparking's Park and Walk: parkeer veilig dichtbij de terminal en wandel op eigen tempo naar de luchthaven. Ideaal voor zowel zakelijke reizigers als vakantiegangers.",
  },
};

const page = (props: Props) => {
  return (
    <div>
      <Header contentPages={true} />
      <section className="container min-h-[900px] p-12">
        <h1 className="text-4xl text-[#003580] font-bold">
          {" "}
          Park and Walk: Parkeren en Te Voet naar de Luchthaven
        </h1>
        <p className="text-gray-700">
          Ontdek het gemak en de efficiëntie van Aparking&apos;s Park and Walk
          service, de ultieme oplossing voor reizigers die vanaf de luchthaven
          vertrekken. Met deze dienst kun je je auto parkeren op een speciaal
          daarvoor bestemd terrein, dicht bij de luchthaventerminals, en
          vervolgens op je eigen tempo te voet naar de luchthaven gaan.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-[#003580] mt-8">
          Veilig Parkeren Dichtbij de Terminal
        </h2>
        <p className="text-gray-700">
          Bij Aparking staat veiligheid voorop. Bij aankomst op ons goed
          onderhouden parkeerterrein, gelegen op een strategische locatie nabij
          de luchthaven, kun je jouw auto met een gerust hart achterlaten. Onze
          parkeerplaatsen zijn uitgerust met moderne beveiligingstechnologieën
          om je voertuig veilig en beschermd te houden tijdens je reis.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-[#003580] mt-8">
          {" "}
          Directe Toegang tot de Luchthaven: Geen Wachttijd
        </h2>
        <p className="text-gray-700">
          Het unieke aan het Park and Walk-concept van Aparking is de
          onafhankelijkheid en snelheid die het biedt. Zonder afhankelijk te
          zijn van shuttles of andere vervoermiddelen, biedt het een directe
          looproute naar de luchthaven. Dit is vooral handig voor reizigers die
          tijd willen besparen en direct naar de incheckbalie willen.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-[#003580] mt-8">
          {" "}
          Beveiligde Parkeerplaatsen voor Jouw Gemak
        </h2>
        <p className="text-gray-700">
          De Park and Walk parkeerplaatsen zijn niet alleen dichtbij en handig,
          maar ook uiterst veilig. Ze zijn uitgerust met 24/7 bewaking en
          regelmatige patrouilles, waardoor je met een gerust hart je auto kunt
          achterlaten.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-[#003580] mt-8">
          {" "}
          De Ideale Keuze voor Snelle en Directe Toegang
        </h2>
        <p className="text-gray-700">
          Park and Walk van Aparking is een uitstekende keuze voor zowel
          zakenreizigers als vakantiegangers. Het biedt de perfecte combinatie
          van eigen vervoer en het gemak van een korte wandeling naar de
          terminal, waardoor het een efficiënte en stressvrije start van je reis
          garandeert.
        </p>
      </section>
    </div>
  );
};

export default page;
