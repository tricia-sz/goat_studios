import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Cabrita's Studio",
  description: 'Site of games, movies and series',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <link rel='icon' href='/favicon.png' />
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
