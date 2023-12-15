'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

type Props = {faq:{id:string,question:string,answer:string}}

const FaqComponent = ({faq}: Props) => {
  return (
    <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger className={cn("hover:no-underline py-8 font-bold px-4 hover:bg-gray-100 transition text-start")}>{faq.question}?</AccordionTrigger>
      <AccordionContent className="p-8 text-start">
       {faq.answer}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  )
}

export default FaqComponent