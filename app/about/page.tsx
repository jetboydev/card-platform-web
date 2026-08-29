'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Eye, Award, Users, Rocket, Heart, Building2, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { MarketingLayout } from '@/components/layout';
import { milestonesMockAbout, teamMockAbout, valuesMockAbout } from '@/mock/data.mock';
import { useI18n } from '@/hooks/useI18n';

export default function AboutPage() {
  const { t } = useI18n('about');
  return (
    <MarketingLayout>
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="text-4xl md:text-6xl font-bold tracking-tight mb-6 flex flex-col items-center justify-center gap-3">
              <h1 className="text-slate-900 leading-tight">{t('header_title_line1')}</h1>
              <span className="bg-gradient-to-r from-cyan-500 to-sky-500 bg-clip-text text-transparent leading-tight pb-2">
                {t('header_title_line2')}
              </span>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t('header_description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <Card className="border-2 border-cyan-500/20 bg-gradient-to-br from-cyan-50 to-white">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/25">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-900">{t('mission_title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-700 text-base leading-relaxed">
                  {t('mission_description')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-sky-500/20 bg-gradient-to-br from-sky-50 to-white">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center mb-4 shadow-lg shadow-sky-500/25">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-900">{t('vision_title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-700 text-base leading-relaxed">
                  {t('vision_description')}
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-cyan-500 text-white">{t('values_badge')}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                {t('values_title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valuesMockAbout?.map((value) => {
                const IconComponent = value.icon;
                return (
                  <Card
                    key={value.title}
                    className="border-slate-200 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/25">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg text-slate-900">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-600">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-cyan-500 text-white">{t('milestones_badge')}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                {t('milestones_title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestonesMockAbout?.map((milestone, index) => (
                <Card
                  key={milestone.year}
                  className={`border-2 ${
                    milestone.highlight
                      ? 'border-cyan-500 bg-gradient-to-br from-cyan-50 to-white'
                      : 'border-slate-200'
                  }`}
                >
                  <CardHeader>
                    <div
                      className={`inline-flex px-4 py-2 rounded-full text-sm font-bold mb-3 ${
                        milestone.highlight
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {milestone.year}
                    </div>
                    <CardTitle className="text-xl text-slate-900">{milestone.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600">
                      {milestone.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-cyan-500 text-white">{t('team_badge')}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                {t('team_title')}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4">
                {t('team_description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMockAbout?.map((group) => {
                const IconComponent = group.icon;
                return (
                  <Card key={group.name} className="border-slate-200 text-center">
                    <CardHeader>
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-slate-600" />
                      </div>
                      <CardTitle className="text-lg text-slate-900">{group.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-600">
                        {group.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-center">
            <Award className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('cta_title')}</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">{t('cta_description')}</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 cursor-pointer">
                  {t('cta_contact')}
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-black hover:text-white cursor-pointer hover:bg-slate-800"
                >
                  {t('cta_view_products')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MarketingLayout>
  );
}
