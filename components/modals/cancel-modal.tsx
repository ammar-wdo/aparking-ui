'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { useCancel } from "@/hooks/modal-hook"
import { Button } from "../ui/button"
import { toast } from "sonner"
import { useState } from "react"
import axios from "axios"
import { DELETE_BOOKING } from "@/links"
import { Loader } from "lucide-react"
import { useRouter } from "next/navigation"

type Props = {}

const CancelModal = (props: Props) => {

    const {open, setOpen, setClose,data} = useCancel()
    const [loading, setLoading] = useState(false)

const router = useRouter()
const onCancel = async()=>{
    try {
        setLoading(true)
   
      const res =  await axios.post(DELETE_BOOKING,data)
      setClose()
      router.push(`${res.data.redirect_url}`)
   

      toast.success('Succesvol geannuleerd')
    } catch (error:any) {
        console.log(error)

        toast.error(error?.response?.data?.customError ? error?.response?.data?.customError :'Something went wrong')
    } finally {
        setLoading(false)
    }
}

  return (
    <Dialog open={open} onOpenChange={setClose}>
    
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Bent u absoluut zeker?</DialogTitle>
        <DialogDescription>
        Uw reservering wordt permanent geannuleerd!
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button type="button" onClick={setClose} variant={'ghost'}>Nee</Button>
        <Button type="button" disabled={loading} onClick={onCancel} variant={'destructive'}>Ja {loading && <Loader className="animate-spin ml-3 h-3 w-3" />}</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  )
}

export default CancelModal