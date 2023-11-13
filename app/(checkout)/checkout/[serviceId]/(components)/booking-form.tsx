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
import { Service } from "@/types";
import PersonalInformation from "./personal-information";
import CarInformation from "./car-information";
import PaymentMethod from "./payment-method";

import ResultPersonal from "./result-personal";
import ResultProducts from "./result-products";

type Props = {
arrivalDate:string,
departureDate:string,
arrivalTime:string,
departureTime:string,
totalPrice:string,
title:string

};


const BookingForm = ({arrivalDate,departureDate,arrivalTime,departureTime,totalPrice,title}: Props) => {
  const { form, onSubmit } = useBooking({
    arrivalDate: new Date(arrivalDate),
    departureDate: new Date(departureDate),
    arrivalTime,
    departureTime,
    totalPrice,
  
  });

  const isLoading = form.formState.isSubmitting;

const [carStep, setCarStep] = useState(false)
const [payStep, setPayStep] = useState(false)




  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 container">
        <div className=" grid grid-cols-3">

          <div className="space-y-5  lg:col-span-2 p-5">
            <PersonalInformation form={form} setCarStep={setCarStep} carStep={carStep} />
            <CarInformation form={form} setCarStep={setCarStep} carStep={carStep} payStep={payStep} setPayStep={setPayStep} />
            <PaymentMethod  form={form} setCarStep={setCarStep} carStep={carStep} payStep={payStep} setPayStep={setPayStep} />

          </div>
          <div className='p-5'>
<h3 className='text-2xl font-bold p-6  '>Order overview</h3>
<ResultPersonal  name={`${form.watch('firstName')} ${form.watch('lastName')}`} email={form.watch('email')} phone={form.watch('phoneNumber')} />
<ResultProducts title={title} total={totalPrice} arrivalDate={new Date(arrivalDate)} arrivalTime={arrivalTime} departureDate={new Date(departureDate)} departureTime={departureTime} />
<p className='p-6'>Price including VAT </p>
    </div>

        </div>
      

      </form>
    </Form>
  );
};

export default BookingForm;





