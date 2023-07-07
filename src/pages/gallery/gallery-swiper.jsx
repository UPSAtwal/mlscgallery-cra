//well i really tired but for now i just refactored the old gallery page a bit to meet the deadline
//i will fix it after 5. And i am ready to bet that the gallery page will be the best page of the whole website

import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import './gallery-swiper.css';

// Import your images dynamically

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('./gallery-images/', false, /\.(png|jpe?g|svg|webp)$/));

function GallerySwiper() {
    return (
        <div className='gallery-container'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                modules={[Navigation, Pagination]}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img key={index} src={image} alt={`MLSC Team ${index + 1}`}></img>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};


export default GallerySwiper;
