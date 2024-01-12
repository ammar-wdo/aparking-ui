'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

type Props = {}

const BackButton = (props: Props) => {
    const router = useRouter()
  return (
    <Button onClick={()=>router.back()} className="mt-3 " variant={'siteTwo'} >Try again</Button>
  )
}

export default BackButton