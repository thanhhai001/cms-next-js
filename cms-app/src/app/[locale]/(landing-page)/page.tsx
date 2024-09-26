import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { I18nLocale } from '@/definitions';
import Home from '@/pages/Home';

export default function HomePage({ params: { locale } }: { params: { locale: I18nLocale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('pages.home');

  return (
    <>
      <div>
        <h1 className='text-rose-400'>{t('title')}</h1>
      </div>
      <Home />
    </>
  );
}