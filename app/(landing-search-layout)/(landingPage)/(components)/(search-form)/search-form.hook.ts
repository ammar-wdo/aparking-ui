import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { handleTimezone } from "@/lib/timezone-handler";
import { toast } from "sonner";
import { format } from "date-fns";


type Props = {
  startDateProp?: Date;
  endDateProp?: Date;
  startTimeProp?: string;
  endTimeProp?: string;
  airportProp?:string,
  change?:boolean,
  airportSlug?:string,
  serviceId?:string


};
export const useSearchForm = ({
  startDateProp,
  startTimeProp,
  endDateProp,
  endTimeProp,
  airportProp,
  change,
  airportSlug,
  serviceId


}: Props) => {

 

const [airport, setAirport] = useState(airportProp || '')
const [openAirport, setOpenAirport] = useState(false)
  const [startDate, setStartDate] = useState<Date | undefined>(
    startDateProp || undefined
  );
  const [endDate, setEndDate] = useState<Date | undefined>(
    endDateProp || undefined
  );
  const [startTime, setStartTime] = useState(startTimeProp || "");
  const [endTime, setEndTime] = useState(endTimeProp || "");

  const [openStart, setOpenStart] = useState<boolean>(false);
  const [openStartTime, setOpenStartTime] = useState<boolean>(false);
  const [openEndTime, setOpenEndTime] = useState<boolean>(false);
  const [openEnd, setOpenEnd] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState(false)


  useEffect(()=>{
    if(airportSlug){
      setAirport(airportSlug)
    }
  },[airportSlug])

 
 
 
  useEffect(() => {
    setOpenAirport(false);

    if (airport && !airportSlug ) {
      if (!startDate) {
        setOpenStart(true);
      }
     else if (!startTime) {
        setOpenStartTime(true);
      }
      else if (!endDate) {
        setOpenEnd(true);
      } else if (!endTime) {
        setOpenEndTime(true);
      }
    }
  }, [airport]);
 
 
 
 
 
  useEffect(() => {
    setOpenStart(false);

    if (startDate) {
  
      if (!startTime) {
        setOpenStartTime(true);
      }
      else if (!endDate) {
        setOpenEnd(true);
      } else if (!endTime) {
        setOpenEndTime(true);
      }
      else if (!airport && !serviceId) {
        setOpenAirport(true);
      }


    }
  }, [startDate]);

  useEffect(() => {
    setOpenEnd(false);

    if (endDate) {
    
      if (!startDate) {
        setOpenStart(true);
      } else if (!startTime) {
        setOpenStartTime(true);
      } else if (!endTime) {
        setOpenEndTime(true);
      }
      else if (!airport && !serviceId) {
        setOpenAirport(true);
      }

  

    
    }
  }, [endDate]);

  useEffect(() => {
    if (startTime) {
      if (!startDate) {
        setOpenStart(true);
      }
      else if (!endDate) {
        setOpenEnd(true);
      } else if (!endTime) {
        setOpenEndTime(true);
      } 
      else if (!airport && !serviceId) {
        setOpenAirport(true);
      }



     
    }


    
  
  }, [startTime]);

  useEffect(() => {
    if (endTime) {
      if (!startDate) {
        setOpenStart(true);
      } else if (!startTime) {
        setOpenStartTime(true);
      } else if (!endDate) {
        setOpenEnd(true);
      }
      else if (!airport && !serviceId) {
        setOpenAirport(true);
      }


    
    }
  }, [endTime]);

  useEffect(() => {
    if (startDate && endDate) {
      if(startDate.getTime() > endDate?.getTime()  ){
        const newEndDate = new Date(startDate);
        newEndDate.setDate(startDate.getDate() + 4);
        setEndDate(newEndDate);
      }
    
    }

   
  }, [startDate]);

  const timeArray = [];

  for (let hour = 0; hour <= 23; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const formattedHour = hour.toString().padStart(2, "0");
      const formattedMinute = minute.toString().padStart(2, "0");
      const time = `${formattedHour}:${formattedMinute}`;
      timeArray.push(time);
    }
  }
const params = useSearchParams()
  const router = useRouter();
  const pathname = usePathname()



  const handleClick = () => {


   
if(!airport && !serviceId) setOpenAirport(true)
   else if (!startDate) setOpenStart(true);
    else if (!endDate) setOpenEnd(true);
    else if (!startTime) setOpenStartTime(true);
    else if (!endTime) setOpenEndTime(true);
    else {

      const [startHours, startMinutes] = startTime.split(':');
      const startDateConst = new Date(startDate)
      startDateConst.setHours(Number(startHours));
      startDateConst.setMinutes(Number(startMinutes));

      const endDateConst =new Date(endDate)
      const [hours, minutes] = endTime.split(':');
      endDateConst.setHours(Number(hours));
      endDateConst.setMinutes(Number(minutes));

if(startDateConst.getTime()>=endDateConst.getTime()){
toast.error("Invalid date range ! ")

  return
} 


      if(!change){
        setIsLoading(true)

        setTimeout(()=>{setIsLoading(false)},2000)
      }



let currentQuery = {};
  
if (params) {
  currentQuery = qs.parse(params.toString())
}


const encodedStartDate = format(startDate,'yyyy-MM-dd');

const encodedEndDate = format(endDate,'yyyy-MM-dd');
      let url

      if(serviceId){
        url = qs.stringifyUrl({
          url:pathname,
          query:{
              startDate:encodedStartDate,
              endDate:encodedEndDate,
              startTime:startTime,
              endTime:endTime,
         
          }
       })
      }else{

        url = qs.stringifyUrl({
          url: `${process.env.NEXT_PUBLIC_MY_URL}/search`,
          query: {
            ...currentQuery,
            airport:airport,
            startDate: encodedStartDate,
            endDate: encodedEndDate,
            startTime,
            endTime,
           
          },
        });
      }
      
      
   

      router.push(url);
     
    }
  };

  return {
    airport,
    setAirport,
    openAirport,
    setOpenAirport,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    openStart,
    startTime,
    endTime,
    setOpenStart,
    openEnd,
    setOpenEnd,
    timeArray,
    setStartTime,
    setEndTime,
    openStartTime,
    setOpenStartTime,
    openEndTime,
    setOpenEndTime,
    handleClick,
    isLoading
  };
};
