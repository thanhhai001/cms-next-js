import { I18nLocale } from '@/definitions';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function ContactPage({ params: { locale } }: { params: { locale: I18nLocale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('pages.contact');

  return (
    <div>
      <h1 className='text-sky-400'>{t('title')}</h1>
    </div>
  );
}