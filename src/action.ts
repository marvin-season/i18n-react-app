'use server'

import { cookies } from "next/headers";

export async function getLocale() {
  const headersList =  await cookies(); 
  return headersList.get('locale')?.value || 'en'
}

export async function setLocale(locale: string) {
  const cookiesList = await cookies()
  cookiesList.set('locale', locale)
}