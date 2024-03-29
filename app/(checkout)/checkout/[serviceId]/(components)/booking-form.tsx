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
import { CalendarIcon, HelpCircle, Loader } from "lucide-react";
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
import { Tooltip } from "@/components/ui/tooltip";
import ToolTip from "@/components/tooltip";
import DetailsPopover from "./details-popover";
import CheckoutExtraInfo from "@/components/checkout-extra-info";
import PromoBox from "./promo-box";

type Props = {
  arrivalDate: string;
  departureDate: string;
  arrivalTime: string;
  departureTime: string;
  totalPrice: number;
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
  const {
    form,
    onSubmit,
    options,
    optionsTotal,
    handleAddDelete,
    accRef,
    promo,
    reset,
    checkPromo,
    setCode,
    promoCode,
  } = useBooking({
    arrivalDate: new Date(arrivalDate),
    departureDate: new Date(departureDate),
    arrivalTime,
    departureTime,
    totalPrice,
  });

  const isLoading = form.formState.isSubmitting;

  const [carStep, setCarStep] = useState(false);
  const [payStep, setPayStep] = useState(false);

  const theTotal = totalPrice + optionsTotal;

 
  const discountToRemove = promo.value
    ? promo.value
    : promo.percentage
    ? (promo.percentage / 100) * theTotal
    : 0;

  const finalTotal = theTotal - discountToRemove;

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
              accRef={accRef}
            />
            {!!extraOptions.length && (
              <div className="checkoutElement bg-white overflow-hidden">
              <Accordion type="single" collapsible>
                <AccordionItem className="border-none" value="item">
                  <AccordionTrigger
                    ref={accRef}
                    className="bg-white p-6 hover:no-underline "
                  >
                    <h3 className="text-2xl font-bold no-underline ">
                      3. Extra opties
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 bg-white space-y-3">
                    {extraOptions.map((option) => (
                      <article
                        key={option.id}
                        className="bg-gray-50 checkoutElement flex justify-between gap-3  items-center text-center w-full p-4 "
                      >
                        <div className="flex items-center gap-2">
                          <Checkbox
                            className=""
                            checked={
                              !!options.find((el) => el.id === option.id)
                            }
                            onClick={() => {
                              handleAddDelete(option);
                            }}
                          />
                          <div className="gap-4  flex items-center">
                            <p className="first-letter:capitalize text-xs sm:text-sm text-left">
                              {option.label}
                            </p>
                            <DetailsPopover details={option.description} />
                          </div>
                        </div>

                        <p className=" text-sm font-bold ml-auto  sm:mr-20 shrink-0">
                          € {option.price.toFixed(2).replace(".", ",")}
                        </p>
                        {option.image ? (
                          <div className="relative w-[60px] aspect-square rounded-full overflow-hidden hidden sm:block">
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
              </div>
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
          <div>
            <div className=" p-6 bg-white self-start checkoutElement">
              <h3 className="text-2xl font-bold  ">Reservering overzicht</h3>
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
              {!!options.length && (
                <div className="py-3 border-b">
                  <p className="font-bold  ">Extra opties</p>
                  <div className="flex flex-col  mt-2">
                    {options.map((el) => (
                      <div
                        className="py-1  flex justify-between w-full items-center text-neutral-500 text-xs sm:text-sm"
                        key={el.id}
                      >
                        <span className="first-letter:capitalize">
                          {el.label}{" "}
                        </span>{" "}
                        <span className="text-black font-semibold">
                          €{el.price.toFixed(2).replace(".", ",")}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <PromoBox
                promo={promo}
                setCode={setCode}
                promoCode={promoCode}
                reset={reset}
                checkPromo={checkPromo}
              />

           
              {!!discountToRemove && (
                <div className="flex items-center justify-between font-medium mt-4 border-t pt-4">
                  <span>Korting</span>{" "}
                  <span className="font-bold">
                    €{discountToRemove.toFixed(2).replace(".", ",")}
                  </span>
                </div>
              )}
                 <div
                className={cn(
                  "flex items-center justify-between w-full   pt-4"
                )}
              >
                <p className="font-medium">Totaal incl. Btw</p>
                <span
                  className={cn(
                    "font-bold  ",
                    !discountToRemove && "text-2xl ",
                    discountToRemove && "line-through"
                  )}
                >
                  €{theTotal.toFixed(2).replace(".", ",")}
                </span>
              </div>
              {!!discountToRemove && (
                <div className="flex items-center justify-between font-medium mt-4 pt-6 border-t ">
                  <span>Totaal</span>{" "}
                  <span className="text-2xl font-bold">
                    €{finalTotal.toFixed(2).replace(".", ",")}
                  </span>
                </div>
              )}
            </div>
            <CheckoutExtraInfo />
          </div>
        </div>
      </form>
    </Form>
  );
};

export default BookingForm;
