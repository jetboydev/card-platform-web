'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Clock } from 'lucide-react';
import Link from 'next/link';
import { MarketingLayout } from '@/components/layout';
import {
  contactMethodsMockContact,
  officeHoursMockContact,
  socialLinksMockContact,
} from '@/mock/data.mock';
import { useI18n } from '@/hooks/useI18n';

export default function ContactPage() {
  const { t } = useI18n('contact');
  return (
    <MarketingLayout>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-cyan-50 to-white border-b border-slate-200">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl md:text-6xl font-bold tracking-tight mb-6 flex flex-col items-center justify-center gap-3">
              <h1 className="text-slate-900 leading-tight">{t('hero_title_line1')}</h1>
              <span className="bg-gradient-to-r from-cyan-500 to-sky-500 bg-clip-text text-transparent leading-tight pb-2">
                {t('hero_title_line2')}
              </span>
            </div>
            <p className="text-xl text-slate-600 leading-relaxed">{t('hero_description')}</p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethodsMockContact?.map((method) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={method.title}
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : undefined}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  <Card className="border-slate-200 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 h-full">
                    <CardHeader>
                      <div
                        className={`h-14 w-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 shadow-lg`}
                      >
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-lg text-slate-900">{method.title}</CardTitle>
                      <CardDescription className="text-sm">{method.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold text-slate-900">{method.value}</p>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">{t('form_title')}</h2>
                <p className="text-slate-600">{t('form_description')}</p>
              </div>

              <Card className="border-slate-200 shadow-xl">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          {t('form_name_label')} <span className="text-red-500">*</span>
                        </label>
                        <Input placeholder={t('form_name_placeholder')} required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          {t('form_phone_label')} <span className="text-red-500">*</span>
                        </label>
                        <Input type="tel" placeholder={t('form_phone_placeholder')} required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {t('form_email_label')} <span className="text-red-500">*</span>
                      </label>
                      <Input type="email" placeholder={t('form_email_placeholder')} required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {t('form_company_label')}
                      </label>
                      <Input placeholder={t('form_company_placeholder')} />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {t('form_subject_label')} <span className="text-red-500">*</span>
                      </label>
                      <Input placeholder={t('form_subject_placeholder')} required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {t('form_message_label')} <span className="text-red-500">*</span>
                      </label>
                      <Textarea placeholder={t('form_message_placeholder')} rows={6} required />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-cyan-500 hover:bg-cyan-600"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {t('form_submit')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="space-y-6">
              {/* Office Hours */}
              <Card className="border-slate-200">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/25">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">
                    {t('office_hours_title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHoursMockContact?.map((schedule) => (
                      <div
                        key={schedule.day}
                        className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0"
                      >
                        <span className="font-medium text-slate-900">{schedule.day}</span>
                        <span className="text-slate-600">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-cyan-50 rounded-lg border border-cyan-100">
                    <p className="text-sm text-cyan-900 font-medium">{t('office_hours_note')}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">{t('social_title')}</CardTitle>
                  <CardDescription>{t('social_description')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    {socialLinksMockContact?.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-12 w-12 rounded-lg bg-slate-100 hover:bg-cyan-500 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 group"
                          aria-label={social.name}
                        >
                          <IconComponent className="h-5 w-5 text-slate-600 group-hover:text-white" />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="border-slate-200 overflow-hidden shadow-lg">
                <div className="relative w-full h-[350px]">
                  <iframe
                    title="LAZTAR Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.39763784119!2d106.72226857573641!3d10.879607489275727!2m3!10f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d984bc3ce713%3A0x9f7b714176390670!2zQ8O0bmcgdHkgVE5ISCBMQVpUQVIgLSBDw7RuZyBuZ2jhu4cgUGjhuqduIG3hu4Ft!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Card>

              {/* Quick Info */}
              <Card className="border-2 border-cyan-200 bg-gradient-to-br from-cyan-50 to-white">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-2">{t('quick_support_title')}</h3>
                  <p className="text-sm text-slate-600 mb-4">{t('quick_support_description')}</p>
                  <Link href="/support">
                    <Button variant="outline" className="w-full">
                      {t('quick_support_button')}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
