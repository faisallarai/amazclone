'use client';
import Image from 'next/image';
import React from 'react';
import { IProduct } from '../typings';
import Product from './Product';

interface IProductFeedProps {
  products: IProduct[];
}

function ProductFeed({ products }: IProductFeedProps) {
  return (
    <div className="grid grid-flow-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products.slice(0, 4).map((product) => (
        <Product key={product.id} product={product} />
      ))}

      <img
        loading="lazy"
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />

      <div className="md:col-span-2">
        {products.slice(4, 5).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      {products.slice(5, products.length).map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductFeed;
