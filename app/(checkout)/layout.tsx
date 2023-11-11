import React from 'react'
import CheckoutHeader from './(components)/checkout-header'

type Props = {children:React.ReactNode}

const layout = ({children}: Props) => {
  return (
    <div>
        <CheckoutHeader />
        {children}</div>
  )
}

export default layout