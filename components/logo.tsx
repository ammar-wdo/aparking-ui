import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  return (
    <Link href={'/'}>
    <div className="relative w-32 aspect-video ">
      <Image src={'/aparking-logo.svg'} fill alt="logo"/>

    </div></Link>
  )
}

export default Logo