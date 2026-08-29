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
import { BrandCard } from './brand-card';
import type { Brand, BrandStatus, BrandIndustry, BrandStats } from '../types';
import { GenericPagination } from '@/components/layout/GenericPagination';

interface BrandListProps {
  initialBrands?: Brand[];
  initialStats?: BrandStats;
  isLoading?: boolean;
  onView?: (brand: Brand) => void;
  onEdit?: (brand: Brand) => void;
  onCreate?: () => void;
  onExport?: () => void;
  onRefresh?: () => void;
}

export function BrandList({
  initialBrands = [],
  isLoading = false,
  onView,
  onEdit,
  onCreate,
  onExport,
  onRefresh,
}: BrandListProps) {
  const { t } = useI18n();

  const [brands, setBrands] = React.useState<Brand[]>(initialBrands);
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState<BrandStatus | 'all'>('all');
  const [industryFilter, setIndustryFilter] = React.useState<BrandIndustry | 'all'>('all');
  const [agencyFilter, setAgencyFilter] = React.useState<string | 'all'>('all');
  const [deleteDialog, setDeleteDialog] = React.useState<{
    open: boolean;
    brand: Brand | null;
  }>({ open: false, brand: null });

  const filteredBrands = React.useMemo(() => {
    return brands.filter((brand) => {
      const matchesSearch = brand.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'all' || brand.status === statusFilter;
      const matchesIndustry = industryFilter === 'all' || brand.industry === industryFilter;
      const matchesAgency = agencyFilter === 'all' || brand.agency?.id === agencyFilter;
      return matchesSearch && matchesStatus && matchesIndustry && matchesAgency;
    });
  }, [brands, searchQuery, statusFilter, industryFilter, agencyFilter]);
  // Pagination
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 12;
  const totalItems = filteredBrands.length;
  const totalPages = Math.ceil(totalItems / pageSize) || 1;

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      onRefresh?.();
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleDelete = (brand: Brand) => {
    setDeleteDialog({ open: true, brand });
  };

  const confirmDelete = () => {
    if (deleteDialog.brand) {
      setBrands((prev) => prev.filter((b) => b.id !== deleteDialog.brand!.id));
      setDeleteDialog({ open: false, brand: null });
    }
  };

  const activeFiltersCount = [
    statusFilter !== 'all',
    industryFilter !== 'all',
    agencyFilter !== 'all',
  ].filter(Boolean).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t('brands:brands')}</h1>
          <p className="text-muted-foreground">{t('brands:manageYourBrands')}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleRefresh} disabled={isRefreshing}>
            <RefreshCw className={`mr-2 h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            {t('brands:refresh')}
          </Button>
          {onExport && (
            <Button variant="outline" size="sm" onClick={onExport}>
              <Download className="mr-2 h-4 w-4" />
              {t('brands:export')}
            </Button>
          )}
          {onCreate && (
            <Button size="sm" onClick={onCreate}>
              <Plus className="mr-2 h-4 w-4" />
              {t('brands:createBrand')}
            </Button>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between p-4 bg-sidebar-active shadow-sm rounded-lg">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t('brands:searchBrands')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Select value={agencyFilter} onValueChange={(v) => setAgencyFilter(v as string | 'all')}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder={t('brands:allAgencies')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('brands:allAgencies')}</SelectItem>
              <SelectItem value="agency1">Agency 1</SelectItem>
              <SelectItem value="agency2">Agency 2</SelectItem>
              <SelectItem value="agency3">Agency 3</SelectItem>
              <SelectItem value="agency4">Agency 4</SelectItem>
              <SelectItem value="agency5">Agency 5</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={industryFilter}
            onValueChange={(v) => setIndustryFilter(v as BrandIndustry | 'all')}
          >
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder={t('brands:allIndustries')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('brands:allIndustries')}</SelectItem>
              <SelectItem value="technology">{t('brands:industry_technology')}</SelectItem>
              <SelectItem value="fashion">{t('brands:industry_fashion')}</SelectItem>
              <SelectItem value="food">{t('brands:industry_food')}</SelectItem>
              <SelectItem value="beauty">{t('brands:industry_beauty')}</SelectItem>
              <SelectItem value="finance">{t('brands:industry_finance')}</SelectItem>
              <SelectItem value="healthcare">{t('brands:industry_healthcare')}</SelectItem>
              <SelectItem value="education">{t('brands:industry_education')}</SelectItem>
              <SelectItem value="automotive">{t('brands:industry_automotive')}</SelectItem>
              <SelectItem value="real_estate">{t('brands:industry_real_estate')}</SelectItem>
              <SelectItem value="entertainment">{t('brands:industry_entertainment')}</SelectItem>
              <SelectItem value="sports">{t('brands:industry_sports')}</SelectItem>
              <SelectItem value="travel">{t('brands:industry_travel')}</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={statusFilter}
            onValueChange={(v) => setStatusFilter(v as BrandStatus | 'all')}
          >
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder={t('brands:status')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('brands:allStatus')}</SelectItem>
              <SelectItem value="active">{t('brands:status_active')}</SelectItem>
              <SelectItem value="inactive">{t('brands:status_inactive')}</SelectItem>
              <SelectItem value="pending">{t('brands:status_pending')}</SelectItem>
            </SelectContent>
          </Select>
          {activeFiltersCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setStatusFilter('all');
                setIndustryFilter('all');
                setAgencyFilter('all');
                setSearchQuery('');
              }}
              className="text-muted-foreground bg-white cursor-pointer"
            >
              {t('brands:clearFilters')}
            </Button>
          )}
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-muted" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-muted rounded w-20" />
                    <div className="h-4 bg-muted rounded w-3/4" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-16 bg-muted rounded" />
                  <div className="h-16 bg-muted rounded" />
                  <div className="h-16 bg-muted rounded" />
                  <div className="h-16 bg-muted rounded" />
                </div>
                <div className="h-8 bg-muted rounded" />
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!isLoading && filteredBrands.length === 0 && (
        <div className="rounded-lg border bg-card p-12 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
              <LayoutGrid className="h-6 w-6 text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium text-muted-foreground">{t('brands:noBrandsFound')}</p>
              <p className="text-sm text-muted-foreground/70">{t('brands:getStartedByCreating')}</p>
            </div>
          </div>
        </div>
      )}

      {/* Grid View */}
      {!isLoading && filteredBrands.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredBrands.map((brand) => (
            <BrandCard
              key={brand.id}
              brand={brand}
              onView={onView}
              onEdit={onEdit}
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
        title={t('brands:deleteBrand')}
        description={t('brands:deleteConfirmation').replace(
          '{name}',
          deleteDialog.brand?.name ?? ''
        )}
        cancelText={t('brands:cancel')}
        confirmText={t('brands:delete')}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
