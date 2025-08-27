import { getLocale } from "@/action";
import { Switcher } from "@/components/Switcher";
import { Trans } from "@lingui/react/macro";

export default async function HomePage() {
  const locale = await getLocale()
  return <div>
    <Switcher locale={locale} />

    <Trans id="next-explanation">
      Next.js is an open-source React front-end development web framework that
      enables functionality such as server-side rendering and generating
      static websites for React based web applications. It is a
      production-ready framework that allows developers to quickly create
      static and dynamic JAMstack websites and is used widely by many large
      companies.
    </Trans>
  </div>
}