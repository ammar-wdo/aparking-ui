import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {footer?:boolean}

const Logo = ({footer}: Props) => {
  return (
    <Link href={'/'}>
    <div className="relative w-40 h-8 ">
      <Image src={!footer ?'/aparking-logo.svg' :'/aparking-logo-white.svg' } fill alt="logo"/>

    </div></Link>
  )
}

export default Logo