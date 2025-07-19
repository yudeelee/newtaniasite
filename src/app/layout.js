"use client";
import Head from "next/head";
import ReduxProvider from "../../redux/provider";
import { Inter } from "next/font/google";
import "./globals.scss";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params: { session, ...params },
}) {
  return (
    <html lang="en">
      <Head>
        <title>Hello</title>
      </Head>
      <ReduxProvider>
        <SessionProvider session={session}>
          <body className={inter.className}>
            {children}
            <GoogleTagManager gtmId="GTM-M6M682HP" />
            <Script src="/script.js" strategy="lazyOnload" />
          </body>
        </SessionProvider>
      </ReduxProvider>
    </html>
  );
}
