import React from "react";
import Header from "./header";
import SearchForm from "./(search-form)/search-form";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="min-h-[600px] bg-indigo-500">
      <div className="container">
    
        <Header />
        <div className="lg:px-32 text-white">
        <h2 className="lg:text-4xl font-semibold">
        Your hassle-free parking solution.
      </h2>
      <p className="mt-4 font-extralight text-sm">
        Compare parking spaces and prices at all major airports in the
        Netherlands, Germany & Belgium Airport
      </p>
        <SearchForm />
        </div>
      
      </div>
    </div>
  );
};

export default Banner;
