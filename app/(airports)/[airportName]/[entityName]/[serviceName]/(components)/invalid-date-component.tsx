import React from "react";
import BackButton from "./back-button";
import { Button } from "@/components/ui/button";


type Props = {};

const InvalidDateComponent = (props: Props) => {
  return (
    <div>
      <div className="min-h-[800px] flex items-center justify-center flex-col">
        <p className="p-4 bg-rose-500/20 text-rose-500 border border-rose-500 ">
          Invalid date input{" "}
        </p>
        <BackButton />

      
      </div>
    </div>
  );
};

export default InvalidDateComponent;
