import React from 'react'

type Props = {params:{bookingId:string}}

const page = ({params}: Props) => {
  return (
    <div>{params.bookingId}</div>
  )
}

export default page