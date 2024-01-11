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
       modules={[Navigation]}
      className='md:h-[600px] h-[300px] '
      spaceBetween={40}
        slidesPerView={1}
        navigation
        breakpoints={{
          1200: {
            slidesPerView: 2, 
          },
       
         
        }}
      
     
      >
        {gallary.map(image=>
              <SwiperSlide className='w-full    rounded-lg overflow-hidden' key={image}>
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