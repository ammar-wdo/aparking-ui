import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { handleTimezone } from "@/lib/timezone-handler";
import { toast } from "sonner";
import axios from "axios";
import { ALL_SERVICES } from "@/links";


type Props = {


  change?:boolean,
  serviceId:string



};
export const useCheckForm = ({


  change,serviceId
 


}: Props) => {



  const [startDate, setStartDate] = useState<Date | undefined>(
    undefined
  );
  const [endDate, setEndDate] = useState<Date | undefined>(
     undefined
  );
  const [startTime, setStartTime] = useState( "");
  const [endTime, setEndTime] = useState( "");

  const [openStart, setOpenStart] = useState<boolean>(false);
  const [openStartTime, setOpenStartTime] = useState<boolean>(false);
  const [openEndTime, setOpenEndTime] = useState<boolean>(false);
  const [openEnd, setOpenEnd] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState(false)


 

 
 
 
  
 
 
 
 
 
  useEffect(() => {
    setOpenStart(false);

    if (startDate) {
    console.log(startDate)
      if (!startTime) {
        setOpenStartTime(true);
      }
      else if (!endDate) {
        setOpenEnd(true);
      } else if (!endTime) {
        setOpenEndTime(true);
      }
   
    }
  }, [startDate]);

  useEffect(() => {
    setOpenEnd(false);

    if (endDate) {
      console.log(endDate)
      if (!startDate) {
        setOpenStart(true);
      } else if (!startTime) {
        setOpenStartTime(true);
      } else if (!endTime) {
        setOpenEndTime(true);
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
const pathname = usePathname()

  const router = useRouter();
  const handleClick = async() => {
   

    if (!startDate) setOpenStart(true);
    else if (!endDate) setOpenEnd(true);
    else if (!startTime) setOpenStartTime(true);
    else if (!endTime) setOpenEndTime(true);
    else {
      if(!change){
        setIsLoading(true)

        setTimeout(()=>{setIsLoading(false)},2000)
      }


const {startDateString,endDateString} = handleTimezone(startDate,endDate)


try {

  
 const url = qs.stringifyUrl({
    url:pathname,
    query:{
        startDate:startDateString,
        endDate:endDateString,
        startTime:startTime,
        endTime:endTime,
   
    }
 })
  
    router.push(url)
   

} catch (error) {
    console.log(error)
    toast.error('Service is not available')
    router.push(pathname)
}

     
    }
  };

  return {
 
  
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
