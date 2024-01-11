import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  airport?: { name: string; href: string };
  entity?: { name: string; href: string };
  service?: { name: string; href: string };
  blog?:boolean,
  blogDetails?:{name:string,slug:string},
  name?:string,

};

const Navigator = ({ airport, entity, service,blog ,blogDetails,name}: Props) => {

if(name) return  <div className="flex items-center gap-3 w-full overflow-x-auto text-neutral-400">
<span>
  <Link className="hover:text-site" href={"/"}>
    Home
  </Link>
</span>{" "}
<span className={cn("flex items-center gap-1 shrink-0")}>
  <ChevronRight className="w-5 h-5" />
  <Link
    className={'text-black'}
    href={``}
  >
   {name}
  </Link>
</span>
</div>


  if(blog) return  <div className="flex items-center gap-3 w-full overflow-x-auto text-neutral-400">
  <span>
    <Link className="hover:text-site" href={"/"}>
      Home
    </Link>
  </span>{" "}
  <span className={cn("flex items-center gap-1 shrink-0")}>
    <ChevronRight className="w-5 h-5" />
    <Link
      className={!blogDetails ? "text-black hover:text-site" : "hover:text-site"}
      href={`/blog`}
    >
     Blog
    </Link>
  </span>
  {blogDetails && (
        <span className="flex items-center gap-1 shrink-0">
          <ChevronRight className="w-5 h-5" />
          <Link
            className={
              !service ? "text-black hover:text-site" : "hover:text-site"
            }
            href={`/blog/${blogDetails.slug}`}
          >
            {blogDetails.name}
          </Link>
        </span>
      )}
  </div>

  return (
    <div className="flex items-center gap-3 w-full overflow-x-auto text-neutral-400">
      <span>
        <Link className="hover:text-site" href={"/"}>
          Home
        </Link>
      </span>{" "}
      <span className={cn("flex items-center gap-1 shrink-0")}>
        <ChevronRight className="w-5 h-5" />
        <Link
          className={!entity ? "text-black hover:text-site" : "hover:text-site"}
          href={`/${airport?.href}`}
        >
          {airport?.name}
        </Link>
      </span>
      {entity && (
        <span className="flex items-center gap-1 shrink-0">
          <ChevronRight className="w-5 h-5" />
          <Link
            className={
              !service ? "text-black hover:text-site" : "hover:text-site"
            }
            href={`/${airport?.href}/${entity.href}`}
          >
            {entity.name}
          </Link>
        </span>
      )}
      {service && entity && (
        <span className="flex items-center gap-1 shrink-0">
          <ChevronRight className="w-5 h-5" />
          <Link
            className="text-black hover:text-site"
            href={`/${airport?.href}/${entity.href}/${service.href}`}
          >
            {service.name}
          </Link>
        </span>
      )}
    </div>
  );
};

export default Navigator;
