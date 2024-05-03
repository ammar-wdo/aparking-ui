import React, { cache } from 'react'
import Banner from '../../(landing-search-layout)/(landingPage)/(components)/banner'
import axios from 'axios'
import { GET_AIRPORTS } from '@/links'
import { Airport } from '@/schemas'
import { notFound, redirect } from 'next/navigation'
import dynamic from "next/dynamic";
import EntitiesFeed from './(components)/entities-feed'
import Link from 'next/link'
import { Metadata } from 'next'
import { getAirport } from '@/lib/getters'
import Header from '@/components/header'
import Navigator from '@/components/navigator'
import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import AirportFaqComponent from './(components)/faq-component'

const Editor = dynamic(() => import('@/components/editor'), { ssr: false })

type Props = {params:{airportName:string}}


export async function generateMetadata(
  { params,  }: Props,

): Promise<Metadata> {


const airport = await getAirport(params.airportName)

if(!airport) return {
  title:'Not found',
  description:'This slug does not exist'
}



 
  return {
    title:`Vergelijk Airport Parking opties - ${airport.name} | Aparking"` ,
    description:`Vind en vergelijk de beste parkeeropties op ${airport.name}. Bespaar tijd en geld door veilige en betaalbare parkeergelegenheid te boeken bij Aparking. Reserveer nu uw plek!`,
    
    openGraph: {
      title:`Vergelijk Airport Parking opties - ${airport.name} | Aparking"` ,
    description:`Vind en vergelijk de beste parkeeropties op ${airport.name}. Bespaar tijd en geld door veilige en betaalbare parkeergelegenheid te boeken bij Aparking. Reserveer nu uw plek!`,
      images: [...airport.images],
    },
  }
}

const page = async({params}: Props) => {



const airport = await getAirport(params.airportName)


console.log(airport)
if(!airport) return   notFound()
  



  return (
    <div>
      <Header />
      <Banner airportName={airport?.name} airportSlug={airport?.slug}></Banner>
      
      <div className='container mt-10 min-h-[600px]'>
        <Navigator airport={{name:airport.name,href:airport.slug}} />

{/* first block */}
        <section className='mt-24'>
          <article className='grid grid-cols-1 lg:grid-cols-2 gap-32'>

<Editor initialContent={airport.blockOneContent}  />
<div className='relative w-full h-full'>
  <Image src={airport.blockOneImage} fill alt='airport figure' className='object-cover rounded-xl' />

</div>


          </article>

        </section>


        {/* second block */}
        <section className='mt-20'>
          <article className='grid grid-cols-1 lg:grid-cols-2 gap-32'>
          <div className='relative w-full h-full'>
  <Image src={airport.blockTwoImage} fill alt='airport figure' className='object-cover rounded-xl' />

</div>
<Editor initialContent={airport.blockTwoContent}  />



          </article>

        </section>
   
      <div className='mt-12 max-w-[1000px]'>   <Editor initialContent={airport.content}  /></div>
   
   
      </div>
      <EntitiesFeed airportName={airport?.name} airportSlug={airport?.slug} airportId={airport?.id} />
      <section className='mt-12 container py-8'>
<h2 className="text-site font-bold text-2xl py-10 mb-8">FAQs {airport.name}</h2>

      <Accordion type="single" collapsible>
{airport.faq.map((faq,i)=><AirportFaqComponent key={i}  i={i.toString()} answer={faq.answer} question={faq.question} />)}

</Accordion>
      </section>

     
    </div>
  )
}

export default page