'use client';
import React from 'react';
import { usePaystackPayment } from 'react-paystack';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';
import { selectTotal } from '../../redux/basketSlice';

const publicKey = process.env.paystack_public_key;

function Paystack() {
  const router = useRouter();
  const { data: session } = useSession();
  const total = useSelector(selectTotal);

  const config: any = {
    reference: new Date().getTime().toString(),
    email: session?.user?.email,
    amount: total * 100,
    currency: 'GHS',
    channels: ['card', 'mobile_money', 'ussd', 'qr'],
    publicKey: publicKey,
    name: session?.user?.name,
  };

  const onSuccess = (response: any) => {
    console.log(response.reference);
    router.push(`/checkout/callback?reference=${response.reference}`);
  };

  const onClose = () => {
    console.log('closed');
    router.push('/checkout');
  };

  const initializePayment: any = usePaystackPayment(config);

  return (
    <button
      role="link"
      disabled={!session}
      onClick={() => {
        initializePayment(onSuccess, onClose);
      }}
      className={`basket mt-2 ${
        !session &&
        'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'
      }`}
    >
      {session ? 'Proceed to checkout' : 'Sign in to checkout'}
    </button>
  );
}

export default Paystack;
