'use client';
import { useSession } from 'next-auth/react';
import React from 'react';
import { IOrder } from '../../../typings';
import Order from './Order';

interface IOrdersProps {
  orders: IOrder[] | null;
}

function Orders({ orders }: IOrdersProps) {
  const { data: session } = useSession();

  return (
    <section className="max-w-screen-lg mx-auto p-10">
      <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
        Your Orders
      </h1>

      {session ? <h2>x Orders</h2> : <h2>Please signin to see your orders</h2>}

      <div className="mt-5 space-y-4">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </section>
  );
}

export default Orders;
