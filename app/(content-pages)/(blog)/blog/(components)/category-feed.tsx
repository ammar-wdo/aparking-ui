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
        <Button variant={"secondary"} asChild>
          <Link
            className={cn("first-letter:capitalize text-slate-600",!categoryParam && 'bg-site text-white' )}
            href={`/blog`}
          >
            All
          </Link>
        </Button>
        {categories.map((category: { id: string; label: string }) => (
          <Button asChild variant={"secondary"} key={category.id}>
            <Link
              className={cn("first-letter:capitalize text-slate-600",categoryParam ===category.label && 'bg-site text-white hover:bg-site')}
              href={`/blog?category=${category.label}`}
            >
              {category.label}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFeed;
