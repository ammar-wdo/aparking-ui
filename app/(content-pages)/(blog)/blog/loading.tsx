import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

type Props = {};

const loading = (props: Props) => {
  return (
    <div className="min-h-[1000px] bg-gray-50">
      <div className="container py-12">
        <div className="text-neutral-500 flex items-center gap-1 md:gap-4  text-xs md:text-base flex-wrap ">
          {" "}
          <Skeleton className="p-2 px-8" />
          <Skeleton className="p-2 px-8" />{" "}
        </div>
        <div className="mt-8">
          <div>
            <Skeleton className="p-2 w-[200px] " />
            <div className="mt-2 flex items-center gap-4 flex-wrap">
              <Skeleton className="px-20 py-8 rounded-lg" />
              <Skeleton className="px-20 py-8 rounded-lg" />
              <Skeleton className="px-20 py-8 rounded-lg" />
              <Skeleton className="px-20 py-8 rounded-lg" />
              <Skeleton className="px-20 py-8 rounded-lg" />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-8 mt-10'>
            <Skeleton className="w-full h-[350px]"/>
            <Skeleton className="w-full h-[350px]"/>
            <Skeleton className="w-full h-[350px]"/>
            <Skeleton className="w-full h-[350px]"/>
            <Skeleton className="w-full h-[350px]"/>
            <Skeleton className="w-full h-[350px]"/>
            <Skeleton className="w-full h-[350px]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
