import * as z from "zod"
 
export const bookingSchema = z.object({
  bookingOnBusinessName: z.string().optional(),
  extraServiceFee:z.coerce.number(),

  address:z.string().optional(),
  arrivalDate:z.date(),
  bookingCode:z.string(),
  carColor:z.string().min(1),
  carLicense:z.string().min(1),
  carModel:z.string().min(1),
  serviceId:z.string().min(1),
total:z.coerce.number().nonnegative(),
  companyName:z.string().optional(),
  arrivalTime:z.string(),
  departureTime:z.string(),
  daysofparking:z.coerce.number(),
  departureDate:z.date(),
  discount:z.coerce.number(),
  flightNumber:z.coerce.number().optional(),

  parkingPrice:z.coerce.number(),
  
  paymentMethod:z.enum(['MASTER_CARD','VISA_CARD','AMERICAN_EXPRESS','PAYPALL']),
  place:z.string().optional(),
  returnFlightNumber:z.coerce.number().optional(),

  vatNumber:z.coerce.number().optional(),
  zipcode:z.string().optional()
  
})

export function calculateParkingDays(arrivalDate:Date,departureDate:Date) {
  const arrival = new Date(arrivalDate);
  const departure = new Date(departureDate);

  // Calculate the time difference in milliseconds


  const timeDiff = departure.getTime() - arrival.getTime();

  // Calculate the number of days (rounded up)
  const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return days;
  }

export const bookingDefaultValues=(arrivalDate:Date,departureDate:Date,arrivalTime:string,departureTime:string,serviceId:string)=>{
    
 

    
    
    return{
      bookingOnBusinessName:"",
    extraServiceFee:0,
   
    address:"",
    arrivalDate:arrivalDate,
    bookingCode:"",
    carColor:"",
    carLicense:"",
    carModel:"",
    serviceId:serviceId,
    companyName:"",
    daysofparking:calculateParkingDays(arrivalDate,departureDate),
    arrivalTime:arrivalTime || '',
    departureTime:departureTime || '',
    departureDate:new Date(Date.now()),
    discount:0,
    flightNumber:0,
 total:0,
    parkingPrice:0,

    paymentMethod:'MASTER_CARD' as const ,
    place:'',
    returnFlightNumber:0,
    
    vatNumber:0,
    zipcode:''

}}