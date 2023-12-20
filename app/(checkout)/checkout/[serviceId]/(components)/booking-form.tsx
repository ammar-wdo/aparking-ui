"use client";

import { useBooking } from "../booking.hook";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";
import { CalendarIcon, Loader } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import { DateRange } from "react-day-picker";
import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import PersonalInformation from "./personal-information";
import CarInformation from "./car-information";
import PaymentMethod from "./payment-method";

import ResultPersonal from "./result-personal";
import ResultProducts from "./result-products";
import { Checkbox } from "@/components/ui/checkbox";

type Props = {
  arrivalDate: string;
  departureDate: string;
  arrivalTime: string;
  departureTime: string;
  totalPrice: string;
  title: string;
  extraOptions: {
    id: string;
    price: number;
    image: string;
    description: string;
    label: string;
  }[];
};

const BookingForm = ({
  arrivalDate,
  departureDate,
  arrivalTime,
  departureTime,
  totalPrice,
  title,
  extraOptions,
}: Props) => {
  const { form, onSubmit, options, optionsTotal, handleAddDelete } = useBooking(
    {
      arrivalDate: new Date(arrivalDate),
      departureDate: new Date(departureDate),
      arrivalTime,
      departureTime,
      totalPrice,
    }
  );

  const isLoading = form.formState.isSubmitting;

  const [carStep, setCarStep] = useState(false);
  const [payStep, setPayStep] = useState(false);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 container py-12"
      >
        <div className=" grid lg:grid-cols-3 grid-cols-1 gap-10">
          <div className="space-y-5  lg:col-span-2 ">
            <PersonalInformation
              form={form}
              setCarStep={setCarStep}
              carStep={carStep}
            />
            <CarInformation
              form={form}
              setCarStep={setCarStep}
              carStep={carStep}
              payStep={payStep}
              setPayStep={setPayStep}
            />
            {!!extraOptions.length && (
              <Accordion type="single" collapsible>
                <AccordionItem className="border-none" value="item-1">
                  <AccordionTrigger className="bg-white p-6 hover:no-underline">
                    <h3 className="text-2xl font-bold no-underline ">
                      3. Extra options
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 bg-white space-y-3">
                    {extraOptions.map((option) => (
                      <article
                        key={option.id}
                        className="py-4 grid grid-cols-5 items-center w-full px-1 "
                      >
                        <Checkbox
                          checked={!!options.find((el) => el.id === option.id)}
                          onClick={() => {
                            handleAddDelete(option);
                          }}
                        />
                        <p className="font-semibold text-lg first-letter:capitalize">
                          {option.label}
                        </p>
                        <p className="  first-letter:capitalize text-xs ">
                          {option.description}
                        </p>
                        <p className=" text-sm font-bold ">€ {option.price}</p>
                        {option.image ? (
                          <div className="relative w-[60px] aspect-square rounded-full overflow-hidden">
                            <Image
                              alt="option image"
                              fill
                              src={option.image}
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="relative w-[60px] aspect-square rounded-full overflow-hidden"></div>
                        )}
                      </article>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
            <PaymentMethod
              extraOptions={!!extraOptions.length}
              form={form}
              setCarStep={setCarStep}
              carStep={carStep}
              payStep={payStep}
              setPayStep={setPayStep}
            />
          </div>
          <div className=" p-6 bg-white self-start">
            <h3 className="text-2xl font-bold  ">Order overview</h3>
            {/* <ResultPersonal
              name={`${form.watch("firstName")} ${form.watch("lastName")}`}
              email={form.watch("email")}
              phone={form.watch("phoneNumber")}
            /> */}
            <ResultProducts
              title={title}
              total={totalPrice}
              arrivalDate={new Date(arrivalDate)}
              arrivalTime={arrivalTime}
              departureDate={new Date(departureDate)}
              departureTime={departureTime}
            />
            {!!options.length && <div className="py-3 ">
              <p className="font-bold ">Additional options added</p>
              <div className="flex flex-col gap-2 mt-2">
                {options.map(el=><div className="py-1 text-xs flex justify-between w-full items-center font-bold " key={el.id}><span className="first-letter:capitalize">{el.label} </span> <span className="">€{el.price}</span></div>)}
                </div>
              </div>}

            <div className="flex items-center justify-between w-full mt-6">
              <p>Price including VAT </p>
              <span className="font-bold text-xl">€{totalPrice + optionsTotal}</span>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default BookingForm;
