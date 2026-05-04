import Link from "next/link";

export default function ThemeE() {
  return (
    <div className="min-h-screen bg-[#1a2f23] text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-semibold tracking-tight">
          <span className="text-white">Agni</span>
          <span className="text-[#d4af37]">Health</span>
        </div>
        <div className="flex items-center gap-8">
          <Link href="#about" className="text-zinc-400 hover:text-white transition-colors text-sm">
            About
          </Link>
          <Link href="#approach" className="text-zinc-400 hover:text-white transition-colors text-sm">
            Our Approach
          </Link>
          <Link 
            href="#book" 
            className="bg-[#d4af37] text-[#1a2f23] px-5 py-2.5 rounded text-sm font-medium hover:bg-[#e0c04a] transition-colors"
          >
            Book Consultation
          </Link>
        </div>
      </nav>

      {/* Hero - Split Layout */}
      <main className="min-h-[85vh] grid lg:grid-cols-2">
        {/* Left - Content */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-20 bg-[#1a2f23]">
          <div className="max-w-xl">
            <div className="inline-block mb-8">
              <span className="text-[#d4af37] text-sm font-medium tracking-wider uppercase">
                Metabolic Health Practice
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-serif font-normal leading-[1.1] tracking-tight mb-8">
              Your metabolic
              <br />
              health,{" "}
              <span className="text-[#d4af37] italic">elevated.</span>
            </h1>
            
            <p className="text-xl text-zinc-400 leading-relaxed mb-10">
              Physician-led metabolic care designed specifically for South Asian biology. 
              Evidence-based. Personalized. Effective.
            </p>

            <div className="flex items-center gap-6">
              <Link 
                href="#book"
                className="bg-[#d4af37] text-[#1a2f23] px-8 py-4 rounded text-base font-medium hover:bg-[#e0c04a] transition-colors"
              >
                Begin Your Journey
              </Link>
              <Link 
                href="#approach"
                className="text-zinc-400 hover:text-white transition-colors text-base flex items-center gap-2 border border-zinc-700 px-6 py-4 rounded hover:border-zinc-500"
              >
                Our Approach
              </Link>
            </div>

            {/* Credentials */}
            <div className="flex items-center gap-6 mt-16 pt-8 border-t border-zinc-700/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium">Board Certified</div>
                  <div className="text-xs text-zinc-500">Internal Medicine</div>
                </div>
              </div>
              <div className="w-px h-10 bg-zinc-700/50" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium">CA · LA · MA</div>
                  <div className="text-xs text-zinc-500">Telehealth</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Image placeholder */}
        <div className="hidden lg:block bg-gradient-to-br from-[#243d2e] to-[#1a2f23] relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-6 p-12">
              <div className="w-32 h-32 rounded-full bg-[#d4af37]/5 mx-auto flex items-center justify-center border border-[#d4af37]/20">
                <div className="w-24 h-24 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#d4af37]/20" />
                </div>
              </div>
              <p className="text-zinc-600 text-sm">Lifestyle imagery</p>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#d4af37]/5 blur-3xl" />
          <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-[#2a4a35]/50 blur-2xl" />
        </div>
      </main>

      {/* Features section */}
      <section id="approach" className="bg-[#0f1f17] py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4">
              A different approach to{" "}
              <span className="text-[#d4af37] italic">metabolic health</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Standard care misses what makes South Asian metabolism unique. We don't.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-[#1a2f23] border border-[#2a4a35]">
              <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 border border-[#d4af37]/20">
                <span className="text-[#d4af37] font-serif text-xl">01</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Calibrated Thresholds</h3>
              <p className="text-zinc-400 leading-relaxed">
                South Asians develop metabolic disease at lower BMIs and waist circumferences. Our protocols reflect this reality.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#1a2f23] border border-[#2a4a35]">
              <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 border border-[#d4af37]/20">
                <span className="text-[#d4af37] font-serif text-xl">02</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Deeper Diagnostics</h3>
              <p className="text-zinc-400 leading-relaxed">
                Fasting insulin, HOMA-IR, ApoB, Lp(a) — the markers that predict risk 10 years before standard labs catch it.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#1a2f23] border border-[#2a4a35]">
              <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 border border-[#d4af37]/20">
                <span className="text-[#d4af37] font-serif text-xl">03</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Continuous Partnership</h3>
              <p className="text-zinc-400 leading-relaxed">
                Not episodic visits. Ongoing care with regular check-ins, messaging access, and protocol adjustments as you progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="py-24 bg-[#1a2f23]">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-serif mb-6">
            Ready to take control?
          </h2>
          <p className="text-xl text-zinc-400 mb-10">
            Schedule a consultation to discuss your metabolic health goals.
          </p>
          <Link 
            href="#"
            className="inline-block bg-[#d4af37] text-[#1a2f23] px-10 py-4 rounded text-lg font-medium hover:bg-[#e0c04a] transition-colors"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2a4a35] py-12 bg-[#0f1f17]">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <div className="text-sm text-zinc-500">
            © 2026 Agni Health. All rights reserved.
          </div>
          <div className="text-sm text-zinc-500">
            <Link href="/" className="hover:text-zinc-300 transition-colors">
              ← View Theme D (Navy + Copper)
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
