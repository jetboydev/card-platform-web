import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sản phẩm',
  description:
    'Khám phá TranX: dịch văn bản, giọng nói, hình ảnh và tài liệu tức thời với AI, cùng Translation API để tích hợp vào ứng dụng của bạn.',
  alternates: { canonical: '/products' },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
