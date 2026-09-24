export const siteConfig = {
  name: 'Wenze Electric',
  legalName: 'Shandong Wenze Electric Co., Ltd.',
  url: 'https://www.wenzepower.com',
  email: 'sales@wenzepower.com',
  phone: '+86 159 0534 2405',
  whatsappNumber: '8615905342405',
  logoPath: '/wenze-logo-mark.png',
} as const

export const southeastAsiaMarkets = [
  'Singapore',
  'Malaysia',
  'Indonesia',
  'Thailand',
  'Vietnam',
  'Philippines',
  'Cambodia',
  'Laos',
  'Myanmar',
  'Brunei',
] as const

export const southeastAsiaMarketSchema = southeastAsiaMarkets.map((name) => ({
  '@type': 'Country',
  name,
}))

export const southeastAsiaTransformerTopics = [
  'Southeast Asia transformer projects',
  '11 kV transformer',
  '22 kV transformer',
  '33 kV transformer',
  '0.4 kV transformer',
  '0.415 kV transformer',
  '50 Hz transformer',
  '60 Hz transformer',
  'IEC 60076 transformer',
  'compact substation',
] as const

export const transformerTopics = [
  'Oil immersed distribution transformers',
  'Dry type transformers',
  'Pole mounted transformers',
  'Power transformers',
  'High voltage power transformers',
  'Compact substations',
  'Transformer accessories and spare parts',
] as const

export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString()
}

export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
}
