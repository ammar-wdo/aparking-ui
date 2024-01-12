import React from 'react'
import Greeting from './(components)/greeting'
import Chatfeed from './(components)/chat-feed'
import ContactForm from './(components)/contac-us-form'
import { Metadata } from 'next'
import Navigator from '@/components/navigator'

type Props = {}


export const metadata: Metadata = {
  title: 'Contact Aparking - Get in Touch with Our Team',
  description: 'Contact Aparking to get assistance, provide feedback, or inquire about our services. Our dedicated team is here to help answer your questions and ensure you have a seamless parking booking experience.',
  openGraph:{
    title:'Contact Aparking - Get in Touch with Our Team',
    description:'Contact Aparking to get assistance, provide feedback, or inquire about our services. Our dedicated team is here to help answer your questions and ensure you have a seamless parking booking experience.',
  
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
<Chatfeed />
<ContactForm />
      </div>
    </div>
  )
}

export default page