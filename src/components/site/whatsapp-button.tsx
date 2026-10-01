
import { MessageCircle } from 'lucide-react'

// WhatsApp预设消息模板
const whatsappMessage = encodeURIComponent(
`Hello, I'm interested in your transformer products.

Please provide a quote for:
1. Transformer Type: 
2. Voltage (kV): 
3. Capacity (kVA): 
4. Country/Project Location: 

Thank you.`
)

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/8615905342405?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-0 rounded-full bg-[#25D366] px-3 py-3 text-white shadow-lg transition-colors hover:bg-[#1da851] sm:gap-3 sm:px-4 md:px-5"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 shrink-0" />
      <span className="hidden whitespace-nowrap text-sm font-semibold sm:inline">Chat Now</span>
    </a>
  )
}
