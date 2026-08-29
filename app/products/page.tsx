'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Download, Apple, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { MarketingLayout } from '@/components/layout';
import { translationFeaturesMockProducts, featuresMockProducts } from '@/mock/data.mock';
import { useI18n } from '@/hooks/useI18n';

export default function ProductsPage() {
  const { t } = useI18n('products');
  return (
    <MarketingLayout>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white border-b border-slate-200">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl md:text-6xl font-bold tracking-tight mb-6 flex flex-col items-center justify-center gap-3">
              <h1 className="text-slate-900 leading-tight">{t('hero_title_line1')}</h1>
              <span className="bg-gradient-to-r from-cyan-500 to-sky-500 bg-clip-text text-transparent leading-tight pb-2">
                {t('hero_title_line2')}
              </span>
            </div>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">{t('hero_description')}</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="#download">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600">
                  {t('hero_download')}
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  {t('hero_about_tranx')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="py-12 px-4 bg-white border-b border-slate-200">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuresMockProducts?.map((feature) => (
              <div key={feature.title} className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-5 w-5 text-cyan-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{feature.title}</div>
                  <div className="text-xs text-slate-600">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature pillars */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4">
              {t('features_section_badge')}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              {t('features_section_title')}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">{t('features_section_description')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {translationFeaturesMockProducts?.map((feature) => (
              <Card
                key={feature.id}
                id={feature.id}
                className="scroll-mt-24 border-slate-200 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/25">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{feature.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {feature.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle2 className="h-4 w-4 text-cyan-500 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section
        id="download"
        className="scroll-mt-24 py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800"
      >
        <div className="container mx-auto text-center">
          <Smartphone className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('download_title')}</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">{t('download_description')}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            {/* TODO: replace with verified App Store / Google Play listing links once published */}
            <Link href="/contact">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 cursor-pointer">
                <Download className="mr-2 h-5 w-5" />
                {t('download_google_play')}
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-black hover:text-white hover:bg-slate-800 cursor-pointer"
              >
                <Apple className="mr-2 h-5 w-5" />
                {t('download_app_store')}
              </Button>
            </Link>
          </div>
          <p className="text-sm text-slate-400 mt-6">{t('download_note')}</p>
        </div>
      </section>
    </MarketingLayout>
  );
}
