'use client';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectItems } from '../../../redux/basketSlice';

interface ICallbackProps {
  payment: any;
}

function Callback({ payment }: ICallbackProps) {
  const items = useSelector(selectItems);

  return (
    <section className="max-w-screen-lg mx-auto">
      <div className="flex flex-col p-10 bg-white">
        <div className="flex items-center space-x-2 mb-5">
          <CheckCircleIcon className="text-green-500 h-10" />
          <h1 className="text-3xl">
            Thank you, your order has been confirmed!
          </h1>
        </div>

        <p>
          Thank you for shopping with us. We'll send a confirmation once your
          item has shipped, if you would like to check the status of order(s)
          please press the link below.
        </p>

        <Link href="/checkout/orders">
          <button className="basket mt-8 w-full">Go to my orders</button>
        </Link>
      </div>
    </section>
  );
}

export default Callback;
