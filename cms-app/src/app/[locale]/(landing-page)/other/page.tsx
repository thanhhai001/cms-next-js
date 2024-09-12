import { I18nParams } from '@/definitions';
import { useLocaleStaticParam } from '@/hooks';

export default function OtherPage({ params: { locale } }: I18nParams) {
  const t = useLocaleStaticParam(locale, 'pages.other');

  return (
    <div>
      <h1 className='text-stone-600'>{t('title')}</h1>
    </div>
  );
}