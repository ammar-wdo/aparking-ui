import { GET_FAQ } from '@/links'
import axios from 'axios'
import React from 'react'
import FaqComponent from './faq-component'
import { FAQ } from '@/schemas'
import queryString from 'query-string'
import { Accordion } from '@/components/ui/accordion'

type Props = {searchParams:{[ket:string]:string | string [] | undefined}}

type fullFaq = FAQ & {id:string}

const FaqFeed = async({searchParams}: Props) => {


  const url = queryString.stringifyUrl({
    url: GET_FAQ,
    query: { category: searchParams.category },
  });

    const res = await axios(url)
    const faqs = res.data.faqs as fullFaq[]

 


  return (
    <div className='mt-12'>
        {!faqs.length && <p className='text-4xl text-neutral-500 font-bold text-center'>No FAQs</p>}

        <Accordion type="single" collapsible>

{faqs?.map((faq)=><FaqComponent key={faq.id} faq={faq} />)}
</Accordion>
        </div>

  )
}

export default FaqFeed