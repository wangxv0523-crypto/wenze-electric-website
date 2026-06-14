import { Shield, Globe, Handshake } from 'lucide-react'

export function TrustStatement() {
  return (
    <section className="py-16 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icons */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
              <Shield className="w-7 h-7 text-accent" />
            </div>
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
              <Globe className="w-7 h-7 text-accent" />
            </div>
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
              <Handshake className="w-7 h-7 text-accent" />
            </div>
          </div>

          {/* Statement */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight text-balance">
            Your Reliable Partner for Industrial Power Solutions
          </h2>
          <p className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
            We are committed to providing stable, safe, and long-term reliable power solutions 
            for industrial clients worldwide. Our team continues to deliver high-quality transformer 
            products and engineering support services for international projects across diverse industries and regions.
          </p>

          {/* Commitment Points */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
              <div className="text-accent font-bold text-xl mb-1">Quality First</div>
              <p className="text-white/70 text-sm">Rigorous quality control at every production stage</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
              <div className="text-accent font-bold text-xl mb-1">Global Reach</div>
              <p className="text-white/70 text-sm">Export experience to 30+ countries worldwide</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
              <div className="text-accent font-bold text-xl mb-1">Long-term Support</div>
              <p className="text-white/70 text-sm">Technical assistance throughout product lifecycle</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
