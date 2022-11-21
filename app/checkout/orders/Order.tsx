import moment from 'moment';
import React from 'react';
import { IOrder } from '../../../typings';
import Currency from 'react-currency-formatter';
import Image from 'next/image';

interface IOrderProps {
  order: IOrder;
}

function Order({ order }: IOrderProps) {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p>{moment(order.created_at).format('DD MM YYYY')}</p>
        </div>

        <div>
          <p className="text-xs font-bold">TOTAL</p>
          <p>
            <Currency quantity={order.amount} currency="GHS" /> - Next Day
            Delivery <Currency quantity={20} currency="GHS" />
          </p>
        </div>

        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {order.items.length} items
        </p>

        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
          ORDER # {order.reference}
        </p>
      </div>

      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {order.items.map((item) => (
            <img
              src={item.image}
              alt={item.title}
              className="h-20 object-contain sm:h-32"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Order;
