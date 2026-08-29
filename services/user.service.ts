import { apiClient } from '@/lib/api-client';
import type { User, CreateUserPayload, UpdateUserPayload } from '@/types';
import type { PaginatedResponse, QueryParams } from '@/types/api';

const ENDPOINTS = {
  LIST: '/users',
  DETAIL: (id: string) => `/users/${id}`,
  CREATE: '/users',
  UPDATE: (id: string) => `/users/${id}`,
  DELETE: (id: string) => `/users/${id}`,
} as const;

export const userService = {
  async getUsers(params?: QueryParams): Promise<PaginatedResponse<User>> {
    return apiClient.get<PaginatedResponse<User>>(
      ENDPOINTS.LIST,
      params as Record<string, unknown>
    );
  },

  async getUserById(id: string): Promise<User> {
    return apiClient.get<User>(ENDPOINTS.DETAIL(id));
  },

  async createUser(payload: CreateUserPayload): Promise<User> {
    return apiClient.post<User>(ENDPOINTS.CREATE, payload);
  },

  async updateUser(id: string, payload: UpdateUserPayload): Promise<User> {
    return apiClient.patch<User>(ENDPOINTS.UPDATE(id), payload);
  },

  async deleteUser(id: string): Promise<void> {
    await apiClient.delete(ENDPOINTS.DELETE(id));
  },
};
