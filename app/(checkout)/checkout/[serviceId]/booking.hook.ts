import { useForm } from "react-hook-form";
import { bookingDefaultValues } from "./booking-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { ADD_BOOKMARK } from "@/links";
import { toast } from "sonner";
import { useEffect, useRef, useState } from "react";

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

  type Option= {id:string,price:number,label:string}

  const [options, setOptions]= useState<Option[] | []>([])
  const [optionsTotal, setOptionsTotal] = useState(0)

  const accRef = useRef<HTMLButtonElement | null>(null)

  const handleAddDelete = (option:Option)=>{
const exist = !!options.find((el)=>el.id===option.id)

if(exist){
  let newOptions = options
  
  newOptions = newOptions.filter(el=>el.id !==option.id)
  setOptions(newOptions)
}else{

  let newOptions = options
  newOptions = [...newOptions,option]
  setOptions(newOptions)
}


  }

  useEffect(()=>{
   
    if(options.length){
      let newT
      const newTotal = options.reduce((total,val)=>total + val.price,0) 
    

      setOptionsTotal(()=>newTotal)
    }else{
      setOptionsTotal(0)
    }
  },[options])



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

const ids = options.map(el=>el.id)

const refinedValues = {...values,arrivalDate:startDateString,departureDate:endDateString,ids}

          try {

    const result = await axios.post(ADD_BOOKMARK,refinedValues)
    router.push(result.data.url)
   
    toast.success('Successfully booked')

          } catch (error:any) {
            console.log(error)

            toast.error(error?.response?.data?.customError ? error?.response?.data?.customError :'Something went wrong')
          }
  }

  return { form, onSubmit,options,optionsTotal ,handleAddDelete,accRef};
};
