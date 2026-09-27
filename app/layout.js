import { Lora, Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
});

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Harris — Software Engineer',
    template: '%s — Harris',
  },
  description:
    'Portfolio of Muhammad Fahish Haritsah Bimo (Harris), a software engineer building reliable web platforms, internal tools, and scalable digital systems.',
  keywords: [
    'Muhammad Fahish Haritsah Bimo',
    'Harris',
    'Software Engineer',
    'Full-stack Developer',
    'Jakarta',
    'Universitas Indonesia',
  ],
  authors: [{ name: 'Muhammad Fahish Haritsah Bimo' }],
  openGraph: {
    title: 'Harris — Software Engineer',
    description:
      'Software engineer working across product engineering, enterprise systems, and the modern web.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${lora.variable} overflow-x-hidden bg-[#f4f7fb] text-slate-950 antialiased transition-colors duration-300 dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
