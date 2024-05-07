import React from 'react';
import "./StrategienComponent.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slide_image from "../../img/img_1.jpg";
import slide_image2 from "../../img/img_2.jpg";
import slide_image3 from "../../img/img_3.jpg";
import slide_image4 from "../../img/img_4.jpg";
import slide_image5 from "../../img/img_5.jpg";

const StrategienComponent = () => {
    return (
        <div className="strategie-body bg-[#252525]">
            <div className="slider-container">
                <h1 className="heading outline-solid hover:font-bold">Mit unseren Strategien <br/>sind Sie ganz vorne dabei</h1>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    <SwiperSlide>
                    <img src={slide_image} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={slide_image2} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={slide_image3} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={slide_image4} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={slide_image5} alt="slide_image" />
                    </SwiperSlide>

            
                    <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                    </div>
                </Swiper>

               
                <div className='flex min-h-screen items-center justify-center bg-neutral-900'>
                    <div className='grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-5 self-start my-40 ml-10'>
                        <div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl'>
                            <StrategienCards imgSrc={slide_image}>
                                <h3 className="text-xl font-bold mb-2 ">Lorem Ipsum</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius placeat facere corrupti earum illum ad veniam maxime! </p>
                                <div className="space-x-4 mt-4">
                                    <button className='btn'>
                                    </button>
                                </div>
                            </StrategienCards>
                        </div>

                        <div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl'>
                            <StrategienCards imgSrc={slide_image}>
                                <h3 className="text-xl font-bold mb-2 ">Lorem Ipsum</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius placeat facere corrupti earum illum ad veniam maxime! </p>
                                <div className="space-x-4 mt-4">
                                    <button className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                    </button>
                                </div>
                            </StrategienCards>
                        </div>
                    </div>
                </div>


            </div>
        </div>
      );
}

export default StrategienComponent;

function StrategienCards({ children, imgSrc, ...props }) {
    return (
      <div {...props} className='relative'>
            <div class="">
                <img src={imgSrc} alt="" className='transition-transform h-full w-full object-cover group-hover:rotate-2 group-hover:scale-125' />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all text-white">{children}
                <button className='rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white'>Lese alles</button>
            </div>
      </div>
    );
}
