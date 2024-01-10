import Image from "next/image";
import React from "react";

type Props = {};

const Feed = (props: Props) => {
  return (
    <div className="py-12  bg-white">
      <div className="container flex gap-12 flex-col md:flex-row justify-center">
        <div className="w-fit">
          <h2 className="text-3xl font-semibold text-[#003580]">
            Airport Parking Comparison: Stress-Free Options
          </h2>
          <p className="mt-4 text-sm font-light max-w-[800px] text-justify text-gray-600">
            Planning a trip? Parking shouldn&rsquo;t be a hassle! Compare top parking
            providers at airports worldwide effortlessly. Our platform helps you
            compare rates, services like valet or self-parking, indoor or
            outdoor options, and more. We prioritize your car&rsquo;s safety,
            detailing security levels and terminal distances. Genuine customer
            reviews assist your decision. Stress-free parking, best rates—your
            car&rsquo;s holiday starts here, globally!
          </p>
        </div>
        <div className="md:w-[400px] w-full aspect-video relative rounded-xl overflow-hidden">
            <Image fill alt="airport-feed" className="object-cover" src={'/airport-feed.webp'} />

        </div>
      </div>
    </div>
  );
};

export default Feed;
