import { apiClient } from '@/lib/api-client';
import type { Brand, BrandListParams, PaginatedResponse, BrandStats } from '../types';

export const brandService = {
  getBrands: async (params: BrandListParams = {}): Promise<PaginatedResponse<Brand>> => {
    const response = await apiClient.get<PaginatedResponse<Brand>>('/brands', { params });
    return response;
  },

  getBrandById: async (id: string): Promise<Brand> => {
    const response = await apiClient.get<Brand>(`/brands/${id}`);
    return response;
  },

  getBrandStats: async (): Promise<BrandStats> => {
    const response = await apiClient.get<BrandStats>('/brands/stats');
    return response;
  },

  createBrand: async (data: Partial<Brand>): Promise<Brand> => {
    const response = await apiClient.post<Brand>('/brands', data);
    return response;
  },

  updateBrand: async (id: string, data: Partial<Brand>): Promise<Brand> => {
    const response = await apiClient.patch<Brand>(`/brands/${id}`, data);
    return response;
  },

  deleteBrand: async (id: string): Promise<void> => {
    await apiClient.delete(`/brands/${id}`);
  },

  toggleBrandStatus: async (id: string, status: Brand['status']): Promise<Brand> => {
    const response = await apiClient.patch<Brand>(`/brands/${id}/status`, {
      status,
    });
    return response;
  },
};
