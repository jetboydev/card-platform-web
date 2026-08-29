'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Slot } from '@radix-ui/react-slot';
import { PanelLeftClose, PanelLeft, BellDot } from 'lucide-react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface SidebarContextValue {
  state: 'expanded' | 'collapsed';
  isMobile: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  toggleSidebar: () => void;
}

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.');
  }
  return context;
}

interface SidebarProviderProps extends React.ComponentProps<'div'> {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  style,
  children,
  ...props
}: SidebarProviderProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  const [openMobile, setOpenMobile] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setIsMobile(isMobile);
      if (isMobile) {
        setOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openValue = openProp ?? open;
  const setOpenValue = setOpenProp ?? setOpen;

  const toggleSidebar = React.useCallback(() => {
    if (isMobile) {
      setOpenMobile((prev) => !prev);
    } else {
      setOpenValue(!openValue);
    }
  }, [isMobile, openValue, setOpenValue]);

  const state = openValue ? 'expanded' : 'collapsed';

  const contextValue = React.useMemo<SidebarContextValue>(
    () => ({
      state,
      isMobile,
      open: openValue,
      setOpen: setOpenValue,
      openMobile,
      setOpenMobile: setOpenMobile,
      toggleSidebar,
    }),
    [state, isMobile, openValue, setOpenValue, openMobile, toggleSidebar]
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-state={state}
          data-mobile={isMobile}
          className="group-sidebar group flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar flex-1"
          style={
            {
              '--sidebar-width': '16rem',
              '--sidebar-width-mobile': '18rem',
              ...style,
            } as React.CSSProperties
          }
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
}

interface SidebarProps extends React.ComponentProps<'aside'> {
  side?: 'left' | 'right';
  variant?: 'sidebar' | 'floating' | 'inset';
  collapsible?: 'offcanvas' | 'icon' | 'none';
}

function Sidebar({
  side = 'left',
  variant = 'sidebar',
  collapsible = 'offcanvas',
  className,
  children,
  ...props
}: SidebarProps) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === 'none') {
    return (
      <aside
        data-state={state}
        data-side={side}
        className={cn('flex w-full flex-col bg-sidebar text-sidebar-accent-foreground', className)}
        {...props}
      >
        {children}
      </aside>
    );
  }

  if (isMobile) {
    return (
      <>
        {openMobile && (
          <div
            className="fixed inset-0 z-40 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
            onClick={() => setOpenMobile(false)}
          />
        )}
        <aside
          data-state={openMobile ? 'open' : 'closed'}
          data-side={side}
          className={cn(
            'fixed inset-y-0 z-50 flex h-full w-[--sidebar-width-mobile] flex-col bg-sidebar text-sidebar-accent-foreground transition-transform duration-300 ease-in-out',
            side === 'left' ? 'left-0' : 'right-0',
            openMobile
              ? 'translate-x-0'
              : side === 'left'
                ? '-translate-x-full'
                : 'translate-x-full',
            className
          )}
          {...props}
        >
          {children}
        </aside>
      </>
    );
  }

  return (
    <aside
      data-state={state}
      data-side={side}
      data-variant={variant}
      className={cn(
        'group/sidebar peer hidden md:block overflow-hidden',
        'transition-[width] duration-200 ease-in-out',
        state === 'expanded' ? 'w-[--sidebar-width]' : 'w-[70px]',
        className
      )}
      {...props}
    >
      {children}
    </aside>
  );
}

function SidebarHeader({ className, ...props }: React.ComponentProps<'div'>) {
  const { state } = useSidebar();

  return (
    <div
      data-state={state}
      className={cn(
        'flex h-16 shrink-0 items-center border-b border-sidebar-border px-4',
        state === 'collapsed' && 'justify-center px-2',
        className
      )}
      {...props}
    />
  );
}

function SidebarContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex flex-1 flex-col gap-2 overflow-auto py-2', className)} {...props} />
  );
}

function SidebarFooter({ className, ...props }: React.ComponentProps<'div'>) {
  const { state } = useSidebar();

  return (
    <div
      data-state={state}
      className={cn(
        'flex flex-col gap-2 border-t border-sidebar-border p-4',
        state === 'collapsed' && 'items-center px-2',
        className
      )}
      {...props}
    />
  );
}

interface SidebarTriggerProps extends React.ComponentProps<'button'> {
  asChild?: boolean;
}

function SidebarTrigger({ className, asChild, onClick, ...props }: SidebarTriggerProps) {
  const { state, toggleSidebar } = useSidebar();

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      className={cn(
        'inline-flex items-center cursor-pointer transition-all duration-200 justify-center rounded-md p-2 text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-1 focus-visible:ring-ring',
        className
      )}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      {state === 'collapsed' ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </Comp>
  );
}

interface SidebarNavProps extends React.ComponentProps<'nav'> {
  items: Array<{
    title: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    badge?: string | number;
  }>;
}

function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = useSidebarPathname();
  const { state } = useSidebar();

  return (
    <nav className={cn('space-y-1.5 px-2', className)} {...props}>
      {items.map((item) => {
        const Icon = item.icon;
        const isActive =
          pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href + '/'));

        const linkContent = (
          <div
            className={cn(
              'group relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200',
              state === 'collapsed' && 'justify-center px-2',
              isActive
                ? 'bg-sidebar-active/10 text-sidebar-active shadow-sm'
                : 'text-sidebar-accent-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
            )}
          >
            {isActive && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 rounded-r-full bg-sidebar-active" />
            )}
            <Icon
              className={cn(
                'h-5 w-5 shrink-0',
                state === 'collapsed' && 'h-5 w-5',
                isActive && 'text-sidebar-active'
              )}
            />
            {state === 'expanded' && (
              <>
                <span className="flex-1">{item.title}</span>
                {item.badge && (
                  <span
                    className={cn(
                      'ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-sidebar-active px-1.5 text-xs font-bold text-white'
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </div>
        );

        if (state === 'collapsed') {
          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    'block rounded-lg transition-all duration-200',
                    isActive && 'bg-sidebar-active/10 shadow-sm'
                  )}
                >
                  {linkContent}
                </Link>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                sideOffset={8}
                className="bg-sidebar-active text-white border-0"
              >
                <p className="font-medium text-white">{item.title}</p>
                <div className="flex items-center gap-1 mt-1">
                  <BellDot className="h-4 w-4" />
                  {item.badge && (
                    <div className="text-xs font-bold text-sidebar-active rounded-full bg-white w-5 h-5 flex items-center justify-center">
                      {item.badge}
                    </div>
                  )}
                </div>
              </TooltipContent>
            </Tooltip>
          );
        }

        return (
          <Link key={item.href} href={item.href} className="block">
            {linkContent}
          </Link>
        );
      })}
    </nav>
  );
}

function useSidebarPathname() {
  const pathname = usePathname();
  return pathname;
}

function SidebarRail({ className, ...props }: React.ComponentProps<'button'>) {
  const { state, toggleSidebar } = useSidebar();

  if (state === 'collapsed') {
    return (
      <button
        data-sidebar="rail"
        data-slot="sidebar-rail"
        aria-label="Toggle sidebar"
        className={cn(
          'absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-1/2 transform rounded-full border bg-sidebar p-1 shadow-md hover:bg-sidebar-accent',
          className
        )}
        onClick={toggleSidebar}
        {...props}
      >
        <PanelLeft className="h-4 w-4" />
      </button>
    );
  }

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle sidebar"
      className={cn(
        'absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-1/2 transform rounded-full border bg-sidebar p-1 shadow-md opacity-0 transition-opacity hover:bg-sidebar-accent group-hover/sidebar:opacity-100',
        className
      )}
      onClick={toggleSidebar}
      {...props}
    >
      <PanelLeftClose className="h-4 w-4" />
    </button>
  );
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarNav,
  SidebarProvider,
  SidebarTrigger,
  SidebarRail,
  useSidebar,
};
