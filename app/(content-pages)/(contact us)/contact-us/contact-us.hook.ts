
"use client"
 
import * as z from "zod"
 
const contactSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  email: z.string().email(),
  subject: z.string().optional(),
  message:z.string().min(2)
})



import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"





export const useContact = ()=>{



    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
          firstName:'',
          lastname:'',
          email:'',
          subject:'',
          message:''
        },
      })


      function onSubmit(values: z.infer<typeof contactSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
    return {form, onSubmit}
}