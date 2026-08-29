'use client';

import {
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Globe,
  Building2,
  Handshake,
  Megaphone,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useI18n } from '@/hooks/useI18n';
import type { Brand, BrandStatus, StatusConfig, IndustryConfig } from '../types';
import { CustomImage } from '@/components/ui/custom-image';
import { Switch } from '@/components/ui/switch';

interface BrandCardProps {
  brand: Brand;
  onView?: (brand: Brand) => void;
  onEdit?: (brand: Brand) => void;
  onDelete?: (brand: Brand) => void;
}

const statusConfig: Record<BrandStatus, StatusConfig> = {
  active: { label: 'Active', variant: 'active' },
  inactive: { label: 'Inactive', variant: 'secondary' },
  pending: { label: 'Pending', variant: 'warning' },
};

const industryConfig: Record<string, IndustryConfig> = {
  technology: { color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900' },
  fashion: { color: 'text-pink-600', bg: 'bg-pink-100 dark:bg-pink-900' },
  food: { color: 'text-orange-600', bg: 'bg-orange-100 dark:bg-orange-900' },
  beauty: { color: 'text-purple-600', bg: 'bg-purple-100 dark:bg-purple-900' },
  finance: { color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900' },
  healthcare: { color: 'text-red-600', bg: 'bg-red-100 dark:bg-red-900' },
  education: { color: 'text-indigo-600', bg: 'bg-indigo-100 dark:bg-indigo-900' },
  automotive: { color: 'text-gray-600', bg: 'bg-gray-100 dark:bg-gray-900' },
  real_estate: { color: 'text-teal-600', bg: 'bg-teal-100 dark:bg-teal-900' },
  entertainment: { color: 'text-yellow-600', bg: 'bg-yellow-100 dark:bg-yellow-900' },
  sports: { color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900' },
  travel: { color: 'text-cyan-600', bg: 'bg-cyan-100 dark:bg-cyan-900' },
};

export function BrandCard({ brand, onView, onEdit, onDelete }: BrandCardProps) {
  const { t } = useI18n();
  const status = statusConfig[brand.status];
  const industryStyle = industryConfig[brand.industry] || industryConfig.technology;

  return (
    <div className="flex flex-col justify-between rounded-xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 overflow-hidden">
      <div className="relative w-full aspect-video overflow-hidden">
        <CustomImage
          src={brand.coverImage}
          alt={brand.name}
          priority
          className="object-cover w-full h-full cursor-pointer transition-transform duration-500 hover:scale-105"
        />
      </div>
      {/* Brand Logo & Status */}
      <div className="p-5 pb-3">
        <div className="flex items-start justify-between gap-3 h-full">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <Badge variant={status.variant} className="text-xs">
                {t(`brands:status_${brand.status}`)}
              </Badge>
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded-full ${industryStyle.color} ${industryStyle.bg}`}
              >
                {t(`brands:industry_${brand.industry}`)}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <Building2 className="h-4 w-4" />
              <h3 className="font-semibold text-sm leading-tight line-clamp-1">
                Brand: {brand.name}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <Handshake className="h-4 w-4 text-muted-foreground" />
              {brand.agency && (
                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                  Agency: {brand.agency.name}
                </p>
              )}
            </div>
          </div>

          {/* Menu */}
          <div className="flex flex-col justify-between items-center gap-2 h-full">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="cursor-pointer h-8 w-8 shrink-0">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => onView?.(brand)}>
                  <Eye className="mr-2 h-4 w-4" />
                  {t('brands:view')}
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => onEdit?.(brand)}>
                  <Edit className="mr-2 h-4 w-4" />
                  {t('brands:edit')}
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem onClick={() => onDelete?.(brand)} variant="destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  {t('brands:delete')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Switch defaultChecked />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t bg-sidebar-active">
        <div className="flex items-center gap-3 text-xs text-white">
          <div className="flex items-center gap-1.5">
            <Megaphone className="h-3.5 w-3.5" />
            <span>
              {brand.campaignCount} {t('brands:campaigns')}
            </span>
          </div>
          {brand.website && (
            <a
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 ml-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Globe className="h-3.5 w-3.5" />
              <span>{t('brands:website')}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
