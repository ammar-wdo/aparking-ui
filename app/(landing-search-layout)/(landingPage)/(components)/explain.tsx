import { Car, MousePointerClick, SearchCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const Explain = (props: Props) => {
  const explainInfo = [
    {
      title: "Reserveer Online",
      description:
        "Maak eenvoudig een reservering en ontvang duidelijke instructies per e-mail.",
      icon: '/icon1.png',
    },
    {
      title: "Rijd Naar het Vliegveld",
      description:
        "Volg onze aangegeven route en specifieke aanwijzingen, uniek per parkeeraanbieder.",
        icon: '/icon2.png',
    },
    {
      title: "Auto-overdracht",
      description:
        "Check in bij de parkeeraanbieder, neem de gratis shuttlebus naar het vliegveld, of kies voor valet parkeren bij de vertrekhal.",
        icon: '/icon3.png',
    },
    {
      title: "Welkom Terug",
      description:
        "Bij terugkeer, neem de shuttlebus terug naar het parkeerterrein of wacht bij de aankomsthal als je valet parkeert. Je auto staat klaar om je direct naar huis te brengen.",
        icon: '/icon4.png',
    },
  ];

  return (
    <div className="py-12  container">
      <h3 className="text-center text-2xl sm:text-4xl font-semibold text-[#003580] ">
      Luchthaven parkeren in 4 eenvoudige stappen
      </h3>
      <div className="mt-8 flex gap-4  justify-between overflow-x-auto p-2 noScroll xl:grid xl:grid-cols-4 snap-x  snap-mandatory">
        {explainInfo.map((card) => (
          <div
            key={card.title}
            className="p-8 bg-white text-center relative overflow-hidden   flex flex-col gap-3 rounded-md snap-always  snap-start shadow-sm hover:shadow-md transition items-center w-[90%] max-w-lg flex-shrink-0"
          >
            <div className="relative w-16 h-16 "><Image fill alt="icon" src={card.icon} className="object-contain" /></div>
            <h3 className="text-lg text-[#003580] w-[200px] font-semibold">
              {card.title}
            </h3>
            <p className="text-sm font-light text-gray-600 max-w-[250px]">
              {card.description}
            </p>
            <div className="h-2 bg-yellow-500 w-full absolute   -bottom-1 transition duration-150 left-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explain;
