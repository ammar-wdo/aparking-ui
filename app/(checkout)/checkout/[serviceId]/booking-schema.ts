import * as z from "zod"
 
export const bookingSchema = z.object({
  bookingOnBusinessName: z.string().optional(),
  extraServiceFee:z.coerce.number(),

  address:z.string().optional(),
  arrivalDate:z.date(),
  bookingCode:z.string(),
  firstName:z.string().min(1),
  lastName:z.string().min(1),
  email:z.string().email(),
  carColor:z.string().min(1),
  carLicense:z.string().min(1),
  carModel:z.string().min(1),
  serviceId:z.string().min(1),
total:z.coerce.number().nonnegative().min(1,{message:'Wrong in pricing table'}),
  companyName:z.string().optional(),
  arrivalTime:z.string(),
  departureTime:z.string(),
  daysofparking:z.coerce.number(),
  departureDate:z.date(),
  discount:z.coerce.number(),
  flightNumber:z.coerce.number().optional(),
  isCompany:z.boolean(),
  phoneNumber:z.string().refine((value) => {
    const phoneRegex =/^(?:[0-9]){1,3}(?:[ -]*[0-9]){6,14}$/;
    return phoneRegex.test(value);
  }, "Invalid phone number"),

  parkingPrice:z.coerce.number(),
  
  paymentMethod:z.enum(['IDEAL','CREDIT_CARD','PAYPAL']),
  place:z.string().optional(),
  returnFlightNumber:z.coerce.number().optional(),

  vatNumber:z.coerce.number().optional(),
  zipcode:z.string().optional()
  
})



export const bookingDefaultValues=(arrivalDate:Date,departureDate:Date,arrivalTime:string,departureTime:string,serviceId:string)=>{
    
 

    
    
    return{
      bookingOnBusinessName:"",
    extraServiceFee:0,
   email:'',
    address:"",
    arrivalDate,
    bookingCode:"",
    carColor:"",
    carLicense:"",
    firstName:'',
    lastName:'',
    carModel:"",
    serviceId:serviceId,
    companyName:"",
    daysofparking:0,
    arrivalTime:arrivalTime || '',
    departureTime:departureTime || '',
    departureDate,
    discount:0,
    isCompany:false,
    flightNumber:undefined,
 total:0,
    parkingPrice:0,
phoneNumber:'',
    paymentMethod:'IDEAL' as const ,
    place:'',
    returnFlightNumber:0,
    
    vatNumber:0,
    zipcode:''

}}