'use client';

import { Play, Pause, MoreHorizontal } from 'lucide-react';
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
import { formatNumber } from '@/shared/utils';
import type { Creative } from '../types';
import { CustomImage } from '@/components/ui/custom-image';

interface CampaignDetailCreativesProps {
  creatives: Creative[];
  onToggleStatus?: (creative: Creative) => void;
}

const statusConfig: Record<
  string,
  { label: string; variant: 'active' | 'warning' | 'secondary' | 'destructive' | 'success' }
> = {
  active: { label: 'Active', variant: 'active' },
  paused: { label: 'Paused', variant: 'secondary' },
  approved: { label: 'Approved', variant: 'success' },
  rejected: { label: 'Rejected', variant: 'destructive' },
  pending: { label: 'Pending', variant: 'warning' },
};

function CreativeCard({
  creative,
  onToggleStatus,
}: {
  creative: Creative;
  onToggleStatus?: (creative: Creative) => void;
}) {
  const { t } = useI18n();
  const statusStyle = statusConfig[creative.status] || statusConfig.active;
  const isActive = creative.status === 'active';

  return (
    <Card className="hover:shadow-md transition-shadow overflow-hidden">
      {/* Thumbnail Area */}
      <div className="relative aspect-video bg-red-500 from-primary/20 to-primary/5 border-b overflow-hidden">
        <CustomImage
          src={creative.thumbnail}
          alt={creative.name}
          priority
          className="object-cover w-full h-full cursor-pointer transition-transform duration-500 hover:scale-105"
        />
        {/* Status Badge */}
        <div className="absolute top-2 left-2">
          <Badge variant={statusStyle.variant} className="text-xs">
            {t(`campaignDetail:status_${creative.status}`) || statusStyle.label}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-sm font-medium line-clamp-1">{creative.name}</CardTitle>
            <p className="text-xs text-muted-foreground capitalize">{creative.type}</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0 cursor-pointer">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-40">
              <DropdownMenuItem onClick={() => onToggleStatus?.(creative)}>
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
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2 rounded-lg bg-muted/50">
            <p className="text-xs text-muted-foreground">Impr.</p>
            <p className="text-sm font-semibold">{formatNumber(creative.impressions)}</p>
          </div>
          <div className="p-2 rounded-lg bg-muted/50">
            <p className="text-xs text-muted-foreground">Clicks</p>
            <p className="text-sm font-semibold">{formatNumber(creative.clicks)}</p>
          </div>
          <div className="p-2 rounded-lg bg-muted/50">
            <p className="text-xs text-muted-foreground">CTR</p>
            <p className="text-sm font-semibold">
              {creative.ctr > 0 ? `${creative.ctr.toFixed(2)}%` : '-'}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function CampaignDetailCreatives({
  creatives,
  onToggleStatus,
}: CampaignDetailCreativesProps) {
  const { t } = useI18n();

  const activeCreatives = creatives.filter((c) => c.status === 'active');
  const pausedCreatives = creatives.filter((c) => c.status === 'paused');

  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Badge variant="active">{activeCreatives.length}</Badge>
          <span className="text-sm text-muted-foreground">{t('campaignDetail:active')}</span>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline">{pausedCreatives.length}</Badge>
          <span className="text-sm text-muted-foreground">{t('campaignDetail:paused')}</span>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{creatives.length}</Badge>
          <span className="text-sm text-muted-foreground">{t('campaignDetail:total')}</span>
        </div>
      </div>

      {/* Creatives Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {creatives.map((creative) => (
          <CreativeCard key={creative.id} creative={creative} onToggleStatus={onToggleStatus} />
        ))}
      </div>
    </div>
  );
}
