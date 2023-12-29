'use client';

import ReduxProvider from '../../redux/provider';
import { Inter } from 'next/font/google';
import './globals.scss';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  params: { session, ...params },
}) {
  return (
    <html lang='en'>
      <ReduxProvider>
        <SessionProvider session={session}>
          <body className={inter.className}>{children}</body>
        </SessionProvider>
      </ReduxProvider>
    </html>
  );
}
