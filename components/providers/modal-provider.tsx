'use client'

import { useEffect, useState } from "react"
import CancelModal from "../modals/cancel-modal"



const ModalProvider = () => {

    const [mount, setMount] = useState(false)


    useEffect(()=>{
        setMount(true)
    },[])
    
if(!mount) return null

  return (
  <>
  <CancelModal />
  </>
  )
}

export default ModalProvider