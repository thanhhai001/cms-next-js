import { I18nParams } from '@/definitions';
import { useLocaleStaticParam } from '@/hooks';

export default function HomePage({ params: { locale } }: I18nParams) {
  const t = useLocaleStaticParam(locale, 'pages.home')

  return (
    <div>
      <h1 className='text-rose-400'>{t('title')}</h1>
    </div>
  );
}