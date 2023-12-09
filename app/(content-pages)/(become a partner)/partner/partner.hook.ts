
"use client"
 
import * as z from "zod"
 
const partnerSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  email: z.string().email(),
  subject: z.string().optional(),
  message:z.string().min(2)
})



import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import axios from "axios"
import { CONTACT_US } from "@/links"





export const usePartner = ()=>{



    const form = useForm<z.infer<typeof partnerSchema>>({
        resolver: zodResolver(partnerSchema),
        defaultValues: {
          firstName:'',
          lastname:'',
          email:'',
          subject:'',
          message:''
        },
      })


     async function onSubmit(values: z.infer<typeof partnerSchema>) {
        try {
            console.log(values)
        //   const res = await axios.post(CONTACT_US,values)
toast.success("message successfully sent ")

        } catch (error) {
            console.log(error)
            toast.error('someting went wrong')
        }

        console.log(values)
      }
    return {form, onSubmit}
}