import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import './globals.css'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  authors: {
    name: 'Claire Squire',
  },
  description: 'Search for the weather in any city',
  keywords: ['weather', 'search', 'local', 'city'],
  title: 'Weather for ducks?',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
