"use client";
import Head from "next/head";
import ReduxProvider from "../../redux/provider";
import { Inter } from "next/font/google";
import "./globals.scss";
import { SessionProvider } from "next-auth/react";
import { Helmet } from "react-helmet-async";
import Script from "next/script";
import { useEffect, useState } from "react";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params: { session, ...params },
}) {
  const [ggg, setGgg] = useState(null);

  useEffect(() => {
//     (function(w,d,s,l,i){w[l]=w[l]||[];
//       w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-M6M682HP');
    // console.log(window.dataLayer);
  }, []);
  return (
    <html lang="en">
      <Head>
        <title>Hello</title>
        {/* <!-- Event snippet for Заявка conversion page */}
        {/* In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. --> */}
        {/* <Helmet> */}
        {/* {process.env.NODE_ENV === "production" && ( */}
        {true && (
          <>
          {/* {<script>(function(w,d,s,l,i){w[l]=w[l]||[];
          w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M6M682HP');</script>} */}
            {/* <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=AW-16508963435"
            ></script>{" "} */}
            {/* <script>
              {" "}
              window.dataLayer = window.dataLayer || []; function gtag()
              {window.dataLayer.push(arguments)} gtag('js', new Date());
              gtag('config', 'AW-16508963435'); console.log(gtag)
            </script> */}
            {/* <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=AW-16508963435"
            ></script>
            <script>
              window.dataLayer = window.dataLayer || []; function gtag()
              {dataLayer.push(arguments)}
              gtag('js', new Date()); gtag('config', 'AW-16508963435');
            </script> */}
          </>
        )}
        {/* <script>
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'AW-16508963435');
          </script> */}
        {/* </Helmet> */}
      </Head>
      {/* <div>Your React components</div> */}
      <ReduxProvider>
        <SessionProvider session={session}>
          <body className={inter.className}>
            {children}
            <GoogleTagManager gtmId="GTM-M6M682HP" />
            <Script
              src="/script.js"
              strategy="lazyOnload"
              onLoad={() =>
                console.log(
                  `script loaded correctly, window.FB has been populated`
                )
              }
            />
           
{/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M6M682HP"
height="0" width="0" style={{display:none, visibility:hidden}}></iframe></noscript> */}

          </body>
        </SessionProvider>
      </ReduxProvider>
    </html>
  );
}
