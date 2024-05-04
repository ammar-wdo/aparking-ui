import AirportFaqComponent from "@/app/(airports)/[airportName]/(components)/faq-component";
import Navigator from "@/components/navigator";
import { Accordion } from "@/components/ui/accordion";
import { GET_ABOUT, GET_TERMS } from "@/links";
import { About } from "@/schemas";
import axios from "axios";
import { CalendarCheck, CarFront, Check, PencilLine, Plane, Search, SquareSlash } from "lucide-react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const Editor = dynamic(() => import("@/components/editor"), { ssr: false });

type Props = {};

export const metadata: Metadata = {
  title:
    "Over Aparking - Uw Vertrouwde Bron voor Vergelijkingen van Luchthavenparking",
  description:
    "Ontdek meer over Aparking, het toonaangevende platform voor het vergelijken van luchthavenparkeerdiensten. Leer hoe wij reizigers helpen om de beste parkeeropties te vinden, geld te besparen en te genieten van een stressvrije reiservaring.",
  openGraph: {
    title:
      "Over Aparking - Uw Vertrouwde Bron voor Vergelijkingen van Luchthavenparking",
    description:
      "Ontdek meer over Aparking, het toonaangevende platform voor het vergelijken van luchthavenparkeerdiensten. Leer hoe wij reizigers helpen om de beste parkeeropties te vinden, geld te besparen en te genieten van een stressvrije reiservaring.",
  },
};

export const revalidate = 0;

const page = async (props: Props) => {
  const res = await axios<{about?:About,success:boolean,error?:string}>(GET_ABOUT);

  if(!res.data.success) return <div className="min-h-screen flex items-center justify-center"><p className="text-xl font-bold capitalize text-gray-400">Something went wrong</p></div>




  const about = res.data.about 
  if(!about) return <div className="min-h-screen flex items-center justify-center"><p className="text-xl font-bold capitalize text-gray-400">Empty page</p></div>

  const firstBlockCards = [
    {
      icon: <PencilLine className="text-site w-fit mx-auto" size={20} />,
      title: (
        <h3 className="font-semibold text-center">
          Gratis
          <br />
          annuleren/wijzigen
        </h3>
      ),
      description: (
        <p className="font-light text-center">
          Flexibel annuleren zonder
          <br />
          kosten of gedoe.
        </p>
      ),
    },
    {
      icon: <Search className="text-site w-fit mx-auto" size={20} />,
      title: (
        <h3 className="font-semibold  text-center">
          Parkeerplaatsen
          <br />
          geïnspecteerd
        </h3>
      ),
      description: (
        <p className="font-light text-center">
          Gecontroleerde
          <br />
          parkeerfaciliteiten.
        </p>
      ),
    },
    {
      icon: <SquareSlash className="text-site w-fit mx-auto" size={20} />,
      title: (
        <h3 className="font-semibold text-center">
          Geen
          <br />
          reserveringskosten
        </h3>
      ),
      description: (
        <p className="font-light text-center">
          Direct boeken zonder extra
          <br />
          kosten
        </p>
      ),
    },
    {
      icon: <Search className="text-site w-fit mx-auto" size={20} />,
      title: (
        <h3 className="font-semibold text-center">
          Altijd
          <br />
          laagste prijs
        </h3>
      ),
      description: (
        <p className="font-light text-center">
          Gegarandeerd de beste prijs
          <br />
          voor parkeerplaatsen.
        </p>
      ),
    },
  ];

  const explaination = [
    {
      icon: <CalendarCheck className="text-site" size={20} />,
      title: "Reserveer Online",
      description:
        "Maak eenvoudig een reservering en ontvang duidelijke instructies per e-mail.",
    },
    {
      icon: <Plane className="text-site" size={20} />,
      title: "Rijd Naar het Vliegveld",
      description: "Volg onze aangegeven route en specifieke aanwijzingen,uniek per parkeeraanbieder",
    },
    {
      icon: <Check className="text-site" size={20} />,
      title: "Auto-overdracht",
      description:
        "Check in bij de parkeeraanbieder, neem de gratis shuttlebus naar het vliegveld.",
    },
    {
      icon: <CarFront className="text-site" size={20} />,
      title: "Welkom Terug",
      description:
        "Bij terugkeer, neem de shuttlebus terug naar het parkeerterrein of wacht bij de aankomsthal",
    },
  ];

  return (
    <div style={{ perspective: '100px' }} className="min-h-[900px]   ">
      <div className="py-6 bg-muted">
        <div className="container">
          <Navigator name="Over ons" />
        </div>
      </div>
      {/* main container */}
      <section className="container">
        {/* first block */}
        <article className="grid grid-cols-1 lg:grid-cols-2 mt-24 lg:gap-20 gap-6 items-center">
         
          <div>
            <Editor initialContent={about?.blockOneContent} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {firstBlockCards.map((card, i) => (
              <div key={i} className="bg-muted space-y-4 p-6 rounded-xl">
                {card.icon}
                {card.title}
                {card.description}
              </div>
            ))}
          </div>
        </article>

          {/* explaination */}

          <section className="container p-4 sm:p-12 bg-muted rounded-xl mt-20">
          <h3 className="text-site font-bold text-2xl py-10 mb-8 text-center">
          Luchthaven parkeren in 4 eenvoudige stappen
          </h3>
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
          <section  className="mt-20">
          <article style={{perspective:'2600px'}} className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-6 items-center">
            <div className="relative w-full h-full min-h-[400px] hidden lg:block" style={{transform: 'rotateY(45deg)',transformOrigin: 'center center'}}>
              <Image
                src={about.blockTwoImage}
                fill
                alt="airport figure"
                className="object-cover rounded-2xl"
              />
            </div>
            <Editor initialContent={about.blockTwoContent} />
          </article>
        </section>


  
        

      

      
      </section>
      {/* FAQs */}
  <div className="py-12 bg-muted mt-24 ">
        <section className=" container py-4">
          <h2 className="text-site font-bold text-2xl py-10 ">
          Veelgestelde vragen 
          </h2>

          <Accordion type="single" collapsible>
            {about.faq.map((faq, i) => (
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
    </div>
  );
};

export default page;
