'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader, XIcon } from 'lucide-react'
import { ChangeEvent, MutableRefObject } from 'react'


type Props = {
   setCode:(e:ChangeEvent<HTMLInputElement>)=>void
   promoCode:string
    promo:{
        loading: boolean;
        message: string | undefined;
       id:string | undefined,
       label:string | undefined,
       percentage:number | undefined,
       value:number | undefined
    },
    reset:()=>void,
    checkPromo:()=>void
}

const PromoBox = ({promoCode,setCode,promo,reset,checkPromo}: Props) => {
  return (
    <div className='my-2'>
        <p className='py-1 font-bold'>Apply promo code</p>
    <div className=' flex items-center gap-1'>
        <Input value={promoCode}  onChange={setCode} placeholder='Promo code' />
        <Button onClick={checkPromo} disabled={promo.loading || !!promo.label} type='button' variant={'siteTwo'}>Apply {promo.loading && <Loader className='ml-3 w-3 h-3 animate-spin' />}</Button>


    </div>
    {promo.message && <p className='rounded-md text-rose-500 p-2 border border-rose-500 mt-2 bg-rose-500/10 text-xs'>{promo.message}</p>}
    {promo.label && <div className='p-1  border rounded-md w-fit text-xs flex items-center mt-2 capitalize font-medium bg-green-400/10'>{promo.label}<XIcon onClick={reset} className='ml-3 cursor-pointer' /></div>}
    </div>

  )
}

export default PromoBox