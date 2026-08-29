'use client';
import { Button } from '@/components/ui/button';
import { ButtonWithIcon } from '@/components/ui/button-with-icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { MarketingLayout } from '@/components/layout';
import StatsSection from '@/features/landingpage/home/components/StatsSection';
import { featuresMockHome, translationFeaturesMockProducts } from '@/mock/data.mock';
import { useI18n } from '@/hooks/useI18n';

export default function HomePage() {
  const { t } = useI18n();
  return (
    <MarketingLayout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,transparent,black)]" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl md:text-7xl font-bold tracking-tight mb-6 flex flex-col items-center justify-center gap-3">
              <h1 className="text-white leading-tight">{t('home:hero_title_line1')}</h1>
              <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent leading-tight pb-2">
                {t('home:hero_title_line2')}
              </span>
            </div>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('home:hero_description')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/products">
                <ButtonWithIcon
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="cursor-pointer bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/25"
                >
                  {t('home:hero_explore_apps')}
                </ButtonWithIcon>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="cursor-pointer border-slate-600 text-black hover:bg-slate-800 hover:text-white"
                >
                  {t('home:hero_contact_consultant')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              {t('home:features_badge')}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
              {t('home:features_title')}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('home:features_description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuresMockHome?.map((feature) => (
              <Card
                key={feature.title}
                className="border-slate-200 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/25">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-slate-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              {t('home:products_badge')}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
              {t('home:products_title')}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('home:products_description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {translationFeaturesMockProducts?.map((feature) => (
              <Card
                key={feature.id}
                className="border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/25">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-slate-900">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={`/products#${feature.id}`}>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-cyan-500 hover:bg-cyan-500 group-hover:text-white hover:text-white cursor-pointer transition-all duration-300"
                    >
                      {t('home:products_view_detail')}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <ButtonWithIcon
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="border border-cyan-500 cursor-pointer bg-white hover:bg-cyan-500 text-black hover:text-white shadow-lg shadow-cyan-500/25"
              >
                {t('home:products_view_all')}
              </ButtonWithIcon>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,transparent,black)]" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <TrendingUp className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
              {t('home:cta_title')}
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {t('home:cta_description')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact">
                <ButtonWithIcon
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="cursor-pointer bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/25"
                >
                  {t('home:cta_contact_now')}
                </ButtonWithIcon>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-black hover:bg-slate-800 hover:text-white cursor-pointer"
                >
                  {t('home:cta_learn_more')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
