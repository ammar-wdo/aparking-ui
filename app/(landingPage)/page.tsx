import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
   {/* header */}
   <p>Header</p>
   {/* banner */}
   <p>banner</p>

<Link href={'/search'}><Button>Search</Button></Link>
    </main>
  )
}
