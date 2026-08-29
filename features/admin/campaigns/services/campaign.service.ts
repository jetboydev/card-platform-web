import { apiClient } from '@/lib/api-client';
import type { Campaign, CampaignListParams, PaginatedResponse, CampaignStats } from '../types';

export const campaignService = {
  getCampaigns: async (params: CampaignListParams = {}): Promise<PaginatedResponse<Campaign>> => {
    const response = await apiClient.get<PaginatedResponse<Campaign>>('/campaigns', { params });
    return response;
  },

  getCampaignById: async (id: string): Promise<Campaign> => {
    const response = await apiClient.get<Campaign>(`/campaigns/${id}`);
    return response;
  },

  getCampaignStats: async (): Promise<CampaignStats> => {
    const response = await apiClient.get<CampaignStats>('/campaigns/stats');
    return response;
  },

  createCampaign: async (data: Partial<Campaign>): Promise<Campaign> => {
    const response = await apiClient.post<Campaign>('/campaigns', data);
    return response;
  },

  updateCampaign: async (id: string, data: Partial<Campaign>): Promise<Campaign> => {
    const response = await apiClient.patch<Campaign>(`/campaigns/${id}`, data);
    return response;
  },

  deleteCampaign: async (id: string): Promise<void> => {
    await apiClient.delete(`/campaigns/${id}`);
  },

  toggleCampaignStatus: async (id: string, status: Campaign['status']): Promise<Campaign> => {
    const response = await apiClient.patch<Campaign>(`/campaigns/${id}/status`, {
      status,
    });
    return response;
  },
};
