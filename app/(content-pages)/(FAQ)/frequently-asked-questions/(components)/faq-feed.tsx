import { GET_FAQ } from '@/links'
import axios from 'axios'
import React from 'react'
import FaqComponent from './faq-component'
import { FAQ } from '@/schemas'
import queryString from 'query-string'

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

        <div className='flex flex-col '>

{faqs?.map((faq)=><FaqComponent key={faq.id} faq={faq} />)}
        </div>
    </div>
  )
}

export default FaqFeed