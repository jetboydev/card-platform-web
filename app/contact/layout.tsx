import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Liên hệ',
  description: 'Liên hệ đội ngũ TranX qua email, hotline hoặc Zalo OA để được hỗ trợ và tư vấn.',
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
