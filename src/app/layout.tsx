import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Input } from '@/components/Input';
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
    <html lang='pt-br' className='bg-slate-950'>
      <link rel='icon' href='/favicon.png' />
      <body className={inter.className}>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
