'use client'

import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { NLtimezone } from "@/lib/nl-timezone";
import { Blog } from "@/schemas";
  import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type FullBlog = Blog & {
    id: string;
    createdAt: Date;
    category: { label: string };
  };

  type Props = {
    blog:FullBlog
  }

const BlogCard = ({blog}: Props) => {

    const router = useRouter()
  return (
    <Card key={blog.id}
            
    className="flex-col flex border-none overflow-hidden rounded-sm  hover:shadow-md transition"
  >
   
    <CardHeader className="p-0">
      <div onClick={()=>router.push(`/blog/${blog.slug}`)}  className="relative w-full aspect-video cursor-pointer">
        <Badge onClick={(e)=>{e.stopPropagation();router.push(`/blog?category=${blog.category.label}`)}} className="absolute z-10 text-[10px] rounded-lg font-normal bg-site capitalize cursor-pointer hover:bg-site top-3 left-3">
          {blog.category.label}
        </Badge>
        <Image
          alt="blog-image"
          fill
          src={blog.featuredImage}
          className="object-cover"
        />
      </div>
    </CardHeader>
    <CardContent className="bg-white">
      <CardTitle onClick={()=>router.push(`/blog/${blog.slug}`)} className="mt-4 text-slate-600 first-letter:capitalize cursor-pointer">
        {blog.title}
      </CardTitle>
      <CardDescription className="line-clamp-4 text-sm text-slate-500 mt-2">
        {blog.shortDescription}
      </CardDescription>
    </CardContent>
    <CardFooter className="flex items-center justify-between mt-auto">
      <span className="text-xs text-slate-500">
        {NLtimezone(blog.createdAt,'Europe/Amsterdam')}
      </span>
      <Link
        className="font-semibold text-slate-500 text-sm "
        href={`/blog/${blog.slug}`}
      >
        Read more
      </Link>
    </CardFooter>
 
  </Card>

  )
}

export default BlogCard