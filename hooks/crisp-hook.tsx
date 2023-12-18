import { create } from 'zustand'





type Cancel = {
  open: boolean

  setOpen: () => void
  setClose:()=>void
}

export const useCrisp = create<Cancel>()((set) => ({
  open: false,
  data:{},
  setOpen: () => set(()=>({open:true})),
  setClose:()=>set({open:false})
}))