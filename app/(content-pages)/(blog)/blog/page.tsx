import React from "react";

import CategoryFeed from "./(components)/category-feed";
import BlogFeed from "./(components)/blog-feed";
import Link from "next/link";
import { Metadata } from "next";
import Navigator from "@/components/navigator";

type Props = {
    searchParams:{[key:string]:string | string[] | undefined}
};



export const metadata: Metadata = {
  title: 'Airport Parking Tips and Insights - Aparking Blog',
  description: `Explore our blog for useful tips, insights, and advice on airport parking. Stay up to date with the latest trends, parking hacks, and travel tips to make your journey smoother and more enjoyable.`,
  openGraph:{
    title:'Airport Parking Tips and Insights - Aparking Blog',
    description:`Explore our blog for useful tips, insights, and advice on airport parking. Stay up to date with the latest trends, parking hacks, and travel tips to make your journey smoother and more enjoyable.`,
  
  }
  
}
export const revalidate = 0

const page = async ({searchParams}: Props) => {
  return (
    <div className="min-h-[1000px] bg-gray-50">
      <div className="container py-12">
      <Navigator blog={true} />
        <div className="mt-8">
        <CategoryFeed searchParams={searchParams}/>
        <BlogFeed searchParams={searchParams} />
        </div>
       
      </div>
    </div>
  );
};

export default page;
