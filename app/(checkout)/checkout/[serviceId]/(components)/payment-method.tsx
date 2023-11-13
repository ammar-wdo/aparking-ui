"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import PhoneInput from "react-phone-input-2";
import { Input } from "@/components/ui/input";
import "react-phone-input-2/lib/style.css";
import { Separator } from "@/components/ui/separator";
import { CheckCheck, ChevronLeft, ChevronRightIcon } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { bookingSchema } from "@/schemas";

type Props = {
  form: UseFormReturn<z.infer<typeof bookingSchema>>;
  setCarStep:Dispatch<SetStateAction<boolean>>,
  carStep:boolean,
  setPayStep:Dispatch<SetStateAction<boolean>>,
  payStep:boolean,
 
};

const PaymentMethod = ({ form,setCarStep,carStep,payStep,setPayStep }: Props) => {



  return (
    <div className="space-y-5  bg-white p-6">
      <div>
        <div className="flex items-center ">
        <h3 className={cn("text-2xl font-bold",(!payStep) && 'text-gray-400')}>3. Payment method</h3>
            </div>
        
    
      </div>
      {payStep && <>
    

     
      <div className="grid gird-cols-1  gap-3">
       <p className="font-light">How would you like to pay? *</p>
     

       <FormField
          control={form.control}
          name="paymentMethod"
          render={({ field }) => (
            <FormItem className="space-y-3">
           
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="gap-0 "
                >
                  <FormItem className="flex items-center  space-y-0   py-4 border-t  ">
                    <FormControl>
                      <RadioGroupItem value="IDEAL" />
                    </FormControl>
                    <FormLabel className="font-normal ml-4">
                      iDeal
                    </FormLabel>
                  
                    <div className="w-20 aspect-video relative ml-auto">
                        <Image src={'/ideal.png'} fill alt="ideal" className="object-contain"/>
                    </div>
             
                   
                  </FormItem>
                  <FormItem className="flex items-center   space-y-0 py-4 border-t  ">
                    <FormControl>
                      <RadioGroupItem value="CREDIT_CARD" />
                    </FormControl>
                    <FormLabel className="font-normal ml-4">
                      Credit Card
                    </FormLabel>
                  
                    <div className="w-20 aspect-video relative ml-auto">
                        <Image src={'/cards.png'} fill alt="ideal" className="object-contain"/>
                    </div>
             
                   
                  </FormItem>
                  <FormItem className="flex items-center   space-y-0 py-4 border-y ">
                    <FormControl>
                      <RadioGroupItem value="PAYPAL" />
                    </FormControl>
                    <FormLabel className="font-normal ml-4">
                      PayPal
                    </FormLabel>
                  
                    <div className="w-20 aspect-video relative ml-auto">
                        <Image src={'/paypal.png'} fill alt="ideal" className="object-contain"/>
                    </div>
             
                   
                  </FormItem>
                
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        

       
      </div>
      <div className="flex items-center justify-between">
        <button onClick={()=>setPayStep(false)} type="button" className="font-light text-blue-600 flex text-sm items-center justify-center ">
          {<ChevronLeft className="mr-1 h-4 w-4" />}Back
        </button>
        <Button disabled={form.formState.isSubmitting}  onClick={()=>{console.log(form.formState.errors)}} type="submit" className="flex items-center bg-orange-500 text-sm transition hover:bg-orange-500/90 text-white rounded-sm py-2 px-6">Checkout {<ChevronRightIcon className="w-3 h-3 ml-1 text-white" />}</Button>
      </div>
      </>}
    </div>
  );
};

export default PaymentMethod;
