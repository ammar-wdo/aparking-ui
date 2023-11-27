"use client";


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

import { useUser } from "@/hooks/user-hook";
import PersonalInformation from "./personal-information";
import CarInformation from "./car-information";
import PaymentMethod from "./payment-method";
import ResultPersonal from "./result-personal";
import ResultProducts from "./result-products";
import { useEditBooking } from "../edit.hook";
import { Rule, Service } from "@/schemas";
import { redirect } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { findTotalPrice } from "./(helpers)/findNewTotal";


type Props = {

service:Service &{rules:Rule[]}

};





const EditBookingForm = ({service}: Props) => {

const [mount,setMount] = useState(false)
useEffect(()=>{setMount(true)},[])
  const { form, onSubmit ,timeArray,newDays,newPrice,block} = useEditBooking(service);
  console.log("new price",newPrice)

  const isLoading = form.formState.isSubmitting;

const [carStep, setCarStep] = useState(false)
const [payStep, setPayStep] = useState(false)
const {user} = useUser()


if(!mount) return null

if(!user) return redirect('/')
console.log(block)




  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 container">
        <div className=" grid lg:grid-cols-3 grid-cols-1">

          <div className="space-y-5  lg:col-span-2 p-5">
            <PersonalInformation block={block} timeArray={timeArray} form={form} setCarStep={setCarStep} carStep={carStep} />
            <CarInformation form={form} setCarStep={setCarStep} carStep={carStep} payStep={payStep} setPayStep={setPayStep} />
            <PaymentMethod  form={form} setCarStep={setCarStep} carStep={carStep} payStep={payStep} setPayStep={setPayStep} />

          </div>
          <div className='p-5'>
<h3 className='text-2xl font-bold p-6  '>Order overview</h3>
<ResultPersonal  name={`${form.watch('firstName')} ${form.watch('lastName')}`} email={form.watch('email')} phone={form.watch('phoneNumber')} />
<ResultProducts title={service.name} total={user?.total as number} arrivalDate={user.arrivalDate} arrivalTime={user.arrivalTime} departureDate={user.departureDate} departureTime={user.departureTime} />
<p className='p-6'>Price including VAT </p>
<Separator  />

<div>
{!!newDays &&<p className="py-4 font-semibold">{newDays} + Additional day(s)</p> }
{!block? <p>€{newPrice-user.total}</p> :<p className="text-sm text-rose-500">Not available for this date</p>}


</div>
    </div>

        </div>
      

      </form>
    </Form>
  );
};

export default EditBookingForm;





