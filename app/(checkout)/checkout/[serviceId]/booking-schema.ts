import * as z from "zod"


 




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
    flightNumber:"",
 total:0,
    parkingPrice:0,
phoneNumber:'',
    paymentMethod:'IDEAL' as const ,
    place:'',

    numberOfPeople:1,
    
    vatNumber:'',
    zipcode:''

}}