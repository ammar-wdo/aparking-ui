import { handleTimezone } from '@/lib/timezone-handler'
import { ALL_SERVICES } from '@/links'
import axios from 'axios'
import qs from 'query-string'
import AvailableServiceCard from './available-service-card'

type Props = {
    searchParams:{[key:string]:string | string[] | undefined},
    serviceId:string
}

const AvailableService =async ({searchParams,serviceId}: Props) => {

 
    const startDate = searchParams.startDate
    const endDate = searchParams.endDate
    const startTime = searchParams.startTime
    const endTime = searchParams.endTime

   


    const url = qs.stringifyUrl({
        url:ALL_SERVICES + `/check/${serviceId}`,
        query:{
            startDate:startDate,
            endDate:endDate,
            startTime,
            endTime
        }
    })
   const res =  await axios(url)

   console.log("The result",res.data)


   if(!res.data.response && !res.data.service) return null

  return (
    <div className='py-4 '>
        <h3 className='text-3xl  pb-4 font-bold text-neutral-600'>Availability</h3>
 <AvailableServiceCard  key={`${startDate} - ${endDate} - ${startTime} - ${endTime}`} response={res.data.response} service={res.data.service}/>
    </div>
   
  )
}

export default AvailableService