import { unstable_getServerSession } from 'next-auth';
import React from 'react';
import { IOrder } from '../../../typings';
import Header from '../../Header';
import Orders from './Orders';

async function getOrders() {
  const session = await unstable_getServerSession();
  if (!session) return null;

  // get orders by session.user.email from db

  const orders: IOrder[] | null = [
    {
      id: 2299979211,
      domain: 'test',
      status: 'success',
      reference: '1668982689039',
      amount: 10995,
      gateway_response: 'Successful',
      paid_at: '2022-11-20T22:18:15.000Z',
      created_at: '2022-11-20T22:18:12.000Z',
      channel: 'card',
      currency: 'GHS',
      fees: 215,
      paidAt: '2022-11-20T22:18:15.000Z',
      requested_amount: 10995,
      customer: {
        id: 102393694,
        first_name: 'Faisal',
        last_name: 'Issaka',
        email: 'faisallarai@gmail.com',
        customer_code: 'CUS_tnb6npfngds5a61',
        phone: '',
      },
      items: [
        {
          id: 12,
          title:
            'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
          price: 114,
          description:
            "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
          category: 'electronics',
          image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
          rating: { rate: 4.8, count: 400 },
          hasPrime: false,
        },
        {
          id: 13,
          title:
            'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
          price: 599,
          description:
            '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
          category: 'electronics',
          image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
          rating: { rate: 2.9, count: 250 },
          hasPrime: true,
        },
      ],
    },
    {
      id: 2299979212,
      domain: 'test',
      status: 'success',
      reference: '1668982689037',
      amount: 10990,
      gateway_response: 'Successful',
      paid_at: '2022-11-20T22:18:15.000Z',
      created_at: '2022-11-20T22:18:12.000Z',
      channel: 'card',
      currency: 'GHS',
      fees: 210,
      paidAt: '2022-11-20T22:18:15.000Z',
      requested_amount: 10990,
      customer: {
        id: 102393694,
        first_name: 'Faisal',
        last_name: 'Issaka',
        email: 'faisallarai@gmail.com',
        customer_code: 'CUS_tnb6npfngds5a61',
        phone: '',
      },
      items: [
        {
          id: 12,
          title:
            'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
          price: 114,
          description:
            "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
          category: 'electronics',
          image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
          rating: { rate: 4.8, count: 400 },
          hasPrime: false,
        },
        {
          id: 13,
          title:
            'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
          price: 599,
          description:
            '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
          category: 'electronics',
          image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
          rating: { rate: 2.9, count: 250 },
          hasPrime: true,
        },
        {
          id: 18,
          title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
          price: 9.85,
          description:
            '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
          category: "women's clothing",
          image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
          rating: { rate: 4.7, count: 130 },
          hasPrime: false,
        },
        {
          id: 19,
          title: "Opna Women's Short Sleeve Moisture",
          price: 7.95,
          description:
            '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
          category: "women's clothing",
          image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
          rating: { rate: 4.5, count: 146 },
          hasPrime: true,
        },
        {
          id: 20,
          title: 'DANVOUY Womens T Shirt Casual Cotton Short',
          price: 12.99,
          description:
            '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
          category: "women's clothing",
          image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
          rating: { rate: 3.6, count: 145 },
          hasPrime: false,
        },
      ],
    },
  ];

  return orders;
}

async function OrdersPage() {
  const orders = await getOrders();
  return (
    <main>
      <Orders orders={orders} />
    </main>
  );
}

export default OrdersPage;
