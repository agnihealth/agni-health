import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-semibold tracking-tight">
          <span className="text-white">Agni</span>
          <span className="text-[#c9a87c]">Health</span>
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
            className="bg-[#c9a87c] text-[#0a1628] px-5 py-2.5 rounded text-sm font-medium hover:bg-[#d4b88a] transition-colors"
          >
            Book Consultation
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-8 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-[#c9a87c] text-sm font-medium tracking-wider uppercase">
                Metabolic Health Practice
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
              Metabolic health,
              <br />
              <span className="text-[#c9a87c]">reimagined.</span>
            </h1>
            
            <p className="text-xl text-zinc-400 leading-relaxed max-w-lg">
              Physician-led care designed for South Asian metabolic health. 
              Evidence-based protocols. Personalized to your biology.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <Link 
                href="#book"
                className="bg-[#c9a87c] text-[#0a1628] px-8 py-4 rounded text-base font-medium hover:bg-[#d4b88a] transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link 
                href="#approach"
                className="text-zinc-400 hover:text-white transition-colors text-base flex items-center gap-2"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex items-center gap-8 pt-8 border-t border-zinc-800">
              <div>
                <div className="text-2xl font-semibold text-white">Board Certified</div>
                <div className="text-sm text-zinc-500">Internal Medicine</div>
              </div>
              <div className="w-px h-12 bg-zinc-800" />
              <div>
                <div className="text-2xl font-semibold text-white">CA · LA · MA</div>
                <div className="text-sm text-zinc-500">Licensed States</div>
              </div>
              <div className="w-px h-12 bg-zinc-800" />
              <div>
                <div className="text-2xl font-semibold text-white">Telehealth</div>
                <div className="text-sm text-zinc-500">Video + Async</div>
              </div>
            </div>
          </div>

          {/* Right side - abstract/placeholder for now */}
          <div className="hidden lg:block">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#1a2d4a] to-[#0a1628] border border-zinc-800 flex items-center justify-center">
              <div className="text-center space-y-4 p-12">
                <div className="w-24 h-24 rounded-full bg-[#c9a87c]/10 mx-auto flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#c9a87c]/20" />
                </div>
                <p className="text-zinc-500 text-sm">Physician photo</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features section */}
      <section id="approach" className="bg-[#0d1c30] py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-semibold mb-16 text-center">
            Why <span className="text-[#c9a87c]">Agni Health</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-[#0a1628] border border-zinc-800">
              <div className="w-12 h-12 rounded-lg bg-[#c9a87c]/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#c9a87c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">South Asian Focused</h3>
              <p className="text-zinc-400 leading-relaxed">
                Protocols calibrated for South Asian metabolic profiles. Different thresholds. Different targets. Better outcomes.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#0a1628] border border-zinc-800">
              <div className="w-12 h-12 rounded-lg bg-[#c9a87c]/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#c9a87c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Biomarkers</h3>
              <p className="text-zinc-400 leading-relaxed">
                Beyond A1c. We track fasting insulin, HOMA-IR, ApoB, and metabolic markers that predict risk years earlier.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#0a1628] border border-zinc-800">
              <div className="w-12 h-12 rounded-lg bg-[#c9a87c]/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#c9a87c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Continuous Care</h3>
              <p className="text-zinc-400 leading-relaxed">
                Not just quarterly visits. Async messaging, regular check-ins, and adjustments as your body responds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="py-24">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-semibold mb-6">Ready to begin?</h2>
          <p className="text-xl text-zinc-400 mb-10">
            Schedule a consultation to discuss your metabolic health goals.
          </p>
          <Link 
            href="#"
            className="inline-block bg-[#c9a87c] text-[#0a1628] px-10 py-4 rounded text-lg font-medium hover:bg-[#d4b88a] transition-colors"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <div className="text-sm text-zinc-500">
            © 2026 Agni Health. All rights reserved.
          </div>
          <div className="text-sm text-zinc-500">
            <Link href="/theme-e" className="hover:text-zinc-300 transition-colors">
              View alternate design →
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
