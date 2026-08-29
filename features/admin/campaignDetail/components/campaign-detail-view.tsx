'use client';

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useI18n } from '@/hooks/useI18n';
import { CampaignDetailHeader } from './campaign-detail-header';
import { CampaignDetailStats } from './campaign-detail-stats';
import { CampaignDetailTabs } from './campaign-detail-tabs';
import { CampaignDetailAudiences } from './campaign-detail-audiences';
import { CampaignDetailPlacements } from './campaign-detail-placements';
import { CampaignDetailCreatives } from './campaign-detail-creatives';
import type {
  CampaignDetail,
  Audience,
  Placement,
  Creative,
  DailyStats,
  PlacementStats,
} from '../types';

interface CampaignDetailViewProps {
  campaign: CampaignDetail;
  audiences?: Audience[];
  placements?: Placement[];
  creatives?: Creative[];
  dailyStats?: DailyStats[];
  placementStats?: PlacementStats[];
  isLoading?: boolean;
  onBack?: () => void;
  onEdit?: (campaign: CampaignDetail) => void;
  onPause?: (campaign: CampaignDetail) => void;
  onResume?: (campaign: CampaignDetail) => void;
  onDuplicate?: (campaign: CampaignDetail) => void;
  onDelete?: (campaign: CampaignDetail) => void;
  onTogglePlacementStatus?: (placement: Placement) => void;
  onToggleCreativeStatus?: (creative: Creative) => void;
}

export function CampaignDetailView({
  campaign,
  audiences = [],
  placements = [],
  creatives = [],
  dailyStats = [],
  placementStats = [],
  onBack,
  onEdit,
  onPause,
  onResume,
  onDuplicate,
  onDelete,
  onTogglePlacementStatus,
  onToggleCreativeStatus,
}: CampaignDetailViewProps) {
  const { t } = useI18n();

  return (
    <div className="space-y-6">
      {/* Header */}
      <CampaignDetailHeader
        campaign={campaign}
        onBack={onBack}
        onEdit={onEdit}
        onPause={onPause}
        onResume={onResume}
        onDuplicate={onDuplicate}
        onDelete={onDelete}
      />

      {/* Stats Cards */}
      <CampaignDetailStats campaign={campaign} />

      {/* Main Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-sidebar-active text-white">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-background cursor-pointer"
          >
            {t('campaignDetail:overview')}
          </TabsTrigger>
          <TabsTrigger
            value="audiences"
            className="data-[state=active]:bg-background cursor-pointer"
          >
            {t('campaignDetail:audiences')}
          </TabsTrigger>
          <TabsTrigger
            value="placements"
            className="data-[state=active]:bg-background cursor-pointer"
          >
            {t('campaignDetail:placements')}
          </TabsTrigger>
          <TabsTrigger
            value="creatives"
            className="data-[state=active]:bg-background cursor-pointer"
          >
            {t('campaignDetail:creatives')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6 space-y-6">
          <CampaignDetailTabs dailyStats={dailyStats} placementStats={placementStats} />
        </TabsContent>

        <TabsContent value="audiences" className="mt-6">
          <CampaignDetailAudiences audiences={audiences} />
        </TabsContent>

        <TabsContent value="placements" className="mt-6">
          <CampaignDetailPlacements
            placements={placements}
            onToggleStatus={onTogglePlacementStatus}
          />
        </TabsContent>

        <TabsContent value="creatives" className="mt-6">
          <CampaignDetailCreatives creatives={creatives} onToggleStatus={onToggleCreativeStatus} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
