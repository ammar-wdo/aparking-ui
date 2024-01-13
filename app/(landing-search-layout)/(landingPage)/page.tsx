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


export default  async function Home() {

await new Promise(res=>setTimeout(res,10000))
  return (
    <main className="bg-gray-100 h-full ">
      <Banner>
      <h1 className="lg:text-4xl font-semibold text-3xl relative z-10">
      Slim Parkeren bij Vliegvelden: Vergelijk Prijzen en Opties
      </h1>
      <p className="mt-4 font-extralight text-sm relative z-10">
      Bespaar geld en stress met onze vergelijkingstool voor de beste parkeerplaatsen op Nederlandse vliegvelden.
      </p>
      </Banner>
      <Explain />
      <Suspense fallback={<AirportSkeleton />} ><Airports /></Suspense>
      <Suspense fallback={<Skeleton className='h-[350px]' />}><Reviews /></Suspense>
  <Feed />
 
    </main>
  )
}
