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
import { Fingerprint, Loader2, Mail } from "lucide-react";
import { useUser } from "@/hooks/user-hook";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

type Props = {};

const SigninForm = (props: Props) => {
  const { form, onSubmit, isError } = useSignin();

  const { user } = useUser();

  const isLoading = form.formState.isSubmitting;

  const router = useRouter();



  

  return (
    <div className="w-full p-3 max-w-[500px] mt-12 sm:mt-0">
      <h3 className="text-3xl font-bold text-[#003580]">Check my booking</h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8  mt-6 rounded-md w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className=" ">
                <div className=" p-4 rounded-lg flex items-center bg-gray-100 space-y-0">
                <Mail className="w-5 h-5 text-gray-400 " />
                <FormControl>
                  <input
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
            name="bookingCode"
            render={({ field }) => (
              <FormItem className=" ">
                <div className="p-4 flex rounded-lg items-center bg-gray-100 space-y-0">
                <Fingerprint className="w-5 h-5 text-gray-400 " />
                <FormControl>
                  <input
                    placeholder="Booking Code"
                    className="border-none bg-transparent  p-2 w-full
                    outline-none "
                    {...field}
                  />
                </FormControl>
                </div>
              

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-4">
            <Button
              variant={"siteTwo"}
              type="submit"
              className="py-6"
              disabled={isLoading}
            >
              Login
              {isLoading && <Loader2 className="ml-3 h-3 w-3 animate-spin" />}
            </Button>
            <Button asChild variant={"secondary"}>
              <Link href={"/"}>Back to main page</Link>
            </Button>
          </div>
          {isError && (
            <p className="p-3 text-xs text-rose-500 bg-rose-500/20 border border-rose-500">{isError}</p>
          )}
        </form>
      </Form>

      <div className="py-4 border-gray-100 border-t mt-6 flex justify-between items-center">
        <p>Have a problem?</p>
        <Link href={'/contact'} className="text-indigo-600 underline">Contact</Link>

      </div>
    </div>
  );
};

export default SigninForm;
