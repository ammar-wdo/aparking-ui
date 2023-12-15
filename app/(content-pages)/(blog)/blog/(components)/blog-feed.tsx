
import { GET_BLOGS } from "@/links";
import { Blog } from "@/schemas";
import axios from "axios";

import queryString from "query-string";
import React from "react";
import BlogCard from "./blog-card";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const BlogFeed = async ({ searchParams }: Props) => {
  const url = queryString.stringifyUrl({
    url: GET_BLOGS,
    query: { category: searchParams.category },
  });

  const res = await axios(url);

  type FullBlog = Blog & {
    id: string;
    createdAt: Date;
    category: { label: string };
  };

  const blogs = res.data.blogs as FullBlog[];

  return (
    <div className="mt-8">
      {!blogs.length && (
        <p className="text-4xl text-center text-neutral-500 font-bold">
          No blogs
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
       
        ))}
      </div>
    </div>
  );
};

export default BlogFeed;
