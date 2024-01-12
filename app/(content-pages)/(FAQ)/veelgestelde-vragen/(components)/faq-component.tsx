'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import dynamic from "next/dynamic";
const Editor = dynamic (()=>import('@/components/editor'), { ssr: false })

type Props = {faq:{id:string,question:string,answer:string}}

const FaqComponent = ({faq}: Props) => {
  return (
   
    <AccordionItem value={faq.id}>
      <AccordionTrigger className={cn("hover:no-underline py-8 font-bold px-4 hover:bg-gray-100 transition text-start")}>{faq.question}?</AccordionTrigger>
      <AccordionContent className="p-8 text-start">
      <Editor  initialContent={faq.answer} />
      </AccordionContent>
    </AccordionItem>
  
  )
}

export default FaqComponent