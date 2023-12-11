'use client'

import { useEffect, useRef } from "react"

type Props = {}

const SearchScroller = (props: Props) => {
const scrollerRef = useRef<HTMLDivElement | null>(null)
    useEffect(()=>{
        scrollerRef.current?.scrollIntoView({behavior:'smooth'})
    },[])
  return (
    <div ref={scrollerRef} />
  )
}

export default SearchScroller