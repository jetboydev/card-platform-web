'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Mail } from 'lucide-react';
import Link from 'next/link';
import { MarketingLayout } from '@/components/layout';
import { sectionsMockTerms } from '@/mock/data.mock';
import { useI18n } from '@/hooks/useI18n';

export default function TermsPage() {
  const { t } = useI18n('terms');
  return (
    <MarketingLayout>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-cyan-500/25">
            <FileText className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">{t('hero_title')}</h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-4">{t('hero_description')}</p>
          <p className="text-sm text-slate-400">
            {t('hero_effective_date')} | {t('hero_last_updated')}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 bg-cyan-50 border-b border-cyan-100">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-cyan-200">
            <CardContent className="p-8">
              <p className="text-slate-700 leading-relaxed mb-4">{t('intro_paragraph1')}</p>
              <p className="text-slate-700 leading-relaxed">{t('intro_paragraph2')}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {sectionsMockTerms?.map((section, sectionIndex) => (
              <div key={sectionIndex} className="scroll-mt-20" id={`section-${sectionIndex + 1}`}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/25">
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
                  </div>
                </div>

                <div className="space-y-6 ml-16">
                  {section.content.map((subsection, subIndex) => (
                    <div key={subIndex}>
                      <h3 className="font-semibold text-slate-900 mb-3">{subsection.subtitle}</h3>
                      <ul className="space-y-2">
                        {subsection.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                            <span className="text-slate-600 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {sectionIndex < sectionsMockTerms?.length - 1 && (
                  <div className="mt-8 border-b border-slate-200" />
                )}
              </div>
            ))}
          </div>

          {/* Liability */}
          <div className="mt-16 p-8 bg-slate-50 rounded-xl border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Giới hạn trách nhiệm</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              TranX cung cấp dịch vụ "nguyên trạng" và không đảm bảo hoạt động liên tục, không lỗi.
              Chúng tôi không chịu trách nhiệm về:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                <span className="text-slate-600">Mất mát dữ liệu hoặc lợi nhuận</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                <span className="text-slate-600">Gián đoạn dịch vụ do lỗi kỹ thuật, bảo trì</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                <span className="text-slate-600">Hành vi của người dùng khác</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                <span className="text-slate-600">Thiệt hại gián tiếp hoặc ngẫu nhiên</span>
              </li>
            </ul>
          </div>

          {/* Governing Law */}
          <div className="mt-8 p-8 bg-slate-50 rounded-xl border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Luật áp dụng</h2>
            <p className="text-slate-600 leading-relaxed">
              Điều khoản này được điều chỉnh bởi pháp luật Việt Nam. Mọi tranh chấp phát sinh sẽ
              được giải quyết tại Tòa án có thẩm quyền tại TP. Hồ Chí Minh, Việt Nam.
            </p>
          </div>

          {/* Changes */}
          <div className="mt-8 p-8 bg-slate-50 rounded-xl border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('changes_title')}</h2>
            <p className="text-slate-600 leading-relaxed">{t('changes_content')}</p>
          </div>

          {/* Contact */}
          <div className="mt-8 p-8 bg-slate-50 rounded-xl border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('contact_title')}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{t('contact_intro')}</p>
            <div className="space-y-2">
              <p className="text-slate-700">
                <strong>{t('contact_email_label')}</strong>{' '}
                <a href="mailto:legal@tranx.vn" className="text-cyan-600 hover:underline">
                  legal@tranx.vn
                </a>
              </p>
              <p className="text-slate-700">
                <strong>{t('contact_hotline_label')}</strong> 1900 xxxx
              </p>
              <p className="text-slate-700">
                <strong>{t('contact_address_label')}</strong> TP. Hồ Chí Minh, Việt Nam
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-3xl text-center">
          <Mail className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('cta_title')}</h2>
          <p className="text-slate-300 mb-8 leading-relaxed">{t('cta_description')}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact">
              <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors">
                {t('cta_contact_button')}
              </button>
            </Link>
            <Link href="/privacy">
              <button className="px-6 py-3 border border-slate-600 text-slate-200 hover:bg-slate-800 rounded-lg font-medium transition-colors">
                {t('cta_privacy_button')}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
