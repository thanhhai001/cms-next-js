enum I18nLocaleEnum {
    VI = 'vi',
    EN = 'en',
    JA = 'ja'
}

type I18nLocale = I18nLocaleEnum.VI | I18nLocaleEnum.EN | I18nLocaleEnum.JA;

const localeValues = Object.values(I18nLocaleEnum);

const localeDefault = I18nLocaleEnum.VI;

export { type I18nLocale, I18nLocaleEnum, localeValues, localeDefault }