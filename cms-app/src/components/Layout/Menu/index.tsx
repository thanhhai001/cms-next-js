import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import "./style.css"
export default function Menu() {
  const t = useTranslations("menu")
  return (
    <>
      <ul className="_menu">
        <li><Link href="/">{t("home.title")}</Link></li>
        <li><Link href="/about">{t("about.title")}</Link></li>
        <li><Link href="/contact">{t("contact.title")}</Link></li>
        <li><Link href="/other">{t("other.title")}</Link></li>
        <li><Link href="/signup">{t("signup.title")}</Link></li>
        <li><Link href="/login">{t("login.title")}</Link></li>
      </ul >
    </>
  )
}