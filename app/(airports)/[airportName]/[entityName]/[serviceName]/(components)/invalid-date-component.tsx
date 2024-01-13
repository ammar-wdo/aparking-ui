import React from "react";
import BackButton from "./back-button";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Image from "next/image";


type Props = {};

const InvalidDateComponent = (props: Props) => {
  return (
    <div>
      <div className="min-h-[70vh] flex items-center justify-center flex-col ">
      <div className=" p-4 bg-rose-500/20 text-rose-500 border border-rose-500 flex items-center gap-12">
        <p className="">
          Invalid date input, please ensure that start date and end date are properly entered.{" "}
        </p>
        <AlertTriangle />
        </div>
        <div className="w-[150px] h-[150px] relative">
<Image alt="issue" className="object-contain" fill src={'/error-notfound.png'} />
        </div>
      
       
        <BackButton />

      
      </div>
    </div>
  );
};

export default InvalidDateComponent;
