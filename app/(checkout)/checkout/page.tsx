import React from 'react'

type Props = {
    searchParams:{[key:string]:string | string[] | undefined}
}

const page = ({searchParams}: Props) => {

if(  searchParams['success'] === 'true') return <div>
    Suucceded
</div>

  return (
    <div>Canceled</div>
  )
}

export default page