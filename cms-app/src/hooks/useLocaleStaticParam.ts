import { I18nLocale } from "@/definitions";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export function useLocaleStaticParam(locale: I18nLocale, translateKey?: string) {
  unstable_setRequestLocale(locale);
  const t = useTranslations(translateKey ?? '')
  return t
}