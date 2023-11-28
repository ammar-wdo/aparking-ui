"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useSignin } from "../signin.hook";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { useUser } from "@/hooks/user-hook";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

type Props = {};

const SigninForm = (props: Props) => {
  const { form, onSubmit,isError } = useSignin();


  
  const {user} = useUser()

 

  const isLoading = form.formState.isSubmitting;

const router = useRouter()


 useEffect(()=>{

  if(user)  {router.push(`/checkout/${user.serviceId}/update`)}
 },[])

 if(user) return null

  return (
    <div className="h-screen flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-[350px] border rounded-md p-3 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bookingCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Booking code</FormLabel>
                <FormControl>
                  <Input placeholder="booking code" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-4">
            <Button variant={"site"} type="submit" disabled={isLoading}>
              Signin
              {isLoading &&<Loader2 className="ml-3 h-3 w-3 animate-spin" />}
            </Button>
            <Button asChild variant={"secondary"}>
              <Link href={"/"}>Back to main page</Link>
            </Button>
          </div>
          {isError && <p className="py-3 text-sm text-rose-500">Invalid credentials</p>}
        </form>
      </Form>
    </div>
  );
};

export default SigninForm;
