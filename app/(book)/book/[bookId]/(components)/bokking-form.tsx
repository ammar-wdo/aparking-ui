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
import { format } from "date-fns";
import { CalendarIcon, Loader } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";

type Props = {};



const BookingForm = (props: Props) => {
  const { form, onSubmit } = useBooking({
    arrivalDate: new Date("11-1-2023"),
    departureDate: new Date(Date.now()),
    arrivalTime: "11:00",
    departureTime: "24:00",
  });

  const isLoading = form.formState.isSubmitting;
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
          <FormField
            control={form.control}
            name="bookingOnBusinessName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Booking business name</FormLabel>
                <FormControl>
                  <Input placeholder="bkking business name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="extraServiceFee"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Extra service fee</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="service fee" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <Input placeholder="status" {...field} />
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
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="address" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="arrivalDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Arrival date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bookingCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Booking code</FormLabel>
                <FormControl>
                  <Input placeholder="booking code" {...field} />
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
                <FormLabel>Car color</FormLabel>
                <FormControl>
                  <Input placeholder="booking code" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="carLicense"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Car lisence</FormLabel>
                <FormControl>
                  <Input placeholder="booking code" {...field} />
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
                <FormLabel>Car model</FormLabel>
                <FormControl>
                  <Input placeholder="booking code" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
         
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company name</FormLabel>
                <FormControl>
                  <Input placeholder="company name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="arrivalTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Arrival time</FormLabel>
                <FormControl>
                  <Input placeholder="arrivel time" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="departureTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Departure time</FormLabel>
                <FormControl>
                  <Input placeholder="departure time" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="departureDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Departure date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < form.getValues("arrivalDate")}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="discount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Discount</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="discount" {...field} />
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
                <FormLabel>Flight number</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="fkiht number" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
       
          <FormField
            control={form.control}
            name="parkingPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parking price</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="parking price" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="paymentStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Payment status</FormLabel>
                <FormControl>
                  <Input placeholder="payment status" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
       <FormField
          control={form.control}
          name="paymentMethod"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Payment method</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0 justify-between border rounded-md p-1 px-4">
                    <FormControl>
                      <RadioGroupItem value="MASTER_CARD" />
                    </FormControl>
                    <FormLabel className="capitalize font-semibold">
                     master card
                    </FormLabel>
                    <div className="w-20 aspect-square relative"><Image fill alt="payment" src={'/mastercard.png'} className="object-contain"/></div>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 justify-between border rounded-md p-1 px-4">
                    <FormControl>
                      <RadioGroupItem value="VISA_CARD" />
                    </FormControl>
                    <FormLabel className="capitalize font-semibold">
                     visa card
                    </FormLabel>
                    <div className="w-20 aspect-square relative"><Image fill alt="payment" src={'/visacard.png'} className="object-contain"/></div>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 justify-between border rounded-md p-1 px-4">
                    <FormControl>
                      <RadioGroupItem value="AMERICAN_EXPRESS" />
                    </FormControl>
                    <FormLabel className="capitalize font-semibold">
                   american express
                    </FormLabel>
                    <div className="w-20 aspect-square relative"><Image fill alt="payment" src={'/americanexpress.png'} className="object-contain"/></div>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 justify-between border rounded-md p-1 px-4">
                    <FormControl>
                      <RadioGroupItem value="PAYPALL" />
                    </FormControl>
                    <FormLabel className="capitalize font-semibold">
                     paypall
                    </FormLabel>
                    <div className="w-20 aspect-square relative"><Image fill alt="payment" src={'/paypal.webp'} className="object-contain"/></div>
                  </FormItem>
                 
             
                </RadioGroup>
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
                <FormLabel>Place</FormLabel>
                <FormControl>
                  <Input placeholder="place" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="returnFlightNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Return flight number</FormLabel>
                <FormControl>
                  <Input placeholder="return flight number" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="total"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="total" {...field} />
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
                <FormLabel>Vat number</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="total" {...field} />
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
                <FormLabel>Zipcode</FormLabel>
                <FormControl>
                  <Input placeholder="zipcode" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button disabled={isLoading} type="submit">
          Submit {isLoading && <Loader className="animate-spin ml-3 w-3 h-3" />}
        </Button>
      </form>
    </Form>
  );
};

export default BookingForm;
