import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import qs from 'query-string'

export const useFilter = () => {

    const params = useSearchParams()


  const [service, setService] = useState<string[]>(params.get('service') ? [...params.getAll('service')!] : []);
  const [location, setLocation] = useState<string[]>(params.get('location') ? [...params.getAll('location')!] : []);
  const [electric, setElectric] = useState(params.get('electric') ? params.get('electric')! : false)
  const [key, setKey] = useState<string[]>(params.get('key') ? [...params.getAll('key')!] : []);

  const [open, setOpen] = useState(false)


  const serviceActive = (name:string)=>{

return !!service.includes(name)
  }
  const locationActive = (name:string)=>{

return !!location.includes(name)
  }
  const keyActive = (name:string)=>{

return !!key.includes(name)
  }



const addService = (value:string)=>{
    console.log(service)
    if(service.includes(value)){
        setService(prev=>prev.filter(val=>val!==value))
    }else{
        setService(prev=>[...prev,value])
    }
}

const addLocation = (value:string)=>{
    console.log(location)
    if(location.includes(value)){
        setLocation(prev=>prev.filter(val=>val!==value))
    }else{
        setLocation(prev=>[...prev,value])
    }
}
const addKey = (value:string)=>{
    console.log(key)
    if(key.includes(value)){
        setKey(prev=>prev.filter(val=>val!==value))
    }else{
        setKey(prev=>[...prev,value])
    }
}

const toggleElectric = ()=>{
console.log(electric)
    setElectric(prev=>!prev)
}

const router = useRouter()


const pushFilter = ()=>{

    let currentQuery = {};
  
  if (params) {
    currentQuery = qs.parse(params.toString())
  }

  const updatedQuery: any = {
    ...currentQuery,
   service:!!service.length ? service : undefined,
   location:!!location.length ? location :undefined,
   key:!!key.length ? key : undefined,
   electric:!!electric ?electric : undefined
  }

  

  const url = qs.stringifyUrl({
    url: '/search',
    query: updatedQuery
  }, { skipNull: true });

  router.push(url);
  setOpen(false)
};



return {serviceActive,locationActive,keyActive,electric,addService,addLocation,addKey,toggleElectric,pushFilter,open,setOpen}

};
