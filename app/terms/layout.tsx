import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Điều khoản dịch vụ',
  description: 'Điều khoản sử dụng dịch vụ và sản phẩm của TranX.',
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
