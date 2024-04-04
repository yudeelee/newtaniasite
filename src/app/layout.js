'use client';
import Head from 'next/head';
import ReduxProvider from '../../redux/provider';
import { Inter } from 'next/font/google';
import './globals.scss';
import { SessionProvider } from 'next-auth/react';
import { Helmet } from 'react-helmet-async';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  params: { session, ...params },
}) {
  return (
    <html lang='en'>
      <Head>
        <title>Hello</title>
        {/* <Helmet> */}
        {process.env.NODE_ENV === 'production' && (
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=AW-16508963435'
          ></script>
        )}
        {/* <script>
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'AW-16508963435');
          </script> */}
        {/* </Helmet> */}
      </Head>
      <div>{/* Your React components */}</div>
      <ReduxProvider>
        <SessionProvider session={session}>
          <body className={inter.className}>{children}</body>
        </SessionProvider>
      </ReduxProvider>
    </html>
  );
}
