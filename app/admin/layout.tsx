'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldAlert, Home, LogIn } from 'lucide-react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { AdminHeader } from '@/components/layout/admin-header';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/stores/auth.store';
import { ROUTES } from '@/constants';
import { useI18n } from '@/hooks/useI18n';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const { isAuthenticated, user } = useAuthStore();
  const { t } = useI18n();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // HARDCODED AUTH & ROLE CHECK
  const HARDCODED_IS_LOGGED_IN = false;
  const HARDCODED_IS_ADMIN = false;

  const isLoggedIn = (isHydrated && isAuthenticated) || HARDCODED_IS_LOGGED_IN;
  const isAdmin = (isHydrated && user?.role === 'admin') || HARDCODED_IS_ADMIN;
  const hasAdminAccess = isLoggedIn && isAdmin;

  if (!isHydrated) {
    return null;
  }

  if (!hasAdminAccess) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 p-4">
        <div className="max-w-md w-full text-center space-y-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
          <div className="h-20 w-20 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto shadow-lg shadow-red-500/10">
            <ShieldAlert className="h-10 w-10" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-slate-900">{t('unauthorized.title')}</h1>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t('unauthorized.description')}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={ROUTES.HOME}>
              <Button className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 cursor-pointer">
                <Home className="mr-2 h-4 w-4" />
                {t('unauthorized.backToHome')}
              </Button>
            </Link>

            {!isLoggedIn && (
              <Link href={ROUTES.LOGIN}>
                <Button variant="outline" className="w-full sm:w-auto cursor-pointer">
                  <LogIn className="mr-2 h-4 w-4" />
                  {t('unauthorized.login')}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <div className="flex flex-1 flex-col min-h-screen">
        <AdminHeader
          showSearch={true}
          showNotifications={true}
          showUser={true}
          showLangSwitcher={true}
        />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </SidebarProvider>
  );
}
