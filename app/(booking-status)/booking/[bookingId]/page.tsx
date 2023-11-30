import React from 'react'

type Props = {
    params:{bookingId:string}
}

const page = ({params}: Props) => {

  return (
    <div>Your booking has been canceled</div>
  )
}

export default page