'use client';

import { SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Bell, Check, LogOut, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useI18n } from '@/hooks/useI18n';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants';
import Image from 'next/image';
import { icons, LANGUAGES } from '@/shared/assets';

interface AdminHeaderProps {
  title?: string;
  showSearch?: boolean;
  showNotifications?: boolean;
  showUser?: boolean;
  showLangSwitcher?: boolean;
}

export function AdminHeader({
  title = 'Admin Dashboard',
  showSearch = false,
  showNotifications = false,
  showUser = false,
  showLangSwitcher = false,
}: AdminHeaderProps) {
  const { currentLanguage, changeLanguage, isHydrated } = useI18n();
  const { t } = useI18n();
  const router = useRouter();
  const currentLang = LANGUAGES.find((l) => l.code === currentLanguage);
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />

      <div className="flex items-center gap-2">
        {showSearch ? (
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-10 h-9" />
            </div>
          </div>
        ) : (
          <span className="text-sm text-muted-foreground">{title}</span>
        )}

        <div className="flex items-center gap-2 ml-auto">
          {showNotifications && (
            <Button variant="ghost" size="icon" className="relative cursor-pointer">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-sidebar-active" />
            </Button>
          )}
          <Separator orientation="vertical" className="h-4" />

          {showUser && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="cursor-pointer border-none">
                  <User className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" side="bottom" className="w-56">
                <div className="flex items-center gap-3 px-2 py-1.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium shrink-0">
                    <User className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                    <span className="text-sm font-medium truncate">Admin User</span>
                    <span className="text-xs text-muted-foreground truncate">
                      admin@example.com
                    </span>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => router.push(ROUTES.LOGIN)}
                  className="cursor-pointer text-destructive focus:text-destructive"
                  variant="destructive"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <Separator orientation="vertical" className="h-4 mr-4" />

          {showLangSwitcher && (
            <div className="flex items-center justify-center w-24">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="cursor-pointer h-8 gap-1.5 px-2 text-xs font-medium"
                  >
                    {isHydrated ? (
                      <Image
                        src={currentLang?.icon ?? icons.iconUS}
                        alt="flag"
                        width={16}
                        height={16}
                      />
                    ) : (
                      <div className="h-4 w-4" />
                    )}
                    {isHydrated ? (currentLang ? t(currentLang.label) : '...') : '...'}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" side="bottom" className="w-auto">
                  {LANGUAGES.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="flex items-center justify-between w-auto"
                    >
                      <div className="flex items-center gap-1">
                        <Image src={lang.icon} alt="flag" width={16} height={16} />
                        <span>{t(lang.label)}</span>
                      </div>
                      {currentLanguage === lang.code && <Check className="h-3.5 w-3.5" />}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
