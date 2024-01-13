import Logo from "@/components/logo";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import LiveChatButton from "./live-chat-button";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="py-12 bg-[#003580] px-0 md:px-8">
      <div className="container">
        <div className=" flex md:flex-row flex-col justify-between gap-12 text-white flex-wrap">
          <section>
            <Logo footer={true} />
            <p className="text-sm max-w-[200px] mt-4">
              Veilig reserveren en betrouwbaar betalen
            </p>
            <div className="flex items-center gap-3 my-2 ">
              <div className="h-8 w-8 relative">
                <Image
                  alt="payment"
                  src={"/ideal-white.png"}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="h-12 w-12 relative  p-1 ">
                <Image
                  alt="payment"
                  src={"/paypal-white.png"}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="h-8 w-8 relative">
                <Image
                  alt="payment"
                  src={"/visa-white.webp"}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="h-8 w-8 relative">
                <Image
                  alt="payment"
                  src={"/mastercard-white.png"}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="h-8 w-8 relative">
                <Image
                  alt="payment"
                  src={"/express-white.png"}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="">Blijf up-to-date en volg ons op</p>
            <div className="mt-8 flex gap-6 items-center -ml-1 ">
              <Facebook className="w-5 h-5 fill-white text-white" />
              <Instagram className="w-5 h-5 fill-white stroke-[#003580]  text-white" />
              <Twitter className="w-5 h-5 fill-white  text-white" />
              <Linkedin className="w-5 h-5 fill-white text-white" />
              <Youtube className="w-5 h-5 fill-white text-white stroke-[#003580]" />
            </div>
          </section>
          <section className="mt-4">
            <h3 className="font-bold">Vliegvelden</h3>
            <div className="mt-6 flex flex-col gap-4">
              <Link
                href={"/schiphol-airport"}
                className="capitalize font-light text-base hover:underline "
              >
               
Amsterdam Airport Schiphol (AMS)
              </Link>
              <Link
                href={"/rotterdam-airport"}
                className="capitalize font-light text-base hover:underline"
              >
               Rotterdam The Hague Airport (RTM)
              </Link>
              <Link
                href={"/eindhoven-airpor"}
                className="capitalize font-light text-base hover:underline"
              >
                Eindhoven Airport (EIN)
              </Link>
              <Link
                href={"/groningen-airport"}
                className="capitalize font-light text-base hover:underline"
              >
               Groningen Airport Eelde (GRQ)
              </Link>
            </div>
          </section>
          <section className="mt-4">
            <h3 className="font-bold">Aparking</h3>
            <div className="mt-6 flex flex-col gap-4">
              <Link
                href={"/over-ons"}
                className=" font-light text-base hover:underline "
              >
                Over ons
              </Link>
              <Link
                href={"/contact"}
                className=" font-light text-base hover:underline"
              >
                Contact
              </Link>
              <Link
                href={"/partner-worden"}
                className=" font-light text-base hover:underline"
              >
                Partner worden
              </Link>
              <Link
                href={"/blog"}
                className=" font-light text-base hover:underline"
              >
                Blog
              </Link>
            </div>
          </section>
          <section className="mt-4 shrink-0">
            <h3 className="font-bold">Klantenservice</h3>
            <div className="mt-6 flex flex-col gap-4">
              <Link
                href={"/veelgestelde-vragen"}
                className=" font-light text-base hover:underline "
              >
                Veelgestelde vragen
              </Link>
              <Link
                href={"/contact"}
                className=" font-light text-base hover:underline"
              >
                Klantenservice
              </Link>
              <LiveChatButton />
            </div>
          </section>
       
        </div>

        <div className="border-white border-t py-4 mt-12 flex justify-between items-center text-white font-light text-sm md:flex-row flex-col gap-4 ">
          <p>Copyright © 2024 APARKING.</p>
          <p className="text-center">
            Alle rechten voorbehouden |{" "}
            <Link href={"/algemene-voorwaarden"} className="underline">
              Algemene voorwaarden
            </Link>
            |{" "}
            <Link href={"/privacy-beleid"} className="underline">
              Privacy beleid
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
