import React from "react";

type Props = {};

const PartnerGreeting = (props: Props) => {
  return (
    <div>
      <h1 className="text-site text-3xl font-bold">Partner worden</h1>
      <p className="text-sm text-neutral-500 max-w-[650px] mt-4">
        Partner with Aparking to expand your parking services. Showcase your
        facility to travelers seeking hassle-free parking. Increase your reach,
        attract more clients, and grow with a trusted name in parking.
        <br /> <br />
        Join Aparking for enhanced visibility. Present your facility to a wide
        audience, growing your business alongside ours. Let’s set new standards
        for parking convenience together
      </p>
    </div>
  );
};

export default PartnerGreeting;
