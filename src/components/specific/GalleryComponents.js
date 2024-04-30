// GalleryComponent.js
"use client"
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// N'oublie pas d'installer les modules de Swiper si ce n'est pas déjà fait :
// npm install swiper

const GalleryComponent = ({ images }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Navigation, Pagination, Scrollbar]} // Définir les modules ici
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          {/* La propriété layout est retirée et objectFit est ajustée via le style ci-dessous */}
          <div style={{ position: 'relative', width: '100%', height: '650px', display: 'flex', justifyContent: 'center' }}>
            <Image
              src={image.src}
              alt={image.alt}
              width={550} 
              height={300} 
              style= {{width: 'auto'}}

              // Next.js gère le remplissage de l'élément parent, donc 'fill' n'est pas nécessaire
              // objectFit est géré avec un style inline ci-dessous
              priority={index < 3} // Charger les trois premières images en priorité
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GalleryComponent;
