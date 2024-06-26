import ClientButton from '@/components/client-button'
import { GET_FAQ_CAT } from '@/links'
import axios from 'axios'
import React from 'react'

type Props = { searchParams:{[key:string]:string | string[] | undefined}}

const FaqCatFeed = async({searchParams}: Props) => {

    const res = await axios(GET_FAQ_CAT)

    const faqCat = res.data.faqCat

    const categoryParam = searchParams.category as string | undefined

    
  return (
    <div className="mt-12 flex items-center gap-4 flex-wrap">
    <ClientButton label="All" categoryParam={categoryParam} link={'veelgestelde-vragen'} all />
     {faqCat.map((category: { id: string; label: string }) => (
       <ClientButton link={`veelgestelde-vragen?category=${category.label}`} key={category.id} label={category.label} categoryParam={categoryParam} />
     ))}
   </div>
  )
}

export default FaqCatFeed