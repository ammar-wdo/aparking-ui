import { z } from "zod";

export const bookingSchema = z
  .object({
    bookingOnBusinessName: z.string().optional(),
    extraServiceFee: z.coerce.number(),

    address: z.string().optional(),

    arrivalDate: z.date(),

    firstName: z.string().min(1,{message:'First name is required'}),
    lastName: z.string().min(1,{message:'Last name is required'}),
    email: z.string().email({message:"E-mail is required"}),
    carColor: z.string().optional(),
    carLicense: z.string().min(1,{message:'Car license is required'}),
    carModel: z.string().min(1,{message:'Car model is required'}),
    serviceId: z.string().min(1),
    numberOfPeople:z.coerce.number().min(1),

    companyName: z.string().optional(),
    arrivalTime: z.string(),
    departureTime: z.string(),

    departureDate: z.date(),
   
    flightNumber: z.string().optional(),
    isCompany: z.boolean(),
    phoneNumber: z.string().refine((value) => {
      const phoneRegex = /^(?:[0-9]){1,3}(?:[ -]*[0-9]){6,14}$/;
      return phoneRegex.test(value);
    }, "Invalid phone number"),

    parkingPrice: z.coerce.number(),

    paymentMethod: z.enum(["IDEAL", "CREDIT_CARD", "PAYPAL"]),
    place: z.string().optional(),
    returnFlightNumber: z.coerce.number().optional(),

    vatNumber: z.string().optional(),
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
  })
  .refine((data) => !data.isCompany || data.place, {
    message: "place is required",
    path: ["place"],
  })
  .refine((data) => !data.isCompany || data.vatNumber, {
    message: "vat is required",
    path: ["vatNumber"],
  })
  .refine(
    (data) =>
      new Date(data.arrivalDate).getTime() <=
      new Date(data.departureDate).getTime(),
    {
      message: "departure time should be greater or equal to arrival time",
      path: ["paymentMethod"],
    }
  );
  ;


  const emailSchema = z.string().email()
  export const serviceSchema = z.object({
    timeToAirport: z.coerce.number().min(1),
    distanceToAirport: z.coerce.number().min(1),
    generalInformation:z.string().optional(),
    importantInfo:z.string().optional(),
  
    images:z.array(z.string()).optional(),
    facilities:z.array(z.string()).optional(),
    slug:z.string().min(1).refine((value) => !/\s/.test(value), 
    'Slug should not contain spaces',
   ),
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
 keyStatus:z.enum(["LEAVE","KEEP"]).default('LEAVE'),
 parkingLocation:z.enum(['INDOOR',"OUTDOOR"]).default('INDOOR'),
 available:z.boolean().default(false),

 entityId:z.string().min(1)

  
  })




  export const entitySchema = z.object({
    companyId:z.string().min(1),
    airportId:z.string().min(1),
    email:z.string().email(),
    password:z.string().min(8),
    entityName:z.string().min(1),
    logo:z.string().min(1),
    slug:z.string().min(1).refine((value) => !/\s/.test(value), 
    'Slug should not contain spaces',
   ),
    entityAddress:z.string().min(1),
    entityZipcode:z.string().min(1),
    entityPlace:z.string().min(1),
    phone: z.string().refine((value) => {
        const phoneRegex =/^(?:[0-9]){1,3}(?:[ -]*[0-9]){6,14}$/;
        return phoneRegex.test(value);
      }, "Invalid phone number"),
      invoiceAddress:z.string().min(1),
      contactPerson:z.string().min(1),
      companyName:z.string().min(1),
      invoiceEmail:z.string().email(),
      invoiceZipcode:z.string().min(1),
      invoicePlace:z.string().min(1),
      invoiceCountry:z.string().min(1),
      vatNO:z.string().optional(),
      IBAN:z.string().optional(),
      chamberOfCommerce:z.string().min(1),
      isActive:z.boolean().default(false),
      images:z.array(z.string()).default([]),
      content:z.string().default('')
      


   



})

  export type Entity = z.infer<typeof entitySchema>
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
  slug:string,
  createdAt:Date,
  updatedAt:Date,
}


export const reviewSchema = z.object({
bookingId:z.string().min(1),
entityId:z.string().min(1),
serviceId:z.string().min(1),
reviewContent:z.string().optional(),
rate:z.coerce.number().min(0.5,{message:'Rate is required'}).max(5),
status:z.enum(["PENDING","ACTIVE"]).default('PENDING'),
visibility:z.enum(["FIRSTNAME","FULLNAME","ANOUNYMOS"]).default('FULLNAME'),


})

export type Review = z.infer<typeof reviewSchema> 

export const blogSchema = z.object({
  title:z.string().min(2),
  content:z.string().min(3),
  slug:z.string().min(3),
  author:z.string().min(1),
  shortDescription:z.string().min(4),
  tags:z.array(z.string()),
  featuredImage:z.string().min(1),
  categoryId:z.string().min(1)
 })

 export type Blog = z.infer<typeof blogSchema> 


 export const faqSchema = z.object({
  question: z.string().min(1,{message:'Question field is required'}),
  answer: z.string().min(1,{message:'Answer field is required'}),
  categoryFaqId:z.string().min(1,{message:'Category is required'})
});


export type FAQ = z.infer<typeof faqSchema> 