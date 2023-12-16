'use client'

import { useUser } from '@/hooks/user-hook'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { toast } from 'sonner'
import { Loader } from 'lucide-react'
import { cn } from '@/lib/utils'

type Props = {
  hidden?:boolean,
  close?:(val:boolean)=>void
}





const SigninOut = ({hidden,close}: Props) => {




   return <Button onClick={()=>close && close(false)} asChild variant={'site'} className={cn("rounded-[4px] sm:py-4  w-full sm:text-base sm:px-6 text-sm py-1 px-3 ",hidden && 'md:flex hidden w-fit')}><Link href={'/signin'}>my booking</Link></Button>
  



   

  }
export default SigninOut