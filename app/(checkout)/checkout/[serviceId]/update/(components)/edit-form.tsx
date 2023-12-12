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
import { CalendarIcon, ChevronLeft, HelpCircle, Loader } from "lucide-react";
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
import ActionToolTip from "@/components/tool-tip";
import { useCancel } from "@/hooks/modal-hook";
import DateInformation from "./date-information";

type Props = {
  service: Service & { rules: Rule[]; availability: any[]; bookings: any[] };
};

const EditBookingForm = ({ service }: Props) => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  const {
    form,
    onSubmit,
    timeArray,
 
    differentDate,
    available,
    setAvailable,
    additionalPrice,
    setAdditionalPrice,
    additionaldays,
    setAdditionalDays
   
  
  } = useEditBooking(service);

  const isLoading = form.formState.isSubmitting;
  const {setOpen} = useCancel()
  const [personalStep, setPersonalStep] = useState(false)
  const [carStep, setCarStep] = useState(false);
  const [payStep, setPayStep] = useState(false);
  const { user } = useUser();

  if (!mount) return null;

  if (!user) return redirect("/");



  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 container"
      >
        <div className=" grid lg:grid-cols-3 grid-cols-1">
          <div className="space-y-5  lg:col-span-2 p-5">
            <DateInformation form={form} timeArray={timeArray}
            personalStep={personalStep}
            setPersonalStep={setPersonalStep}
            differentDate ={differentDate}
        
            setAvailable ={(value:'' | 'true' | 'false')=>setAvailable(value)}
       
            setAdditionalDays={(value:number|undefined)=>setAdditionalDays(value)}
     
            setAdditionalPrice={(value:number|undefined)=>setAdditionalPrice(value)}
            />

            <PersonalInformation
            
              timeArray={timeArray}
              form={form}
              personalStep={personalStep}
              setPersonalStep={setPersonalStep}
              setCarStep={setCarStep}
              carStep={carStep}
            />
            <CarInformation
              form={form}
              setCarStep={setCarStep}
              carStep={carStep}
              payStep={payStep}
              setPayStep={setPayStep}
              differentDate={differentDate}
            />
           <div className="flex justify-between items-center">
           <PaymentMethod
              form={form}
              setCarStep={setCarStep}
              carStep={carStep}
              payStep={payStep}
              setPayStep={setPayStep}
              differentDate={differentDate}
            />
            {!differentDate && payStep && <button
            onClick={()=>{setPayStep(false)}}
              type="button"
              className="font-light text-blue-600 flex text-sm items-center justify-center "
            >
              {<ChevronLeft className="mr-1 h-4 w-4" />}Back
            </button>}
            </div>
          </div>
          <div className="p-5">
            <h3 className="text-2xl font-bold p-6  ">Order overview</h3>
            <ResultPersonal
              name={`${form.watch("firstName")} ${form.watch("lastName")}`}
              email={form.watch("email")}
              phone={form.watch("phoneNumber")}
            />
            <ResultProducts
              title={service.name}
              total={user?.total as number}
              arrivalDate={user.arrivalDate}
              arrivalTime={user.arrivalTime}
              departureDate={user.departureDate}
              departureTime={user.departureTime}
            />
            <p className="p-6">Price including VAT  {<span className="font-bold">€{additionalPrice ? user.total + additionalPrice : user.total}</span>}  </p>
            <Separator />

            <div className="px-6">
              {available === 'true' && (
                <div>
                     <p className="py-4 font-semibold">
                  {additionaldays || 0}+ Additional day(s)
                </p>
                <p className="font-semibold py-3">Additional price  €{additionalPrice}</p>
                  </div>
             
              )}
              
              
            
                {available ==='false' && <p className="text-sm text-rose-500 pb-3 text-center font-bold py-3">
                  Not available for this date
                </p>}
              
            </div>

            <Button
        onClick={()=>setOpen({bookingId:user.id,bookingCode:user.bookingCode,email:user.email})}
              variant={"destructive"}
              className=" rounded-sm w-full"
              type="button"
            >
              Cancel your booking{" "}
             
                <ActionToolTip
                  side="right"
                  title="If you cancel your booking before 24 hours ,then you will be refunded"
                >
                  <HelpCircle className="w-4 h-4 ml-3" />
                </ActionToolTip>
            
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default EditBookingForm;
