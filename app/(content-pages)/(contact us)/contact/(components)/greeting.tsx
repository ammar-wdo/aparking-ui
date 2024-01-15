import React from "react";
import Chatfeed from "./chat-feed";

type Props = {};

const Greeting = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div>
      <h1 className="text-site text-3xl font-bold">Contact</h1>
      <p className="text-sm text-neutral-500 max-w-[500px] mt-4 ">
        Welkom bij Aparking, jouw betrouwbare bron voor het vergelijken van
        parkeeraanbieders op Nederlandse luchthavens. We staan klaar om al je
        vragen te beantwoorden.
        <br /> <br />
        Neem contact met ons op via het onderstaande formulier, start een live
        chat of stuur ons een e-mail. We helpen je graag!
      </p>
    </div>

    <Chatfeed />
    </div>
   
  );
};

export default Greeting;
