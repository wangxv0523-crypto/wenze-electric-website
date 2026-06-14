import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

const navigation = {
  products: [
    { name: 'Oil Immersed Transformers', href: '/products/oil-immersed-transformer' },
    { name: 'Dry Type Transformers', href: '/products/dry-type-transformer' },
    { name: 'Distribution Transformers', href: '/products/distribution-transformer' },
    { name: 'High Voltage Power Transformers', href: '/products/high-voltage-power-transformer' },
    { name: 'Pole Mounted Transformers', href: '/products/pole-mounted-transformer' },
    { name: 'Renewable Energy Transformers', href: '/products/renewable-energy-transformer' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Manufacturing Capability', href: '#about' },
    { name: 'Quality & Certifications', href: '#capabilities' },
    { name: 'Contact Us', href: '#contact' },
  ],
  markets: [
    { name: 'Southeast Asia', href: '#contact' },
    { name: 'Middle East', href: '#contact' },
    { name: 'Africa', href: '#contact' },
    { name: 'South America', href: '#contact' },
  ],
}

const whatsappMessage = encodeURIComponent(
`Hello, I'm interested in your transformer products.

Please provide a quote for:
1. Transformer Type: 
2. Voltage (kV): 
3. Capacity (kVA): 
4. Quantity: 
5. Country/Project Location: 

Thank you.`
)

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center mb-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-n2GL5TaXQSDwwTPZmdjvvT0y5cX8oN.png"
                alt="Wenze Electric - Transformer Manufacturer Shandong China"
                className="h-12 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-white/50 text-xs mb-1">山东文则电气有限公司</p>
            <p className="text-white/70 leading-relaxed mb-6 max-w-sm text-sm">
              Professional power transformer manufacturer in Shandong, China. Oil immersed, dry type, distribution, high voltage and renewable energy transformers. IEC & ANSI certified. Exported to 30+ countries.
            </p>

            <div className="space-y-3">
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Email</p>
                <a href="mailto:sales@wenzepower.com" className="flex items-center gap-3 text-white hover:text-accent transition-colors text-sm">
                  <Mail className="w-4 h-4" />
                  <span>sales@wenzepower.com</span>
                </a>
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wide mb-1">WhatsApp / Phone</p>
                <a href="https://wa.me/8615905342475" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-accent transition-colors text-sm">
                  <Phone className="w-4 h-4" />
                  <span>+86 159 0534 2475</span>
                </a>
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Factory Location</p>
                <div className="flex items-start gap-3 text-white/80 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>Shandong Province, China</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <a
                href={`https://wa.me/8615905342475?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] text-white font-semibold hover:bg-[#1da851] transition-colors text-sm"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <p className="text-white/50 text-xs mt-2">Response within 24 hours</p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Products</h3>
            <ul className="space-y-2">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold text-white mb-4 mt-8 text-sm uppercase tracking-wide">Export Markets</h3>
            <ul className="space-y-2">
              {navigation.markets.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Certifications</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>IEC 60076 (Power Transformers)</li>
              <li>IEC 60076-11 (Dry Type)</li>
              <li>ANSI / IEEE C57</li>
              <li>ISO 9001 Quality System</li>
              <li>GB/T 6451 (China Standard)</li>
              <li>3rd Party: SGS / BV / TÜV</li>
            </ul>
            <h3 className="font-semibold text-white mb-4 mt-8 text-sm uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors text-sm">Request a Quote</a></li>
              <li><a href="#products" className="text-white/70 hover:text-white transition-colors text-sm">Technical Specs</a></li>
              <li><a href="#capabilities" className="text-white/70 hover:text-white transition-colors text-sm">Engineering Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
            <p>© {new Date().getFullYear()} 文则电气 Wenze Electric (Shandong Wenze Electric Co., Ltd.). All rights reserved.</p>
            <p>Power Transformer Manufacturer · Shandong, China · IEC & ANSI Certified</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
