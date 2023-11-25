'use client' // Error components must be Client Components
 
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='space-y-4 text-center'>
        <h2>Something went wrong!</h2>
      <p className='py-4 text-rose-500'>{error.message}</p>
      <div className='flex items-center gap-4'>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
      <Link href={'/'}>Back to main page</Link>
      </div>
        </div>

    
    </div>
  )
}