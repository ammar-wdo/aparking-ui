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
  title: 'Terms and Conditions - Terms of Service for Using Aparking',
  description: `By using Aparking, you agree to our terms and conditions. Read our terms of service to understand the guidelines, rules, and obligations when using our platform. Familiarize yourself with our terms and conditions.`,
  openGraph:{
    title:'Terms and Conditions - Terms of Service for Using Aparking',
    description:`By using Aparking, you agree to our terms and conditions. Read our terms of service to understand the guidelines, rules, and obligations when using our platform. Familiarize yourself with our terms and conditions.`,
  
  }
  
}

export const revalidate = 0

const page = async(props: Props) => {

const res = await axios(GET_TERMS)

const terms = res.data.terms



  return (
    <div className="min-h-[900px]">
        <div className="py-4 container">
        <Navigator name="Terms and conditions" />
        </div>
      <div className="container">
    

        <h1 className="text-site text-3xl font-bold mt-12">Terms and conditions</h1>

        {!terms && <p className="text-3xl font-bold text-neutral-500 text-center capitalize">Empty page</p>}

        <div className="mt-12">

        <Editor  initialContent={terms?.content} />

        </div>
      </div>
    </div>
  );
};

export default page;
