
import { Booking } from '@/schemas'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type User = {
  user: Booking  | null
  setUser: (val:any) => void
  exitUser:()=>void
}




export const useUser = create(
    persist<User>((set, get) => ({
    user: null,
    setUser: (val: any) => {set({ user:val});console.log(get().user)},

  exitUser:()=>set({user:null})

  }), {
    name: 'aparking-user',
    storage: createJSONStorage(() => localStorage)
  }));

