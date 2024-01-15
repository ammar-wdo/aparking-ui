import React from "react";

type Props = {};

const PartnerGreeting = (props: Props) => {
  return (
    <div>
      <h1 className="text-site text-3xl font-bold">Parkeer partner worden</h1>
      <p className="text-sm text-neutral-500 max-w-[650px] mt-4">
        Ontdek de voordelen van een partnerschap met Aparking! Wil je jouw
        parkeeraanbod naar nieuwe hoogten tillen? Word onze partner en geniet
        van een grotere zichtbaarheid, een breder publiek en meer boekingen!
        <br /> <br />
        Vul het onderstaande formulier in en maak deel uit van ons
        succesverhaal. Samen bieden we reizigers de ultieme parkeerervaring op
        luchthavens in Nederland. Let's park for success!
      </p>
    </div>
  );
};

export default PartnerGreeting;
