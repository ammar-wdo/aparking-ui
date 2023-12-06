'use client'

import { useUser } from '@/hooks/user-hook'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { toast } from 'sonner'
import { Loader } from 'lucide-react'

type Props = {}





const SigninOut = (props: Props) => {




   return <Button asChild variant={'site'} className="rounded-[4px] py-4  text-base px-6  "><Link href={'/signin'}>my booking</Link></Button>
  



   

  }
export default SigninOut