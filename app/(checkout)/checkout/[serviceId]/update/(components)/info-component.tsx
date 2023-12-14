'use client'

type Props = {
    title:string,
    value:number | string
}

const InfoComponent = ({title,value}: Props) => {
  return (
    <div className='my-3 '>
        <p className='font-bold capitalize'>{title}</p>
        <p className='font-light text-xs md:text-sm text-neutral-500'>{value}</p>
    </div>
  )
}

export default InfoComponent