import Link from "next/link";
import React from "react";
import FaqFeed from "./(components)/faq-feed";
import FaqCatFeed from "./(components)/faq-cat-feet";
import { Metadata } from "next";
import Navigator from "@/components/navigator";

type Props = { searchParams: { [ket: string]: string | string[] | undefined } };

export const metadata: Metadata = {
  title: "Veelgestelde vragen - Aparking Luchthavenparkeerdiensten",
  description: `Vind antwoorden op veelgestelde vragen over de luchthavenparkeerdiensten van Aparking. Ontvang informatie over boekingen, betalingen, annuleringen en meer om uw parkeerervaring probleemloos te maken.`,
  openGraph: {
    title: "Veelgestelde vragen - Aparking Luchthavenparkeerdiensten",
    description: `Vind antwoorden op veelgestelde vragen over de luchthavenparkeerdiensten van Aparking. Ontvang informatie over boekingen, betalingen, annuleringen en meer om uw parkeerervaring probleemloos te maken.`,
  },
};

export const revalidate = 0;

const page = async ({ searchParams }: Props) => {
  return (
    <div className="min-h-[900px]">
        <div className="p-6 bg-muted">
        <div className="container">  <Navigator name="Veelgestelde vragen" /></div></div>
      <div className="container">
      

        <h1 className="text-site text-3xl font-bold mt-12">Veelgestelde vragen</h1>

        <FaqCatFeed searchParams={searchParams} />
        <FaqFeed searchParams={searchParams} />
      </div>
    </div>
  );
};

export default page;
