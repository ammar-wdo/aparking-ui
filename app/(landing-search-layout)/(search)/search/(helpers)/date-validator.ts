import { z } from "zod";





export const validateDate = (val:string)=>{

    const dateSchema = z.string().refine((val) => {
        // Regular expression to check if string is in YYYY-MM-DD format
        if (!/^\d{4}-\d{2}-\d{2}$/.test(val)) {
          return false;
        }
      
        // Check if the string is a valid date
        const date = new Date(val);
        return date instanceof Date && !isNaN(date.getTime());
      }, {
        message: "Invalid date format. Expected format: YYYY-MM-DD",
      });


      const valid = dateSchema.safeParse(val)
      if(!valid.success) return false

      return true

}


export const validateTime = (val:string)=>{

    const timeSchema = z.string().refine((val) => {
        // Regular expression to check if string is in HH:MM format
        const timeRegex = /^\d{2}:\d{2}$/;
        if (!timeRegex.test(val)) {
          return false;
        }
      
        // Extract hours and minutes from the string
        const [hours, minutes] = val.split(':').map(Number);
      
        // Check if hours are within 0-23 and minutes within 0-59
        return hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60;
      }, {
        message: "Invalid time format. Expected format: HH:MM",
      });



      const valid = timeSchema.safeParse(val)
      if(!valid.success) return false

      return true
}

