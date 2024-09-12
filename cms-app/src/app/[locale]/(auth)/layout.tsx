import { I18nLocale } from "@/definitions";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function LandingPagegLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: I18nLocale };
}>) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <main>{children}</main>
    </>
  );
}
