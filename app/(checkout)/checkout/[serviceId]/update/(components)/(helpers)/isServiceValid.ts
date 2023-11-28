
import { Service } from "@/schemas";
import { findBusyPlaces } from "./findBusyPlaces";
import { findBlockingDates } from "./findRanges";
import { findTotalPrice } from "./findNewTotal";


type FullService = Service & {
  availability: any[];
  bookings: any[];
  rules:any[]
};



export const isServiceValid = (
  service: FullService,
  startDate: string,
  endDate: string,
  bookingId:string,

  parkingDays: number
) => {


      const isBlocked = findBlockingDates(
        service?.availability,
        startDate,
        endDate
      );

      if (!!isBlocked.length) return false;
      console.log("service")

      const busyPlaces = findBusyPlaces(service.bookings, startDate, endDate,bookingId);
      // console.log("busy places",busyPlaces.length)

      const availabelPlaces = service.spots - busyPlaces.length;
      // console.log("available places",availabelPlaces)

      if (availabelPlaces > 0) {
        const totalPrice = +findTotalPrice(service, parkingDays,startDate,endDate);
    return  true
      }else{
        return false
      }

     
    

  

};





