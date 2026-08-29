'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MarketingLayout } from '@/components/layout';
import { images } from '@/shared/assets';
import { useI18n } from '@/hooks/useI18n';

export default function NotFound() {
  const { t } = useI18n();
  return (
    <MarketingLayout>
      <section className="flex min-h-[60vh] items-center justify-center px-4 py-20">
        <div className="mx-auto max-w-md text-center">
          <Image
            src={images.noBranchs}
            alt={t('notFound.title')}
            width={200}
            height={128}
            className="mx-auto mb-8"
            priority
          />
          <h1 className="mb-3 text-3xl font-bold text-slate-900">{t('notFound.title')}</h1>
          <p className="mb-8 text-slate-600">{t('notFound.description')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/">
              <Button className="cursor-pointer bg-cyan-500 hover:bg-cyan-600">
                {t('notFound.backToHome')}
              </Button>
            </Link>
            <Link href="/support">
              <Button className="cursor-pointer" variant="outline">
                {t('notFound.goToSupport')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
