'use client';
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '../../redux/basketSlice';
import CheckoutProduct from './CheckoutProduct';
import Currency from 'react-currency-formatter';
import { useSession } from 'next-auth/react';
import Paystack from './Paystack';

const reference = new Date().getTime().toString();

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  return (
    <section className="lg:flex max-w-screen-2xl mx-auto">
      {/* Left */}
      <div className="flex-grow m-5 shadow-sm">
        <Image
          src="https://links.papareact.com/ikj"
          width={1020}
          height={250}
          style={{ objectFit: 'contain' }}
          alt="banner"
        />

        <div className="flex flex-col p-5 space-y-10 bg-white">
          <h1 className="text-3xl border-b pb-4">
            {items.length === 0
              ? 'Your shopping Basket is empty'
              : 'Shopping basket'}
          </h1>
          {items.map((item, i) => (
            <CheckoutProduct key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col bg-white p-10 shadow-md">
        {items.length > 0 && (
          <>
            <h2 className="whitespace-nowrap">
              Subtotal ({items.length} items):
              <span className="font-bold ml-2">
                <Currency quantity={total} currency="GHS" />
              </span>
            </h2>
            <Paystack />
          </>
        )}
      </div>
    </section>
  );
}

export default Checkout;
