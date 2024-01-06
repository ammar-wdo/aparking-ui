import Banner from '@/app/(landing-search-layout)/(landingPage)/(components)/banner'
import { GET_ENTITIES } from '@/links'
import { Entity } from '@/schemas'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import dynamic from "next/dynamic";

import React, { cache } from 'react'
import ServciesFeed from './(components)/services-feed'
import Reviews from '@/app/(landing-search-layout)/(landingPage)/(components)/reviews'
import { Metadata } from 'next'
import { getEntity } from '@/lib/getters'
import GallarySwiper from './[serviceName]/(components)/gallary-swiper'
const Editor = dynamic (()=>import('@/components/editor'), { ssr: false })

type Props = {params:{entityName:string,airportName:string}}


export async function generateMetadata(
    { params,  }: Props,
  
  ): Promise<Metadata> {
  
  
  const entity = await getEntity(params.entityName,params.airportName)

  if(!entity) return {
    title:'Not found',
    description:'This slug does not exist'
  }
  
  
  
   
    return {
      title: entity.entityName,
      
      openGraph: {
        images: [...entity.images],
      },
    }
  }


export const revalidate = 0

const page = async({params}: Props) => {

    const entity = await getEntity(params.entityName,params.airportName)

if(!entity) return notFound()




  return (
    <div>
        <Banner noForm>
<h3 className='text-white text-3xl font-bold capitalize'>{entity?.entityName}</h3>
        </Banner>

        <div className='container mt-10'>
            <p className='text-neutral-500 flex items-center gap-1 md:gap-4  text-xs md:text-base flex-wrap '> <Link href={'/'}>Home</Link>  &gt; <Link href={`/${entity?.airport?.slug}`}>{entity?.airport?.name}</Link> &gt; <span className='capitalize text-black'>{entity?.entityName}</span> </p>


            <section className='mt-12' >
                <h3 className='font-bold text-3xl text-site capitalize'>{entity?.entityName}</h3>
                <article className='lg:p-12 p-4 py-8'>
                    <GallarySwiper gallary={entity.images} />
                    <div className='lg:col-span-2 mt-12' >
                    <Editor  initialContent={entity?.content} />
                    </div>
                    


                </article>

            </section>
            <h3 className='text-site text-3xl font font-semibold mt-20 mb-10'>Availability {entity?.entityName}</h3>
       
            
        </div>
        <ServciesFeed entityId={entity.id} />
<div className='py-12 bg-gray-100'>
<Reviews entityId={entity.id} />
</div>
      
    </div>
  )
}

export default page