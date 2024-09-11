import { localeDefault, localeValues } from "@/definitions";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: localeValues,
  defaultLocale: localeDefault
});

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing)
