'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, FileText, BarChart3, Activity } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';

export function DashboardCard() {
  const { t } = useI18n('dashboard');
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t('dashboard')}</h1>
        <p className="text-muted-foreground">{t('welcome')}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t('totalUsers')}</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,345</div>
            <p className="text-xs text-muted-foreground">+10% {t('fromLastMonth')}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t('documents')}</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+5% {t('fromLastMonth')}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t('analytics')}</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89%</div>
            <p className="text-xs text-muted-foreground">{t('engagementRate')}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t('activeNow')}</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">{t('currentOnline')}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{t('recentActivity')}</CardTitle>
            <CardDescription>{t('recentActivityDesc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                    <Users className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{t('userAction', { id: i })}</p>
                    <p className="text-xs text-muted-foreground">{t('minutesAgo', { count: 2 })}</p>
                  </div>
                  <Badge variant="secondary">{t('new')}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('quickActions')}</CardTitle>
            <CardDescription>{t('quickActionsDesc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-accent cursor-pointer transition-colors">
                <Users className="h-8 w-8 mb-2 text-muted-foreground" />
                <span className="text-sm font-medium">{t('manageUsers')}</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-accent cursor-pointer transition-colors">
                <FileText className="h-8 w-8 mb-2 text-muted-foreground" />
                <span className="text-sm font-medium">{t('documents')}</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-accent cursor-pointer transition-colors">
                <BarChart3 className="h-8 w-8 mb-2 text-muted-foreground" />
                <span className="text-sm font-medium">{t('analytics')}</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-accent cursor-pointer transition-colors">
                <Activity className="h-8 w-8 mb-2 text-muted-foreground" />
                <span className="text-sm font-medium">{t('monitoring')}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
