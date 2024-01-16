import { useForm } from "react-hook-form";
import { bookingDefaultValues } from "./booking-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { ADD_BOOKMARK, PROMOCODE } from "@/links";
import { toast } from "sonner";
import { ChangeEvent, useEffect, useRef, useState } from "react";

import { bookingSchema } from "@/schemas";
import { handleTimezone } from "@/lib/timezone-handler";

type Props = {
  arrivalDate: Date;
  departureDate: Date;
  arrivalTime: string;
  departureTime: string;
  totalPrice: number;
};

export const useBooking = ({
  arrivalDate,
  arrivalTime,
  departureDate,
  departureTime,
  totalPrice,
}: Props) => {
  const params = useParams();

  type Option = { id: string; price: number; label: string };

  const [options, setOptions] = useState<Option[] | []>([]);
  const [optionsTotal, setOptionsTotal] = useState(0);

  const [promo, setPromo] = useState<{
    loading: boolean;
    message: string | undefined;
    id: string | undefined;
    label: string | undefined;
    percentage: number | undefined;
    value: number | undefined;
  }>({
    loading: false,
    message: undefined,
    label: undefined,
    id: undefined,
    value: undefined,
    percentage: undefined,
  });

  const [promoCode,setPromoCode] = useState('')

  const accRef = useRef<HTMLButtonElement | null>(null);



  useEffect(()=>{
const newPromoCode = promoCode.toUpperCase()
setPromoCode(newPromoCode)
  },[promoCode])

  const handleAddDelete = (option: Option) => {
    const exist = !!options.find((el) => el.id === option.id);

    if (exist) {
      let newOptions = options;

      newOptions = newOptions.filter((el) => el.id !== option.id);
      setOptions(newOptions);
    } else {
      let newOptions = options;
      newOptions = [...newOptions, option];
      setOptions(newOptions);
    }
  };

  useEffect(() => {
    if (options.length) {
      let newT;
      const newTotal = options.reduce((total, val) => total + val.price, 0);

      setOptionsTotal(() => newTotal);
    } else {
      setOptionsTotal(0);
    }
  }, [options]);

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

  const reset = () => {
    setPromo((promo) => ({
      loading: false,
      message: undefined,
      label: undefined,
      id: undefined,
      value: undefined,
      percentage: undefined,
    }));
  };

  const setCode = (e:ChangeEvent<HTMLInputElement>)=>{
setPromoCode(e.target.value)
  }

  const checkPromo = async () => {
    if (!promoCode)
      return setPromo((promo) => ({ ...promo, message: "Voer een geldige waarde in" }));
    setPromo((promo) => ({ ...promo, loading: true, message: undefined }));
    try {
      const { startDateString, endDateString } = handleTimezone(
        form.getValues('arrivalDate'),
       form.getValues('departureDate')
      );
      const values = {
        code:promoCode,
        startDate:startDateString,
        endDate:endDateString,
        serviceId:form.getValues('serviceId')
      }

      const res = await axios.post(PROMOCODE,values) 
      const data = res.data
      setPromoCode('')

      setPromo(promo=>({...promo,loading:false}))

      if(data.message){
        setPromo(promo=>({...promo,message:data.message}))
      }
      if(data.label){
        setPromo(promo=>({...promo,label:data.label,value:data.value,percentage:data.percentage,id:data.id}))
      }
    
    } catch (error) {
      setPromo((promo) => ({ ...promo, loading: false }));
      console.log(error);
      toast.error("something went wrong");
    }
  };
  async function onSubmit(values: z.infer<typeof bookingSchema>) {
    const { startDateString, endDateString } = handleTimezone(
      values.arrivalDate,
      values.departureDate
    );

    const ids = options.map((el) => el.id);

    const refinedValues = {
      ...values,
      arrivalDate: startDateString,
      departureDate: endDateString,
      ids,
      discountId:promo.id ? promo.id : undefined
    };

    try {
      const result = await axios.post(ADD_BOOKMARK, refinedValues);
      router.push(result.data.url);

      toast.success("Successfully booked");
    } catch (error: any) {
      console.log(error);

      toast.error(
        error?.response?.data?.customError
          ? error?.response?.data?.customError
          : "Something went wrong"
      );
    }
  }

  return {
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
    promoCode
  };
};
