export const siteConfig = {
  name: 'Wenze Electric',
  legalName: 'Shandong Wenze Electric Co., Ltd.',
  url: 'https://www.wenzepower.com',
  email: 'sales@wenzepower.com',
  phone: '+86 159 0534 2475',
  whatsappNumber: '8615905342475',
  logoPath: '/wenze-logo-mark.png',
} as const

export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString()
}

export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
}
