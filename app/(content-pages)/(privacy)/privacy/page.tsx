import Navigator from "@/components/navigator";
import { GET_ABOUT, GET_PRIVACY, GET_TERMS } from "@/links";
import axios from "axios";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
const Editor = dynamic (()=>import('@/components/editor'), { ssr: false })

type Props = {};


export const metadata: Metadata = {
  title: 'Privacy Policy - Your Privacy Matters to Aparking',
  description: `Aparking is committed to protecting your privacy. Read our comprehensive privacy policy to understand how we collect, use, and safeguard your personal information when you use our services. Your privacy matters to us.`,
  openGraph:{
    title:'Privacy Policy - Your Privacy Matters to Aparking',
    description:`Aparking is committed to protecting your privacy. Read our comprehensive privacy policy to understand how we collect, use, and safeguard your personal information when you use our services. Your privacy matters to us.`,
  
  }
  
}

export const revalidate = 0

const page = async(props: Props) => {

const res = await axios(GET_PRIVACY)

const privacy = res.data.privacy



  return (
    <div className="min-h-[900px]">
        <div className="py-4 container">
        <Navigator name="Privacy policy" />
        </div>
      <div className="container">
    

        <h1 className="text-site text-3xl mt-12 font-bold">Privacy and policy</h1>

        {!privacy && <p className="text-3xl font-bold text-neutral-500 text-center capitalize">Empty page</p>}

        <div className="mt-12">

        <Editor  initialContent={privacy?.content} />

        </div>
      </div>
    </div>
  );
};

export default page;
