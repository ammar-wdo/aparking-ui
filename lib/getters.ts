import { ALL_SERVICES, GET_AIRPORTS, GET_ENTITIES } from "@/links";
import { Airport, Entity, Service } from "@/schemas";
import axios from "axios";
import { cache } from "react";

export const getService = cache(async(serviceName:string,entityName:string,airportName:string)=>{
    const res = await axios(
      ALL_SERVICES +
        `/serviceInfo/${serviceName}?entityName=${entityName}&airportName=${airportName}`
    );
  
    const service = res.data.service as Service & {
      entity: { entityName: string,slug:string, airport: { name: string ,slug:string} };
    };
  return service
  })


  export const getEntity = cache(async(entitySlug:string,airport:string)=>{
    const res = await axios(GET_ENTITIES + `/${entitySlug}?airportName=${airport}`)

    const entity = res.data?.entity  as Entity &{ id:string,airport :{name:string,slug:string}}

    return entity
})


export const getAirport=cache(async(name:string)=>{
    const res = await axios(GET_AIRPORTS + `/${name}`)
  
  
    const airport = res.data.airport as Airport
    return airport
  })
  