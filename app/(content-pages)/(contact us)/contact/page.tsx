import React from 'react'
import Greeting from './(components)/greeting'
import Chatfeed from './(components)/chat-feed'
import ContactForm from './(components)/contac-us-form'
import { Metadata } from 'next'
import Navigator from '@/components/navigator'

type Props = {}


export const metadata: Metadata = {
  title: 'Neem contact op met Aparking - Kom in contact met ons team',
  description: 'Neem contact op met Aparking voor assistentie, feedback of vragen over onze diensten. Ons toegewijde team staat klaar om uw vragen te beantwoorden en ervoor te zorgen dat u een naadloze parkeerboekingservaring heeft.',
  openGraph:{
    title:'Neem contact op met Aparking - Kom in contact met ons team',
    description:'Neem contact op met Aparking voor assistentie, feedback of vragen over onze diensten. Ons toegewijde team staat klaar om uw vragen te beantwoorden en ervoor te zorgen dat u een naadloze parkeerboekingservaring heeft.',
  
  }
  
}

const page =async (props: Props) => {



  return (
    <div className=''>
        <div className="py-4 container">
        <Navigator name="Contact" />
        </div>
      <div className='container py-12 '>
<Greeting />

<ContactForm />
      </div>
    </div>
  )
}

export default page