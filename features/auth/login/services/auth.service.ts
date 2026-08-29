import { apiClient } from '@/lib/api-client';
import type { LoginRequest, LoginResponse } from '../types';

export const loginApi = {
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>('/auth/login', credentials);
    return response;
  },
};
