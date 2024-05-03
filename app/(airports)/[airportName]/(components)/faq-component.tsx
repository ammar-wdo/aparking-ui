'use client'

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {i:string,question:string,answer:string}

const AirportFaqComponent = ({i,question,answer}: Props) => {
  return (
    <AccordionItem key={i} value={i.toString()}>
    <AccordionTrigger className={cn("hover:no-underline py-8 font-bold px-4 hover:bg-gray-100 transition text-start")}>{question}?</AccordionTrigger>
    <AccordionContent className="p-8 text-start">
    <p>{answer}</p>
    </AccordionContent>
  </AccordionItem>
  )
}

export default AirportFaqComponent