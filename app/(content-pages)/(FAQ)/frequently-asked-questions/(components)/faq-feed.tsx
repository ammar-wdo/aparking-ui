import { GET_FAQ } from '@/links'
import axios from 'axios'
import React from 'react'
import FaqComponent from './faq-component'

type Props = {}

const FaqFeed = async(props: Props) => {

    const res = await axios(GET_FAQ)
    const faqs = res.data.faqs as {id:string,question:string,answer:string}[]

 


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