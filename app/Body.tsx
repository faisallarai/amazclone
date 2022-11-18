import React from 'react';
import Banner from './Banner';
import ProductFeed from './ProductFeed';

function Body() {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <Banner />
      <ProductFeed />
    </main>
  );
}

export default Body;
