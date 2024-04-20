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
        <div className="strategie-body bg-slate-700">
            <div className="slider-container">
            <h1 className="heading outline-solid">Strategien</h1>
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
            </div>
        </div>
      );
}

export default StrategienComponent;

function GridItemStrategien({ title, children }) {
    return (
      <div className="flex flex-col items-center justify-center p-4 border border-slate-900 bg-slate-400/50 rounded-xl h-[500px]">
        <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
        {children}
      </div>
    );
  }