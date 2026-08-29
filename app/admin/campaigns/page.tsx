'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { CampaignList } from '@/features/admin/campaigns';
import type { Campaign, CampaignStats } from '@/features/admin/campaigns/types';
import { images } from '@/shared/assets';

// Mock data for demonstration - replace with actual API calls
const mockCampaigns: Campaign[] = [
  {
    id: '1',
    name: 'Summer Sale 2026',
    description: 'Promotional campaign for summer sale',
    status: 'active',
    type: 'conversion',
    image: images.imageGame,
    budget: 50000,
    spent: 32500,
    impressions: 1250000,
    clicks: 45000,
    ctr: 3.6,
    startDate: '2026-06-01',
    endDate: '2026-08-31',
    createdAt: '2026-05-15',
    updatedAt: '2026-05-18',
    agency: { id: 'agency1', name: 'Agency 1' },
    brand: { id: 'brand1', name: 'Brand 1' },
  },
  {
    id: '2',
    name: 'Brand Awareness Q2',
    description: 'Increase brand visibility',
    status: 'active',
    type: 'awareness',
    image: images.imageGame,
    budget: 75000,
    spent: 48000,
    impressions: 2500000,
    clicks: 62000,
    ctr: 2.48,
    startDate: '2026-04-01',
    endDate: '2026-06-30',
    createdAt: '2026-03-20',
    updatedAt: '2026-05-17',
    agency: { id: 'agency2', name: 'Agency 2' },
    brand: { id: 'brand2', name: 'Brand 2' },
  },
  {
    id: '3',
    name: 'Product Launch - Zalo Mini',
    description: 'Launch campaign for new product',
    status: 'pending',
    type: 'engagement',
    image: images.imageGame,
    budget: 100000,
    spent: 0,
    impressions: 0,
    clicks: 0,
    ctr: 0,
    startDate: '2026-06-15',
    endDate: '2026-09-15',
    createdAt: '2026-05-10',
    updatedAt: '2026-05-10',
    agency: { id: 'agency3', name: 'Agency 3' },
    brand: { id: 'brand3', name: 'Brand 3' },
  },
  {
    id: '4',
    name: 'Customer Retention Program',
    description: 'Retain existing customers',
    status: 'paused',
    type: 'retention',
    image: images.imageGame,
    budget: 25000,
    spent: 18000,
    impressions: 800000,
    clicks: 24000,
    ctr: 3.0,
    startDate: '2026-03-01',
    endDate: '2026-05-31',
    createdAt: '2026-02-25',
    updatedAt: '2026-05-01',
    agency: { id: 'agency4', name: 'Agency 4' },
    brand: { id: 'brand4', name: 'Brand 4' },
  },
  {
    id: '5',
    name: 'Holiday Special 2026',
    description: 'Holiday season promotion',
    status: 'draft',
    type: 'conversion',
    image: images.imageGame,
    budget: 60000,
    spent: 0,
    impressions: 0,
    clicks: 0,
    ctr: 0,
    startDate: '2026-11-20',
    endDate: '2026-12-31',
    createdAt: '2026-05-12',
    updatedAt: '2026-05-12',
  },
  {
    id: '6',
    name: 'Spring Collection',
    description: 'Spring fashion collection launch',
    status: 'completed',
    type: 'engagement',
    image: images.imageGame,
    budget: 40000,
    spent: 39500,
    impressions: 980000,
    clicks: 35000,
    ctr: 3.57,
    startDate: '2026-02-01',
    endDate: '2026-04-30',
    createdAt: '2026-01-20',
    updatedAt: '2026-04-30',
    agency: { id: 'agency5', name: 'Agency 5' },
    brand: { id: 'brand5', name: 'Brand 5' },
  },
  {
    id: '7',
    name: 'Tech Conference Promo',
    description: 'Promote annual tech conference',
    status: 'active',
    type: 'awareness',
    image: '',
    budget: 35000,
    spent: 21000,
    impressions: 650000,
    clicks: 18000,
    ctr: 2.77,
    startDate: '2026-05-01',
    endDate: '2026-07-15',
    createdAt: '2026-04-15',
    updatedAt: '2026-05-16',
  },
];

const mockStats: CampaignStats = {
  totalCampaigns: 7,
  activeCampaigns: 3,
  totalBudget: 385000,
  totalSpent: 161000,
  totalImpressions: 6180000,
  totalClicks: 184000,
  averageCtr: 2.92,
};

export default function CampaignPage() {
  const router = useRouter();
  const [campaigns] = React.useState<Campaign[]>(mockCampaigns);
  const [stats] = React.useState<CampaignStats>(mockStats);
  const [isLoading] = React.useState(false);

  const handleView = (campaign: Campaign) => {
    router.push(`/admin/campaigns/${campaign.id}`);
  };

  const handleEdit = (campaign: Campaign) => {
    console.log('Edit campaign:', campaign);
    // TODO: Navigate to edit page or open edit modal
  };

  const handleCreate = () => {
    console.log('Create new campaign');
    // TODO: Navigate to create page or open create modal
  };

  const handleExport = () => {
    console.log('Export campaigns');
    // TODO: Implement export functionality
  };

  const handleRefresh = () => {
    console.log('Refresh campaigns');
    // TODO: Fetch campaigns from API
  };

  return (
    <CampaignList
      initialCampaigns={campaigns}
      initialStats={stats}
      isLoading={isLoading}
      onView={handleView}
      onEdit={handleEdit}
      onCreate={handleCreate}
      onExport={handleExport}
      onRefresh={handleRefresh}
    />
  );
}
