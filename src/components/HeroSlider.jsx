
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

export default function HeroSlider() {
  return (
    <div className='max-w-7xl mx-auto mt-15'>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="relative w-full h-[500px] md:h-[200px]">
            <Image
              src="https://media.istockphoto.com/id/2200550660/photo/ai-data-analysis-business-people-use-ai-to-analyze-financial-related-data-big-data-complex.webp?a=1&b=1&s=612x612&w=0&k=20&c=vCiHFjBODfJyY_Sn_flBHmMOxsaJUKdyioBMXJozSEI="
              alt="animation"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-[500px] md:h-[200px]">
            <Image
              src="https://images.unsplash.com/photo-1555066931-bf19f8fd1085?w=900&auto=format&fit=crop&q=60"
              alt="coding"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </SwiperSlide>

         <SwiperSlide>
          <div className="relative w-full h-[500px] md:h-[200px]">
            <Image
              src={'https://images.unsplash.com/photo-1565687981296-535f09db714e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdiYmRldmVsb3BtZW50JTIwY29kaW5nJTIwbGFwfGVufDB8fDB8fHww'}
              alt="coding"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </SwiperSlide>
      
      </Swiper>
    </div>
  );
}
