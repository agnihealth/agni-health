import Link from "next/link";

// Font B: Plus Jakarta Sans - Warmer, modern, more personality
export default function FontB() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-[family-name:var(--font-jakarta)]">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tight">
          <span className="text-white">Agni</span>
          <span className="text-[#c9a87c]">Health</span>
        </div>
        <div className="flex items-center gap-8">
          <Link href="#about" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">
            About
          </Link>
          <Link href="#approach" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">
            Our Approach
          </Link>
          <Link 
            href="#book" 
            className="bg-[#c9a87c] text-[#0a1628] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#d4b88a] transition-colors"
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
              <span className="text-[#c9a87c] text-sm font-semibold tracking-wider uppercase">
                Metabolic Health Practice
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
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
                className="bg-[#c9a87c] text-[#0a1628] px-8 py-4 rounded-lg text-base font-semibold hover:bg-[#d4b88a] transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link 
                href="#approach"
                className="text-zinc-400 hover:text-white transition-colors text-base font-medium flex items-center gap-2"
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
                <div className="text-2xl font-bold text-white">Board Certified</div>
                <div className="text-sm text-zinc-500 font-medium">Internal Medicine</div>
              </div>
              <div className="w-px h-12 bg-zinc-800" />
              <div>
                <div className="text-2xl font-bold text-white">CA · LA · MA</div>
                <div className="text-sm text-zinc-500 font-medium">Licensed States</div>
              </div>
              <div className="w-px h-12 bg-zinc-800" />
              <div>
                <div className="text-2xl font-bold text-white">Telehealth</div>
                <div className="text-sm text-zinc-500 font-medium">Video + Async</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#1a2d4a] to-[#0a1628] border border-zinc-800 flex items-center justify-center">
              <div className="text-center space-y-4 p-12">
                <div className="w-24 h-24 rounded-full bg-[#c9a87c]/10 mx-auto flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#c9a87c]/20" />
                </div>
                <p className="text-zinc-500 text-sm font-medium">Physician photo</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Font label */}
      <div className="fixed bottom-4 left-4 bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-lg text-sm">
        <span className="text-zinc-400">Font B:</span>{" "}
        <span className="text-white font-semibold">Plus Jakarta Sans</span>
        <span className="text-zinc-500 ml-2">· Warmer, friendly</span>
      </div>

      {/* Nav between fonts */}
      <div className="fixed bottom-4 right-4 flex gap-2">
        <Link href="/font-a" className="bg-zinc-800 text-white px-3 py-2 rounded text-sm hover:bg-zinc-700">A</Link>
        <span className="bg-[#c9a87c] text-[#0a1628] px-3 py-2 rounded text-sm font-semibold">B</span>
        <Link href="/font-c" className="bg-zinc-800 text-white px-3 py-2 rounded text-sm hover:bg-zinc-700">C</Link>
      </div>
    </div>
  );
}
