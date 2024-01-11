import React from "react";

type Props = {};

const Greeting = (props: Props) => {
  return (
    <div>
      <h1 className="text-site text-3xl font-bold">Get In Touch</h1>
      <p className="text-sm text-neutral-500 max-w-[500px] mt-4">
        Committed to delivering exceptional service, A-Parking aims to ensure a
        seamless experience for every visitor using our facilities.<br/> <br />Our team is
        available 24/7 via phone or live chat to assist with any parking
        inquiries. Your smooth parking experience is our priority.
      </p>
    </div>
  );
};

export default Greeting;
