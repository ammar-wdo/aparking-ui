import Navigator from "@/components/navigator";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { NLtimezone } from "@/lib/nl-timezone";
import { GET_BLOGS } from "@/links";
import { Blog } from "@/schemas";
import axios from "axios";
import { format } from "date-fns";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
const Editor = dynamic(() => import("@/components/editor"), { ssr: false });

type Props = {
  params: { slug: string };
};
export const revalidate = 0;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const res = await axios(GET_BLOGS + `/${params.slug}`);

  const blog = res.data.blog as Blog;

  return {
    title: blog.title,
    description: blog.shortDescription,
    openGraph: {
      images: [blog.featuredImage],
      title: blog.title,
      description: blog.shortDescription,
    },
  };
}

const page = async ({ params }: Props) => {
  const res = await axios(GET_BLOGS + `/${params.slug}`);

  const blog = res.data.blog as Blog & { createdAt: Date };

  if (!blog) return redirect("/");

  return (
    <div className="min-h-[700px] ">
      <div className="bg-muted p-6">
        <div className="container">
          {" "}
          <Navigator
            blog={true}
            blogDetails={{ name: blog.title, slug: blog.slug }}
          />
        </div>
      </div>
      <div className="container">
        <div className="w-full aspect-video md:aspect-[4/1] relative">
          <Image
            alt="featured"
            src={blog.featuredImage}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <section className="mt-8 px-4 md:px-12">
          <h3 className="text-4xl font-bold first-letter:capitalize">
            {blog.title}
          </h3>
          <div className="flex gap-12 mt-3 items-center">
            <p className="first-letter:capitalize text-base font-bold text-gray-600">
              Geschreven door <span className="capitalize">{blog.author}</span>
            </p>
            <span className="text-gray-500 text-sm">
              {NLtimezone(new Date(blog.createdAt), "Europe/Amsterdam")}
            </span>
          </div>
          <Separator className="my-8" />

          <Editor initialContent={blog.content} />

          <div className="my-8 flex items-center gap-2 flex-wrap">
            {blog.tags.map((tag) => (
              <Badge
                className="bg-gray-100 text-gray-400 capitalize hover:bg-gray-100 text-xs sm:text-base cursor-default"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
