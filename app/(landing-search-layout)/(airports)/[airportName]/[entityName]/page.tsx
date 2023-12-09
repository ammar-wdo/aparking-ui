import Banner from '@/app/(landing-search-layout)/(landingPage)/(components)/banner'
import { GET_ENTITIES } from '@/links'
import { Entity } from '@/schemas'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import dynamic from "next/dynamic";

import React from 'react'
import ServciesFeed from './(components)/services-feed'
const Editor = dynamic (()=>import('@/components/editor'), { ssr: false })

type Props = {params:{entityName:string}}

const page = async({params}: Props) => {

const res = await axios(GET_ENTITIES + `/${params.entityName}`)

const entity = res.data?.entity  as Entity &{ id:string,airport :{name:string}}

if(!entity) return redirect('/')


  return (
    <div>
        <Banner noForm>
<h3 className='text-white text-3xl font-bold capitalize'>{entity?.entityName}</h3>
        </Banner>

        <div className='container mt-10'>
            <p className='text-neutral-500 flex items-center gap-4'> <Link href={'/'}>Home</Link>  &gt; <Link href={`/${entity?.airport?.name}`}>{entity?.airport?.name}</Link> &gt; <span className='capitalize text-black'>{entity?.entityName}</span> </p>


            <section className='mt-12' >
                <h3 className='font-bold text-3xl text-site capitalize'>{entity?.entityName}</h3>
                <article className='grid grid-cols-1 lg:grid-cols-3 mt-4 gap-3 '>
                    <div className='w-full aspect-video lg:h-full relative'>
                        <Image alt='entity image' fill src={entity?.images[0] || ''} className='object-cover'/>

                    </div>
                    <div className='lg:col-span-2'>
                    <Editor  initialContent={entity?.content} />
                    </div>
                    


                </article>

            </section>
            <h3 className='text-site text-3xl font font-semibold mt-20 mb-10'>Availability {entity?.entityName}</h3>
       
            
        </div>
        <ServciesFeed entityId={entity.id} />
    </div>
  )
}

export default page