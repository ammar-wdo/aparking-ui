import React from 'react'
import Footer from '../(landing-search-layout)/(landingPage)/(components)/footer'

type Props = {
    children:React.ReactNode
}

const layout = ({children}: Props) => {
  return (
    <div>{children}
    <Footer />
    </div>
  )
}

export default layout