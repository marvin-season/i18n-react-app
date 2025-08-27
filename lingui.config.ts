/** @type {import('@lingui/conf').LinguiConfig} */
export default {
  locales: ['en', 'sr', 'es', 'zh', 'pseudo'],
  pseudoLocale: 'pseudo',
  sourceLocale: 'en',
  fallbackLocales: {
    default: 'en'
  },
  catalogs: [
    {
      path: 'src/locales/{locale}',
      include: ['src/']
    }
  ]
}
