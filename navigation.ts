import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "id"] as const;

export const pathnames = {
  "/": "/",
  "/about": "/about",
  "/achievements": "/achievements",
  "/projects": "/projects",
  "/projects/[slug]": "/projects/[slug]", // Path dinamis sudah terdaftar
  "/dashboard": "/dashboard",
  "/contact": "/contact",
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({ locales, pathnames });