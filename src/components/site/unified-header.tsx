
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { BrandLogo } from '@/components/site/brand-logo'
import { products } from '@/lib/products-data'

interface UnifiedHeaderProps {
  currentPage?: string
}

export function UnifiedHeader({ currentPage }: UnifiedHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [language, setLanguage] = useState<'zh' | 'en'>('zh')

  const navItems = [
    { label: language === 'zh' ? '网站首页' : 'Home', href: '/', id: 'home' },
    { label: language === 'zh' ? '核心产品' : 'Products', href: '/#products', id: 'products' },
    { label: language === 'zh' ? '工厂实力' : 'Factory', href: '/#capabilities', id: 'factory' },
    { label: language === 'zh' ? '关于我们' : 'About Us', href: '/#about', id: 'about' },
    { label: language === 'zh' ? '联系我们' : 'Contact Us', href: '/#contact', id: 'contact' },
  ]

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh')
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between md:h-[76px]">
          {/* Logo & Brand */}
          <a
            href="/"
            className="min-w-0 shrink-0 [&>span]:gap-3 [&>span>span:first-child]:h-11 [&>span>span:first-child]:w-11 md:[&>span>span:first-child]:h-12 md:[&>span>span:first-child]:w-12 [&>span>span:last-child>span:first-child]:text-sm md:[&>span>span:last-child>span:first-child]:text-base [&>span>span:last-child>span:last-child]:text-[9px] md:[&>span>span:last-child>span:last-child]:text-[11px]"
            aria-label="Wenze Electric home"
          >
            <BrandLogo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-9 lg:flex xl:gap-11">
            {navItems.map((item) =>
              item.id === 'products' ? (
                <div key={item.id} className="group relative">
                  <a
                    href={item.href}
                    className="flex items-center gap-1.5 py-6 text-base font-semibold text-foreground/75 transition-colors hover:text-primary group-focus-within:text-primary group-hover:text-primary"
                    aria-haspopup="menu"
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                  </a>

                  <div className="invisible absolute left-1/2 top-full w-[360px] -translate-x-1/2 translate-y-2 rounded-xl border border-border bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div role="menu" aria-label={language === 'zh' ? '产品导航' : 'Product navigation'}>
                      {products.map((product) => (
                        <a
                          key={product.id}
                          href={`/products/${product.id}`}
                          role="menuitem"
                          className="block rounded-lg px-4 py-3 transition-colors hover:bg-secondary focus:bg-secondary focus:outline-none"
                        >
                          <span className="block text-sm font-semibold text-primary">
                            {language === 'zh' ? product.title : product.titleEn ?? product.title}
                          </span>
                          <span className="mt-0.5 block text-xs text-muted-foreground">
                            {language === 'zh' ? product.titleEn : product.title}
                          </span>
                        </a>
                      ))}
                      <a
                        href="/#products"
                        role="menuitem"
                        className="mt-1 block rounded-lg border-t border-border px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary focus:bg-secondary focus:outline-none"
                      >
                        {language === 'zh' ? '查看全部产品' : 'View All Products'}
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-base font-semibold text-foreground/75 transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="hidden px-2 py-2 text-base font-semibold text-foreground/75 transition-colors hover:text-primary sm:block"
            >
              {language === 'zh' ? '英语' : '中文'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen)
                if (mobileMenuOpen) setMobileProductsOpen(false)
              }}
              className="rounded-lg p-2.5 transition-colors hover:bg-secondary lg:hidden"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="max-h-[calc(100vh-76px)] space-y-2 overflow-y-auto pb-5 lg:hidden">
            {navItems.map((item) =>
              item.id === 'products' ? (
                <div key={item.id}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-base font-semibold text-foreground/75 transition-colors hover:bg-secondary hover:text-primary"
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    aria-expanded={mobileProductsOpen}
                    aria-controls="mobile-product-navigation"
                  >
                    {item.label}
                    <ChevronDown className={`h-5 w-5 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileProductsOpen && (
                    <div id="mobile-product-navigation" className="ml-3 space-y-1 border-l border-border pl-3">
                      {products.map((product) => (
                        <a
                          key={product.id}
                          href={`/products/${product.id}`}
                          className="block rounded-lg px-4 py-2.5 transition-colors hover:bg-secondary"
                          onClick={() => {
                            setMobileProductsOpen(false)
                            setMobileMenuOpen(false)
                          }}
                        >
                          <span className="block text-sm font-semibold text-primary">
                            {language === 'zh' ? product.title : product.titleEn ?? product.title}
                          </span>
                          <span className="mt-0.5 block text-xs text-muted-foreground">
                            {language === 'zh' ? product.titleEn : product.title}
                          </span>
                        </a>
                      ))}
                      <a
                        href="/#products"
                        className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
                        onClick={() => {
                          setMobileProductsOpen(false)
                          setMobileMenuOpen(false)
                        }}
                      >
                        {language === 'zh' ? '查看全部产品' : 'View All Products'}
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.id}
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-base font-semibold text-foreground/75 transition-colors hover:bg-secondary hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ),
            )}
            <button
              onClick={toggleLanguage}
              className="w-full rounded-lg px-4 py-3 text-left text-base font-semibold text-foreground/75 transition-colors hover:bg-secondary hover:text-primary sm:hidden"
            >
              {language === 'zh' ? '英语' : '中文'}
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
