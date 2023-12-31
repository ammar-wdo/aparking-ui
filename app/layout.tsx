import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import ModalProvider from '@/components/providers/modal-provider'
import CrispProvider from '@/components/providers/crisp-provier'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aparking',
  description: 'Best parking comparison site',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <CrispProvider />
      <body className={inter.className}>

     {children}
<ModalProvider />
      <Toaster richColors position='top-right'/></body>
    </html>
  )
}
