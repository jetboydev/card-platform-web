import type { StaticImageData } from 'next/image';

export type BrandStatus = 'active' | 'inactive' | 'pending';

export type BrandIndustry =
  | 'technology'
  | 'fashion'
  | 'food'
  | 'beauty'
  | 'finance'
  | 'healthcare'
  | 'education'
  | 'automotive'
  | 'real_estate'
  | 'entertainment'
  | 'sports'
  | 'travel';

export interface Brand {
  id: string;
  name: string;
  description?: string;
  logo?: string | StaticImageData;
  coverImage?: string | StaticImageData;
  status: BrandStatus;
  industry: BrandIndustry;
  website?: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
  campaignCount: number;
  agency?: {
    id: string;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface BrandListParams {
  page?: number;
  pageSize?: number;
  search?: string;
  status?: BrandStatus;
  industry?: BrandIndustry;
  agencyId?: string;
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

export interface BrandStats {
  totalBrands: number;
  activeBrands: number;
  totalCampaigns: number;
  totalBudget: number;
  totalSpent: number;
  totalImpressions: number;
  totalClicks: number;
  averageCtr: number;
}
