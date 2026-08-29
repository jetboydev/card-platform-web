'use client';

import {
  useQuery,
  useMutation,
  useQueryClient,
  type UseQueryOptions,
  type UseMutationOptions,
} from '@tanstack/react-query';
import { userService } from '@/services';
import type { User, CreateUserPayload, UpdateUserPayload } from '@/types';
import type { PaginatedResponse, QueryParams } from '@/types/api';

export const USER_QUERY_KEYS = {
  all: ['users'] as const,
  lists: () => [...USER_QUERY_KEYS.all, 'list'] as const,
  list: (params?: QueryParams) => [...USER_QUERY_KEYS.lists(), params] as const,
  details: () => [...USER_QUERY_KEYS.all, 'detail'] as const,
  detail: (id: string) => [...USER_QUERY_KEYS.details(), id] as const,
};

export function useUsers(
  params?: QueryParams,
  options?: Omit<UseQueryOptions<PaginatedResponse<User>, Error>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: USER_QUERY_KEYS.list(params),
    queryFn: () => userService.getUsers(params),
    ...options,
  });
}

export function useUser(
  id: string,
  options?: Omit<UseQueryOptions<User, Error>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: USER_QUERY_KEYS.detail(id),
    queryFn: () => userService.getUserById(id),
    enabled: !!id,
    ...options,
  });
}

export function useCreateUser(
  options?: Omit<UseMutationOptions<User, Error, CreateUserPayload>, 'mutationFn'>
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => userService.createUser(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: USER_QUERY_KEYS.lists() });
    },
    ...options,
  });
}

export function useUpdateUser(
  options?: Omit<
    UseMutationOptions<User, Error, { id: string; payload: UpdateUserPayload }>,
    'mutationFn'
  >
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }) => userService.updateUser(id, payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: USER_QUERY_KEYS.lists() });
      queryClient.setQueryData(USER_QUERY_KEYS.detail(data.id), data);
    },
    ...options,
  });
}

export function useDeleteUser(
  options?: Omit<UseMutationOptions<void, Error, string>, 'mutationFn'>
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => userService.deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: USER_QUERY_KEYS.lists() });
    },
    ...options,
  });
}
