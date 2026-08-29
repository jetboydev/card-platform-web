'use client';
import Link from 'next/link';
import { Menu, X, Languages, ChevronRight, ChevronDown } from 'lucide-react';
import { icons } from '@/shared/assets';
import { LANGUAGES } from '@/constants/lang';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/hooks/useI18n';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = usePathname();
  const { t, currentLanguage, changeLanguage, isHydrated } = useI18n();
  const displayedLanguage = isHydrated ? currentLanguage : LANGUAGES.VI;
  const navigation = [
    { name: t('common:header.home'), href: '/' },
    { name: t('common:header.products'), href: '/products' },
    { name: t('common:header.about'), href: '/about' },
    { name: t('common:header.support'), href: '/support' },
    { name: t('common:header.contact'), href: '/contact' },
  ];

  const productSubItems = [
    {
      title: t('common:header.translation'),
      href: '/products#text-translation',
      description: t('common:header.translationDescription'),
    },
    {
      title: t('common:header.documentTranslation'),
      href: '/products#document-translation',
      description: t('common:header.documentTranslationDescription'),
    },
    {
      title: t('common:header.translationApi'),
      href: '/products#api',
      description: t('common:header.translationApiDescription'),
    },
    {
      title: t('common:header.aiTranslation'),
      href: '/products#ai-translation',
      description: t('common:header.aiTranslationDescription'),
    },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav
        className="container mx-auto flex items-center justify-between p-4 lg:px-8"
        aria-label={t('common:header.globalNavigation')}
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Image
              width={120}
              src={icons.iconLogoTranxText1V}
              alt="iconLogoTranxText"
              className="object-cover cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">
              {mobileMenuOpen ? t('common:header.closeMenu') : t('common:header.openMenu')}
            </span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger showIcon={false} customNaviga={true}>
                  <Link href="/">{t('common:header.home')}</Link>
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger customNaviga={true}>
                  <Link href="/products">{t('common:header.products')}</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <ListItem
                      className="flex flex-col"
                      href="/products#text-translation"
                      title={t('common:header.translation')}
                    >
                      {t('common:header.translationDescription')}
                    </ListItem>

                    <ListItem
                      href="/products#document-translation"
                      title={t('common:header.documentTranslation')}
                    >
                      {t('common:header.documentTranslationDescription')}
                    </ListItem>

                    <ListItem href="/products#api" title={t('common:header.translationApi')}>
                      {t('common:header.translationApiDescription')}
                    </ListItem>

                    <ListItem
                      href="/products#ai-translation"
                      title={t('common:header.aiTranslation')}
                    >
                      {t('common:header.aiTranslationDescription')}
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger showIcon={false} customNaviga={true}>
                  <Link href="/about">{t('common:header.about')}</Link>
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger showIcon={false} customNaviga={true}>
                  <Link href="/support">{t('common:header.support')}</Link>
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger showIcon={false} customNaviga={true}>
                  <Link href="/contact">{t('common:header.contact')}</Link>
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Select value={displayedLanguage} onValueChange={changeLanguage}>
            <SelectTrigger className="w-[140px]">
              <Image
                width={16}
                src={displayedLanguage === 'vi' ? icons.iconVN : icons.iconUS}
                alt="iconLogoTranxText"
                className="object-cover cursor-pointer"
                priority
              />
              <SelectValue placeholder={t('common:header.language')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={LANGUAGES.VI}>{t('common:vi')}</SelectItem>
              <SelectItem value={LANGUAGES.EN}>{t('common:en')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white shadow-lg">
          <div className="space-y-1 px-4 pb-6 pt-3">
            {navigation.map((item) => {
              const isProducts = item.href === '/products';
              return (
                <div key={item.name} className="space-y-1">
                  <div
                    className={`flex items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors ${
                      isActive(item.href)
                        ? 'bg-cyan-50 text-cyan-600'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Link
                      href={item.href}
                      className="flex-1 font-semibold hover:text-cyan-600 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>

                    {isProducts && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setMobileProductsOpen(!mobileProductsOpen);
                        }}
                        className="p-1 rounded-md text-slate-500 hover:text-cyan-600 hover:bg-cyan-100/60 transition-colors cursor-pointer ml-2 flex-shrink-0"
                        aria-label="Toggle sub-menu"
                      >
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-200 ${
                            mobileProductsOpen ? 'rotate-180 text-cyan-600' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Sub-items for Products in Mobile Menu - Toggled by Arrow Click */}
                  {isProducts && mobileProductsOpen && (
                    <div className="pl-3 ml-3 border-l-2 border-cyan-500/40 space-y-1 py-1 animate-in fade-in-50 slide-in-from-top-1 duration-200">
                      {productSubItems.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          className="group flex items-center justify-between rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div>
                            <div className="font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors">
                              {sub.title}
                            </div>
                            <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                              {sub.description}
                            </div>
                          </div>
                          <ChevronRight className="h-4 w-4 text-cyan-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0 ml-2" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
              <Select value={displayedLanguage} onValueChange={changeLanguage}>
                <SelectTrigger className="w-full">
                  <Image
                    width={16}
                    src={displayedLanguage === 'vi' ? icons.iconVN : icons.iconUS}
                    alt="iconLogoTranxText"
                    className="object-cover cursor-pointer"
                    priority
                  />
                  <SelectValue placeholder={t('common:header.language')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={LANGUAGES.VI}>{t('common:vi')}</SelectItem>
                  <SelectItem value={LANGUAGES.EN}>{t('common:en')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="group flex flex-col justify-start items-start select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-cyan-50/60 focus:bg-cyan-50/60 cursor-pointer"
        >
          <div className="text-sm font-semibold leading-none flex items-center justify-between w-full text-slate-900 group-hover:text-cyan-600 transition-colors">
            <span>{title}</span>
            <ChevronRight className="h-4 w-4 text-cyan-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
          </div>
          <p className="line-clamp-2 text-xs leading-relaxed text-slate-500 group-hover:text-slate-600 pt-0.5">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
