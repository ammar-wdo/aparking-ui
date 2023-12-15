import React from "react";

import CategoryFeed from "./(components)/category-feed";
import BlogFeed from "./(components)/blog-feed";
import Link from "next/link";

type Props = {
    searchParams:{[key:string]:string | string[] | undefined}
};

export const revalidate = 0

const page = async ({searchParams}: Props) => {
  return (
    <div className="min-h-[1000px] bg-gray-50">
      <div className="container py-12">
        <p className="text-neutral-500 flex items-center gap-1 md:gap-4  text-xs md:text-base flex-wrap ">
          {" "}
          <Link href={"/"}>Home</Link> &gt;{" "}
          <span className="capitalize text-black">Blog</span>{" "}
        </p>
        <div className="mt-8">
        <CategoryFeed />
        <BlogFeed searchParams={searchParams} />
        </div>
       
      </div>
    </div>
  );
};

export default page;
