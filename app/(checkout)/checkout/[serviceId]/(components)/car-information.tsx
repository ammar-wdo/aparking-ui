"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Dispatch, MutableRefObject, SetStateAction, useRef, useState } from "react";
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
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Props = {
  form: UseFormReturn<z.infer<typeof bookingSchema>>;
  setCarStep: Dispatch<SetStateAction<boolean>>;
  carStep: boolean;
  setPayStep: Dispatch<SetStateAction<boolean>>;
  payStep: boolean;
  accRef:MutableRefObject<HTMLButtonElement | null>
};

const CarInformation = ({
  form,
  setCarStep,
  carStep,
  payStep,
  setPayStep,
  accRef
}: Props) => {

  const carRef = useRef<HTMLDivElement>(null)
  const toPayInfo =async () => {

    const isValid = await form.trigger([
       "carLicense",
       "numberOfPeople",
       "carModel"
      ],{shouldFocus:true})

      if(isValid){
        setPayStep(true);
       if(accRef.current){
        accRef.current.click()
       }
        carRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
 
  };

  return (
    <div ref={carRef} className="space-y-5  bg-white p-6">
      <div>
        <div className="flex items-center ">
          <h3
            className={cn(
              "text-2xl font-bold",
              (!carStep || payStep) && "text-gray-400"
            )}
          >
            2. Voertuig gegevens
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
                  <FormLabel>Kenteken*</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-none"
                      placeholder="Kenteken"
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
                  <FormLabel>Merk en model*</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-none"
                      placeholder="Merk en model"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
           <FormField
          control={form.control}
          name="numberOfPeople"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Aantal personen*</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value.toString()}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Aantal personen" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                
                {Array(8).fill('').map((el,i)=>  <SelectItem className="cursor-pointer" key={i} value={(i +1).toString()}>{i + 1}</SelectItem>)}
                </SelectContent>
              </Select>
         
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
              {<ChevronLeft className="mr-1 h-4 w-4" />}Terug
            </button>
            <Button
              onClick={toPayInfo}
              variant={'siteTwo'}
              type="button"
              className=" text-sm transition   rounded-sm py-2 px-6"
            >
              Volgende{" "}
              {<ChevronRightIcon className="w-3 h-3 ml-1 text-white" />}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CarInformation;
