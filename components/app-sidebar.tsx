'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  Megaphone,
  Users,
  FileText,
  Settings,
  Shield,
  BarChart3,
  Bell,
  ChevronDown,
  Building2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarNav,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar';

import { useI18n } from '@/hooks/useI18n';

const adminNavConfig = [
  {
    key: 'dashboard',
    href: '/admin/dashboard',
    icon: LayoutDashboard,
  },
  {
    key: 'brands',
    href: '/admin/brands',
    icon: Building2,
  },
  {
    key: 'campaigns',
    href: '/admin/campaigns',
    icon: Megaphone,
  },
  {
    key: 'users',
    href: '/admin/users',
    icon: Users,
  },
  {
    key: 'analytics',
    href: '/admin/analytics',
    icon: BarChart3,
  },
  {
    key: 'documents',
    href: '/admin/documents',
    icon: FileText,
  },
];

const settingsNavConfig = [
  {
    key: 'settings',
    href: '/admin/settings',
    icon: Settings,
  },
  {
    key: 'notifications',
    href: '/admin/notifications',
    icon: Bell,
    badge: 3,
  },
];

interface NavGroupProps {
  title?: string;
  items: Array<{
    title: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    badge?: string | number;
  }>;
  defaultOpen?: boolean;
}

function NavGroup({ title, items, defaultOpen = true }: NavGroupProps) {
  const { state } = useSidebar();
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  if (state === 'collapsed') {
    return <SidebarNav items={items} />;
  }

  return (
    <div className="px-3 py-2 space-y-1">
      {title && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex w-full items-center justify-between px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-sidebar-accent-foreground/50 hover:text-sidebar-accent-foreground transition-colors duration-150"
        >
          <span>{title}</span>
          <ChevronDown
            className={cn(
              'h-4 w-4 transition-transform duration-200',
              isOpen ? 'rotate-0' : '-rotate-90'
            )}
          />
        </button>
      )}
      <div
        className={cn(
          'overflow-hidden transition-all duration-200 ease-in-out',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <SidebarNav items={items} />
      </div>
    </div>
  );
}

function AppHeader() {
  const { state } = useSidebar();
  const { t } = useI18n();
  const isCollapsed = state === 'collapsed';

  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-active text-white shadow-sm transition-transform group-hover:scale-105 shrink-0">
        <Shield className="h-4 w-4" />
      </div>
      {!isCollapsed && (
        <div className="flex flex-col gap-0.5 overflow-hidden transition-all duration-200 ease-in-out">
          <span className="text-sm font-bold whitespace-nowrap">{t('sidebar.appName')}</span>
          <span className="text-xs text-sidebar-accent-foreground/60 whitespace-nowrap">
            {t('sidebar.appSub')}
          </span>
        </div>
      )}
    </Link>
  );
}

export function AppSidebar() {
  const { t } = useI18n();

  const adminNavItems = adminNavConfig.map((item) => ({
    title: t(`sidebar.${item.key}`),
    href: item.href,
    icon: item.icon,
  }));

  const settingsNavItems = settingsNavConfig.map((item) => ({
    title: t(`sidebar.${item.key}`),
    href: item.href,
    icon: item.icon,
    badge: item.badge,
  }));

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader>
        <AppHeader />
      </SidebarHeader>

      <SidebarContent className="h-[75%]">
        <NavGroup title={t('sidebar.main')} items={adminNavItems} />
        <NavGroup title={t('sidebar.system')} items={settingsNavItems} />
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
