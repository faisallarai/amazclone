import React from 'react';
import { getPayment } from '../../../utils/payment';
import Callback from './Callback';

interface ICallbackProps {
  searchParams: {
    reference: string;
  };
}

async function CallbackPage({ searchParams }: ICallbackProps) {
  const payment = await getPayment(searchParams.reference);

  return (
    <main className="bg-gray-100 h-screen">
      <Callback payment={payment} />
    </main>
  );
}

export default CallbackPage;
