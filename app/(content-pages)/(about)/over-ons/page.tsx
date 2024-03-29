import Navigator from "@/components/navigator";
import { GET_ABOUT, GET_TERMS } from "@/links";
import axios from "axios";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
const Editor = dynamic (()=>import('@/components/editor'), { ssr: false })

type Props = {};


export const metadata: Metadata = {
  title: 'About Aparking - Your Trusted Source for Airport Parking Comparisons',
  description: 'Learn more about Aparking, the leading platform for comparing airport parking services. Discover how we help travelers find the best parking options, save money, and enjoy a stress-free travel experience.',
  openGraph:{
    title:'About Aparking - Your Trusted Source for Airport Parking Comparisons',
    description:'Learn more about Aparking, the leading platform for comparing airport parking services. Discover how we help travelers find the best parking options, save money, and enjoy a stress-free travel experience.',
  
  }
  
}

export const revalidate = 0

const page = async(props: Props) => {

const res = await axios(GET_ABOUT)

const about = res.data.about



  return (
    <div className="min-h-[900px]">
      <div className="container">
        <div className="py-4">
        <Navigator name="Over ons" />
        </div>
     

        <h1 className="text-site text-3xl mt-12 font-bold">Over ons</h1>

        {!about && <p className="text-3xl font-bold text-neutral-500 text-center capitalize">Empty page</p>}

        <div className="mt-12">
     

        <Editor  initialContent={about?.content} />

        </div>
      </div>
    </div>
  );
};

export default page;
