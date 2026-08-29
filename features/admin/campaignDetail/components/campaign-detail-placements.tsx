'use client';

import React from 'react';
import { Play, Pause, MoreHorizontal, Eye, MousePointerClick, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useI18n } from '@/hooks/useI18n';
import { formatNumber, formatCurrency } from '@/shared/utils';
import type { Placement } from '../types';

interface CampaignDetailPlacementsProps {
  placements: Placement[];
  onToggleStatus?: (placement: Placement) => void;
}

const platformConfig: Record<string, { color: string; bgColor: string }> = {
  zalo: { color: 'text-blue-600', bgColor: 'bg-blue-100 dark:bg-blue-900' },
  facebook: { color: 'text-blue-700', bgColor: 'bg-blue-100 dark:bg-blue-900' },
  instagram: { color: 'text-pink-600', bgColor: 'bg-pink-100 dark:bg-pink-900' },
  google: { color: 'text-red-600', bgColor: 'bg-red-100 dark:bg-red-900' },
  tiktok: { color: 'text-black dark:text-white', bgColor: 'bg-gray-100 dark:bg-gray-800' },
};

const platformIcons: Record<string, string> = {
  zalo: 'Z',
  facebook: 'F',
  instagram: 'I',
  google: 'G',
  tiktok: 'T',
};

function PlacementCard({
  placement,
  onToggleStatus,
}: {
  placement: Placement;
  onToggleStatus?: (placement: Placement) => void;
}) {
  const { t } = useI18n();
  const config = platformConfig[placement.platform] || platformConfig.zalo;
  const isActive = placement.status === 'active';

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-lg ${config.bgColor} flex items-center justify-center font-bold ${config.color}`}
            >
              {platformIcons[placement.platform]}
            </div>
            <div>
              <CardTitle className="text-base">{placement.name}</CardTitle>
              <p className="text-xs text-muted-foreground capitalize">{placement.platform}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant={isActive ? 'active' : 'outline'}
              className={isActive ? '' : 'border-yellow-500 text-yellow-600'}
            >
              {isActive ? t('campaignDetail:active') : t('campaignDetail:paused')}
            </Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 cursor-pointer">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-40">
                <DropdownMenuItem onClick={() => onToggleStatus?.(placement)}>
                  {isActive ? (
                    <>
                      <Pause className="mr-2 h-4 w-4" />
                      {t('campaignDetail:pause')}
                    </>
                  ) : (
                    <>
                      <Play className="mr-2 h-4 w-4" />
                      {t('campaignDetail:resume')}
                    </>
                  )}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Eye className="h-3.5 w-3.5" />
              <span>{t('campaignDetail:impressions')}</span>
            </div>
            <p className="text-lg font-semibold">{formatNumber(placement.impressions)}</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MousePointerClick className="h-3.5 w-3.5" />
              <span>{t('campaignDetail:clicks')}</span>
            </div>
            <p className="text-lg font-semibold">{formatNumber(placement.clicks)}</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>CTR</span>
            </div>
            <p className="text-lg font-semibold">{placement.ctr.toFixed(2)}%</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span>{t('campaignDetail:spent')}</span>
            </div>
            <p className="text-lg font-semibold">{formatCurrency(placement.spent)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function CampaignDetailPlacements({
  placements,
  onToggleStatus,
}: CampaignDetailPlacementsProps) {
  const { t } = useI18n();

  const activePlacements = placements.filter((p) => p.status === 'active');
  const pausedPlacements = placements.filter((p) => p.status === 'paused');

  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Badge variant="active">{activePlacements.length}</Badge>
          <span className="text-sm text-muted-foreground">{t('campaignDetail:active')}</span>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline">{pausedPlacements.length}</Badge>
          <span className="text-sm text-muted-foreground">{t('campaignDetail:paused')}</span>
        </div>
      </div>

      {/* Placements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {placements.map((placement) => (
          <PlacementCard key={placement.id} placement={placement} onToggleStatus={onToggleStatus} />
        ))}
      </div>
    </div>
  );
}
