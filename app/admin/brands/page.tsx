'use client';

import * as React from 'react';
import { BrandList } from '@/features/admin/brands';
import type { Brand, BrandStats } from '@/features/admin/brands/types';
import { images } from '@/shared/assets';

// Mock data for demonstration - replace with actual API calls
const mockBrands: Brand[] = [
  {
    id: '1',
    name: 'Coca-Cola',
    coverImage: images.imageBrandCocaCola,
    description: 'World-renowned beverage brand',
    status: 'active',
    industry: 'food',
    website: 'https://coca-cola.com',
    campaignCount: 5,
    createdAt: '2026-01-15',
    updatedAt: '2026-05-18',
    agency: { id: 'agency1', name: 'Agency 1' },
  },
  {
    id: '2',
    name: 'Nike',
    coverImage: images.imageBrandNike,
    description: 'Leading sportswear brand',
    status: 'active',
    industry: 'fashion',
    website: 'https://nike.com',
    campaignCount: 8,
    createdAt: '2026-01-20',
    updatedAt: '2026-05-19',
    agency: { id: 'agency2', name: 'Agency 2' },
  },
  {
    id: '3',
    name: 'Samsung',
    coverImage: images.imageBrandCocaCola,
    description: 'Global technology leader',
    status: 'active',
    industry: 'technology',
    website: 'https://samsung.com',
    campaignCount: 6,
    createdAt: '2026-02-01',
    updatedAt: '2026-05-17',
    agency: { id: 'agency3', name: 'Agency 3' },
  },
  {
    id: '4',
    name: "L'Oréal",
    coverImage: images.imageBrandCocaCola,
    description: 'Leading beauty brand',
    status: 'pending',
    industry: 'beauty',
    website: 'https://loreal.com',
    campaignCount: 3,
    createdAt: '2026-03-10',
    updatedAt: '2026-05-10',
    agency: { id: 'agency4', name: 'Agency 4' },
  },
  {
    id: '5',
    name: 'BMW',
    coverImage: images.imageBrandCocaCola,
    description: 'Premium automotive brand',
    status: 'active',
    industry: 'automotive',
    website: 'https://bmw.com',
    campaignCount: 4,
    createdAt: '2026-02-15',
    updatedAt: '2026-05-16',
    agency: { id: 'agency5', name: 'Agency 5' },
  },
  {
    id: '6',
    name: 'HSBC',
    coverImage: images.imageBrandCocaCola,
    description: 'Global banking and financial services',
    status: 'inactive',
    industry: 'finance',
    website: 'https://hsbc.com',
    campaignCount: 2,
    createdAt: '2026-01-05',
    updatedAt: '2026-04-30',
    agency: { id: 'agency1', name: 'Agency 1' },
  },
  {
    id: '7',
    name: 'Apple',
    coverImage: images.imageBrandCocaCola,
    description: 'Innovative technology brand',
    status: 'active',
    industry: 'technology',
    website: 'https://apple.com',
    campaignCount: 7,
    createdAt: '2026-01-10',
    updatedAt: '2026-05-19',
    agency: { id: 'agency2', name: 'Agency 2' },
  },
  {
    id: '8',
    name: 'Adidas',
    coverImage: images.imageBrandCocaCola,
    description: 'Sports and lifestyle brand',
    status: 'active',
    industry: 'fashion',
    website: 'https://adidas.com',
    campaignCount: 6,
    createdAt: '2026-02-20',
    updatedAt: '2026-05-18',
    agency: { id: 'agency3', name: 'Agency 3' },
  },
];

const mockStats: BrandStats = {
  totalBrands: 8,
  activeBrands: 5,
  totalCampaigns: 41,
  totalBudget: 1680000,
  totalSpent: 1040500,
  totalImpressions: 46290000,
  totalClicks: 1371000,
  averageCtr: 2.97,
};

export default function BrandsPage() {
  const [brands] = React.useState<Brand[]>(mockBrands);
  const [stats] = React.useState<BrandStats>(mockStats);
  const [isLoading] = React.useState(false);

  const handleView = (brand: Brand) => {
    console.log('View brand:', brand);
    // TODO: Navigate to detail page or open detail modal
  };

  const handleEdit = (brand: Brand) => {
    console.log('Edit brand:', brand);
    // TODO: Navigate to edit page or open edit modal
  };

  const handleCreate = () => {
    console.log('Create new brand');
    // TODO: Navigate to create page or open create modal
  };

  const handleExport = () => {
    console.log('Export brands');
    // TODO: Implement export functionality
  };

  const handleRefresh = () => {
    console.log('Refresh brands');
    // TODO: Fetch brands from API
  };

  return (
    <BrandList
      initialBrands={brands}
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
