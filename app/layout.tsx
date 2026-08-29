import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Providers } from './providers';
import { SITE_URL } from '@/constants/app';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const TITLE = 'TranX - Ứng dụng dịch thuật đa ngôn ngữ';
const DESCRIPTION =
  'TranX là ứng dụng dịch thuật đa ngôn ngữ: dịch văn bản, giọng nói, hình ảnh và tài liệu tức thời với công nghệ AI, giúp bạn giao tiếp không giới hạn ngôn ngữ.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | TranX',
  },
  description: DESCRIPTION,
  keywords: [
    'TranX',
    'dịch thuật',
    'app dịch đa ngôn ngữ',
    'translation app',
    'dịch giọng nói',
    'dịch tài liệu',
    'AI translation',
  ],
  authors: [{ name: 'TranX' }],
  creator: 'TranX',
  publisher: 'TranX',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo_TranX.png',
    shortcut: '/logo_TranX.png',
    apple: '/logo_TranX.png',
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    alternateLocale: ['en_US'],
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'TranX',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
