import Header from '@/components/header'
import React from 'react'
import Footer from './(landingPage)/(components)/footer'

type Props = {
    children:React.ReactNode,
  
}

const layout = ({children}: Props) => {

  return (
    <div className='h-full'>
         <Header contentPages={false} />
        {children}
        <Footer />
        </div>
  )
}

export default layout