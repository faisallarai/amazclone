'use client';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import { Toaster } from 'react-hot-toast';
import { session } from '../utils/session';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Toaster />
        {children}
      </Provider>
    </SessionProvider>
  );
}
