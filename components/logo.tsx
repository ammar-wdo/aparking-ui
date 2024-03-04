import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {footer?:boolean}

const Logo = ({footer}: Props) => {
  return (
    <Link href={'/'}>
    <div className="relative w-44 aspect-[28.9/4.423]">
      <Image src={!footer ?'/aparking-logo.svg' :'/aparking-logo-white.webp' } fill alt="logo"/>

    </div></Link>
  )
}

export default Logo