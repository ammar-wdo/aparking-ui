import Header from "@/components/header";
import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "Park & OV - Efficiënt en Veilig Parkeren bij het Vliegveld",
  description:
    "Ontdek de voordelen van Park & OV: veilig parkeren en naadloze aansluiting op openbaar vervoer bij het vliegveld. Ervaar gemak, veiligheid en duurzaamheid.",
    openGraph:{
      title:'Park & OV - Efficiënt en Veilig Parkeren bij het Vliegveld',
      description:'Ontdek de voordelen van Park & OV: veilig parkeren en naadloze aansluiting op openbaar vervoer bij het vliegveld. Ervaar gemak, veiligheid en duurzaamheid.'
    }
};

const page = (props: Props) => {
  return (
    <div>
      <Header contentPages={true} />
      <section className="container min-h-[900px] p-12">
        <h1 className="text-4xl text-[#003580] font-bold">
          {" "}
          Park & OV: Jouw Slimme Parkeerkeuze bij het Vliegveld
        </h1>
        <h2 className="text-2xl font-semibold mb-2 text-[#003580] mt-8"></h2>
        <p className="text-gray-700">
          Met Park & OV combineer je het beste van twee werelden voor jouw
          luchthavenreizen. Rij naar het vliegveld in je eigen auto en parkeer
          op een veilige, nabijgelegen locatie. Deze service biedt je het
          comfort van je eigen auto tot aan het vliegveld.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-[#003580] mt-8">
          {" "}
          Veilig en Vertrouwd: Jouw Auto op een Beveiligd Terrein
        </h2>
        <p className="text-gray-700">
          Bij aankomst op het vliegveld, parkeer je jouw auto op een beveiligde
          parkeerplaats. Deze zorgvuldig bewaakte plekken zorgen ervoor dat je
          met een gerust hart je auto achterlaat. Vanaf hier stap je over op het
          openbaar vervoer, wat een vloeiende overgang naar de luchthaven
          garandeert.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-[#003580] mt-8">
          {" "}
          Naadloze Overstap naar Openbaar Vervoer
        </h2>
        <p className="text-gray-700">
          Eenmaal geparkeerd, is het overstappen op het openbaar vervoer zoals
          treinen, bussen of shuttles gemakkelijk. Deze vervoersmiddelen zijn
          direct beschikbaar bij de parkeerplaats en brengen je snel naar de
          luchthaventerminals. Geniet van de efficiëntie en het gemak van deze
          naadloze aansluiting.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-[#003580] mt-8">
          {" "}
          Frequentie en Connectiviteit: Optimaal Afgestemd op de Luchthaven
        </h2>
        <p className="text-gray-700">
          Park & OV biedt frequent rijdende diensten die perfect zijn afgestemd
          op de luchthaveninfrastructuur. Profiteer van de regelmatige
          dienstregelingen en de verbindingen naar diverse bestemmingen, wat
          jouw reis nog aangenamer maakt.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-[#003580] mt-8">
          {" "}
          Duurzaam en Efficiënt: De Voordelen van Park & OV
        </h2>
        <p className="text-gray-700">
          Kies voor Park & OV en geniet van de combinatie van persoonlijke
          vrijheid met de duurzaamheid van openbaar vervoer. Deze service biedt
          een evenwichtige mix van comfort in je eigen auto en de
          milieuvriendelijkheid van het OV, voor een soepele reiservaring.
        </p>
      </section>
    </div>
  );
};

export default page;
