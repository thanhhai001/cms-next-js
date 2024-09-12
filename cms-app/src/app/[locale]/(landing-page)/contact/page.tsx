import { I18nParams } from '@/definitions';
import { useLocaleStaticParam } from '@/hooks';

export default function ContactPage({ params: { locale } }: I18nParams) {
  const t = useLocaleStaticParam(locale, 'pages.contact');

  return (
    <div>
      <h1 className='text-sky-400'>{t('title')}</h1>
    </div>
  );
}