import { useForm } from "react-hook-form"
import { bookingDefaultValues, bookingSchema } from "./booking-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useParams, useRouter } from "next/navigation"
import axios from "axios"
import { ADD_BOOKMARK } from "@/links"
import { toast } from "sonner"


type Props = {
    arrivalDate:Date,
    departureDate:Date,
    arrivalTime:string,
    departureTime:string
}

export const useBooking = ({arrivalDate,arrivalTime,departureDate,departureTime}:Props)=>{


    const params = useParams()

    const serviceId = params.bookId

    const form = useForm<z.infer<typeof bookingSchema>>({
        resolver: zodResolver(bookingSchema),
        defaultValues: bookingDefaultValues(arrivalDate,departureDate,arrivalTime,departureTime,serviceId as string)
      })

const router = useRouter()
     async function onSubmit(values: z.infer<typeof bookingSchema>) {
        console.log(values)
      try {
        
const result = await axios.post(ADD_BOOKMARK,values)
console.log(result)
toast.success('Successfully booked')



      } catch (error) {
        console.log(error)

        toast.error('Something went wrong')
      }
       
      }


      return {form,onSubmit}
}
