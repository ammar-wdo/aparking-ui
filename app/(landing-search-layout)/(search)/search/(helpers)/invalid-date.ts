import { validateDate, validateTime } from "./date-validator"

export const invalidDate = (startDate:string,endDate:string,startTime:string,endTime:string)=>{

    if(startDate && endDate && startTime && endTime){
        const validStart = validateDate(startDate as string)
        const validEnd = validateDate(endDate as string)
       
        const validTimeStart = validateTime(startTime as string)
        const validTimeEnd = validateTime(endTime as string)
       
        if(!validStart || !validEnd || !validTimeEnd || !validTimeStart) return true

}
}