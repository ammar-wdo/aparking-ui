import React from "react";

import CategoryFeed from "./(components)/category-feed";
import BlogFeed from "./(components)/blog-feed";
import Link from "next/link";
import { Metadata } from "next";
import Navigator from "@/components/navigator";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const metadata: Metadata = {
  title: "Luchthavenparkeertips en inzichten - Aparking Blog",
  description: `Verken onze blog voor nuttige tips, inzichten en adviezen over luchthavenparking. Blijf op de hoogte van de laatste trends, parkeerhacks en reistips om uw reis soepeler en plezieriger te maken..`,
  openGraph: {
    title: "Luchthavenparkeertips en inzichten - Aparking Blog",
    description: `Verken onze blog voor nuttige tips, inzichten en adviezen over luchthavenparking. Blijf op de hoogte van de laatste trends, parkeerhacks en reistips om uw reis soepeler en plezieriger te maken..`,
  },
};
export const revalidate = 0;

const page = async ({ searchParams }: Props) => {
  return (
    <div className="min-h-[1000px] bg-gray-50">
       <div className="p-6 bg-muted">
          <div className="container">
            <Navigator blog={true} />
          </div>
        </div>
      <div className="container py-12">
       

        <div className="mt-8">
          <CategoryFeed searchParams={searchParams} />
          <BlogFeed searchParams={searchParams} />
        </div>
      </div>
    </div>
  );
};

export default page;
