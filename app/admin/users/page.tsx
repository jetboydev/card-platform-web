'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UserList } from '@/features/admin/users';
import { useI18n } from '@/hooks/useI18n';

export default function UsersPage() {
  const { t } = useI18n('users');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
        <p className="text-muted-foreground">{t('subtitle')}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t('allUsers')}</CardTitle>
          <CardDescription>{t('manageTeam')}</CardDescription>
        </CardHeader>
        <CardContent>
          <UserList />
        </CardContent>
      </Card>
    </div>
  );
}
