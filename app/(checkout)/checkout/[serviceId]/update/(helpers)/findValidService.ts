import { findBusyPlaces } from "../(components)/(helpers)/findBusyPlaces";
import { findTotalPrice } from "../(components)/(helpers)/findNewTotal";
import { findBlockingDates } from "../(components)/(helpers)/findRanges";


type FullService = Service & {
  availability: Availability[];
  bookings: Booking[];
  rules:Rule[]
};

type ReturnedService = FullService & {
  totalPrice: number;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
};

export const findValidServices = (
  services: FullService[],
  startDate: string,
  endDate: string,
  startTime: string,
  endTime: string,
  parkingDays: number
) => {
  console.log(startDate,endDate)
  const validServices = services.reduce(
    (accumolator: ReturnedService[], service) => {
      const isBlocked = findBlockingDates(
        service.availability,
        startDate,
        endDate
      );

      if (!!isBlocked.length) return accumolator;
      console.log("service")

      const busyPlaces = findBusyPlaces(service.bookings, startDate, endDate);
      // console.log("busy places",busyPlaces.length)

      const availabelPlaces = service.spots - busyPlaces.length;
      // console.log("available places",availabelPlaces)

      if (availabelPlaces > 0) {
        const totalPrice = +findTotalPrice(service, parkingDays,startDate,endDate);
        accumolator.push({
          ...service,
          totalPrice,
          startDate,
          endDate,
          startTime,
          endTime,
        });
      }

      return accumolator;
    },
    []
  );

  return validServices
};





