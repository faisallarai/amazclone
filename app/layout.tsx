import '../styles/globals.css';

import React, { ReactNode } from 'react';
import { Inter } from '@next/font/google';
import Providers from './providers';
import Header from './Header';
import { unstable_getServerSession } from 'next-auth';

const inter = Inter({ subsets: ['latin'] });

async function getSession() {
  const session = await unstable_getServerSession();
  return session;
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getSession();
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Home</title>
      </head>
      <body>
        <Providers>
          <Header session={session} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
