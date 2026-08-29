'use client';

import React from 'react';
import { Users, MapPin, Calendar, Heart, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useI18n } from '@/hooks/useI18n';
import type { Audience } from '../types';

interface CampaignDetailAudiencesProps {
  audiences: Audience[];
}

const typeConfig = {
  age: {
    icon: Calendar,
    color: 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300',
  },
  gender: {
    icon: Users,
    color: 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300',
  },
  location: {
    icon: MapPin,
    color: 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300',
  },
  interest: {
    icon: Heart,
    color: 'bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-300',
  },
  behavior: {
    icon: BarChart3,
    color: 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300',
  },
};

function AudienceGroup({ title, audiences }: { title: string; audiences: Audience[] }) {
  const maxPercentage = Math.max(...audiences.map((a) => a.percentage));
  const config = typeConfig[audiences[0]?.type] || typeConfig.age;
  const Icon = config.icon;

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-lg ${config.color}`}>
            <Icon className="h-4 w-4" />
          </div>
          <CardTitle className="text-base">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {audiences.map((audience) => (
          <div key={audience.id} className="space-y-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{audience.value}</span>
              <span className="text-muted-foreground">{audience.percentage}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{
                  width: `${(audience.percentage / maxPercentage) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function CampaignDetailAudiences({ audiences }: CampaignDetailAudiencesProps) {
  const { t } = useI18n();

  const groupedAudiences = React.useMemo(() => {
    const groups: Record<string, { title: string; items: Audience[] }> = {
      age: { title: t('campaignDetail:ageGroups'), items: [] },
      gender: { title: t('campaignDetail:gender'), items: [] },
      location: { title: t('campaignDetail:locations'), items: [] },
      interest: { title: t('campaignDetail:interests'), items: [] },
      behavior: { title: t('campaignDetail:behaviors'), items: [] },
    };

    audiences.forEach((audience) => {
      if (groups[audience.type]) {
        groups[audience.type].items.push(audience);
      }
    });

    return Object.entries(groups)
      .filter(([, group]) => group.items.length > 0)
      .map(([type, group]) => ({
        type,
        ...group,
      }));
  }, [audiences, t]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groupedAudiences.map((group) => (
          <AudienceGroup key={group.type} title={group.title} audiences={group.items} />
        ))}
      </div>
    </div>
  );
}
