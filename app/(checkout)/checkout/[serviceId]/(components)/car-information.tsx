"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import PhoneInput from "react-phone-input-2";
import { Input } from "@/components/ui/input";
import "react-phone-input-2/lib/style.css";
import { Separator } from "@/components/ui/separator";
import { CheckCheck, CheckIcon, ChevronLeft, ChevronRightIcon } from "lucide-react";
import { bookingSchema } from "@/schemas";

type Props = {
  form: UseFormReturn<z.infer<typeof bookingSchema>>;
  setCarStep: Dispatch<SetStateAction<boolean>>;
  carStep: boolean;
  setPayStep: Dispatch<SetStateAction<boolean>>;
  payStep: boolean;
};

const CarInformation = ({
  form,
  setCarStep,
  carStep,
  payStep,
  setPayStep,
}: Props) => {
  const toPayInfo =async () => {

    const isValid = await form.trigger([
       "carLicense",
       "carColor",
       "carModel"
      ],{shouldFocus:true})

      if(isValid){
        setPayStep(true);
      }
 
  };

  return (
    <div className="space-y-5  bg-white p-6">
      <div>
        <div className="flex items-center ">
          <h3
            className={cn(
              "text-2xl font-bold",
              (!carStep || payStep) && "text-gray-400"
            )}
          >
            2. Car information
          </h3>
          {payStep && (
            <span className="p-2 bg-green-500/20 rounded-full ml-auto">
              <CheckIcon className="w-4 h-4 text-green-500 " />
            </span>
          )}
        </div>
      </div>
      {carStep && !payStep && (
        <>
          <div className="grid gird-cols-1 md:grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="carLicense"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Car Lisence *</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-none"
                      placeholder="Car Lisence"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="carModel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Car Model *</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-none"
                      placeholder="Car Model"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="carColor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Car Clolor *</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-none"
                      placeholder="Email Address"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCarStep(false)}
              type="button"
              className="font-light text-blue-600 flex text-sm items-center justify-center "
            >
              {<ChevronLeft className="mr-1 h-4 w-4" />}Back
            </button>
            <button
              onClick={toPayInfo}
              type="button"
              className="flex items-center bg-orange-500 text-sm transition hover:bg-orange-500/90 text-white rounded-sm py-2 px-6"
            >
              Final Step{" "}
              {<ChevronRightIcon className="w-3 h-3 ml-1 text-white" />}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CarInformation;
