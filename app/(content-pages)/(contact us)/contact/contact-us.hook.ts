
"use client"
 
import * as z from "zod"
 
const contactSchema = z.object({
  firstName: z.string({required_error:"Verplicht veld"}).min(2,'Minimaal 2 letters').max(50,'Maximaal 50 letters'),
  lastname: z.string({required_error:"Verplicht veld"}).min(2,'Minimaal 2 letters').max(50,'Maximaal 50 letters'),
  email: z.string({required_error:"Verplicht veld"}).email('Ongeldig e-mail'),
  subject: z.string({required_error:"Verplicht veld"}).optional(),
  message:z.string({required_error:"Verplicht veld"}).min(2,'Minimaal 2 letters')
})



import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import axios from "axios"
import { CONTACT_US } from "@/links"





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


     async function onSubmit(values: z.infer<typeof contactSchema>) {
        try {
          const res = await axios.post(CONTACT_US,values)
toast.success("Verzonden")
form.reset()

        } catch (error) {
            console.log(error)
            toast.error('someting went wrong')
        }

       
      }
    return {form, onSubmit}
}