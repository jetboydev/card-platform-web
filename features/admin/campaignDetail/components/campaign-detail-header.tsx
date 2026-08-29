'use client';

import React from 'react';
import {
  ArrowLeft,
  Pause,
  Play,
  Edit,
  Trash2,
  MoreHorizontal,
  ExternalLink,
  Copy,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useI18n } from '@/hooks/useI18n';
import { formatDate } from '@/shared/utils';
import type { CampaignDetail } from '../types';

interface CampaignDetailHeaderProps {
  campaign: CampaignDetail;
  onBack?: () => void;
  onEdit?: (campaign: CampaignDetail) => void;
  onPause?: (campaign: CampaignDetail) => void;
  onResume?: (campaign: CampaignDetail) => void;
  onDuplicate?: (campaign: CampaignDetail) => void;
  onDelete?: (campaign: CampaignDetail) => void;
}

const statusConfig = {
  active: {
    label: 'Active',
    variant: 'active' as const,
    bgClass: 'bg-[#003320]',
    textClass: 'text-[#4EDEA3]',
    dotClass: 'bg-[#4EDEA3]',
  },
  paused: {
    label: 'Paused',
    variant: 'warning' as const,
    bgClass: 'bg-yellow-100 dark:bg-yellow-900',
    textClass: 'text-yellow-800 dark:text-yellow-100',
    dotClass: 'bg-yellow-500',
  },
  completed: {
    label: 'Completed',
    variant: 'secondary' as const,
    bgClass: 'bg-secondary',
    textClass: 'text-secondary-foreground',
    dotClass: 'bg-secondary-foreground',
  },
};

export function CampaignDetailHeader({
  campaign,
  onBack,
  onEdit,
  onPause,
  onResume,
  onDuplicate,
}: CampaignDetailHeaderProps) {
  const { t } = useI18n();
  const status = statusConfig[campaign.status];
  const isActive = campaign.status === 'active';

  return (
    <div className="space-y-6">
      {/* Back Button and Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack} className="cursor-pointer">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">{t('campaignDetail:campaigns')}</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-sm font-medium">{campaign.name}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onDuplicate?.(campaign)}
            className="gap-2 cursor-pointer"
          >
            <Copy className="h-4 w-4" />
            {t('campaignDetail:duplicate')}
          </Button>

          {isActive ? (
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPause?.(campaign)}
              className="gap-2 cursor-pointer"
            >
              <Pause className="h-4 w-4" />
              {t('campaignDetail:pause')}
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={() => onResume?.(campaign)}
              className="gap-2 cursor-pointer"
            >
              <Play className="h-4 w-4" />
              {t('campaignDetail:resume')}
            </Button>
          )}

          <Button
            variant="default"
            size="sm"
            onClick={() => onEdit?.(campaign)}
            className="gap-2 cursor-pointer"
          >
            <Edit className="h-4 w-4" />
            {t('campaignDetail:edit')}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="cursor-pointer">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <ExternalLink className="mr-2 h-4 w-4" />
                {t('campaignDetail:viewLive')}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onDuplicate?.(campaign)} variant="destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                {t('campaignDetail:delete')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Campaign Info */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <h1 className="text-2xl font-bold">{campaign.name}</h1>
            <Badge
              variant={status.variant}
              className={`${status.bgClass} ${status.textClass} border-0`}
            >
              <span className={`w-2 h-2 rounded-full ${status.dotClass} mr-2`} />
              {status.label}
            </Badge>
          </div>
          <p className="text-muted-foreground mb-4 max-w-2xl">{campaign.description}</p>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">{t('campaignDetail:brand')}:</span>
              <span className="font-medium">{campaign.brand.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">{t('campaignDetail:agency')}:</span>
              <span className="font-medium">{campaign.agency.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">{t('campaignDetail:period')}:</span>
              <span className="font-medium">
                {formatDate(campaign.startDate)} - {formatDate(campaign.endDate)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
