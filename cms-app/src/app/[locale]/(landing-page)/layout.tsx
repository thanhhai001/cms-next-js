import { Footer, Header, Menu, Nav } from "@/components/Layout";
import { I18nParams } from "@/definitions";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function LandingPagegLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: I18nParams;
}>) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <Header />
      <Menu />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
