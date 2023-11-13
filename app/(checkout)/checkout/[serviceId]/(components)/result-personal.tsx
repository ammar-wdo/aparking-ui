import React from 'react'
import InfoComponent from './info-component'

type Props = {
    name:string,
    email:string,
    phone:string | number
}

const ResultPersonal = ({name,email,phone}: Props) => {
  return (
    <div className='p-6 border-t-2 border-zinc-200'>
        <h3 className='text-xl font-light'>Personal information</h3>
        <InfoComponent title='name' value={name} />
        <InfoComponent title='email address' value={email} />
        <InfoComponent title='phone number' value={`+ ${phone}`} />
    </div>
  )
}

export default ResultPersonal