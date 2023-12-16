'use client'

import { useUser } from '@/hooks/user-hook'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { toast } from 'sonner'
import { Loader } from 'lucide-react'
import { cn } from '@/lib/utils'

type Props = {
  col?:boolean,
  close?:(val:boolean)=>void
}





const SigninOut = ({col,close}: Props) => {




   return <Button onClick={()=>close && close(false)} asChild variant={'site'} className={cn("rounded-[4px] sm:py-4   sm:text-base sm:px-6 text-sm py-1 px-3 ",col && 'flex w-full')}><Link href={'/signin'}>my booking</Link></Button>
  



   

  }
export default SigninOut