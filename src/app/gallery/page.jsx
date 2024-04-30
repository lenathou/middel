import React from 'react';
import GalleryComponent from '@/components/specific/GalleryComponents';

const Gallery = () => {
  const images = [
    { src: '/gallerypic1.webp', alt: 'Coupe de Cheveux Homme' },
    { src: '/gallerypic2.webp', alt: 'Coupe de Cheveux Homme' },
    { src: '/gallerypic3.webp', alt: 'Coupe de Cheveux Homme' },
    { src: '/gallerypic4.webp', alt: 'Coupe de Cheveux Femme' },
    { src: '/gallerypic5.webp', alt: 'Coupe de Cheveux Femme' },
    { src: '/gallerypic6.webp', alt: 'Coupe de Cheveux femme' },




    // Ajouter autant d'images que tu veux ici
  ];
  
  return (
    <div>
    <div>
      Gallery
      </div>
      <div>
      <GalleryComponent images={images} />
            </div>
    </div>
  )
}

export default Gallery
