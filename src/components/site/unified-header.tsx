
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface UnifiedHeaderProps {
  currentPage?: string
}

export function UnifiedHeader({ currentPage }: UnifiedHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState<'zh' | 'en'>('zh')

  const navItems = [
    { label: language === 'zh' ? '首页' : 'Home', href: '/', id: 'home' },
    { label: language === 'zh' ? '关于我们' : 'About Us', href: '/#about', id: 'about' },
    { label: language === 'zh' ? '产品' : 'Products', href: '/#products', id: 'products' },
    { label: language === 'zh' ? '联系我们' : 'Contact Us', href: '/#contact', id: 'contact' },
  ]

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh')
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <a href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">WE</span>
            </div>
            <div className="hidden sm:flex flex-col gap-0">
              <span className="text-sm font-bold text-primary leading-none">WENZE</span>
              <span className="text-xs text-muted-foreground leading-none">ELECTRIC</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
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
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors hidden sm:block"
            >
              {language === 'zh' ? 'English' : '中文'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="w-full text-left px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-secondary rounded-lg transition-colors"
            >
              {language === 'zh' ? 'English' : '中文'}
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
