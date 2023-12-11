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
    <div className='w-full lg:h-full aspect-video '>
          <Swiper
       modules={[Navigation]}
      className=' h-full'
        spaceBetween={12}
        slidesPerView={1}
        navigation
      
     
      >
        {gallary.map(image=>
              <SwiperSlide className='w-full  h-full rounded-lg overflow-hidden' key={image}>
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