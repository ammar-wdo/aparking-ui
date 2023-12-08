import Header from '@/components/header'
import React from 'react'
import Footer from '../(landing-search-layout)/(landingPage)/(components)/footer'

type Props = {
    children:React.ReactNode
}

const layout = ({children}: Props) => {
  return (
    <div>
        <Header contentPages={true} />
        {children}
        <Footer />
        
        </div>
  )
}

export default layout