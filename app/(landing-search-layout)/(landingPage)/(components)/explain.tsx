import { Car, MousePointerClick, SearchCheck } from 'lucide-react'
import React from 'react'

type Props = {}

const Explain = (props: Props) => {

const explainInfo = [
    {
        title:'Compare parking options',
        description:'Compare various parking options, all offered by reliable parking providers.',
        icon:<SearchCheck className='text-white w-7 h-7' />
    },
    {
        title:'Book safely Online',
        description:'Book your parking spot quickly and easily online.',
        icon:<MousePointerClick className='text-white w-7 h-7'/>
    },
    {
        title:'Park your car',
        description:'At the airport, show your booking to enter the lot. Park, then enjoy your trip!',
        icon:<Car className='text-white w-7 h-7'/>
    },
]

  return (
    <div className='py-12  container'>
        <h3 className='text-center text-4xl font-semibold text-[#003580] '>How does it work?</h3>
        <div className='mt-8 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 lg:gap-20 gap-8 md:gap-14 mx-auto  '>
            {explainInfo.map((card)=><div key={card.title} className='p-8 bg-white text-center flex flex-col gap-3 rounded-md items-center'>
                <span className='p-2 rounded-full bg-[#003580] '>{card.icon}</span>
                <h4 className='text-2xl text-[#003580] w-[200px] font-semibold'>{card.title}</h4>
                <p className='text-sm font-light text-gray-600 w-[200px]'>{card.description}</p>
            </div>)}

        </div>
    </div>
  )
}

export default Explain