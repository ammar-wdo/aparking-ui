'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

type Props = {faq:{id:string,question:string,answer:string}}

const FaqComponent = ({faq}: Props) => {
  return (
    <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>{faq.question}?</AccordionTrigger>
      <AccordionContent>
       {faq.answer}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  )
}

export default FaqComponent