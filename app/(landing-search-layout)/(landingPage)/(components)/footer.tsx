import Logo from '@/components/logo'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import LiveChatButton from './live-chat-button'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='py-12 bg-[#003580] px-0 md:px-8'>
        <div className='container'>
        <div className=' flex md:flex-row flex-col justify-between gap-12 text-white flex-wrap' >
            <section>
                <Logo footer={true} />
                <p className='text-sm max-w-[200px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam</p>
                <div className='mt-8 flex gap-6 items-center -ml-1 '>
                    <Facebook className='w-5 h-5 fill-white text-white' />
                    <Instagram className='w-5 h-5 fill-white stroke-[#003580]  text-white' />
                    <Twitter className='w-5 h-5 fill-white  text-white' />
                    <Linkedin className='w-5 h-5 fill-white text-white' />
                    <Youtube className='w-5 h-5 fill-white text-white stroke-[#003580]' />

                </div>
            </section>
            <section className='mt-4'>
<h3 className='font-bold'>Airports</h3>
<div className='mt-6 flex flex-col gap-4'>
    <Link href={'/Schiphol Airport'} className='capitalize font-light text-base hover:underline '>Schiphol Airport</Link>
    <Link href={'/Damascus airport'} className='capitalize font-light text-base hover:underline'>Damascus airport</Link>
    <Link href={'/Vnokova Moscow airport'} className='capitalize font-light text-base hover:underline'>Vnokova Moscow airport</Link>
    <Link href={'/Houari Boumedien Algeria airport'} className='capitalize font-light text-base hover:underline'>Houari Boumedien Algeria airport</Link>

</div>
            </section>
            <section className='mt-4'>
<h3 className='font-bold'>Company</h3>
<div className='mt-6 flex flex-col gap-4'>
    <Link href={'/over-ons'} className=' font-light text-base hover:underline '>Over ons</Link>
    <Link href={'/contact'} className=' font-light text-base hover:underline'>Contact</Link>
    <Link href={'/partner-worden'} className=' font-light text-base hover:underline'>Partner worden</Link>
    <Link href={'/blog'} className=' font-light text-base hover:underline'>Blog</Link>

</div>
            </section>
            <section className='mt-4 shrink-0'>
<h3 className='font-bold'>Support</h3>
<div className='mt-6 flex flex-col gap-4'>
    <Link href={'/veelgestelde-vragen'} className=' font-light text-base hover:underline '>Veelgestelde vragen</Link>
    <Link href={'/contact'} className=' font-light text-base hover:underline'>Klantenservice</Link>
 <LiveChatButton />

</div>
            </section>
            <section className='mt-4'>
<h3 className='font-bold'>Contact us </h3>
<div className='mt-6 flex flex-col gap-4'>
  <p className='flex gap-3 items-center font-light text-base'> <Mail className='w-4 h-4'/> email@company.com</p>
  <p className='flex gap-3 items-center font-light text-base'><Phone className='w-4 h-4'/>   (123)123-1234</p>
  <p className='flex gap-3 items-center font-light text-base'> <MapPin className='w-4 h-4'/>   794 Mcallister St
San Francisco, 94102</p>

</div>
            </section>


        </div>

        <div className='border-white border-t py-4 mt-12 flex justify-between items-center text-white font-light text-sm md:flex-row flex-col gap-4 '>
            <p>
            Copyright © 2024 APARKING.
            </p>
            <p className='text-center'>
           Alle rechten voorbehouden | <Link href={'/algemene-voorwaarden'}  className='underline'>Algemene voorwaarden</Link>| <Link href={'/privacy-beleid'} className='underline'>Privacy beleid</Link>
            </p>


        </div>
        </div>
      
    </div>
  )
}

export default Footer