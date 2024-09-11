import { I18nLocale } from '@/definitions';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function OtherPage({ params: { locale } }: { params: { locale: I18nLocale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('pages.other');

  return (
    <div>
      <h1 className='text-stone-600'>{t('title')}</h1>
    </div>
  );
}