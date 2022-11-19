'use client';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

function MyCarousel() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={5000}
    >
      <div>
        <img loading="lazy" src="https://links.papareact.com/gi1" alt="" />
      </div>

      <div>
        <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
      </div>

      <div>
        <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
      </div>
    </Carousel>
  );
}

export default MyCarousel;
