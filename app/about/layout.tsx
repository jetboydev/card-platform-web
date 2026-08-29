import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Về chúng tôi',
  description:
    'TranX là công ty công nghệ phát triển ứng dụng dịch thuật đa ngôn ngữ, giúp con người giao tiếp không rào cản ngôn ngữ bằng công nghệ AI.',
  alternates: { canonical: '/about' },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
