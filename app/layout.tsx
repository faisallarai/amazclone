import '../styles/globals.css';

import React, { ReactNode } from 'react';
import { Inter } from '@next/font/google';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Home</title>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
