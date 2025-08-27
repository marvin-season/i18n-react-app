'use client'

import { setLocale } from '@/action'
import { msg } from '@lingui/core/macro'
import { useLingui } from '@lingui/react'

export type LOCALES = 'en' | 'sr' | 'es' | 'pseudo'

const languages = {
  en: msg`English`,
  sr: msg`Serbian`,
  es: msg`Spanish`,
  zh: msg`Chinese`
} as const

export async function Switcher(props: { locale: LOCALES }) {
  const { i18n } = useLingui()
  const { locale } = props
  return (
    <select name='locale' value={locale} onChange={(e) => {
      setLocale(e.target.value as LOCALES)
    }}>
      {Object.keys(languages).map((locale) => {
        return (
          <option value={locale} key={locale}>
            {i18n._(languages[locale as keyof typeof languages])}
          </option>
        )
      })}
    </select>

  )
}