'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@/components/icons/social-icons';
import { useI18n } from '@/hooks/useI18n';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/tranx',
    icon: FacebookIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/tranx',
    icon: LinkedinIcon,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/tranx',
    icon: TwitterIcon,
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@tranx',
    icon: YoutubeIcon,
  },
];

export function Footer() {
  const { t } = useI18n('common');

  const footerNavigation = {
    product: [
      { name: t('footer.nav.products'), href: '/products' },
      { name: t('footer.nav.textTranslation'), href: '/products#text-translation' },
      { name: t('footer.nav.documentTranslation'), href: '/products#document-translation' },
      { name: t('footer.nav.translationApi'), href: '/products#api' },
    ],
    company: [
      { name: t('footer.nav.aboutUs'), href: '/about' },
      { name: t('footer.nav.contact'), href: '/contact' },
    ],
    support: [
      { name: t('footer.nav.supportCenter'), href: '/support' },
      { name: t('footer.nav.faq'), href: '/support#faq' },
      { name: t('footer.nav.apiDocs'), href: '/support#api-docs' },
      { name: t('footer.nav.contact'), href: '/contact' },
    ],
    legal: [
      { name: t('footer.nav.privacyPolicy'), href: '/privacy' },
      { name: t('footer.nav.termsOfService'), href: '/terms' },
      { name: t('footer.nav.cookiePolicy'), href: '/privacy#cookie-policy' },
    ],
  };

  return (
    <footer className="bg-slate-900 text-slate-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold text-white">TranX</span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-xs leading-relaxed">
              {t('footer.description')}
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-cyan-400" />
                <a href="mailto:support@tranx.vn" className="hover:text-cyan-400 transition-colors">
                  support@tranx.vn
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-cyan-400" />
                <a href="tel:1900xxxx" className="hover:text-cyan-400 transition-colors">
                  1900 xxxx
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span>{t('footer.location')}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-lg bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-8 lg:grid-cols-4">
            {/* Product */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">
                {t('footer.sections.product')}
              </h3>
              <ul className="space-y-3">
                {footerNavigation.product.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm hover:text-cyan-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">
                {t('footer.sections.company')}
              </h3>
              <ul className="space-y-3">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm hover:text-cyan-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">
                {t('footer.sections.support')}
              </h3>
              <ul className="space-y-3">
                {footerNavigation.support.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm hover:text-cyan-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">
                {t('footer.sections.legal')}
              </h3>
              <ul className="space-y-3">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm hover:text-cyan-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} TranX. {t('footer.rights')}
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                {t('footer.terms')}
              </Link>
              <Link href="/privacy#cookie-policy" className="hover:text-cyan-400 transition-colors">
                {t('footer.cookies')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
