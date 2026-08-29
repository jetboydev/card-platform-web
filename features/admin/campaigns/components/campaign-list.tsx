'use client';

import * as React from 'react';
import { Search, Plus, RefreshCw, Download, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ModalDelete } from '@/components/ui/modal-delete';
import { Card, CardContent } from '@/components/ui/card';
import { useI18n } from '@/hooks/useI18n';
import { CampaignCard } from './campaign-card';
import type { Campaign, CampaignStatus, CampaignType, CampaignStats } from '../types';
import { GenericPagination } from '@/components/layout/GenericPagination';

interface CampaignListProps {
  initialCampaigns?: Campaign[];
  initialStats?: CampaignStats;
  isLoading?: boolean;
  onView?: (campaign: Campaign) => void;
  onEdit?: (campaign: Campaign) => void;
  onCreate?: () => void;
  onExport?: () => void;
  onRefresh?: () => void;
}

export function CampaignList({
  initialCampaigns = [],
  isLoading = false,
  onView,
  onEdit,
  onCreate,
  onExport,
  onRefresh,
}: CampaignListProps) {
  const { t } = useI18n();

  const [campaigns, setCampaigns] = React.useState<Campaign[]>(initialCampaigns);
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState<CampaignStatus | 'all'>('all');
  const [typeFilter, setTypeFilter] = React.useState<CampaignType | 'all'>('all');
  const [agencyFilter, setAgencyFilter] = React.useState<string | 'all'>('all');
  const [brandFilter, setBrandFilter] = React.useState<string | 'all'>('all');
  const [deleteDialog, setDeleteDialog] = React.useState<{
    open: boolean;
    campaign: Campaign | null;
  }>({ open: false, campaign: null });

  const filteredCampaigns = React.useMemo(() => {
    return campaigns.filter((campaign) => {
      const matchesSearch = campaign.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'all' || campaign.status === statusFilter;
      const matchesType = typeFilter === 'all' || campaign.type === typeFilter;
      const matchesAgency = agencyFilter === 'all' || campaign.agency?.id === agencyFilter;
      const matchesBrand = brandFilter === 'all' || campaign.brand?.id === brandFilter;
      return matchesSearch && matchesStatus && matchesType && matchesAgency && matchesBrand;
    });
  }, [campaigns, searchQuery, statusFilter, typeFilter, agencyFilter, brandFilter]);

  // Pagination
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 12;
  const totalItems = filteredCampaigns.length;
  const totalPages = Math.ceil(totalItems / pageSize) || 1;

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      onRefresh?.();
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleDelete = (campaign: Campaign) => {
    setDeleteDialog({ open: true, campaign });
  };

  const confirmDelete = () => {
    if (deleteDialog.campaign) {
      setCampaigns((prev) => prev.filter((c) => c.id !== deleteDialog.campaign!.id));
      setDeleteDialog({ open: false, campaign: null });
    }
  };

  const handlePause = (campaign: Campaign) => {
    setCampaigns((prev) =>
      prev.map((c) => (c.id === campaign.id ? { ...c, status: 'paused' as CampaignStatus } : c))
    );
  };

  const handleResume = (campaign: Campaign) => {
    setCampaigns((prev) =>
      prev.map((c) => (c.id === campaign.id ? { ...c, status: 'active' as CampaignStatus } : c))
    );
  };

  const activeFiltersCount = [
    statusFilter !== 'all',
    typeFilter !== 'all',
    agencyFilter !== 'all',
    brandFilter !== 'all',
  ].filter(Boolean).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t('campaigns:campaigns')}</h1>
          <p className="text-muted-foreground">{t('campaigns:manageYourCampaigns')}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleRefresh} disabled={isRefreshing}>
            <RefreshCw className={`mr-2 h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            {t('campaigns:refresh')}
          </Button>
          {onExport && (
            <Button variant="outline" size="sm" onClick={onExport}>
              <Download className="mr-2 h-4 w-4" />
              {t('campaigns:export')}
            </Button>
          )}
          {onCreate && (
            <Button size="sm" onClick={onCreate}>
              <Plus className="mr-2 h-4 w-4" />
              {t('campaigns:createCampaign')}
            </Button>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between p-4 bg-sidebar-active shadow-sm rounded-lg">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t('campaigns:searchCampaigns')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex items-center gap-2">
          <Select value={brandFilter} onValueChange={(v) => setBrandFilter(v as string | 'all')}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder={t('campaigns:allBrands')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('campaigns:allBrands')}</SelectItem>
              <SelectItem value="brand1">Brand 1</SelectItem>
              <SelectItem value="brand2">Brand 2</SelectItem>
              <SelectItem value="brand3">Brand 3</SelectItem>
              <SelectItem value="brand4">Brand 4</SelectItem>
              <SelectItem value="brand5">Brand 5</SelectItem>
            </SelectContent>
          </Select>
          <Select value={agencyFilter} onValueChange={(v) => setAgencyFilter(v as string | 'all')}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder={t('campaigns:allAgencies')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('campaigns:allAgencies')}</SelectItem>
              <SelectItem value="agency1">Agency 1</SelectItem>
              <SelectItem value="agency2">Agency 2</SelectItem>
              <SelectItem value="agency3">Agency 3</SelectItem>
              <SelectItem value="agency4">Agency 4</SelectItem>
              <SelectItem value="agency5">Agency 5</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={statusFilter}
            onValueChange={(v) => setStatusFilter(v as CampaignStatus | 'all')}
          >
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder={t('campaigns:status')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('campaigns:allStatus')}</SelectItem>
              <SelectItem value="active">{t('campaigns:status_active')}</SelectItem>
              <SelectItem value="pending">{t('campaigns:status_pending')}</SelectItem>
              <SelectItem value="paused">{t('campaigns:status_paused')}</SelectItem>
              <SelectItem value="completed">{t('campaigns:status_completed')}</SelectItem>
              <SelectItem value="draft">{t('campaigns:status_draft')}</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={typeFilter}
            onValueChange={(v) => setTypeFilter(v as CampaignType | 'all')}
          >
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder={t('campaigns:type')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('campaigns:allTypes')}</SelectItem>
              <SelectItem value="awareness">{t('campaigns:type_awareness')}</SelectItem>
              <SelectItem value="engagement">{t('campaigns:type_engagement')}</SelectItem>
              <SelectItem value="conversion">{t('campaigns:type_conversion')}</SelectItem>
              <SelectItem value="retention">{t('campaigns:type_retention')}</SelectItem>
            </SelectContent>
          </Select>
          {activeFiltersCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setStatusFilter('all');
                setTypeFilter('all');
                setSearchQuery('');
              }}
              className="text-muted-foreground bg-white cursor-pointer"
            >
              {t('campaigns:clearFilters')}
            </Button>
          )}
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-5 space-y-4">
                <div className="h-4 bg-muted rounded w-20" />
                <div className="h-6 bg-muted rounded w-3/4" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-12 bg-muted rounded" />
                  <div className="h-12 bg-muted rounded" />
                  <div className="h-12 bg-muted rounded" />
                  <div className="h-12 bg-muted rounded" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!isLoading && filteredCampaigns.length === 0 && (
        <div className="rounded-lg border bg-card p-12 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
              <LayoutGrid className="h-6 w-6 text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium text-muted-foreground">{t('campaigns:noCampaignsFound')}</p>
              <p className="text-sm text-muted-foreground/70">
                {t('campaigns:getStartedByCreating')}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Grid View */}
      {!isLoading && filteredCampaigns.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {filteredCampaigns.map((campaign) => (
            <CampaignCard
              key={campaign.id}
              campaign={campaign}
              onView={onView}
              onEdit={onEdit}
              onPause={handlePause}
              onResume={handleResume}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
      <GenericPagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        showFirstLast={false}
        showPageInfo={false}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
        showTotal={false}
        className="flex-col gap-6"
      />

      {/* Delete Confirmation Dialog */}
      <ModalDelete
        open={deleteDialog.open}
        onOpenChange={(open) => setDeleteDialog((prev) => ({ ...prev, open }))}
        title={t('campaigns:deleteCampaign')}
        description={t('campaigns:deleteConfirmation').replace(
          '{name}',
          deleteDialog.campaign?.name ?? ''
        )}
        cancelText={t('campaigns:cancel')}
        confirmText={t('campaigns:delete')}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
