
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BrandLogo } from '@/components/site/brand-logo'

interface UnifiedHeaderProps {
  currentPage?: string
}

export function UnifiedHeader({ currentPage }: UnifiedHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-base font-semibold text-foreground/75 transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
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
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
          <nav className="space-y-2 pb-5 lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="block rounded-lg px-4 py-3 text-base font-semibold text-foreground/75 transition-colors hover:bg-secondary hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
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
