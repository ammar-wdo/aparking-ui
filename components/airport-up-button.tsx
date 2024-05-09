'use client'
import React from 'react'
import { Button } from './ui/button'

type Props = {className?:string}

const AirportUpButton = ({className}: Props) => {

   const  onClickHandler = ()=>{
if(typeof window ==='undefined') return

window.scrollTo({top:0,behavior:'smooth'})

    }
  return (
<Button variant={'siteTwo'} onClick={onClickHandler} className={className}>Ontdek</Button>
  )
}

export default AirportUpButton