import ReduxProvider from "../../redux/provider";
import "./globals.scss";
import SesProviders from "./components/providers/sesProviders";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export function Head() {
  return (
    <>
      <meta name="msvalidate.01" content="3EA19C82B86DB97301EBD7CF5695851F" />
    </>
  );
}

export default function RootLayout({
  children,
  params: { session, ...params },
}) {
  return (
    <html lang="en">
      <ReduxProvider>
        <SesProviders>
          <Head />
          <body className={roboto.className}>
            {children}
            <GoogleTagManager gtmId="GTM-M6M682HP" />
            <Script src="/script.js" strategy="lazyOnload" />
          </body>
        </SesProviders>
      </ReduxProvider>
    </html>
  );
}
