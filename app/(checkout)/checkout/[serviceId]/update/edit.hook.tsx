import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { ADD_BOOKMARK, UPDATE_BOOKING } from "@/links";
import { toast } from "sonner";
import { useEffect, useRef, useState } from "react";

import { Rule, Service, bookingSchema } from "@/schemas";
import { handleTimezone } from "@/lib/timezone-handler";
import { useUser } from "@/hooks/user-hook";
import { calculateParkingDays } from "./(helpers)/findParkingDays";
import { findTotalPrice } from "./(components)/(helpers)/findNewTotal";
import { isServiceValid } from "./(components)/(helpers)/isServiceValid";

export const useEditBooking = (
  service: Service & {
    pricings: number[];
    rules: any[];
    availability: any[];
    bookings: any[];
  }
) => {
  const params = useParams();

  const serviceId = service.id;
  const { user } = useUser();
  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      ...user,
      arrivalDate: new Date(user?.arrivalDate!),
      departureDate: new Date(user?.departureDate!),
      serviceId: serviceId as string,
    },
  });

  const [differentDate, setDifferentDate] = useState(false);
  const [available, setAvailable] = useState<"true" | "false" | "">("");
  const [additionalPrice, setAdditionalPrice] = useState<number | undefined>(
    undefined
  );
  const [additionaldays, setAdditionalDays] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    if (user && form.watch("arrivalDate") && form.watch("departureDate")) {
      const { startDateString, endDateString } = handleTimezone(
        new Date(user.arrivalDate),
        new Date(user.departureDate)
      );
      const userArrival = new Date(startDateString);
      const userDeparture = new Date(endDateString);

      const {
        startDateString: formArrivalString,
        endDateString: formDepartureString,
      } = handleTimezone(
        form.watch("arrivalDate"),
        form.watch("departureDate")
      );

      const formArrival = new Date(formArrivalString);
      const formDeparture = new Date(formDepartureString);

      if (
        userArrival.getTime() !== formArrival.getTime() ||
        userDeparture.getTime() !== formDeparture.getTime()
      ) {
        setDifferentDate(true);
      } else {
        setDifferentDate(false);
        setAvailable('')
        setAdditionalDays(undefined)
        setAdditionalPrice(undefined)
      }
    }
  }, [user, form.watch("arrivalDate"), form.watch("departureDate")]);

  const router = useRouter();
  async function onSubmit(values: z.infer<typeof bookingSchema>) {
    const { startDateString, endDateString } = handleTimezone(
      values.arrivalDate,
      values.departureDate
    );
    const refinedValues = {
      ...values,
      arrivalDate: startDateString,
      departureDate: endDateString,
      bookingCode: user?.bookingCode,
    };

    try {
      const result = await axios.post(UPDATE_BOOKING, refinedValues);
      if (result.data.url) {
        router.push(result.data.url);
      }

    
    } catch (error: any) {
      console.log(error);

      toast.error(
        error?.response?.data?.customError
          ? error?.response?.data?.customError
          : "Something went wrong"
      );
    }
  }

  const timeArray = [];

  for (let hour = 0; hour <= 23; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const formattedHour = hour.toString().padStart(2, "0");
      const formattedMinute = minute.toString().padStart(2, "0");
      const time = `${formattedHour}:${formattedMinute}`;
      timeArray.push(time);
    }
  }

  return {
    form,
    onSubmit,
    timeArray,
    differentDate,
    available,
    setAvailable,
    additionalPrice,
    setAdditionalPrice,
    additionaldays,
    setAdditionalDays,
  };
};
