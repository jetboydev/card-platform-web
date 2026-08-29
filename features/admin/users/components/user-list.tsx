'use client';

import * as React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useDebounce } from '@/hooks/use-debounce';
import { Search, Plus, RefreshCw, Trash2 } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  avatar?: string;
  createdAt: string;
}

const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'Nguyen Van A',
    email: 'nguyenvana@example.com',
    role: 'admin',
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    name: 'Tran Thi B',
    email: 'tranthib@example.com',
    role: 'user',
    createdAt: '2024-02-20',
  },
  { id: '3', name: 'Le Van C', email: 'levanc@example.com', role: 'user', createdAt: '2024-03-10' },
  {
    id: '4',
    name: 'Pham Thi D',
    email: 'phamthid@example.com',
    role: 'guest',
    createdAt: '2024-04-05',
  },
  {
    id: '5',
    name: 'Hoang Van E',
    email: 'hoangvane@example.com',
    role: 'user',
    createdAt: '2024-05-12',
  },
];

async function fetchUsers(search?: string): Promise<User[]> {
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (!search) return MOCK_USERS;

  return MOCK_USERS.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );
}

async function createUser(data: Partial<User>): Promise<User> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    id: String(Date.now()),
    name: data.name || 'New User',
    email: data.email || 'new@example.com',
    role: data.role || 'user',
    createdAt: new Date().toISOString().split('T')[0],
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function deleteUser(id: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 300));
}

const roleColors: Record<
  string,
  'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning'
> = {
  admin: 'destructive',
  user: 'default',
  guest: 'secondary',
};

import { useI18n } from '@/hooks/useI18n';

export function UserList() {
  const { t } = useI18n('users');
  const [search, setSearch] = React.useState('');
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [newUser, setNewUser] = React.useState({
    name: '',
    email: '',
    role: 'user' as 'admin' | 'user' | 'guest',
  });

  const debouncedSearch = useDebounce(search, 300);
  const queryClient = useQueryClient();

  const {
    data: users = [],
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['users', debouncedSearch],
    queryFn: () => fetchUsers(debouncedSearch),
    staleTime: 30000,
  });

  const createMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      setIsDialogOpen(false);
      setNewUser({ name: '', email: '', role: 'user' });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t('searchPlaceholder')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" size="sm" onClick={() => refetch()} disabled={isFetching}>
            <RefreshCw className={`h-4 w-4 mr-2 ${isFetching ? 'animate-spin' : ''}`} />
            {t('refresh')}
          </Button>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-sidebar-active text-white">
                <Plus className="h-4 w-4 mr-2" />
                {t('addUser')}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{t('createTitle')}</DialogTitle>
                <DialogDescription>{t('createDescription')}</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('name')}</Label>
                  <Input
                    id="name"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    placeholder={t('namePlaceholder')}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t('email')}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    placeholder={t('emailPlaceholder')}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">{t('role')}</Label>
                  <select
                    id="role"
                    value={newUser.role}
                    onChange={(e) =>
                      setNewUser({ ...newUser, role: e.target.value as 'admin' | 'user' | 'guest' })
                    }
                    className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="admin">{t('roles.admin')}</option>
                    <option value="user">{t('roles.user')}</option>
                    <option value="guest">{t('roles.guest')}</option>
                  </select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  {t('cancel')}
                </Button>
                <Button
                  onClick={() => createMutation.mutate(newUser)}
                  disabled={!newUser.name || !newUser.email || createMutation.isPending}
                  isLoading={createMutation.isPending}
                >
                  {t('createButton')}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {isLoading ? (
        <div className="space-y-2">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-16 w-full" />
          ))}
        </div>
      ) : users.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">{t('noUsersFound')}</p>
          </CardContent>
        </Card>
      ) : (
        <div className="rounded-lg border bg-card">
          <div className="grid grid-cols-12 gap-4 p-4 font-medium text-sm text-muted-foreground border-b">
            <div className="col-span-4">{t('name')}</div>
            <div className="col-span-4">{t('email')}</div>
            <div className="col-span-2">{t('role')}</div>
            <div className="col-span-2">{t('actions')}</div>
          </div>
          <div className="divide-y">
            {users.map((user) => (
              <div
                key={user.id}
                className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-muted/50 transition-colors"
              >
                <div className="col-span-4 font-medium">{user.name}</div>
                <div className="col-span-4 text-muted-foreground text-sm">{user.email}</div>
                <div className="col-span-2">
                  <Badge className="bg-sidebar-active text-white" variant={roleColors[user.role]}>
                    {t(`roles.${user.role}`)}
                  </Badge>
                </div>
                <div className="col-span-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteMutation.mutate(user.id)}
                    disabled={deleteMutation.isPending}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>{t('totalUsers', { count: users.length })}</span>
        {isFetching && (
          <span className="flex items-center gap-2">
            <RefreshCw className="h-3 w-3 animate-spin" /> {t('fetching')}
          </span>
        )}
      </div>
    </div>
  );
}
