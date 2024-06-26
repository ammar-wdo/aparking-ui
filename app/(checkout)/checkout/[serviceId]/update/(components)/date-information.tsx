"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUser } from "@/hooks/user-hook";
import { handleTimezone } from "@/lib/timezone-handler";
import { getCurrentDateInNetherlands } from "@/lib/toAmsterdam";
import { cn } from "@/lib/utils";
import { ALL_SERVICES } from "@/links";
import { bookingSchema } from "@/schemas";
import axios from "axios";
import { format } from "date-fns";
import {
  CalendarIcon,
  CheckIcon,
  ChevronLeft,
  ChevronRightIcon,
  Loader,
} from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import queryString from "query-string";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type Props = {
  form: UseFormReturn<z.infer<typeof bookingSchema>>;
  timeArray: string[];
  setPersonalStep: Dispatch<SetStateAction<boolean>>;
  personalStep: boolean;
  differentDate: boolean;

  setAvailable: (value: "" | "true" | "false") => void;

  setAdditionalDays: (value: number | undefined) => void;

  setAdditionalPrice: (value: number | undefined) => void;
  startOpen:boolean,
  endOpen:boolean,
  setStart:(val:boolean)=>void,
  setEnd:(val:boolean)=>void
};

const DateInformation = ({
  form,
  timeArray,
  personalStep,
  setPersonalStep,
  differentDate,
  setAvailable,
  setAdditionalDays,
  setAdditionalPrice,
  startOpen,endOpen,setStart,setEnd
  
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();

  const params = useParams();
  const serviceId = params.serviceId;

  const handleClick = async () => {

    if(!form.getValues('arrivalDate') ||!   form.getValues("departureDate")|| !user?.arrivalDate || !user.departureDate) return
    const { startDateString, endDateString } = handleTimezone(
      form.getValues("arrivalDate"),
      form.getValues("departureDate")
    );
    const { startDateString: userStart, endDateString: userEnd } =
      handleTimezone(
        new Date(user?.arrivalDate!),
        new Date(user?.departureDate!)
      );
    
    if (!differentDate) {
      setPersonalStep(true);
    } else {
      try {
        setIsLoading(true);

        const url = queryString.stringifyUrl({
          url: ALL_SERVICES + `/check/${serviceId}`,
          query: {
            startDate: startDateString,
            endDate: endDateString,
            startTime: form.getValues("arrivalTime"),
            endTime: form.getValues("departureTime"),
            bookingId: user?.id,
            userStart,
            userEnd,
          },
        });
        console.log(startDateString, endDateString, serviceId);
        const res = await axios(url);
        console.log(res.data);

        if (res.data.response || res.data.ignore) {
          setAvailable("false");
          setAdditionalDays(undefined);
          setAdditionalPrice(undefined);
        }
        if (res.data.available) {
          setAvailable("true");
          setAdditionalDays(res.data.additionalDays);
          setAdditionalPrice(res.data.additionalPrice);
          setPersonalStep(true)
        }
      } catch (error) {
        console.log(error);
        toast.error("something went wrong");
        setAvailable("false");
        setAdditionalDays(undefined);
        setAdditionalPrice(undefined);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const router = useRouter();

  return (
    <div className="space-y-5 bg-white p-6 checkoutElement">
      <div className="flex items-center">
        <h3
          className={cn("text-2xl font-bold", personalStep && "text-gray-400")}
        >
          1.Informatie over de datum.
        </h3>
        {personalStep && (
          <span className="p-2 bg-green-500/20 rounded-full ml-auto">
            <CheckIcon className="w-4 h-4 text-green-500 " />
          </span>
        )}
      </div>

      {!personalStep && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-1">
              <FormField
                control={form.control}
                name="arrivalDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Nieuwe aankomstdatum.</FormLabel>
                    <Popover open={startOpen} onOpenChange={setStart}>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(new Date(field.value), "dd-MM-yyyy")
                            ) : (
                              <span>Kies een datum.</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          className="w-full"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                            date < new Date("1900-01-01")
                          }
                          initialFocus
                          defaultMonth={form.watch('arrivalDate')}
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="arrivalTime"
                render={({ field }) => (
                  <FormItem className="space-y-0 w-full">
                    <FormLabel>Nieuwe aankomsttijd.</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a verified email to display" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <ScrollArea className="h-[200px] w-full rounded-md  p-4">
                          {timeArray.map((el) => 
                          {
                            
                            const [hours,minutes] = el.split(':')
                            const arrive = form.watch('arrivalDate')
                            arrive.setHours(+hours)
                            arrive.setMinutes(+minutes)


                            // const amesterdam = new Date()
                            // amesterdam.setHours(new Date().getUTCHours()+1)
                            // amesterdam.setMinutes(new Date().getUTCMinutes())
                 
                 
                         
                       
                 
                 
                         
                 
                             if(getCurrentDateInNetherlands() > arrive)  return null

                            
                            return <SelectItem key={el} value={el}>
                              {el}
                            </SelectItem>}
                          )}
                        </ScrollArea>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col  gap-1">
              <FormField
                control={form.control}
                name="departureDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Nieuwe vertrekdatum.</FormLabel>
                    <Popover open={endOpen} onOpenChange={setEnd}>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(new Date(field.value), "dd-MM-yyyy")
                            ) : (
                              <span>Kies een datum.</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={new Date(field.value)}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date <
                            new Date(
                              form
                                .getValues("arrivalDate")
                                ?.setHours(0, 0, 0, 0)
                            )
                          }
                          initialFocus
                          defaultMonth={form.watch('departureDate')}
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="departureTime"
                render={({ field }) => (
                  <FormItem className="space-y-0 p-0 w-full">
                    <FormLabel className="p-0 ">Nieuwe vertrektijd.</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a verified email to display" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent className="">
                        <ScrollArea className="h-[200px]  w-full rounded-md  p-4">
                        {timeArray.map((el) => 
                          {
                            
                            const [hours,minutes] = form.watch('arrivalTime').split(':')
                            const arrive = form.watch('arrivalDate')
                            arrive.setHours(+hours)
                            arrive.setMinutes(+minutes)
                            const [endHours,endMinutes] = el.split(':')
                            const departure = form.watch('departureDate')
                            departure.setHours(+endHours)
                            departure.setMinutes(+endMinutes)

                            if(departure.getTime() <= arrive.getTime()) return null
                            
                            return <SelectItem key={el} value={el}>
                              {el}
                            </SelectItem>}
                          )}
                        </ScrollArea>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-5">
            <Link
             
             href={'/'}
              type="button"
              className="font-light text-blue-600 flex text-sm items-center justify-center "
            >
              {<ChevronLeft className="mr-1 h-4 w-4" />}Home pagina
            </Link>

            <Button
              type="button"
              onClick={handleClick}
              variant={"siteTwo"}
              disabled={isLoading}
              
            >
              {differentDate ? (
                <>
                 Controleer de beschikbaarheid.{" "}
                  {isLoading && (
                    <Loader className="ml-2 w-4 h-4 animate-spin" />
                  )}
                </>
              ) : (
                "Volgende"
              )}
              {<ChevronRightIcon className="w-3 h-3 ml-1 text-white" />}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateInformation;
