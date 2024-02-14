import Header from "@/components/header";
import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "Park, Sleep & Fly Aparking: Gemakkelijk Parkeren en Overnachten bij de Luchthaven",
  description:
    "Begin je reis ontspannen met Park, Sleep & Fly. Veilig parkeren, comfortabel hotelverblijf en shuttleservice naar de luchthaven. Ideaal voor elke reiziger.",
  openGraph: {
    title:
      "Park, Sleep & Fly Aparking: Gemakkelijk Parkeren en Overnachten bij de Luchthaven",
    description:
      "Begin je reis ontspannen met Park, Sleep & Fly. Veilig parkeren, comfortabel hotelverblijf en shuttleservice naar de luchthaven. Ideaal voor elke reiziger.",
  },
};

const page = (props: Props) => {
  return (
    <div>
      <Header contentPages={true} />
      <section className="container min-h-[900px] p-12">
        <h1 className="text-4xl text-[#003580] font-bold">
          {" "}
          Park, Sleep & Fly Aparking: Ontspannen Begin van Je Reis
        </h1>
        <p className="text-gray-700">
          Met Park, Sleep & Fly start je reis ontspannen en uitgerust. Deze
          service combineert parkeren, een hotelovernachting en vervoer naar de
          luchthaven in één handig pakket.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-[#003580] mt-8">
          Veilig Parkeren bij de Luchthaven
        </h2>
        <p className="text-gray-700">
          Met onze unieke service parkeer je je auto op een veilige plek dicht
          bij de luchthaven. Zo kun je met een gerust hart van je vakantie
          genieten, wetende dat je auto goed beveiligd is.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-[#003580] mt-8">
          {" "}
          Comfortabele Overnachting in een Hotel
        </h2>
        <p className="text-gray-700">
          Na het parkeren verblijf je in een comfortabel hotel in de buurt van
          de luchthaven. Dit zorgt voor een goede nachtrust, ideaal voor vroege
          vluchten of lange reisdagen.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-[#003580] mt-8">
          {" "}
          Handige Shuttleservice naar de Luchthaven
        </h2>
        <p className="text-gray-700">
          Een groot voordeel is de shuttleservice van het hotel naar de
          luchthaven. Dit betekent geen zorgen over het vinden van een
          parkeerplek of het regelen van vervoer op de dag van vertrek.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-[#003580] mt-8">
          {" "}
          Ideaal voor Elke Reiziger
        </h2>
        <p className="text-gray-700">
          Park, Sleep & Fly is perfect voor zowel zakelijke reizigers als
          vakantiegangers. Het biedt een complete oplossing voor parkeren,
          overnachten en reizen, zodat je je kunt focussen op een soepele start
          van je reis.
        </p>
      </section>
    </div>
  );
};

export default page;
