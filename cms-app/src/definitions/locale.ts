enum I18nLocaleEnum { VI = 'vi', EN = 'en', JA = 'ja' }
const localeValues = Object.values(I18nLocaleEnum);
const localeDefault = I18nLocaleEnum.VI;
type I18nLocale = I18nLocaleEnum.VI | I18nLocaleEnum.EN | I18nLocaleEnum.JA;
type I18nParams = { params: { locale: I18nLocale, id?: string } }

export type { I18nLocale, I18nParams }
export { I18nLocaleEnum, localeValues, localeDefault }

