"use client";
import Head from "next/head";
import ReduxProvider from "../../redux/provider";
import "./globals.scss";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
  params: { session, ...params },
}) {
  return (
    <html lang="en">
      <ReduxProvider>
        <SessionProvider session={session}>
          <body className={roboto.className}>
            {children}
            <GoogleTagManager gtmId="GTM-M6M682HP" />
            <Script src="/script.js" strategy="lazyOnload" />
          </body>
        </SessionProvider>
      </ReduxProvider>
    </html>
  );
}
