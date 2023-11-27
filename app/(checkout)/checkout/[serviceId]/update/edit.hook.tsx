import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { ADD_BOOKMARK } from "@/links";
import { toast } from "sonner";
import { useEffect, useState } from "react";

import { Rule, Service, bookingSchema } from "@/schemas";
import { handleTimezone } from "@/lib/timezone-handler";
import { useUser } from "@/hooks/user-hook";
import { calculateParkingDays } from "./(helpers)/findParkingDays";
import { findTotalPrice } from "./(components)/(helpers)/findNewTotal";



export const useEditBooking = (service:Service & {pricings:number[],rules:Rule[]}) => {


  const params = useParams();

  const serviceId = service.id;
  const {user} = useUser()

  const [newDays, setNewDays] = useState(0)


  const [block, setBlock] = useState(false)

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues:
    { ...user,
      arrivalDate:new Date(user?.arrivalDate!),
      departureDate:new Date(user?.departureDate!),
      serviceId: serviceId as string,
     



    
    
    }

    
  });


let newPakingDays
const newPrice = findTotalPrice(service,newDays+user?.daysofparking!,form.watch('arrivalDate').toString(),form.watch('departureDate').toString())


useEffect(()=>{
  if(newDays){
    if(isNaN(newPrice) ){
      setBlock(true)
    }else{
      setBlock(false)
    }
  }
},[newDays])










  useEffect(()=>{

if(form.getValues('arrivalDate') && form.getValues('departureDate')){
  // console.log(form.getValues('arrivalDate').toLocaleDateString(),form.getValues('departureDate').toLocaleDateString())
  if(new Date(form.getValues('arrivalDate')).getTime()>new Date(form.getValues('departureDate')).getTime()){
    form.setValue('departureDate',new Date(form.getValues('arrivalDate')))
  }
  
  newPakingDays = calculateParkingDays(form.getValues('arrivalDate'),form.getValues('departureDate'))
  // console.log("parking days",user?.daysofparking,"new paking days",newPakingDays)
  if(newPakingDays > user?.daysofparking!){
    setNewDays(newPakingDays - user?.daysofparking!)
  }else{
    setNewDays(0)
  }
}


  },[form.watch('departureDate'),form.watch('arrivalDate')])








  const router = useRouter();
  async function onSubmit(values: z.infer<typeof bookingSchema>) {
    
const {startDateString,endDateString} = handleTimezone(values.arrivalDate,values.departureDate)
const refinedValues = {...values,arrivalDate:startDateString,departureDate:endDateString}
console.log(values)
console.log(refinedValues)
          try {

    // const result = await axios.post(ADD_BOOKMARK,refinedValues)
    // router.push(result.data.url)
   
    toast.success('Successfully booked')

          } catch (error:any) {
            console.log(error)

            toast.error(error?.response?.data?.customError ? error?.response?.data?.customError :'Something went wrong')
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



  return { form, onSubmit ,timeArray,newDays,newPrice,block};
};
