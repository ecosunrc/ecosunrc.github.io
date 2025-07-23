import type { Metadata } from 'next'
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ECOS - UNRC',
  description: 'ECOS - UNRC es la revista digital de la Universidad Nacional de Río Cuarto, Argentina. Aquí encontrarás artículos, noticias y recursos sobre ciencia, tecnología y cultura.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
