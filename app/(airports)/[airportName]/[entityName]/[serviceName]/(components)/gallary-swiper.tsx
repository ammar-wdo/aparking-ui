'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide,} from 'swiper/react';
import { Navigation } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



type Props = {gallary:string[]}

const GallarySwiper = ({gallary}: Props) => {
  return (
    <div className='w-full h-full '>
          <Swiper
          style={{paddingInline:0}}
       modules={[Navigation]}
      className='md:h-[600px] h-[300px] p-0'
      spaceBetween={40}
        slidesPerView={1}
        navigation
    
      
     
      >
        {gallary.map(image=>
              <SwiperSlide className='w-full    rounded-lg overflow-hidden p-0' key={image}>
              <div className='w-full h-full relative'>
                <Image
                fill
                  className='object-cover'
                  src={image}
                  alt="service gallary"
                 
                />
              </div>
            </SwiperSlide>)}
      
        </Swiper>
    </div>
  )
}

export default GallarySwiper