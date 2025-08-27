import { allMessages } from '@/appRouterI18n'
import { LinguiClientProvider } from '@/components/LinguiClientProvider'
import { initLingui, PageLangParam } from '@/initLingui'
import { PropsWithChildren } from 'react'
import { getLocale } from '@/action'

export default async function RootLayout({ children, }: PropsWithChildren<PageLangParam>) {

  const lang = await getLocale()
  initLingui(lang)

  return (
    <html lang={lang}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col">
          <LinguiClientProvider
            initialLocale={lang}
            initialMessages={allMessages[lang]!}
          >
            {children}
          </LinguiClientProvider>
        </main>
      </body>
    </html>
  )
}
