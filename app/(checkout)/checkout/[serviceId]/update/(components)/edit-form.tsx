"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";
import { CalendarIcon, ChevronLeft, HelpCircle, Loader } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import { DateRange } from "react-day-picker";
import { useEffect, useState } from "react";

import { useUser } from "@/hooks/user-hook";
import PersonalInformation from "./personal-information";
import CarInformation from "./car-information";
import PaymentMethod from "./payment-method";
import ResultPersonal from "./result-personal";
import ResultProducts from "./result-products";
import { useEditBooking } from "../edit.hook";
import { Rule, Service } from "@/schemas";
import { redirect } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { findTotalPrice } from "./(helpers)/findNewTotal";
import ActionToolTip from "@/components/tool-tip";
import { useCancel } from "@/hooks/modal-hook";
import DateInformation from "./date-information";
import CheckoutExtraInfo from "@/components/checkout-extra-info";

type Props = {
  service: Service & { rules: Rule[]; availability: any[]; bookings: any[] };
};

const EditBookingForm = ({ service }: Props) => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  const {
    form,
    onSubmit,
    timeArray,

    differentDate,
    available,
    setAvailable,
    additionalPrice,
    setAdditionalPrice,
    additionaldays,
    setAdditionalDays,
    startOpen,
    endOpen,
    setStartOpen,
    setEndOpen,
  } = useEditBooking(service);

  const isLoading = form.formState.isSubmitting;
  const { setOpen } = useCancel();
  const [personalStep, setPersonalStep] = useState(false);
  const [carStep, setCarStep] = useState(false);
  const [payStep, setPayStep] = useState(false);
  const { user } = useUser();

  if (!mount) return null;

  if (!user) return redirect("/");

  const vat = additionalPrice ? user.total + additionalPrice : user.total;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 container p-0"
      >
        <div className=" grid lg:grid-cols-3 grid-cols-1 gap-10">
          <div className="space-y-5  lg:col-span-2 ">
            <DateInformation
              form={form}
              timeArray={timeArray}
              personalStep={personalStep}
              setPersonalStep={setPersonalStep}
              differentDate={differentDate}
              setAvailable={(value: "" | "true" | "false") =>
                setAvailable(value)
              }
              setAdditionalDays={(value: number | undefined) =>
                setAdditionalDays(value)
              }
              setAdditionalPrice={(value: number | undefined) =>
                setAdditionalPrice(value)
              }
              startOpen={startOpen}
              endOpen={endOpen}
              setStart={(val) => setStartOpen(val)}
              setEnd={(val) => setEndOpen(val)}
            />

            <PersonalInformation
              timeArray={timeArray}
              form={form}
              personalStep={personalStep}
              setPersonalStep={setPersonalStep}
              setCarStep={setCarStep}
              carStep={carStep}
            />
            <CarInformation
              form={form}
              setCarStep={setCarStep}
              carStep={carStep}
              payStep={payStep}
              setPayStep={setPayStep}
              additionalPrice={additionalPrice}
            />

            <PaymentMethod
              form={form}
              setCarStep={setCarStep}
              carStep={carStep}
              payStep={payStep}
              setPayStep={setPayStep}
              additionalPrice={additionalPrice}
            />

            {!additionalPrice && payStep && (
              <div className="flex flex-col gap-3">
                <Button
                  disabled={isLoading}
                  type="submit"
                  variant={"siteTwo"}
                  className="w-full mt-4"
                >
                  Wijzigingen opslaan.{" "}
                  {isLoading && (
                    <Loader className="ml-3 w-4 h-4 animate-spin" />
                  )}
                </Button>
                <Button
                  type="button"
                  variant={"ghost"}
                  className="w-full "
                  onClick={() => setPayStep(false)}
                >
                  Terug
                </Button>
              </div>
            )}
          </div>
          <div className=" flex-col ">
            <Button
              onClick={() =>
                setOpen({
                  bookingId: user.id,
                  bookingCode: user.bookingCode,
                  email: user.email,
                })
              }
              variant={"destructive"}
              className=" rounded-sm w-full mb-4 lg:flex hidden"
              type="button"
            >
             Annuleer uw reservering.{" "}
              <ActionToolTip
                side="right"
                title="If you cancel your booking before 24 hours ,then you will be refunded"
              >
                <HelpCircle className="w-4 h-4 ml-3" />
              </ActionToolTip>
            </Button>
            <div>
              <div className="p-8 bg-white checkoutElement">
                <h3 className="text-2xl font-bold ">Reservering overzicht</h3>
                {/* <ResultPersonal
              name={`${form.watch("firstName")} ${form.watch("lastName")}`}
              email={form.watch("email")}
              phone={form.watch("phoneNumber")}
            /> */}
                <ResultProducts
                  title={service.name}
                  total={user?.total as number}
                  arrivalDate={user.arrivalDate}
                  arrivalTime={user.arrivalTime}
                  departureDate={user.departureDate}
                  departureTime={user.departureTime}
                  newArrivalDate={form.watch("arrivalDate")}
                  newDepartureDate={form.watch("departureDate")}
                  newArrivalTime={form.watch("arrivalTime")}
                  newDepartureTime={form.watch("departureTime")}
                />

           

                <div className="mt-4 flex flex-col gap-2">
                  {!!user.extraOptions && !!user.extraOptions.length && (
                    <div className="border-b mb-4 pb-4">
                      <h3 className="font-bold first-letter:capitalize text-lg">
                        Extra opties
                      </h3>
                      <div className="flex flex-col  mt-4">
                        {user.extraOptions.map((option) => (
                          <div
                            key={option.id}
                            className="py-1  flex justify-between w-full items-center text-neutral-500 text-xs sm:text-sm"
                          >
                            <span className="first-letter:capitalize">
                              {option.label}
                            </span>
                            <span className="text-black font-semibold">
                              €{option.price.toFixed(2).replace(".", ",")}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {available === "true" && (
                    <div className="flex flex-col w-full gap-3">
                      <div className="flex items-center justify-between">
                      <p className="font-medium">
                      Extra dagen{" "}
                        
                      </p>
                      <p className="font-bold text-xl">
                          {additionaldays ? `+${additionaldays}` : 0}
                        </p>
                        </div>
                    
                      <div className="flex items-center justify-between">
                      <p className=" font-medium">
                      Extra prijs
                      </p>
                      <p className="font-bold text-xl">€{additionalPrice?.toFixed(2).replace(".", ",")}</p>
                      </div>
                    
                    </div>
                  )}

                  {/* <div className=" flex items-center justify-between w-full">
                    <p>Price including VAT</p>
                    {
                      <span className="font-bold text-xl">
                        €{vat.toFixed(2).replace(".", ",")}
                      </span>
                    }{" "}
                  </div> */}

                  {available === "false" && (
                    <p className="text-sm text-rose-500 pb-3 text-center font-bold py-3">
                     Niet beschikbaar voor deze datum
                    </p>
                  )}
                </div>
              </div>
              <CheckoutExtraInfo />
            </div>
            <Button
              onClick={() =>
                setOpen({
                  bookingId: user.id,
                  bookingCode: user.bookingCode,
                  email: user.email,
                })
              }
              variant={"destructive"}
              className=" rounded-sm w-full mt-4 lg:hidden flex"
              type="button"
            >
              Annuleer uw reservering{" "}
              <ActionToolTip
                side="right"
                title="If you cancel your booking before 24 hours ,then you will be refunded"
              >
                <HelpCircle className="w-4 h-4 ml-3" />
              </ActionToolTip>
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default EditBookingForm;
