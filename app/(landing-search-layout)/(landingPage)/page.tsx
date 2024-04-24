import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import Banner from './(components)/banner'
import Explain from './(components)/explain'
import Airports from './(components)/airports'
import Reviews from './(components)/reviews'
import Feed from './(components)/feed'
import Footer from './(components)/footer'
import { Suspense } from 'react'
import AirportSkeleton from './(components)/airports-skeleton'
import { Skeleton } from '@/components/ui/skeleton'
import { Metadata } from 'next'


export const revalidate = 0

export const metadata: Metadata = {
  title: "Parkeren bij vliegvelden vergelijken - Zorgeloos op reis",
  description:
    "Ga je binnenkort op reis? Aparking vergelijkt parkeren bij vliegvelden voor zowel lang als kort parkeren. Parkeer al v.a. €1,39 per dag. ",
  openGraph: {
    title: "Parkeren bij vliegvelden vergelijken - Zorgeloos op reis",
    description:
      "Ga je binnenkort op reis? Aparking vergelijkt parkeren bij vliegvelden voor zowel lang als kort parkeren. Parkeer al v.a. €1,39 per dag. ",
  },
};

export default  async function Home() {


  return (
    <main className="bg-gray-100 h-full ">
      <Banner>
      <h1 className="lg:text-4xl font-semibold text-3xl relative z-10">
      Eenvoudig vergelijken & parkeren bij vliegvelden
      </h1>
      <p className="mt-4 font-extralight text-sm relative z-10">
      Vergelijk prijzen en opties voor de beste parkeerplaatsen op Nederlandse vliegvelden.
      </p>
      </Banner>
      <Explain />
      <Suspense fallback={<AirportSkeleton />} ><Airports /></Suspense>
      {/* <Suspense fallback={<Skeleton className='h-[350px]' />}><Reviews /></Suspense> */}
  <Feed />
 
    </main>
  )
}
