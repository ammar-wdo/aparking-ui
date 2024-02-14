import Header from "@/components/header";
import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "Park & Taxi: Jouw Stressvrije Parkeer- en Taxidienst op de Luchthaven",
  description:
    "Ontdek hoe Park & Taxi de manier waarop je reist transformeert: veilig parkeren en directe taxi service op de luchthaven. Begin en eindig je reis zorgeloos.",
  openGraph: {
    title: "Park & Taxi: Jouw Stressvrije Parkeer- en Taxidienst op de Luchthaven",
    description:
      "Ontdek hoe Park & Taxi de manier waarop je reist transformeert: veilig parkeren en directe taxi service op de luchthaven. Begin en eindig je reis zorgeloos.",
  },
};

const page = (props: Props) => {
  return (
    <div>
      <Header contentPages={true} />
      <section className="container min-h-[900px] p-12">
        <h1 className="text-4xl text-[#003580] font-bold">
          {" "}
          Park & Taxi: De Ultieme Reisoplossing op de Luchthaven
        </h1>
        <p className="text-gray-700">
          Met Park & Taxi combineer je het gemak van eigen vervoer met de
          efficiëntie van taxidiensten, ideaal voor jouw reis van en naar de
          luchthaven. Deze innovatieve service stelt je in staat je auto veilig
          te parkeren en vervolgens snel over te stappen op een taxi, direct
          naar de terminal.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-[#003580] mt-8">
          Veilig en Gemakkelijk Parkeren
        </h2>
        <p className="text-gray-700">
          Bij aankomst op de luchthaven parkeer je je auto gemakkelijk op een
          veilig en specifiek voor Park & Taxi gereserveerd terrein. Deze
          parkeerplaatsen zijn uitgerust met uitgebreide beveiliging zoals
          cameratoezicht, omheiningen, en beveiligingspersoneel, zodat je met
          een gerust hart je auto achterlaat. Dit gemakkelijke systeem van
          parkeren en taxiën maakt jouw reis stressvrij en comfortabel.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-[#003580] mt-8">
          {" "}
          Naadloze Overstap naar Taxi
        </h2>
        <p className="text-gray-700">
          Zodra je je auto hebt geparkeerd, staat er een taxi klaar om je meteen
          naar je bestemming te brengen. Deze directe overstap bespaart tijd en
          moeite, zonder dat je afhankelijk bent van shuttlebussen of lange
          afstanden moet lopen vanaf afgelegen parkeerplekken.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-[#003580] mt-8">
          {" "}
          Ervaren Chauffeurs en Snelle Service
        </h2>
        <p className="text-gray-700">
          De taxi's die bij Park & Taxi worden ingezet, zijn perfect aangepast
          aan de eisen van de luchthaven. Met ervaren chauffeurs die de lokale
          verkeerssituaties kennen, garandeert Park & Taxi een vlotte en snelle
          rit naar waar je ook moet zijn. Deze service biedt niet alleen
          flexibiliteit, maar zorgt ook voor gemoedsrust voor reizigers die hun
          reis ontspannen willen beginnen of eindigen.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-[#003580] mt-8">
          {" "}
          Conclusie: Efficiëntie en Comfort in Eén Service
        </h2>
        <p className="text-gray-700">
          Kortgezegd, Park & Taxi op de luchthaven is een oplossing die gemak,
          snelheid en veiligheid biedt voor jouw reis. Het is de perfecte manier
          om stressvrij te reizen, wetende dat zowel je auto als je vervoer naar
          de luchthaven goed geregeld zijn.
        </p>
      
      </section>
    </div>
  );
};

export default page;
