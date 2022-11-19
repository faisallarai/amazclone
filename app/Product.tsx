'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { IProduct } from '../typings';
import Currency from 'react-currency-formatter';
import ReactStars from 'react-stars';
import NoSSR from './NoSSR';

interface IProductProps {
  product: IProduct;
}

function Product({ product }: IProductProps) {
  const [hasPrimeDelivery, setPrimeDelivery] = useState(false);

  useEffect(() => {
    setPrimeDelivery(Math.random() < 0.5 ? false : true);
  }, []);

  return (
    <section className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {product.category}
      </p>

      <Image
        src={product.image}
        height={200}
        width={200}
        style={{ objectFit: 'contain' }}
        alt={product.title}
      />

      <h4 className="my-3">{product.title}</h4>

      <div className="flex items-center space-x-3">
        <NoSSR>
          <ReactStars
            count={5}
            size={20}
            color1="gray"
            edit={false}
            half={true}
            value={product.rating.rate}
            color2="#ffd700"
          />
        </NoSSR>
        <p className="text-xs">{product.rating.count}</p>
      </div>

      <p className="text-xs my-2 line-clamp-2">{product.description}</p>

      <div className="mb-5">
        <Currency quantity={product.price} currency="GHS" />
      </div>

      {hasPrimeDelivery && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            loading="lazy"
            className="w-12"
            src="https://links.papareact.com/fdw"
            alt="prime delivery"
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button className="mt-auto basket">Add to basket</button>
    </section>
  );
}

export default Product;
