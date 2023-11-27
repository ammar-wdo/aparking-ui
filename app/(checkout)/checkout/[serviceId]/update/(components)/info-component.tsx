'use client'

type Props = {
    title:string,
    value:number | string
}

const InfoComponent = ({title,value}: Props) => {
  return (
    <div className='my-3'>
        <p className='font-bold capitalize'>{title}</p>
        <p className='font-light'>{value}</p>
    </div>
  )
}

export default InfoComponent