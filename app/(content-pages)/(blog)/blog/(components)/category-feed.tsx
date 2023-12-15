import { Button } from "@/components/ui/button";
import { GET_CATEGORIES } from "@/links";
import axios from "axios";
import Link from "next/link";
import React from "react";

type Props = {};

const CategoryFeed = async (props: Props) => {
  const res = await axios(GET_CATEGORIES);

  const categories = res.data.categories;

  return (
    <div>
      <h3 className="text-xl font-semibold text-site">Categories</h3>
      <div className="mt-2 flex items-center gap-4 flex-wrap">
        <Button variant={"secondary"} asChild>
          <Link
            className="first-letter:capitalize text-slate-600"
            href={`/blog`}
          >
            All
          </Link>
        </Button>
        {categories.map((category: { id: string; label: string }) => (
          <Button asChild variant={"secondary"} key={category.id}>
            <Link
              className="first-letter:capitalize text-slate-600"
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
