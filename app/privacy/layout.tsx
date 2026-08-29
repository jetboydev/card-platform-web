import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chính sách bảo mật',
  description:
    'Chính sách bảo mật của TranX: dữ liệu chúng tôi thu thập, cách sử dụng và quyền của bạn.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
