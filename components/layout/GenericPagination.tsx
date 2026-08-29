'use client';

import { useI18n } from '@/hooks/useI18n';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

export interface GenericPaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  pageSizeOptions?: number[];
  showPageSizeSelector?: boolean;
  showFirstLast?: boolean;
  maxVisiblePages?: number;
  className?: string;
  showTotal?: boolean;
  showPageInfo?: boolean;
  showCustomerInfo?: boolean;
  infoLabel?: string;
}

export function GenericPagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [10, 20, 50, 100],
  showPageSizeSelector = false,
  showFirstLast = true,
  maxVisiblePages = 5,
  className,
  showTotal = true,
  showPageInfo = true,
  showCustomerInfo = false,
  infoLabel = 'items',
}: GenericPaginationProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { t } = useI18n() as { t: (key: string, opts?: any) => string };
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  const getVisiblePages = () => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [];
    const half = Math.floor(maxVisiblePages / 2);

    // Always show first page
    pages.push(1);

    if (currentPage > half + 1) {
      pages.push('...');
    }

    const start = Math.max(2, currentPage - half);
    const end = Math.min(totalPages - 1, currentPage + half);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - half - 1) {
      pages.push('...');
    }

    // Always show last page if more than 1 page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const handlePageSizeChange = (newPageSize: number) => {
    if (onPageSizeChange) {
      onPageSizeChange(newPageSize);
      onPageChange(1);
    }
  };

  return (
    <div className={cn('flex items-center justify-between', className)}>
      {/* Left side - Page info and total */}
      <div className="flex items-center gap-4">
        {showTotal && (
          <div className="text-sm text-muted-foreground">
            {t('common:total_items', { count: totalItems })}
          </div>
        )}

        {showPageInfo && totalItems > 0 && (
          <div className="text-sm text-muted-foreground">
            {t('common:showing_items', {
              start: startItem.toLocaleString(),
              end: endItem.toLocaleString(),
              total: totalItems.toLocaleString(),
            })}
            {' ' + t(infoLabel)}
          </div>
        )}
        {showCustomerInfo && totalItems > 0 && (
          <div className="text-sm text-muted-foreground">
            {t('common:showing_items', {
              start: startItem.toLocaleString(),
              end: endItem.toLocaleString(),
              total: totalItems.toLocaleString(),
            })}
            {' ' + t('customers')}
          </div>
        )}
      </div>

      {/* Right side - Page size selector and pagination */}
      <div className="flex items-center gap-4">
        {/* Page size selector */}
        {showPageSizeSelector && onPageSizeChange && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">{t('common:show')}</span>
            <select
              value={pageSize}
              onChange={(e) => handlePageSizeChange(Number(e.target.value))}
              className="border rounded px-2 py-1 text-sm bg-background"
              aria-label="Items per page"
            >
              {pageSizeOptions.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <span className="text-sm text-muted-foreground">{t('common:per_page')}</span>
          </div>
        )}

        {/* Pagination controls */}
        <div className="flex items-center gap-3">
          {/* First page button */}
          {showFirstLast && (
            <Button
              variant="outline"
              size="icon"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(1)}
              aria-label={t('common:go_to_first_page')}
              className="h-8 w-8 cursor-pointer"
            >
              <ChevronsLeft className="h-4 w-4" />
            </Button>
          )}

          {/* Previous page button */}
          <Button
            variant="outline"
            size="icon"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            aria-label={t('common:go_to_previous_page')}
            className="h-8 w-8 border border-[#002D6D] disabled:bg-opacity-100 cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4 text-[#002D6D]" />
          </Button>

          {/* Page numbers */}
          {getVisiblePages().map((page, index) => (
            <Button
              key={index}
              variant={page === currentPage ? 'default' : 'outline'}
              size="icon"
              disabled={page === '...'}
              onClick={() => typeof page === 'number' && handlePageChange(page)}
              className={`h-8 w-8 border text-[#002D6D] duration-100 font-bold text-sm cursor-pointer
                ${currentPage === page ? 'border-white bg-sidebar-active text-white hover:bg-sidebar-active hover:border-[#002D6D] cursor-pointer-none' : 'border-none shadow-none'}
                `}
              aria-label={
                page === '...' ? t('common:more_pages') : t('common:go_to_page', { page })
              }
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </Button>
          ))}

          {/* Next page button */}
          <Button
            variant="outline"
            size="icon"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            aria-label={t('common:go_to_next_page')}
            className="h-8 w-8 border-[#002D6D] disabled:bg-opacity-100 cursor-pointer"
          >
            <ChevronRight className="h-4 w-4 text-[#002D6D]" />
          </Button>

          {/* Last page button */}
          {showFirstLast && (
            <Button
              variant="outline"
              size="icon"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(totalPages)}
              aria-label={t('common:go_to_last_page')}
              className="h-8 w-8 cursor-pointer"
            >
              <ChevronsRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
