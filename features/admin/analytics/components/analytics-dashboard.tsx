'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';

const statsConfig = [
  {
    key: 'totalViews',
    value: '128.5K',
    change: '+12.5%',
    trend: 'up',
    icon: Eye,
  },
  {
    key: 'uniqueVisitors',
    value: '45.2K',
    change: '+8.2%',
    trend: 'up',
    icon: Users,
  },
  {
    key: 'avgSession',
    value: '4m 32s',
    change: '-2.1%',
    trend: 'down',
    icon: Clock,
  },
  {
    key: 'bounceRate',
    value: '32.1%',
    change: '+1.5%',
    trend: 'down',
    icon: TrendingDown,
  },
];

const topPages = [
  { page: '/home', views: '45.2K', visitors: '32.1K', bounceRate: '28%' },
  { page: '/products', views: '38.7K', visitors: '28.4K', bounceRate: '35%' },
  { page: '/about', views: '21.3K', visitors: '18.9K', bounceRate: '22%' },
  { page: '/contact', views: '15.8K', visitors: '12.2K', bounceRate: '41%' },
  { page: '/blog/post-1', views: '12.4K', visitors: '9.8K', bounceRate: '38%' },
];

const trafficSourcesConfig = [
  { key: 'Direct', value: 42, color: 'bg-blue-500' },
  { key: 'Search', value: 28, color: 'bg-green-500' },
  { key: 'Social', value: 18, color: 'bg-purple-500' },
  { key: 'Referral', value: 12, color: 'bg-orange-500' },
];

const dayKeys = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export function AnalyticsDashboard() {
  const { t } = useI18n('analytics');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
        <p className="text-muted-foreground">{t('subtitle')}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statsConfig.map((stat) => (
          <Card key={stat.key} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t(`stats.${stat.key}`)}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center gap-1 text-xs">
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="h-3 w-3 text-green-500" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-red-500" />
                )}
                <span className={stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                  {stat.change}
                </span>
                <span className="text-muted-foreground">{t('stats.fromLastMonth')}</span>
              </div>
            </CardContent>
            <div
              className={`absolute bottom-0 left-0 right-0 h-1 ${stat.trend === 'up' ? 'bg-green-500' : 'bg-red-500'}`}
            />
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">{t('tabs.overview')}</TabsTrigger>
          <TabsTrigger value="pages">{t('tabs.topPages')}</TabsTrigger>
          <TabsTrigger value="sources">{t('tabs.trafficSources')}</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>{t('weeklyTrends')}</CardTitle>
                <CardDescription>{t('weeklyTrendsDesc')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-end justify-between gap-2">
                  {[65, 80, 45, 90, 75, 95, 70].map((value, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div
                        className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-md transition-all hover:from-blue-600 hover:to-blue-500"
                        style={{ height: `${value}%` }}
                      />
                      <span className="text-xs text-muted-foreground">
                        {t(`days.${dayKeys[i]}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('trafficSourcesTitle')}</CardTitle>
                <CardDescription>{t('trafficSourcesDesc')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {trafficSourcesConfig.map((source) => (
                  <div key={source.key} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>{t(`sources.${source.key}`)}</span>
                      <span className="font-medium">{source.value}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${source.color} rounded-full transition-all`}
                        style={{ width: `${source.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="pages">
          <Card>
            <CardHeader>
              <CardTitle>{t('topPagesTitle')}</CardTitle>
              <CardDescription>{t('topPagesDesc')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPages.map((page, i) => (
                  <div
                    key={page.page}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-medium">{page.page}</p>
                        <p className="text-xs text-muted-foreground">
                          {page.visitors} {t('visitors')}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{page.views}</p>
                      <p className="text-xs text-muted-foreground">
                        {page.bounceRate} {t('bounce')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sources">
          <Card>
            <CardHeader>
              <CardTitle>{t('trafficBreakdown')}</CardTitle>
              <CardDescription>{t('trafficBreakdownDesc')}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              {trafficSourcesConfig.map((source) => (
                <div key={source.key} className="flex items-center gap-4 p-4 rounded-lg border">
                  <div
                    className={`h-12 w-12 rounded-lg ${source.color} flex items-center justify-center`}
                  >
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{t(`sources.${source.key}`)}</p>
                    <p className="text-2xl font-bold">{source.value}%</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
