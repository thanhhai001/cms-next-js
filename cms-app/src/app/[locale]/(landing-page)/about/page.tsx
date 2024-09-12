import { I18nParams } from '@/definitions';
import { useLocaleStaticParam } from '@/hooks';

export default function HomePage({ params: { locale } }: I18nParams) {
  const t = useLocaleStaticParam(locale, 'pages.about');

  return (
    <div>
      <h1 className='text-green-400'>{t('title')}</h1>
    </div>
  );
}