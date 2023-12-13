import { useForm } from "react-hook-form";
import { bookingDefaultValues } from "./booking-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { ADD_BOOKMARK } from "@/links";
import { toast } from "sonner";
import { useEffect, useState } from "react";

import { bookingSchema } from "@/schemas";
import { handleTimezone } from "@/lib/timezone-handler";

type Props = {
  arrivalDate: Date;
  departureDate: Date;
  arrivalTime: string;
  departureTime: string;
  totalPrice: string;

};

export const useBooking = ({
  arrivalDate,
  arrivalTime,
  departureDate,
  departureTime,
  totalPrice,
  
}: Props) => {


  const params = useParams();

  const serviceId = params.serviceId;

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: bookingDefaultValues(
      arrivalDate,
      departureDate,
      arrivalTime,
      departureTime,
      serviceId as string
    ),
  });

  const router = useRouter();
  async function onSubmit(values: z.infer<typeof bookingSchema>) {
const {startDateString,endDateString} = handleTimezone(values.arrivalDate,values.departureDate)
const refinedValues = {...values,arrivalDate:startDateString,departureDate:endDateString}

          try {

    const result = await axios.post(ADD_BOOKMARK,refinedValues)
    router.push(result.data.url)
   
    toast.success('Successfully booked')

          } catch (error:any) {
            console.log(error)

            toast.error(error?.response?.data?.customError ? error?.response?.data?.customError :'Something went wrong')
          }
  }

  return { form, onSubmit };
};
