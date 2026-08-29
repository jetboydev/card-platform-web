import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hỗ trợ',
  description:
    'Trung tâm hỗ trợ TranX: câu hỏi thường gặp, tài liệu API, hướng dẫn sử dụng và các kênh liên hệ hỗ trợ.',
  alternates: { canonical: '/support' },
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return children;
}
