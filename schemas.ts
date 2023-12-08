import { z } from "zod";

export const bookingSchema = z
  .object({
    id:z.string().optional(),
    daysofparking:z.coerce.number().optional(),
    bookingOnBusinessName: z.string().optional(),
    extraServiceFee: z.coerce.number(),

    address: z.string().optional(),

    arrivalDate: z.date(),

    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    carColor: z.string().min(1),
    carLicense: z.string().min(1),
    carModel: z.string().min(1),
    serviceId: z.string().min(1),
total:z.coerce.number(),
    companyName: z.string().optional(),
    arrivalTime: z.string(),
    departureTime: z.string(),
  
    departureDate: z.date(),
    discount: z.coerce.number(),
    flightNumber: z.string().min(3,{message:'this field is mandatory'}),
    isCompany: z.boolean(),
    phoneNumber: z.string().refine((value) => {
      const phoneRegex = /^(?:[0-9]){1,3}(?:[ -]*[0-9]){6,14}$/;
      return phoneRegex.test(value);
    }, "Invalid phone number"),

    parkingPrice: z.coerce.number(),

    paymentMethod: z.enum(["IDEAL", "CREDIT_CARD", "PAYPAL"]),
    place: z.string().optional(),
    returnFlightNumber: z.coerce.number().optional(),

    vatNumber: z.coerce.number().optional(),
    zipcode: z.string().optional(),
  })
  .refine((data) => !data.isCompany || data.zipcode, {
    message: "company name is required",
    path: ["companyName"],
  })
  .refine((data) => !data.isCompany || data.address, {
    message: "address is required",
    path: ["address"],
  })
  .refine((data) => !data.isCompany || data.zipcode, {
    message: "zipcode is required",
    path: ["zipcode"],
  }).refine((data)=>new Date(data.arrivalDate).getTime() <= new Date(data.departureDate).getTime(),{message:'departure time should be greater or equal to arrival time',path:["paymentMethod"]})
  ;


  const emailSchema = z.string().email()
  export const serviceSchema = z.object({
      timeToAirport: z.string().min(2),
      distanceToAirport:z.string().min(1),
      generalInformation:z.string().optional(),
      importantInfo:z.string().optional(),
      logo:z.string().min(1),
      images:z.array(z.string()).optional(),
      facilities:z.array(z.string()).optional(),
      highlights: z.array(
        z.object({
          label: z.string(),
          icon: z.string()
        })
      ).optional(),
      isActive:z.boolean().optional(),
      name:z.string().min(1),
   terms:z.string().min(1),
   bookingsEmail:z.union([z.string(), z.undefined()])
   .refine((val) => !val || emailSchema.safeParse(val).success),
   parkingAddress:z.string().min(1),
   parkingZipcode:z.string().min(1),
   parkingCountry:z.string().min(1),
   parkingPlace:z.string().min(1),
   spots:z.coerce.number().positive().default(1),
   parkingType:z.enum(['shuttle','valet']).default('valet'),
   arrivalTodos:z.string().optional(),
   departureTodos:z.string().optional(),
   electricCharging:z.boolean().default(false),
   keyStatus:z.enum(['BOTH',"LEAVE","KEEP"]).default('BOTH'),
   parkingLocation:z.enum(['INDOOR',"OUTDOOR","BOTH"]).default('BOTH'),
   available:z.boolean().default(false),
   airportId:z.string().min(1),
   entityId:z.string().min(1)
  
  })
  export type Service = z.infer<typeof serviceSchema> & {startDate?:string,endDate?:string,startTime?:string,endTime?:string,totalPrice?:string,id:string,pricings:number[]}


  export type Booking = z.infer<typeof bookingSchema> 

 export  type Rule = {
    id: string;
    label: string;
    startDate: Date;
    endDate: Date;
    type: "FIXED" | "PERCENTAGE";
    action: "TOTAL" |"DAY";
    percentage: number | null;
    value: number | null;
    serviceId: string;
    createdAt: Date;
    updatedAt: Date;
}

export type Airport ={
  id:string,
  name:string,
  content:string,
  images:string[],
  createdAt:Date,
  updatedAt:Date,
}
