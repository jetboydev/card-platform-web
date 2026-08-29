'use client';

import {
  MoreHorizontal,
  Eye,
  Edit,
  Pause,
  Play,
  Trash2,
  Calendar,
  MousePointerClick,
  TrendingUp,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CustomImage } from '@/components/ui/custom-image';
import { useI18n } from '@/hooks/useI18n';
import { formatCurrency, formatNumber, formatDateRange } from '@/shared/utils';
import type { Campaign, CampaignStatus, StatusConfig, TypeConfig } from '../types';

interface CampaignCardProps {
  campaign: Campaign;
  onView?: (campaign: Campaign) => void;
  onEdit?: (campaign: Campaign) => void;
  onPause?: (campaign: Campaign) => void;
  onResume?: (campaign: Campaign) => void;
  onDelete?: (campaign: Campaign) => void;
}

const statusConfig: Record<CampaignStatus, StatusConfig> = {
  active: { label: 'Active', variant: 'active' },
  pending: { label: 'Pending', variant: 'warning' },
  completed: { label: 'Completed', variant: 'secondary' },
  paused: { label: 'Paused', variant: 'outline' },
  draft: { label: 'Draft', variant: 'secondary' },
};

const typeConfig: Record<string, TypeConfig> = {
  awareness: { color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900' },
  engagement: { color: 'text-purple-600', bg: 'bg-purple-100 dark:bg-purple-900' },
  conversion: { color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900' },
  retention: { color: 'text-orange-600', bg: 'bg-orange-100 dark:bg-orange-900' },
};

export function CampaignCard({
  campaign,
  onView,
  onEdit,
  onPause,
  onResume,
  onDelete,
}: CampaignCardProps) {
  const { t } = useI18n();
  const status = statusConfig[campaign.status];
  const typeStyle = typeConfig[campaign.type] || typeConfig.awareness;
  const percentage = campaign.budget > 0 ? (campaign.spent / campaign.budget) * 100 : 0;
  const isOverBudget = percentage > 100;

  return (
    <div className="flex flex-col justify-between rounded-xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 overflow-hidden">
      {/* Header Image */}
      <div className="relative w-full aspect-video overflow-hidden">
        <CustomImage
          src={campaign.image}
          alt={campaign.name}
          priority
          className="object-cover w-full h-full cursor-pointer transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="w-full">
        {/* Body */}
        <div className="p-5 pb-2">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <Badge variant={status.variant} className="text-xs">
                  {t(`campaigns:status_${campaign.status}`)}
                </Badge>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${typeStyle.color} ${typeStyle.bg}`}
                >
                  {t(`campaigns:type_${campaign.type}`)}
                </span>
              </div>

              <h3 className="font-semibold text-base leading-tight line-clamp-1">
                {campaign.name}
              </h3>
              <div className="text-sm text-muted-foreground mt-1 line-clamp-1">
                {campaign.agency ? campaign.agency.name : '\u00A0'}
              </div>
            </div>

            {/* Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0 cursor-pointer">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => onView?.(campaign)}>
                  <Eye className="mr-2 h-4 w-4" />
                  {t('campaigns:view')}
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => onEdit?.(campaign)}>
                  <Edit className="mr-2 h-4 w-4" />
                  {t('campaigns:edit')}
                </DropdownMenuItem>

                {campaign.status === 'active' ? (
                  <DropdownMenuItem onClick={() => onPause?.(campaign)}>
                    <Pause className="mr-2 h-4 w-4" />
                    {t('campaigns:pause')}
                  </DropdownMenuItem>
                ) : campaign.status === 'paused' ? (
                  <DropdownMenuItem onClick={() => onResume?.(campaign)}>
                    <Play className="mr-2 h-4 w-4" />
                    {t('campaigns:resume')}
                  </DropdownMenuItem>
                ) : null}

                <DropdownMenuSeparator />

                <DropdownMenuItem onClick={() => onDelete?.(campaign)} variant="destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  {t('campaigns:delete')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Stats */}
        <div className="px-5 pb-5">
          <div className="flex flex-col gap-4">
            <div className="flex gap-5 justify-between">
              {/* Budget */}
              <div className="space-y-1 w-1/2">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span>{t('campaigns:budget')}</span>
                </div>

                <p className="text-sm font-semibold">{formatCurrency(campaign.budget)}</p>

                <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isOverBudget
                        ? 'bg-destructive'
                        : percentage > 80
                          ? 'bg-yellow-500'
                          : 'bg-primary'
                    }`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  />
                </div>

                <p
                  className={`text-xs ${
                    isOverBudget ? 'text-destructive' : 'text-muted-foreground'
                  }`}
                >
                  {formatCurrency(campaign.spent)} ({percentage.toFixed(0)}%)
                </p>
              </div>

              {/* Impressions */}
              <div className="space-y-1 w-1/2">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span>{t('campaigns:impressions')}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Eye className="h-3.5 w-3.5" />

                  <p className="text-sm font-semibold">{formatNumber(campaign.impressions)}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-5 justify-between">
              {/* Clicks */}
              <div className="space-y-1 w-1/2">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MousePointerClick className="h-3.5 w-3.5" />

                  <span>{t('campaigns:clicks')}</span>
                </div>

                <p className="text-sm font-semibold">{formatNumber(campaign.clicks)}</p>
              </div>

              {/* CTR */}
              <div className="space-y-1 w-1/2">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <TrendingUp className="h-3.5 w-3.5" />

                  <span>CTR</span>
                </div>

                <p
                  className={`text-sm font-semibold ${
                    campaign.ctr >= 3
                      ? 'text-green-600'
                      : campaign.ctr >= 1
                        ? 'text-primary'
                        : 'text-muted-foreground'
                  }`}
                >
                  {campaign.ctr.toFixed(2)}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t bg-sidebar-active">
        <div className="flex items-center gap-1.5 text-xs text-white">
          <Calendar className="h-3.5 w-3.5" />
          <span>{formatDateRange(campaign.startDate, campaign.endDate)}</span>
        </div>
      </div>
    </div>
  );
}
