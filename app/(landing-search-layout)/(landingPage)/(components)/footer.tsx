import Logo from '@/components/logo'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='py-12 bg-[#003580] px-8'>
        <div className='container'>
        <div className=' flex md:flex-row flex-col md:gap-36 gap-8 text-white flex-wrap' >
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
<div className='mt-6 flex flex-col gap-2'>
    <Link href={'/Schiphol Airport'} className='capitalize font-light text-sm hover:underline '>Schiphol Airport</Link>
    <Link href={'/Damascus airport'} className='capitalize font-light text-sm hover:underline'>Damascus airport</Link>
    <Link href={'/Vnokova Moscow airport'} className='capitalize font-light text-sm hover:underline'>Vnokova Moscow airport</Link>
    <Link href={'/Houari Boumedien Algeria airport'} className='capitalize font-light text-sm hover:underline'>Houari Boumedien Algeria airport</Link>

</div>
            </section>
            <section className='mt-4'>
<h3 className='font-bold'>Company</h3>
<div className='mt-6 flex flex-col gap-2'>
    <Link href={'/'} className=' font-light text-sm hover:underline '>About</Link>
    <Link href={'/'} className=' font-light text-sm hover:underline'>Contact us</Link>
    <Link href={'/'} className=' font-light text-sm hover:underline'>Career</Link>
    <Link href={'/'} className=' font-light text-sm hover:underline'>Blog</Link>

</div>
            </section>
            <section className='mt-4 shrink-0'>
<h3 className='font-bold'>Support</h3>
<div className='mt-6 flex flex-col gap-2'>
    <Link href={'/'} className=' font-light text-sm hover:underline '>Getting started</Link>
    <Link href={'/'} className=' font-light text-sm hover:underline'>Help center</Link>
    <Link href={'/'} className=' font-light text-sm hover:underline'>Report a bug</Link>
    <Link href={'/'} className=' font-light text-sm hover:underline'>Chat support </Link>

</div>
            </section>
            <section className='mt-4'>
<h3 className='font-bold'>Contact us </h3>
<div className='mt-6 flex flex-col gap-2'>
  <p className='flex gap-3 items-center font-light text-sm'> <Mail className='w-4 h-4'/> email@company.com</p>
  <p className='flex gap-3 items-center font-light text-sm'><Phone className='w-4 h-4'/>   (123)123-1234</p>
  <p className='flex gap-3 items-center font-light text-sm'> <MapPin className='w-4 h-4'/>   794 Mcallister St
San Francisco, 94102</p>

</div>
            </section>


        </div>

        <div className='border-white border-t py-4 mt-12 flex justify-between items-center text-white font-light text-sm md:flex-row flex-col gap-4 '>
            <p>
            Copyright © 2023 APARKING.
            </p>
            <p className='text-center'>
            All Rights Reserved | <Link href={'/'}  className='underline'>Terms and Conditions </Link>| <Link href={'/'} className='underline'>Privacy Policy </Link>
            </p>


        </div>
        </div>
      
    </div>
  )
}

export default Footer