import React from 'react';
import MyCarousel from './MyCarousel';

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <MyCarousel />
    </div>
  );
}

export default Banner;
