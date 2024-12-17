// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Head from 'next/head';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


// export const metadata: Metadata = {
//   title: "DivineWall",
//   description: "Explore a vast collection of stunning wallpapers featuring Hindu gods and goddesses like Lord Ram, Krishna, Shiva, Ganesha, Mahakaal, and more.",
//   icons: {
//     icon: "/logo.png",  // Default favicon
//   },
// };


// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {/* Head section for additional link tags */}
//         <Head>
//           {/* Favicon links for different sizes */}
//           <link rel="icon" href="/favicon.ico" />
//           <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
//           <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          
//           {/* Apple Touch Icon */}
//           <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          
//           {/* Web App Manifest */}
//           <link rel="manifest" href="/site.webmanifest" />
//         </Head>

//         {children}
//       </body>
//     </html>
//   );
// }













// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import Script from 'next/script'; // Import the next/script component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DivineWall",
  description:
    "Explore a vast collection of stunning wallpapers featuring Hindu gods and goddesses like Lord Ram, Krishna, Shiva, Ganesha, Mahakaal, and more.",
  icons: {
    icon: "/logo.png",  // Default favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Head section for additional link tags */}
        <Head>
          {/* Favicon links for different sizes */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

          {/* Apple Touch Icon */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

          {/* Web App Manifest */}
          <link rel="manifest" href="/site.webmanifest" />
        </Head>

        {/* Google AdSense Script - Loaded After Interactive */}
        <Script
          strategy="afterInteractive" // Load after the page is interactive
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9979980575915777"
          crossOrigin="anonymous" // Correct attribute name
        ></Script>

        {children}
      </body>
    </html>
  );
}
