"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Dispatch, SetStateAction, useRef, useState } from "react";
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
import { CheckIcon, ChevronLeft, ChevronRightIcon } from "lucide-react";
import { bookingSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Props = {
  form: UseFormReturn<z.infer<typeof bookingSchema>>;
  setCarStep: Dispatch<SetStateAction<boolean>>;
  carStep: boolean;
};

const PersonalInformation = ({ form, setCarStep, carStep }: Props) => {
  const personalRef = useRef<HTMLDivElement>(null)
  const toCarInfo = async () => {
    const isValid = form.getValues("isCompany")
      ? await form.trigger([
          "companyName",
          "address",
          'place',
          'vatNumber',
          "zipcode",
          "firstName",
          "lastName",
          "email",
          "phoneNumber",
          "flightNumber",
        ],{shouldFocus:true})
      : await form.trigger([
          "firstName",
          "lastName",
          "email",
          "phoneNumber",
          "flightNumber",
        ],{shouldFocus:true});


        
    if (isValid) {
      setCarStep(true);
      personalRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  };

const router = useRouter()

  return (
    <div ref={personalRef} className="space-y-5 bg-white p-6 checkoutElement">
      <div>
        <div className="flex items-center ">
          <h3 className={cn("text-2xl font-bold", carStep && "text-gray-400")}>
            1. Persoonlijke informatie
          </h3>
          {carStep && (
            <span className="p-2 bg-green-500/20 rounded-full ml-auto">
              <CheckIcon className="w-4 h-4 text-green-500 " />
            </span>
          )}
        </div>

    
      </div>
      {!carStep && (
        <>
          <div className=" flex items-center   w-fit  overflow-hidden gap-7">
            <label htmlFor="for-work" className="">
            Reist u zakelijk? 
            </label>
            <input
              id="for-work"
              type="checkbox"
              className="cursor-pointer"
              checked={form.watch("isCompany")}
              onChange={() =>
                form.setValue("isCompany", !form.watch("isCompany"))
              }
            />
          </div>

          {form.watch("isCompany") && (
            <>
              {" "}
              <div className="grid gird-cols-1 md:grid-cols-2 gap-3">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bedrijfsnaam *</FormLabel>
                      <FormControl>
                        <Input
                          className=""
                          placeholder="Bedrijfsnaam"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Adres *</FormLabel>
                      <FormControl>
                        <Input
                          className=""
                          placeholder="Adres"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="vatNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>BTW Nummer*</FormLabel>
                      <FormControl>
                        <Input
                          className=""
                          placeholder="VAT"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="place"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Plaats*</FormLabel>
                      <FormControl>
                        <Input
                          className=""
                          placeholder="Place"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="zipcode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Postcode *</FormLabel>
                      <FormControl>
                        <Input
                          className=""
                          placeholder="Postcode"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Separator className="my-10  " />
            </>
          )}
          <div className="grid gird-cols-1 md:grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Voornaam *</FormLabel>
                  <FormControl>
                    <Input
                      className=""
                      placeholder="Voornaam"
                   value={field.value}
                   onChange={(e)=>{field.onChange(e);form.clearErrors('firstName')}}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Achternaam*</FormLabel>
                  <FormControl>
                    <Input
                      className=""
                      placeholder="achternaam"
                      value={field.value}
                      onChange={(e)=>{field.onChange(e);form.clearErrors('lastName')}}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mailadres*</FormLabel>
                  <FormControl>
                    <Input
                      className=""
                      placeholder="E-mailadres"
                      value={field.value}
                      onChange={(e)=>{field.onChange(e);form.clearErrors('email')}}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Mobiel nummer*</FormLabel>
                  <FormControl>
                    <PhoneInput
                    placeholder="Mobiel nummer"
                      enableSearch={true}
                      buttonStyle={{ border: "none" }}
                      containerStyle={{
                        width: "100%",
                        border: "0.4px #ECECEC solid",
                      }}
                      inputStyle={{
                        border: "none",
                        width: "100%",
                        backgroundColor: "transparent",
                      }}
                      value={form.getValues("phoneNumber")}
                      onChange={(phone) => {form.setValue("phoneNumber", phone);form.clearErrors('phoneNumber')}}
                      
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="flightNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vluchtnummer</FormLabel>
                  <FormControl>
                    <Input
           
                      className=""
                      placeholder="Vluchtnummer"
                      value={field.value}
                      onChange={(e)=>{field.onChange(e);form.clearErrors('flightNumber');}}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
            onClick={()=>{router.back();router.refresh()}}
              type="button"
              className="font-light text-blue-600 flex text-sm items-center justify-center "
            >
              {<ChevronLeft className="mr-1 h-4 w-4" />}Terug
            </button>
            <Button
              onClick={toCarInfo}
              type="button"
              variant={'siteTwo'}
              className=" rounded-sm py-2 px-6"
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

export default PersonalInformation;
