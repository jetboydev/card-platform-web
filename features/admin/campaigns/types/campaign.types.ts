import type { StaticImageData } from 'next/image';

export type CampaignStatus = 'active' | 'pending' | 'completed' | 'paused' | 'draft';

export type CampaignType = 'awareness' | 'engagement' | 'conversion' | 'retention';

export interface Campaign {
  id: string;
  name: string;
  description?: string;
  status: CampaignStatus;
  type: CampaignType;
  image?: string | StaticImageData;
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  ctr: number;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
  agency?: {
    id: string;
    name: string;
  };
  brand?: {
    id: string;
    name: string;
  };
}

export interface CampaignListParams {
  page?: number;
  pageSize?: number;
  search?: string;
  status?: CampaignStatus;
  type?: CampaignType;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface CampaignStats {
  totalCampaigns?: number;
  activeCampaigns: number;
  totalBudget: number;
  totalSpent: number;
  totalImpressions: number;
  totalClicks: number;
  averageCtr: number;
}
