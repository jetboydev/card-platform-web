'use client';

import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useI18n } from '@/hooks/useI18n';
import { formatCurrency, formatNumber } from '@/shared/utils';
import type { DailyStats, PlacementStats } from '../types';

interface CampaignDetailTabsProps {
  dailyStats: DailyStats[];
  placementStats: PlacementStats[];
  isLoading?: boolean;
}

export function CampaignDetailTabs({ dailyStats, placementStats }: CampaignDetailTabsProps) {
  const { t } = useI18n();

  const totalImpressions = dailyStats.reduce((sum, day) => sum + day.impressions, 0);
  const totalClicks = dailyStats.reduce((sum, day) => sum + day.clicks, 0);
  const totalSpent = dailyStats.reduce((sum, day) => sum + day.spent, 0);
  const overallCtr = totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0;

  return (
    <Card className="mt-6">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{t('campaignDetail:performance')}</CardTitle>
          <Tabs defaultValue="daily" className="w-auto">
            <TabsList className="h-8">
              <TabsTrigger value="daily" className="text-xs px-3 py-1">
                {t('campaignDetail:daily')}
              </TabsTrigger>
              <TabsTrigger value="platform" className="text-xs px-3 py-1">
                {t('campaignDetail:byPlatform')}
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="daily" className="w-full">
          {/* Daily Performance Tab */}
          <TabsContent value="daily" className="mt-0 space-y-4">
            {/* Summary Row */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-sidebar-active rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-white/70">{t('campaignDetail:impressions')}</span>
                  <TrendingUp className="h-3 w-3 text-white/70" />
                </div>
                <p className="text-xl font-bold text-white">{formatNumber(totalImpressions)}</p>
                <p className="text-xs text-white/70 mt-1">Last 14 days</p>
              </div>
              <div className="p-4 bg-sidebar-active rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-white/70">{t('campaignDetail:clicks')}</span>
                  <TrendingUp className="h-3 w-3 text-white/70" />
                </div>
                <p className="text-xl font-bold text-white">{formatNumber(totalClicks)}</p>
                <p className="text-xs text-white/70 mt-1">CTR: {overallCtr.toFixed(2)}%</p>
              </div>
              <div className="p-4 bg-sidebar-active rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-white/70">{t('campaignDetail:amountSpent')}</span>
                  <TrendingUp className="h-3 w-3 text-white/70" />
                </div>
                <p className="text-xl font-bold text-white">{formatCurrency(totalSpent)}</p>
                <p className="text-xs text-white/70 mt-1">Total cost</p>
              </div>
            </div>

            {/* Chart Area - Simple Bar Visualization */}
            <div className="space-y-3">
              <p className="text-sm font-medium">{t('campaignDetail:dailyTrend')}</p>
            </div>

            {/* Daily Breakdown Table */}
            <div className="rounded-lg border overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-4 py-2 text-left font-medium text-muted-foreground">
                      {t('campaignDetail:date')}
                    </th>
                    <th className="px-4 py-2 text-center font-medium text-muted-foreground">
                      {t('campaignDetail:impressions')}
                    </th>
                    <th className="px-4 py-2 text-center font-medium text-muted-foreground">
                      {t('campaignDetail:clicks')}
                    </th>
                    <th className="px-4 py-2 text-center font-medium text-muted-foreground">CTR</th>
                    <th className="px-4 py-2 text-center font-medium text-muted-foreground">
                      {t('campaignDetail:spent')}
                    </th>
                    <th className="px-4 py-2 text-center font-medium text-muted-foreground">
                      {t('campaignDetail:trend')}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {dailyStats.map((day, index) => {
                    const ctr = day.impressions > 0 ? (day.clicks / day.impressions) * 100 : 0;
                    const prevDay = dailyStats[index - 1];
                    const trend = prevDay ? day.impressions > prevDay.impressions : null;
                    return (
                      <tr key={day.date} className="hover:bg-muted/30">
                        <td className="px-4 py-2">
                          {new Date(day.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                          })}
                        </td>
                        <td className="px-4 py-2 text-center">{formatNumber(day.impressions)}</td>
                        <td className="px-4 py-2 text-center">{formatNumber(day.clicks)}</td>
                        <td className="px-4 py-2 text-center">{ctr.toFixed(2)}%</td>
                        <td className="px-4 py-2 text-center">{formatCurrency(day.spent)}</td>
                        <td className="px-4 py-2 text-center flex justify-center">
                          {trend !== null &&
                            (trend ? (
                              <TrendingUp className="h-4 w-4 text-green-600" />
                            ) : (
                              <TrendingDown className="h-4 w-4 text-red-600" />
                            ))}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* By Platform Tab */}
          <TabsContent value="platform" className="mt-0 space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {placementStats.map((stat) => (
                <div
                  key={stat.platform}
                  className="p-4 rounded-lg border bg-card hover:bg-sidebar-active hover:text-white transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xs font-bold">{stat.platform.charAt(0)}</span>
                    </div>
                    <span className="font-medium">{stat.platform}</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {t('campaignDetail:impressions')}
                      </span>
                      <span className="font-medium">{formatNumber(stat.impressions)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('campaignDetail:clicks')}</span>
                      <span className="font-medium">{formatNumber(stat.clicks)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">CTR</span>
                      <span className="font-medium">{stat.ctr.toFixed(2)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('campaignDetail:spent')}</span>
                      <span className="font-medium">{formatCurrency(stat.spent)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
