import type { Metadata } from "next";
import localFont from '@next/font/local'
import "@/styles/globals.css";


export const metadata: Metadata = {
  title: "Creon",
  description: "The world's first platform for tikenizing ai blockchain projects", 
};


const Satoshi = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi-Regular.woff2',
      weight: '400'
    },
    {
      path: '../public/fonts/Satoshi-Medium.woff2',
      weight: '500'
    },
    {
      path: '../public/fonts/Satoshi-Bold.woff2',
      weight: '700'
    }
  ],
  variable: '--font-satoshi'
})
const MonumentExtended = localFont({
  src: [
    {
      path: '../public/fonts/MonumentExtended-Regular.woff2',
      weight: '400'
    }
  ],
  variable: '--font-monumentExtended'
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${Satoshi.variable} ${MonumentExtended.variable} `} lang="en">
      <body  >{children}</body>
    </html>
  );
}
