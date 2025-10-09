"use client";
import Head from "next/head";
import ReduxProvider from "../../redux/provider";
import { Inter } from "next/font/google";
import "./globals.scss";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

import { Roboto } from "next/font/google";
import { Montserrat, Poppins } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

// Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

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
