import ClientButton from "@/components/client-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GET_CATEGORIES } from "@/links";
import axios from "axios";
import Link from "next/link";
import React from "react";

type Props = {   searchParams:{[key:string]:string | string[] | undefined}};

const CategoryFeed = async ({searchParams}: Props) => {
  const res = await axios(GET_CATEGORIES);

  const categories = res.data.categories;

  const categoryParam = searchParams.category

  return (
    <div>
      <h3 className="text-xl font-semibold text-site">Categories</h3>
      <div className="mt-2 flex items-center gap-4 flex-wrap">
       <ClientButton label="All" categoryParam={categoryParam} />
        {categories.map((category: { id: string; label: string }) => (
          <ClientButton key={category.id} label={category.label} categoryParam={categoryParam} />
        ))}
      </div>
    </div>
  );
};

export default CategoryFeed;
