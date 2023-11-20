import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import qs from "query-string";


type Props = {
  startDateProp?: Date;
  endDateProp?: Date;
  startTimeProp?: string;
  endTimeProp?: string;


};
export const useSearchForm = ({
  startDateProp,
  startTimeProp,
  endDateProp,
  endTimeProp,


}: Props) => {


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

  useEffect(() => {
    setOpenStart(false);

    if (startDate) {
    
      if (!startTime) {
        setOpenStartTime(true);
      } else if (!endTime) {
        setOpenEndTime(true);
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
    }
  }, [endDate]);

  useEffect(() => {
    if (startTime) {
      if (!startDate) {
        setOpenStart(true);
      } else if (!endTime) {
        setOpenEndTime(true);
      } else if (!endDate) {
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

  const router = useRouter();
  const handleClick = () => {

    if (!startDate) setOpenStart(true);
    else if (!endDate) setOpenEnd(true);
    else if (!startTime) setOpenStartTime(true);
    else if (!endTime) setOpenEndTime(true);
    else {
console.log("env",process.env.NEXT_PUBLIC_MY_URL)
console.log('test')
console.log("startDate",startDate,"endDate",endDate,"startTime",startTime,"endTime",endTime)
      const url = qs.stringifyUrl({
        url: `${process.env.NEXT_PUBLIC_MY_URL}/search`,
        query: {
          startDate: new Date(startDate).toLocaleDateString(),
          endDate: new Date(endDate).toLocaleDateString(),
          startTime,
          endTime,
        },
      });
console.log("url",url)
      router.push(url);
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
  };
};
