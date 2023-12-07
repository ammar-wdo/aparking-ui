import React from 'react'
import Footer from './(components)/footer'


type Props = {
    children:React.ReactNode
}

const layout = ({children}: Props) => {
  return (
    <div className='h-full'>
    
        {children}
        </div>
  )
}

export default layout