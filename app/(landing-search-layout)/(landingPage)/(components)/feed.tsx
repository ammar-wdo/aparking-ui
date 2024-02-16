import Image from "next/image";
import React from "react";

type Props = {};

const Feed = (props: Props) => {
  return (
    <div className="py-12  bg-white">
      <div className="container flex gap-12 flex-col md:flex-row justify-center">
        <div className="w-fit">
          <h1 className="text-4xl font-semibold text-[#003580]">
            Parkeren bij Vliegvelden
          </h1>
          <p className="mt-4 text-sm font-light max-w-[800px] text-justify text-gray-600">
            Ben je op zoek naar een betaalbare parkeeroplossing bij vliegvelden?
            Aparking helpt je met het vergelijken van parkeeraanbieders voor
            zowel kort als lang parkeren in de nabijheid van vliegvelden in
            Nederland. Met Aparking vind je eenvoudig een overzicht van
            gerenommeerde parkeerbedrijven rondom diverse luchthavens. Wij
            bieden uitgebreide informatie over de verschillende parkeerservices,
            tarieven, en meer, zodat je jouw auto zorgeloos en tegen de
            scherpste prijs kunt parkeren bij het vliegveld van jouw keuze.
          </p>
          <h2 className="font-bold text-2xl mt-4 text-[#003580]">Services en gemak met Aparking</h2>
          <h3 className="font-semibold mt-4 text-[#003580]">Valet Parking en Shuttle Services</h3>
          <p className="mt-2 text-sm font-light max-w-[800px] text-justify text-gray-600">
            Met onze valet parking service kun je direct voor de vertrekhal
            uitstappen, waar een medewerker van het parkeerbedrijf je auto
            overneemt en veilig voor je parkeert. Bij terugkomst staat je auto
            weer voor je klaar. Ideaal voor wie tijdsbesparing en comfort
            tijdens het reizen belangrijk vindt. Daarnaast biedt Aparking
            shuttle transfers aan. Dit houdt in dat je je auto parkeert op een
            beveiligd parkeerterrein en vervolgens met een comfortabele
            shuttlebus naar de luchthaven wordt vervoerd. Deze service is niet
            alleen voordelig, maar ook uiterst praktisch voor zowel korte als
            lange reizen.
          </p>
          <h3 className="font-semibold mt-4 text-[#003580]">Overdekt parkeren op vliegvelden</h3>
          <p className="mt-2 text-sm font-light max-w-[800px] text-justify text-gray-600">
            Voor diegenen die hun voertuig extra willen beschermen tegen
            weersinvloeden zoals regen of sneeuw, bieden wij de mogelijkheid tot
            overdekt parkeren. Deze optie zorgt ervoor dat je auto in een
            overdekte en vaak bewaakte parkeergarage staat, waardoor je met een
            gerust hart op reis kunt gaan.
          </p>
          <h2 className="font-bold text-2xl mt-4 text-[#003580]">Betrouwbare reviews van echte klanten</h2>
          <p className="mt-2 text-sm font-light max-w-[800px] text-justify text-gray-600">
            Wij bieden een uitgebreid overzicht van klantreviews over de
            verschillende parkeeraanbieders, met alleen beoordelingen van echte
            klanten. Dit zorgt ervoor dat je altijd de meest betrouwbare
            parkeeroptie kiest, voor een onbezorgde start van je reis. Of je nu
            wilt parkeren bij Schiphol AIrport, Eindhoven Airport, of Rotterdam
            Airport, Aparking maakt parkeren bij vliegvelden eenvoudig.
          </p>
        </div>
        <div className="md:w-[400px] w-full aspect-video relative rounded-xl overflow-hidden">
          <Image
            fill
            alt="airport-feed"
            className="object-cover"
            src={"/content.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default Feed;
