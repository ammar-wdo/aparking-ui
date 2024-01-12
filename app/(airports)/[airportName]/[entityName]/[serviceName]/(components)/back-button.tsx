'use client'

import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from "next/navigation"

type Props = {}

const BackButton = (props: Props) => {
    const router = useRouter()
    const pathname = usePathname()
  return (
    <Button onClick={()=>router.push(pathname)} className="mt-3 " variant={'siteTwo'} >Try again</Button>
  )
}

export default BackButton