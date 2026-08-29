'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Shield, Mail } from 'lucide-react';
import Link from 'next/link';
import { MarketingLayout } from '@/components/layout';
import { sectionsMockPrivacy } from '@/mock/data.mock';
import { useI18n } from '@/hooks/useI18n';

export default function PrivacyPage() {
  const { t } = useI18n('privacy');
  return (
    <MarketingLayout>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-cyan-500/25">
            <Shield className="h-10 w-10 text-white" />
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
            {sectionsMockPrivacy?.map((section, sectionIndex) => {
              const IconComponent = section.icon;
              return (
                <div key={sectionIndex} className="scroll-mt-20" id={`section-${sectionIndex + 1}`}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/25">
                      <IconComponent className="h-6 w-6 text-white" />
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

                  {sectionIndex < sectionsMockPrivacy?.length - 1 && (
                    <div className="mt-8 border-b border-slate-200" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Cookie Policy */}
          <div
            id="cookie-policy"
            className="scroll-mt-24 mt-16 p-8 bg-slate-50 rounded-xl border border-slate-200"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Chính sách Cookie</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Chúng tôi sử dụng cookies và các công nghệ tương tự để cải thiện trải nghiệm của bạn,
              phân tích lưu lượng truy cập và cá nhân hóa nội dung.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Bạn có thể quản lý cookies thông qua cài đặt trình duyệt. Tuy nhiên, việc vô hiệu hóa
              cookies có thể ảnh hưởng đến một số tính năng của dịch vụ.
            </p>
          </div>

          {/* Data Retention */}
          <div className="mt-8 p-8 bg-slate-50 rounded-xl border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Lưu trữ dữ liệu</h2>
            <p className="text-slate-600 leading-relaxed">
              Chúng tôi lưu trữ thông tin cá nhân của bạn trong thời gian cần thiết để cung cấp dịch
              vụ hoặc theo yêu cầu của pháp luật. Khi không còn cần thiết, dữ liệu sẽ được xóa an
              toàn.
            </p>
          </div>

          {/* Updates */}
          <div className="mt-8 p-8 bg-slate-50 rounded-xl border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Thay đổi chính sách</h2>
            <p className="text-slate-600 leading-relaxed">
              TranX có thể cập nhật chính sách bảo mật này theo thời gian. Chúng tôi sẽ thông báo về
              các thay đổi quan trọng qua email hoặc thông báo trên ứng dụng. Vui lòng kiểm tra định
              kỳ để cập nhật thông tin mới nhất.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-3xl text-center">
          <Mail className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('contact_title')}</h2>
          <p className="text-slate-300 mb-8 leading-relaxed">
            {t('contact_description')}{' '}
            <a href="mailto:privacy@tranx.vn" className="text-cyan-400 hover:underline">
              privacy@tranx.vn
            </a>
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact">
              <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors">
                {t('contact_button')}
              </button>
            </Link>
            <Link href="/terms">
              <button className="px-6 py-3 border border-slate-600 text-slate-200 hover:bg-slate-800 rounded-lg font-medium transition-colors">
                {t('terms_button')}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
