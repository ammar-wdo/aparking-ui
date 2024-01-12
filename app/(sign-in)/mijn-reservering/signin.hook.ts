import * as z from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import axios from "axios"
import { GET_BOOKING } from "@/links"
import { useUser } from "@/hooks/user-hook"
import { toast } from "sonner"
import { useRouter } from "next/navigation"


 
const formSchema = z.object({
  email: z.string().email(),
  bookingCode:z.string().min(1,{message:"Booking code is required"})
})

export const useSignin = ()=>{

    const [isError,setIsError] = useState('')
    const {setUser} = useUser()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          bookingCode:''
        },
      })


      const router = useRouter()
      async function onSubmit(values: z.infer<typeof formSchema>) {
     try {
        setIsError('')
        const res = await axios.post(GET_BOOKING,values)
       if(res.data.message){
setIsError(res.data.message)
       }else{
        router.push(`/checkout/${res.data.booking.serviceId}/update`)
       }
      

        setUser(res.data.booking)
     } catch (error) {
        console.log(error)
        setIsError('Something went wrong')
     }

      }




   




      return {form,onSubmit,isError}
}