'use client'

import { useUser } from '@/hooks/user-hook'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { toast } from 'sonner'
import { Loader } from 'lucide-react'

type Props = {}





const SigninOut = (props: Props) => {

    const [mount,setMount]= useState(false)

useEffect(()=>{
    setMount(true)
},[])
    const {user,exitUser} = useUser()

    if(!mount) {return <Button variant={'site'}><Loader className='w-3 h-3 animate-spin' /></Button>}

else{
    if(!user) return <Button asChild variant={'site'} className=" "><Link href={'/signin'}>Sign in</Link></Button>
    if(user) return (<Button variant={'site'} onClick={()=>{exitUser();toast.success('Logged out')}}>Signout</Button>)
}


   

  }
export default SigninOut