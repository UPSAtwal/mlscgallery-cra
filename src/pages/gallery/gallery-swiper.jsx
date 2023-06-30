//well i really tired but for now i just refactored the old gallery page a bit to meet the deadline
//i will fix it after 5. And i am ready to bet that the gallery page will be the best page of the whole website

import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import './gallery-swiper.css';

// Import your images dynamically
function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('./assets/gallery-images', false, /\.(png|jpe?g|svg)$/));

SwiperCore.use([Navigation, Pagination]);

function Gallery() {
    return (
        <div className="gallery-container">
            <h1>Gallery</h1>
            <Swiper navigation pagination>
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image.default} alt={`${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Gallery;
