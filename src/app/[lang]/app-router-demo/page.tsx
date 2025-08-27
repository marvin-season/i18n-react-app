import { initLingui, PageLangParam } from "@/initLingui"
import HomePage from "@/components/HomePage"

export default async function Page(props: PageLangParam) {
  const lang = (await props.params).lang
  initLingui(lang)
  return <HomePage />
}
