import React from 'react'
import Greeting from './(components)/greeting'
import Chatfeed from './(components)/chat-feed'
import ContactForm from './(components)/contac-us-form'

type Props = {}

const page =async (props: Props) => {



  return (
    <div className=''>
      <div className='container py-12 '>
<Greeting />
<Chatfeed />
<ContactForm />
      </div>
    </div>
  )
}

export default page