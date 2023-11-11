import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import Banner from './(components)/banner'

export default function Home() {
  return (
    <main className="">
      <Banner>
      <h2 className="lg:text-4xl font-semibold">
        Your hassle-free parking solution.
      </h2>
      <p className="mt-4 font-extralight text-sm">
        Compare parking spaces and prices at all major airports in the
        Netherlands, Germany & Belgium Airport
      </p>
      </Banner>
  
    </main>
  )
}
