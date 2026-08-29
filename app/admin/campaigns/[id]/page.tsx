'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { CampaignDetailView } from '@/features/admin/campaignDetail';
import {
  mockCampaignDetail,
  mockAudiences,
  mockCreatives,
  mockDailyStats,
  mockPlacementStats,
  mockPlacements,
} from '@/features/admin/campaignDetail/data';

export default function CampaignDetailPage() {
  const router = useRouter();
  const [campaign, setCampaign] = React.useState(mockCampaignDetail);
  const [placements, setPlacements] = React.useState(mockPlacements);
  const [creatives, setCreatives] = React.useState(mockCreatives);

  const handleBack = () => {
    router.push('/admin/campaigns');
  };

  const handleEdit = (campaign: typeof mockCampaignDetail) => {
    console.log('Edit campaign:', campaign);
  };

  const handlePause = (campaign: typeof mockCampaignDetail) => {
    void campaign;
    setCampaign((prev) => ({ ...prev, status: 'paused' }));
  };

  const handleResume = (campaign: typeof mockCampaignDetail) => {
    void campaign;
    setCampaign((prev) => ({ ...prev, status: 'active' }));
  };

  const handleDuplicate = (campaign: typeof mockCampaignDetail) => {
    console.log('Duplicate campaign:', campaign);
  };

  const handleDelete = (campaign: typeof mockCampaignDetail) => {
    console.log('Delete campaign:', campaign);
  };

  const handleTogglePlacementStatus = (placement: (typeof mockPlacements)[0]) => {
    setPlacements((prev) =>
      prev.map((p) =>
        p.id === placement.id ? { ...p, status: p.status === 'active' ? 'paused' : 'active' } : p
      )
    );
  };

  const handleToggleCreativeStatus = (creative: (typeof mockCreatives)[0]) => {
    setCreatives((prev) =>
      prev.map((c) =>
        c.id === creative.id ? { ...c, status: c.status === 'active' ? 'paused' : 'active' } : c
      )
    );
  };

  return (
    <CampaignDetailView
      campaign={campaign}
      audiences={mockAudiences}
      placements={placements}
      creatives={creatives}
      dailyStats={mockDailyStats}
      placementStats={mockPlacementStats}
      onBack={handleBack}
      onEdit={handleEdit}
      onPause={handlePause}
      onResume={handleResume}
      onDuplicate={handleDuplicate}
      onDelete={handleDelete}
      onTogglePlacementStatus={handleTogglePlacementStatus}
      onToggleCreativeStatus={handleToggleCreativeStatus}
    />
  );
}
