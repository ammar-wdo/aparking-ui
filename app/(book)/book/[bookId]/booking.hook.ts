import { useForm } from "react-hook-form"
import { bookingDefaultValues, bookingSchema, calculateParkingDays } from "./booking-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useParams, useRouter } from "next/navigation"
import axios from "axios"
import { ADD_BOOKMARK } from "@/links"
import { toast } from "sonner"
import { useEffect, useState } from "react"
import { Service } from "@/types"


type Props = {
    arrivalDate:Date,
    departureDate:Date,
    arrivalTime:string,
    departureTime:string,
    service:Service | null
}

export const useBooking = ({arrivalDate,arrivalTime,departureDate,departureTime,service}:Props)=>{

  const params = useParams()

  const serviceId = params.bookId



  const form = useForm<z.infer<typeof bookingSchema>>({
      resolver: zodResolver(bookingSchema),
      defaultValues: bookingDefaultValues(arrivalDate,departureDate,arrivalTime,departureTime,serviceId as string)
    })


    useEffect(()=>{
const myPricing = service?.pricings.slice(0,form.getValues('daysofparking'))
const totalPrice = myPricing?.reduce((i,value)=>i+value,0)

form.setValue('total',totalPrice ?? 0)

    },[form.watch('daysofparking')])


  useEffect(()=>{

  const newArrivalDate = form.getValues('arrivalDate')
  const newDepartureDate = form.getValues('departureDate')

  

  const parkingDays = calculateParkingDays(newArrivalDate,newDepartureDate) +1
  
   
    form.setValue('daysofparking',parkingDays)

  

  },[form.watch('arrivalDate'),form.watch('departureDate')])


  

const router = useRouter()
     async function onSubmit(values: z.infer<typeof bookingSchema>) {
     
     
      try {
      
const result = await axios.post(ADD_BOOKMARK,values)
router.push(result.data.url)
console.log(result)
toast.success('Successfully booked')



      } catch (error:any) {
        console.log(error)

        toast.error(error?.response?.data?.customError ? error?.response?.data?.customError :'Something went wrong')
      }
       
      }


      return {form,onSubmit}
}
