"use server";

import { cookies } from "next/headers";

import { Locale, defaultLocale } from "@/i18n/config";

const COOKIE_NAME = "lang" as const;

export async function getLocale() {
  return (await cookies()).get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setLocale(locale: Locale) {
  (await cookies())?.set(COOKIE_NAME, locale);
}
