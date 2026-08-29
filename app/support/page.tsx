'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Search, MessageCircle, HelpCircle, Mail, Phone, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { MarketingLayout } from '@/components/layout';
import {
  faqsMockSupport,
  quickLinksMockSupport,
  supportCategoriesMockSupport,
} from '@/mock/data.mock';
import { useI18n } from '@/hooks/useI18n';

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card
      className={`border transition-all duration-200 overflow-hidden ${
        isOpen
          ? 'border-cyan-500 shadow-md shadow-cyan-500/10'
          : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer select-none group focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3">
          <HelpCircle
            className={`h-5 w-5 flex-shrink-0 mt-0.5 transition-colors ${
              isOpen ? 'text-cyan-500' : 'text-slate-400 group-hover:text-cyan-500'
            }`}
          />
          <span className="font-semibold text-slate-900 text-base md:text-lg group-hover:text-cyan-600 transition-colors">
            {question}
          </span>
        </div>
        <div
          className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            isOpen
              ? 'bg-cyan-50 text-cyan-600 rotate-180'
              : 'bg-slate-100 text-slate-500 group-hover:bg-cyan-50 group-hover:text-cyan-600'
          }`}
        >
          <ChevronDown className="h-5 w-5" />
        </div>
      </button>

      {isOpen && (
        <div className="px-5 pb-5 pt-0 animate-in fade-in-50 slide-in-from-top-1 duration-200">
          <div className="border-t border-slate-100 pt-4 pl-8">
            <p className="text-slate-600 leading-relaxed text-base">{answer}</p>
          </div>
        </div>
      )}
    </Card>
  );
}

export default function SupportPage() {
  const { t } = useI18n('support');
  return (
    <MarketingLayout>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl md:text-6xl font-bold tracking-tight mb-6 flex flex-col items-center justify-center gap-3">
              <h1 className="text-white leading-tight">{t('hero_title1')}</h1>
              <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent leading-tight pb-2">
                {t('hero_title2')}
              </span>
            </div>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">{t('hero_description')}</p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  placeholder={t('search_placeholder')}
                  className="pl-12 pr-4 py-6 text-lg bg-white border-slate-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16 px-4 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{t('categories_title')}</h2>
            <p className="text-slate-600">{t('categories_description')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategoriesMockSupport?.map((category) => (
              <a key={category.title} href={category.link}>
                <Card className="border-slate-200 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardHeader>
                    <div
                      className={`h-14 w-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <category.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-lg text-slate-900">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="scroll-mt-24 py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-cyan-500 text-white">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{t('faq_title')}</h2>
            <p className="text-slate-600">{t('faq_description')}</p>
          </div>

          <div className="space-y-8">
            {faqsMockSupport?.map((section) => (
              <div key={section.category}>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <div className="h-8 w-1 bg-cyan-500 rounded-full" />
                  {section.category}
                </h3>
                <div className="space-y-4">
                  {section.questions.map((faq, index) => (
                    <FaqItem key={index} question={faq.q} answer={faq.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{t('quicklinks_title')}</h2>
            <p className="text-slate-600">{t('quicklinks_description')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {quickLinksMockSupport?.map((link) => (
              <a key={link.title} href={link.link}>
                <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[182px]">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center mb-3">
                      <link.icon className="h-6 w-6 text-slate-600" />
                    </div>
                    <CardTitle className="text-lg text-slate-900">{link.title}</CardTitle>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <MessageCircle className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('cta_title')}</h2>
            <p className="text-slate-300 mb-8 leading-relaxed">{t('cta_description')}</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 cursor-pointer">
                  <Mail className="mr-2 h-5 w-5" />
                  {t('cta_email_button')}
                </Button>
              </Link>
              <a href="tel:1900xxxx">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-black hover:text-white hover:bg-slate-800 cursor-pointer"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {t('cta_phone_button')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
