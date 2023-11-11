"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { bookingSchema } from "../booking-schema";
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

type Props = {
  form: UseFormReturn<z.infer<typeof bookingSchema>>;
  setCarStep: Dispatch<SetStateAction<boolean>>;
  carStep: boolean;
};

const PersonalInformation = ({ form, setCarStep, carStep }: Props) => {
  const toCarInfo = async () => {
    const isValid = form.getValues("isCompany")
      ? await form.trigger([
          "companyName",
          "address",
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
    }
  };



  return (
    <div className="space-y-5 bg-white p-6">
      <div>
        <div className="flex items-center ">
          <h3 className={cn("text-2xl font-bold", carStep && "text-gray-400")}>
            1. Personal information
          </h3>
          {carStep && (
            <span className="p-2 bg-green-500/20 rounded-full ml-auto">
              <CheckIcon className="w-4 h-4 text-green-500 " />
            </span>
          )}
        </div>

        {!carStep && (
          <p className="text-sm py-3 font-light">
            You have an account?{" "}
            <Link className="text-blue-600 underline" href={""}>
              Login and go directly to payment
            </Link>
          </p>
        )}
      </div>
      {!carStep && (
        <>
          <div className=" flex items-center   w-fit  overflow-hidden gap-7">
            <label htmlFor="for-work" className="">
              Are you traveling for work?
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
                      <FormLabel>Company Name *</FormLabel>
                      <FormControl>
                        <Input
                          className="rounded-none"
                          placeholder="First Name"
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
                      <FormLabel>Address *</FormLabel>
                      <FormControl>
                        <Input
                          className="rounded-none"
                          placeholder="Address"
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
                      <FormLabel>Zip Code *</FormLabel>
                      <FormControl>
                        <Input
                          className="rounded-none"
                          placeholder="zipcode"
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
                  <FormLabel>First Name *</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-none"
                      placeholder="First Name"
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
                  <FormLabel>Last Name *</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-none"
                      placeholder="Last Name"
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
                  <FormLabel>Email Address *</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-none"
                      placeholder="Email Address"
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
                  <FormLabel>Phone Number *</FormLabel>
                  <FormControl>
                    <PhoneInput
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
                  <FormLabel>Flight Number *</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-none"
                      placeholder="Flight number"
                      value={field.value}
                      onChange={(e)=>{field.onChange(e);form.clearErrors('flightNumber')}}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="font-light text-blue-600 flex text-sm items-center justify-center "
            >
              {<ChevronLeft className="mr-1 h-4 w-4" />}Back
            </button>
            <button
              onClick={toCarInfo}
              type="button"
              className="flex items-center bg-orange-500 text-sm transition hover:bg-orange-500/90 text-white rounded-sm py-2 px-6"
            >
              Next Step{" "}
              {<ChevronRightIcon className="w-3 h-3 ml-1 text-white" />}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PersonalInformation;
