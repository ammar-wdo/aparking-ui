import { Car, MousePointerClick, SearchCheck } from "lucide-react";
import React from "react";

type Props = {};

const Explain = (props: Props) => {
  const explainInfo = [
    {
      title: "Reserveer Online",
      description:
        "Maak eenvoudig een reservering en ontvang duidelijke instructies per e-mail.",
      icon: <SearchCheck className="text-white w-7 h-7" />,
    },
    {
      title: "Rijd Naar het Vliegveld",
      description:
        "Volg onze aangegeven route en specifieke aanwijzingen, uniek per parkeeraanbieder.",
      icon: <MousePointerClick className="text-white w-7 h-7" />,
    },
    {
      title: "Auto-overdracht",
      description:
        "Check in bij de parkeeraanbieder, neem de gratis shuttlebus naar het vliegveld, of kies voor valet parkeren bij de vertrekhal.",
      icon: <Car className="text-white w-7 h-7" />,
    },
    {
      title: "Welkom Terug",
      description:
        "Bij terugkeer, neem de shuttlebus terug naar het parkeerterrein of wacht bij de aankomsthal als je valet parkeert. Je auto staat klaar om je direct naar huis te brengen.",
      icon: <Car className="text-white w-7 h-7" />,
    },
  ];

  return (
    <div className="py-12  container">
      <h3 className="text-center text-2xl sm:text-4xl font-semibold text-[#003580] ">
        Parkeer Slim in 4 Stappen met Aparking
      </h3>
      <div className="mt-8 flex gap-4  mx-auto justify-between overflow-x-auto p-2">
        {explainInfo.map((card) => (
          <div
            key={card.title}
            className="p-8 bg-white text-center relative overflow-hidden   flex flex-col gap-3 rounded-md  shadow-sm hover:shadow-md transition items-center w-[350px] h-[300px] justify-center flex-shrink-0"
          >
            <span className="p-2 rounded-full bg-[#003580] ">{card.icon}</span>
            <h3 className="text-lg text-[#003580] w-[200px] font-semibold">
              {card.title}
            </h3>
            <p className="text-sm font-light text-gray-600 w-[250px]">
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
