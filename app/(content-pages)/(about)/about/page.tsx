import { GET_ABOUT, GET_TERMS } from "@/links";
import axios from "axios";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
const Editor = dynamic (()=>import('@/components/editor'), { ssr: false })

type Props = {};

export const revalidate = 0

const page = async(props: Props) => {

const res = await axios(GET_ABOUT)

const about = res.data.about



  return (
    <div className="min-h-[700px]">
      <div className="container">
        <p className="text-neutral-500 flex items-center gap-1 md:gap-4  text-xs md:text-base flex-wrap my-8">
          {" "}
          <Link href={"/"}>Home</Link> &gt;{" "}
          <span className="capitalize text-black">About</span>{" "}
        </p>

        <h3 className="text-site text-3xl font-bold">About us </h3>

        {!about && <p className="text-3xl font-bold text-neutral-500 text-center capitalize">Empty page</p>}

        <div className="mt-12">

        <Editor  initialContent={about.content} />

        </div>
      </div>
    </div>
  );
};

export default page;
