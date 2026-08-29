'use client';

import React from 'react';
import { Eye, MousePointerClick, DollarSign, TrendingUp, Target, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useI18n } from '@/hooks/useI18n';
import { formatCurrency, formatNumber } from '@/shared/utils';
import type { CampaignDetail } from '../types';

interface CampaignDetailStatsProps {
  campaign: CampaignDetail;
}

interface StatCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  subValue?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  className?: string;
}

function StatCard({ label, value, icon, subValue, trend, trendValue, className }: StatCardProps) {
  const trendColors = {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-muted-foreground',
  };

  return (
    <Card className={className}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="text-2xl font-bold">{value}</p>
            {subValue && <p className="text-xs text-muted-foreground">{subValue}</p>}
            {trendValue && (
              <div className={`flex items-center gap-1 text-xs ${trend ? trendColors[trend] : ''}`}>
                {trend === 'up' && <TrendingUp className="h-3 w-3" />}
                {trend === 'down' && <TrendingUp className="h-3 w-3 rotate-180" />}
                <span>{trendValue}</span>
              </div>
            )}
          </div>
          <div className="p-2 bg-primary/10 rounded-lg">{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
}

export function CampaignDetailStats({ campaign }: CampaignDetailStatsProps) {
  const { t } = useI18n();
  const budgetPercentage = campaign.budget > 0 ? (campaign.spent / campaign.budget) * 100 : 0;
  const conversionRate = campaign.clicks > 0 ? (campaign.conversions / campaign.clicks) * 100 : 0;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <StatCard
        label={t('campaignDetail:impressions')}
        value={formatNumber(campaign.impressions)}
        icon={<Eye className="h-5 w-5 text-primary" />}
        subValue={`${t('campaignDetail:ofBudget')} ${formatCurrency(campaign.budget)}`}
        trend="up"
        trendValue="+12.5%"
      />

      <StatCard
        label={t('campaignDetail:clicks')}
        value={formatNumber(campaign.clicks)}
        icon={<MousePointerClick className="h-5 w-5 text-primary" />}
        subValue={`CTR: ${campaign.ctr.toFixed(2)}%`}
        trend="up"
        trendValue="+8.2%"
      />

      <StatCard
        label={t('campaignDetail:conversions')}
        value={formatNumber(campaign.conversions)}
        icon={<Target className="h-5 w-5 text-primary" />}
        subValue={`${conversionRate.toFixed(2)}% CVR`}
        trend="up"
        trendValue="+5.3%"
      />

      <StatCard
        label={t('campaignDetail:budget')}
        value={formatCurrency(campaign.spent)}
        icon={<DollarSign className="h-5 w-5 text-primary" />}
        subValue={`${budgetPercentage.toFixed(0)}% of ${formatCurrency(campaign.budget)}`}
      />

      <StatCard
        label={t('campaignDetail:amountSpent')}
        value={formatCurrency(campaign.spent)}
        icon={<BarChart3 className="h-5 w-5 text-primary" />}
        subValue={t('campaignDetail:lastUpdated')}
      />

      <StatCard
        label={t('campaignDetail:totalCpc')}
        value={formatCurrency(campaign.cpc)}
        icon={<TrendingUp className="h-5 w-5 text-primary" />}
        subValue={`CVR: ${conversionRate.toFixed(2)}%`}
        trend="down"
        trendValue="-2.1%"
      />
    </div>
  );
}
