'use client'

import { ADD_REVIEW } from "@/links"
import { Booking, reviewSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"


type Props = {
    booking:Booking & {service:{entityId:string}}
}
export const useReview = ({booking}:Props)=>{


  
 
    const form = useForm<z.infer<typeof reviewSchema>>({
        resolver: zodResolver(reviewSchema),
        defaultValues: {
          serviceId: booking.serviceId,
          entityId:booking.service.entityId,
          bookingId:booking.id,
          reviewContent:'',
          rate:3.5,
          status:'PENDING',
          visibility:'FULLNAME'
        },
      })

const router = useRouter()

  async function onSubmit(values: z.infer<typeof reviewSchema>) {
try {
console.log(values)
   const res= await axios.post(ADD_REVIEW,values)
   console.log(res.data)
    toast.success('Your review has been sent successfully!')
    router.push('/')

    
} catch (error) {
    console.log(error)
    toast.error('Something went wrong')
}
  }


  return { form , onSubmit }

}