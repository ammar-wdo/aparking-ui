import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { ADD_BOOKMARK, UPDATE_BOOKING } from "@/links";
import { toast } from "sonner";
import { useEffect, useState } from "react";

import { Rule, Service, bookingSchema } from "@/schemas";
import { handleTimezone } from "@/lib/timezone-handler";
import { useUser } from "@/hooks/user-hook";
import { calculateParkingDays } from "./(helpers)/findParkingDays";
import { findTotalPrice } from "./(components)/(helpers)/findNewTotal";
import { isServiceValid } from "./(components)/(helpers)/isServiceValid";



export const useEditBooking = (service:Service & {pricings:number[],rules:any[],availability:any[],bookings:any[]}) => {


  const params = useParams();

  const serviceId = service.id;
  const {user} = useUser()
console.log(user)

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
const newPrice = findTotalPrice(service,newDays+user?.daysofparking!,form.watch('arrivalDate')?.toString(),form.watch('departureDate')?.toString()) 


useEffect(()=>{
  if(newPrice){
   
    form.setValue('total',newPrice)
  }
},[newPrice])


const [isValid, setIsValid] = useState<boolean | undefined>()
const [validPrice, setValidPrice] = useState<boolean | undefined>()

useEffect(()=>{

  if(!isValid || !validPrice){
    setBlock(true)
  }

  if(isValid && validPrice)
  {
    setBlock(false)
  }
},[validPrice,isValid])


useEffect(()=>{
  if(newDays){

    if(isNaN(newPrice) || newPrice === 0 || !newPrice ){
      setValidPrice(false)
    }else{
     setValidPrice(true)
    }


  
  }

  if(!newDays){
    
  setValidPrice(true)
  }
},[newDays])










  useEffect(()=>{

if(form.getValues('arrivalDate') && form.getValues('departureDate')){

  if(new Date(form.getValues('arrivalDate')).getTime()>new Date(form.getValues('departureDate')).getTime()){
    form.setValue('departureDate',new Date(form.getValues('arrivalDate')))
  }
  
  newPakingDays = calculateParkingDays(form.getValues('arrivalDate'),form.getValues('departureDate'))

  form.setValue('daysofparking',newPakingDays)
 
 
  if(newPakingDays > user?.daysofparking!){
    setNewDays(newPakingDays - user?.daysofparking!)
  }else{
  
    setNewDays(0)
  }


 const validService = isServiceValid(service,form.getValues('arrivalDate').toString(),form.getValues('departureDate').toString(),user?.id!,newDays)
 setIsValid(validService)
}






  },[form.watch('departureDate'),form.watch('arrivalDate')])


  








  const router = useRouter();
  async function onSubmit(values: z.infer<typeof bookingSchema>) {
    
const {startDateString,endDateString} = handleTimezone(values.arrivalDate,values.departureDate)
const refinedValues = {...values,arrivalDate:startDateString,departureDate:endDateString,bookingCode:user?.bookingCode}

console.log(refinedValues)
          try {

    const result = await axios.post(UPDATE_BOOKING,refinedValues)
    if(result.data.url){
      router.push(result.data.url)
    }
   
   
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
