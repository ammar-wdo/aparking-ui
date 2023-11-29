'use client'

import { useUser } from "@/hooks/user-hook"
import { useEffect } from "react"

type Props = {}

const ResetUser = (props: Props) => {


    const {exitUser} = useUser()

    useEffect(()=>{exitUser()},[])
  return (
    <div/>
  )
}

export default ResetUser