'use client';

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
      <SessionProvider session={session}>
        <body className={inter.className}>{children}</body>
      </SessionProvider>
    </html>
  );
}
