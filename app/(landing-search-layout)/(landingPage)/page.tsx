import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import Banner from './(components)/banner'
import Explain from './(components)/explain'
import Airports from './(components)/airports'
import Reviews from './(components)/reviews'
import Feed from './(components)/feed'
import Footer from './(components)/footer'

export default function Home() {

  return (
    <main className="bg-gray-100 h-full ">
      <Banner>
      <h2 className="lg:text-4xl font-semibold text-3xl relative z-10">
        Your hassle-free parking solution.
      </h2>
      <p className="mt-4 font-extralight text-sm relative z-10">
        Compare parking spaces and prices at all major airports in the
        Netherlands, Germany & Belgium Airport
      </p>
      </Banner>
      <Explain />
      <Airports />
      <Reviews />
  <Feed />
  <Footer />
    </main>
  )
}
