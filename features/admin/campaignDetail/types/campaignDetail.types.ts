import type { StaticImageData } from 'next/image';
import type { CampaignType } from '@/features/admin/campaigns/types';

export type CampaignDetailStatus = 'active' | 'paused' | 'completed';

export interface CampaignDetail {
  id: string;
  name: string;
  description: string;
  status: CampaignDetailStatus;
  type: CampaignType;
  image?: string | StaticImageData;
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  conversions: number;
  ctr: number;
  cpc: number;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
  agency: {
    id: string;
    name: string;
  };
  brand: {
    id: string;
    name: string;
    logo?: string;
  };
  objective: string;
  pacing: 'accelerated' | 'even';
  optimizationGoal: string;
}

export interface Audience {
  id: string;
  name: string;
  type: 'age' | 'gender' | 'location' | 'interest' | 'behavior';
  value: string;
  percentage: number;
}

export interface Placement {
  id: string;
  name: string;
  platform: 'zalo' | 'facebook' | 'instagram' | 'google' | 'tiktok';
  status: 'active' | 'paused';
  impressions: number;
  clicks: number;
  ctr: number;
  spent: number;
}

export interface Creative {
  id: string;
  name: string;
  type: 'image' | 'video' | 'carousel' | 'story';
  thumbnail: string;
  status: 'active' | 'paused' | 'approved' | 'rejected' | 'pending';
  impressions: number;
  clicks: number;
  ctr: number;
  format: string;
}

export interface DailyStats {
  date: string;
  impressions: number;
  clicks: number;
  spent: number;
  conversions: number;
}

export interface PlacementStats {
  platform: string;
  impressions: number;
  clicks: number;
  ctr: number;
  spent: number;
}
