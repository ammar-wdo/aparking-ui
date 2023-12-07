import Logo from '@/components/logo'
import React from 'react'

type Props = {}

const CheckoutHeader = (props: Props) => {
  return (
    <div className='px-20 bg-[#003580] flex justify-center sm:justify-start '>
        <Logo footer />

    </div>
  )
}

export default CheckoutHeader