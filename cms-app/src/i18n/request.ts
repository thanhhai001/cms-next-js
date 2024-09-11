import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "./routing";
import { I18nLocale } from "@/definitions";

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale as I18nLocale)) notFound();

  return {
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});