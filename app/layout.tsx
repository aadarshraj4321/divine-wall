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













// // app/layout.tsx
// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Head from 'next/head';
// import Script from 'next/script'; // Import the next/script component

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
//   description:
//     "Explore a vast collection of stunning wallpapers featuring Hindu gods and goddesses like Lord Ram, Krishna, Shiva, Ganesha, Mahakaal, and more.",
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

//         {/* Google AdSense Script - Loaded After Interactive */}
//         <Script
//           strategy="afterInteractive" // Load after the page is interactive
//           async
//           src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9979980575915777"
//           crossOrigin="anonymous" // Correct attribute name
//         ></Script>

//         {children}
//       </body>
//     </html>
//   );
// }









// // app/layout.tsx
// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Head from 'next/head';
// import Script from 'next/script';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "DivineWall - Download 4k Hindu God Wallpapers | 4K, 2K & Mobile",
//   description: "Download beautiful 4k wallpapers of Hindu Gods - Lord Ram, Krishna, Hanuman, Shiva, Durga, Kali, Ganesha, and more. High-quality 4K, 2K wallpapers for desktop, mobile & temple decoration.",
//   keywords: [
//     "hindu god wallpapers",
//     "lord ram wallpaper",
//     "krishna wallpaper",
//     "hanuman wallpaper",
//     "shiva wallpaper",
//     "durga wallpaper",
//     "kali wallpaper",
//     "ganesha wallpaper",
//     "4k wallpapers",
//     "2k wallpapers",
//     "phone wallpapers",
//     "mandir wallpaper",
//     "temple wallpaper",
//     "spiritual wallpapers",
//     "hindu mythology wallpapers",
//     "mahakaal wallpaper",
//     "divine wallpapers"
//   ],
//   applicationName: 'DivineWall',
//   authors: [{ name: 'DivineWall' }],
//   creator: 'DivineWall',
//   publisher: 'DivineWall',
//   formatDetection: {
//     telephone: false,
//     address: false,
//     email: false,
//   },
//   metadataBase: new URL('https://www.divinewall.in/'),
//   openGraph: {
//     title: 'DivineWall - 4k Hindu God Wallpapers',
//     description: 'Download beautiful 4k wallpapers of Hindu Gods - Lord Ram, Krishna, Hanuman, Shiva, Durga, Kali, Ganesha. 4K & 2K quality for all devices.',
//     url: 'https://www.divinewall.in/',
//     siteName: 'DivineWall',
//     images: [
//       {
//         url: '/logo.png',
//         width: 1200,
//         height: 630,
//         alt: 'DivineWall Logo',
//       }
//     ],
//     locale: 'en_US',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'DivineWall - 4k Hindu God Wallpapers',
//     description: 'Download beautiful 4k wallpapers of Hindu Gods - Lord Ram, Krishna, Hanuman, Shiva, Durga, Kali, Ganesha. 4K & 2K quality.',
//     images: ['/logo.png'],
//     creator: '@divinewall',
//   },
//   viewport: {
//     width: 'device-width',
//     initialScale: 1,
//     maximumScale: 1,
//   },
//   robots: {
//     index: true,
//     follow: true,
//     nocache: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   category: 'Wallpapers',
//   classification: 'Hindu Spiritual Wallpapers',
//   icons: {
//     icon: [
//       { url: '/favicon.ico' },
//       { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
//       { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
//     ],
//     apple: [
//       { url: '/apple-touch-icon.png' },
//     ],
//     other: [
//       { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' }
//     ],
//   },
//   manifest: '/site.webmanifest',
//   alternates: {
//     canonical: 'https://www.divinewall.in/',
//   },
//   verification: {
//     google: 'your-google-verification-code', // Add your Google verification code
//   },
//   other: {
//     'msapplication-TileColor': '#da532c',
//     'theme-color': '#ffffff',
//   }
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <Head>
//           <link rel="icon" href="/favicon.ico" />
//           <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
//           <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
//           <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
//           <link rel="manifest" href="/site.webmanifest" />
//         </Head>

//         <Script
//           strategy="afterInteractive"
//           async
//           src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9979980575915777"
//           crossOrigin="anonymous"
//         />

//         {children}
//       </body>
//     </html>
//   );
// }















// // app/layout.tsx
// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Head from 'next/head';
// import Script from 'next/script';
// import { Analytics } from '@vercel/analytics/react';  // Import Vercel Analytics

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "DivineWall - Download 4k Hindu God Wallpapers | 4K, 2K & Mobile",
//   description: "Download beautiful 4k wallpapers of Hindu Gods - Lord Ram, Krishna, Hanuman, Shiva, Durga, Kali, Ganesha, and more. High-quality 4K, 2K wallpapers for desktop, mobile & temple decoration.",
//   keywords: [
//     "hindu god wallpapers",
//     "lord ram wallpaper",
//     "krishna wallpaper",
//     "hanuman wallpaper",
//     "shiva wallpaper",
//     "durga wallpaper",
//     "kali wallpaper",
//     "ganesha wallpaper",
//     "4k wallpapers",
//     "2k wallpapers",
//     "phone wallpapers",
//     "mandir wallpaper",
//     "temple wallpaper",
//     "spiritual wallpapers",
//     "hindu mythology wallpapers",
//     "mahakaal wallpaper",
//     "divine wallpapers"
//   ],
//   applicationName: 'DivineWall',
//   authors: [{ name: 'DivineWall' }],
//   creator: 'DivineWall',
//   publisher: 'DivineWall',
//   formatDetection: {
//     telephone: false,
//     address: false,
//     email: false,
//   },
//   metadataBase: new URL('https://www.divinewall.in/'),
//   openGraph: {
//     title: 'DivineWall - 4k Hindu God Wallpapers',
//     description: 'Download beautiful 4k wallpapers of Hindu Gods - Lord Ram, Krishna, Hanuman, Shiva, Durga, Kali, Ganesha. 4K & 2K quality for all devices.',
//     url: 'https://www.divinewall.in/',
//     siteName: 'DivineWall',
//     images: [
//       {
//         url: '/logo.png',
//         width: 1200,
//         height: 630,
//         alt: 'DivineWall Logo',
//       }
//     ],
//     locale: 'en_US',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'DivineWall - 4k Hindu God Wallpapers',
//     description: 'Download beautiful 4k wallpapers of Hindu Gods - Lord Ram, Krishna, Hanuman, Shiva, Durga, Kali, Ganesha. 4K & 2K quality.',
//     images: ['/logo.png'],
//     creator: '@divinewall',
//   },
//   viewport: {
//     width: 'device-width',
//     initialScale: 1,
//     maximumScale: 1,
//   },
//   robots: {
//     index: true,
//     follow: true,
//     nocache: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   category: 'Wallpapers',
//   classification: 'Hindu Spiritual Wallpapers',
//   icons: {
//     icon: [
//       { url: '/favicon.ico' },
//       { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
//       { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
//     ],
//     apple: [
//       { url: '/apple-touch-icon.png' },
//     ],
//     other: [
//       { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' }
//     ],
//   },
//   manifest: '/site.webmanifest',
//   alternates: {
//     canonical: 'https://www.divinewall.in/',
//   },
//   verification: {
//     google: 'your-google-verification-code', // Add your Google verification code
//   },
//   other: {
//     'msapplication-TileColor': '#da532c',
//     'theme-color': '#ffffff',
//   }
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <Head>
//           <link rel="icon" href="/favicon.ico" />
//           <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
//           <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
//           <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
//           <link rel="manifest" href="/site.webmanifest" />
//         </Head>

//         <Script
//           strategy="afterInteractive"
//           async
//           src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9979980575915777"
//           crossOrigin="anonymous"
//         />

//         {/* Render children (pages/content) */}
//         {children}

//         {/* Vercel Analytics component */}
//         <Analytics />
//       </body>
//     </html>
//   );
// }

















// // app/layout.tsx
// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Head from 'next/head';
// import Script from 'next/script';
// import { Analytics } from '@vercel/analytics/react';  // Import Vercel Analytics

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "DivineWall - Download 4k Hindu God Wallpapers | 4K, 2K & Mobile",
//   description: "Download beautiful 4k wallpapers of Hindu Gods - Lord Ram, Krishna, Hanuman, Shiva, Durga, Kali, Ganesha, and more. High-quality 4K, 2K wallpapers for desktop, mobile & temple decoration.",
//   keywords: [
//     "hindu god wallpapers",
//     "lord ram wallpaper",
//     "krishna wallpaper",
//     "hanuman wallpaper",
//     "shiva wallpaper",
//     "durga wallpaper",
//     "kali wallpaper",
//     "ganesha wallpaper",
//     "4k wallpapers",
//     "2k wallpapers",
//     "phone wallpapers",
//     "mandir wallpaper",
//     "temple wallpaper",
//     "spiritual wallpapers",
//     "hindu mythology wallpapers",
//     "mahakaal wallpaper",
//     "divine wallpapers"
//   ],
//   applicationName: 'DivineWall',
//   authors: [{ name: 'DivineWall' }],
//   creator: 'DivineWall',
//   publisher: 'DivineWall',
//   formatDetection: { telephone: false, address: false, email: false },
//   metadataBase: new URL('https://www.divinewall.in/'),
//   openGraph: {
//     title: 'DivineWall - 4k Hindu God Wallpapers',
//     description: 'Download beautiful 4k wallpapers of Hindu Gods - Lord Ram, Krishna, Hanuman, Shiva, Durga, Kali, Ganesha. 4K & 2K quality for all devices.',
//     url: 'https://www.divinewall.in/',
//     siteName: 'DivineWall',
//     images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'DivineWall Logo' }],
//     locale: 'en_US',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'DivineWall - 4k Hindu God Wallpapers',
//     description: 'Download beautiful 4k wallpapers of Hindu Gods - Lord Ram, Krishna, Hanuman, Shiva, Durga, Kali, Ganesha. 4K & 2K quality.',
//     images: ['/logo.png'],
//     creator: '@divinewall',
//   },
//   viewport: {
//     width: 'device-width',
//     initialScale: 1,
//     maximumScale: 1,
//   },
//   robots: {
//     index: true,
//     follow: true,
//     nocache: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   category: 'Wallpapers',
//   classification: 'Hindu Spiritual Wallpapers',
//   icons: {
//     icon: [
//       { url: '/favicon.ico' },
//       { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
//       { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
//     ],
//     apple: [
//       { url: '/apple-touch-icon.png' },
//     ],
//     other: [
//       { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' }
//     ],
//   },
//   manifest: '/site.webmanifest',
//   alternates: {
//     canonical: 'https://www.divinewall.in/',
//   },
//   verification: {
//     google: 'your-google-verification-code', // Add your Google verification code
//   },
//   other: {
//     'msapplication-TileColor': '#da532c',
//     'theme-color': '#ffffff',
//   }
// };

// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode; }>) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <Head>
//           {/* Meta tags and other head elements */}
//           <link rel="icon" href="/favicon.ico" />
//           <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
//           <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
//           <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
//           <link rel="manifest" href="/site.webmanifest" />
          
//           {/* Google AdSense Script (placed inside <head>) */}
//           <script 
//             async 
//             src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9979980575915777"
//             crossOrigin="anonymous"
//           ></script>
//         </Head>

//         <Script
//           strategy="afterInteractive"
//           async
//           src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9979980575915777"
//           crossOrigin="anonymous"
//         />
        
//         {/* Render the page content (children) */}
//         {children}

//         {/* Vercel Analytics component (optional) */}
//         <Analytics />
//       </body>
//     </html>
//   );
// }























// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';  // Import Vercel Analytics

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DivineWall - Download 4k Hindu God Wallpapers | 4K, 2K & Mobile",
  description: "Download beautiful 4k wallpapers of Hindu Gods - Lord Ram, Krishna, Hanuman, Shiva, Durga, Kali, Ganesha, and more. High-quality 4K, 2K wallpapers for desktop, mobile & temple decoration.",
  keywords: [
    "hindu god wallpapers",
    "lord ram wallpaper",
    "krishna wallpaper",
    "hanuman wallpaper",
    "shiva wallpaper",
    "durga wallpaper",
    "kali wallpaper",
    "ganesha wallpaper",
    "4k wallpapers",
    "2k wallpapers",
    "phone wallpapers",
    "mandir wallpaper",
    "temple wallpaper",
    "spiritual wallpapers",
    "hindu mythology wallpapers",
    "mahakaal wallpaper",
    "divine wallpapers"
  ],
  applicationName: 'DivineWall',
  authors: [{ name: 'DivineWall' }],
  creator: 'DivineWall',
  publisher: 'DivineWall',
  formatDetection: { telephone: false, address: false, email: false },
  metadataBase: new URL('https://www.divinewall.in/'),
  openGraph: {
    title: 'DivineWall - 4k Hindu God Wallpapers',
    description: 'Download beautiful 4k wallpapers of Hindu Gods - Lord Ram, Krishna, Hanuman, Shiva, Durga, Kali, Ganesha. 4K & 2K quality for all devices.',
    url: 'https://www.divinewall.in/',
    siteName: 'DivineWall',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'DivineWall Logo' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DivineWall - 4k Hindu God Wallpapers',
    description: 'Download beautiful 4k wallpapers of Hindu Gods - Lord Ram, Krishna, Hanuman, Shiva, Durga, Kali, Ganesha. 4K & 2K quality.',
    images: ['/logo.png'],
    creator: '@divinewall',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Wallpapers',
  classification: 'Hindu Spiritual Wallpapers',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' }
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://www.divinewall.in/',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  },
  other: {
    'msapplication-TileColor': '#da532c',
    'theme-color': '#ffffff',
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Head>
          {/* Meta tags and other head elements */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          
          {/* Google AdSense Script (placed inside <head>) */}
          <script 
            async 
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9979980575915777"
            crossOrigin="anonymous"
          ></script>
        </Head>

        <Script
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9979980575915777"
          crossOrigin="anonymous"
        />
        
        {/* Render the page content (children) */}
        {children}

        {/* Vercel Analytics component (optional) */}
        <Analytics />
      </body>
    </html>
  );
}
