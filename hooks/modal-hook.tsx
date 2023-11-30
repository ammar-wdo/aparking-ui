import { create } from 'zustand'



type Data ={
    bookingId?:string,
    bookingCode?:string,
    email?:string
}

type Cancel = {
  open: boolean
  data:Data
  setOpen: (data:Data) => void
  setClose:()=>void
}

export const useCancel = create<Cancel>()((set) => ({
  open: false,
  data:{},
  setOpen: (data) => set(()=>({open:true,data:data})),
  setClose:()=>set({open:false,data:{}})
}))

