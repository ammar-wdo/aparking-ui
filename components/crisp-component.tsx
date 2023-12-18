'use client'

import { useCrisp } from '@/hooks/crisp-hook'
import {Crisp} from 'crisp-sdk-web'
import { useEffect } from 'react'

type Props = {}

const CrispComponent = (props: Props) => {

    const {open,setClose} = useCrisp()

    useEffect(()=>{
        Crisp.configure('bca96082-b4ac-4cba-9f66-e1a4b374971a')
        Crisp.chat.onChatClosed(()=>setClose())

        if(open){
            Crisp.chat.open()
        }else{
            Crisp.chat.close()
        }
        
    },[open])
  return (
  null
  )
}

export default CrispComponent