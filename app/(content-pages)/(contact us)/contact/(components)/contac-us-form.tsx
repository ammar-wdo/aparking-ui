"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {  Loader2, Mail } from "lucide-react";



import { useContact } from "../contact-us.hook";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

type Props = {};

const ContactForm = (props: Props) => {



const {form ,onSubmit} = useContact()
  const isLoading = form.formState.isSubmitting;




  

  return (
    <div className="w-full  flex gap-20 lg:flex-row flex-col  justify-between items-center lg:items-stretch  mt-24">
        <div className="relative  lg:w-1/2 aspect-video w-full  rounded-xl overflow-hidden hidden lg:block">
            <Image fill alt="contact-img" src={'/contact.png'} className="object-cover" />

        </div>
  
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4  mt-6 rounded-md w-full lg:w-1/2 max-w-[600px]  "
        >
          
            <h3 className="text-site text-3xl font-semibold">Heeft u vragen?</h3>
            <p className="text-sm text-neutral-500">Neem contact met ons door het onderstaand formulier in te vullen.<br/>U krijgt zo spoedig mogelijk antwoord.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className=" ">
                <div className=" p-4 rounded-lg flex items-center bg-gray-100 space-y-0 ">
              
                <FormControl>
                  <Input
                    placeholder="Voornaam"
                    className="border-none bg-transparent p-2 
                    outline-none "
                    {...field}
                  />
                </FormControl>
                </div>
             

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem className=" ">
                <div className="p-4 flex rounded-lg items-center bg-gray-100 space-y-0 ">
               
                <FormControl>
                  <Input
                    placeholder="Achternaam"
                    className="border-none bg-transparent  p-2 
                    outline-none "
                    {...field}
                  />
                </FormControl>
                </div>
              

                <FormMessage />
              </FormItem>
            )}
          />
            </div>
     

<FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className=" ">
                <div className=" p-4 rounded-lg flex items-center bg-gray-100 space-y-0">
                <Mail className="w-5 h-5 text-gray-400 " />
                <FormControl>
                  <Input
                    placeholder="E-mail"
                    className="border-none bg-transparent p-2 w-full
                    outline-none "
                    {...field}
                  />
                </FormControl>
                </div>
             

                <FormMessage />
              </FormItem>
            )}
          />
<FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className=" ">
                <div className=" p-4 rounded-lg flex items-center bg-gray-100 space-y-0">
              
                <FormControl>
                  <Input
                    placeholder="Onderwerp"
                    className="border-none bg-transparent p-2 w-full
                    outline-none "
                    {...field}
                  />
                </FormControl>
                </div>
             

                <FormMessage />
              </FormItem>
            )}
          />
<FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className=" ">
                <div className=" p-4 rounded-lg flex items-center bg-gray-100 space-y-0">
          
                <FormControl>
                  <Textarea
                    placeholder="Bericht"
                    className="border-none bg-transparent p-2 w-full
                    outline-none resize-none min-h-[300px]"
                    {...field}
                  />
                </FormControl>
                </div>
             

                <FormMessage />
              </FormItem>
            )}
          />
     
            <Button
              variant={"siteTwo"}
              type="submit"
              className="py-8 w-full rounded-lg text-xl"
              disabled={isLoading}
            >
              Verzend bericht
              {isLoading && <Loader2 className="ml-3 h-3 w-3 animate-spin" />}
            </Button>
          
     
          {/* {isError && (
            <p className="py-3 text-sm text-rose-500">Invalid credentials</p>
          )} */}
        </form>
      </Form>

    
    </div>
  );
};

export default ContactForm;
