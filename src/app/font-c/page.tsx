import Link from "next/link";

// Font C: Mixed - Playfair Display headlines + Inter body - Editorial feel
export default function FontC() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-[family-name:var(--font-inter)]">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl tracking-tight font-[family-name:var(--font-playfair)]">
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
            
            <h1 className="text-5xl lg:text-6xl leading-[1.1] tracking-tight font-[family-name:var(--font-playfair)]">
              Metabolic health,
              <br />
              <span className="text-[#c9a87c] italic">reimagined.</span>
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
                <div className="text-2xl text-white font-[family-name:var(--font-playfair)]">Board Certified</div>
                <div className="text-sm text-zinc-500">Internal Medicine</div>
              </div>
              <div className="w-px h-12 bg-zinc-800" />
              <div>
                <div className="text-2xl text-white font-[family-name:var(--font-playfair)]">CA · LA · MA</div>
                <div className="text-sm text-zinc-500">Licensed States</div>
              </div>
              <div className="w-px h-12 bg-zinc-800" />
              <div>
                <div className="text-2xl text-white font-[family-name:var(--font-playfair)]">Telehealth</div>
                <div className="text-sm text-zinc-500">Video + Async</div>
              </div>
            </div>
          </div>

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

      {/* Font label */}
      <div className="fixed bottom-4 left-4 bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-lg text-sm">
        <span className="text-zinc-400">Font C:</span>{" "}
        <span className="text-white font-medium">Playfair + Inter</span>
        <span className="text-zinc-500 ml-2">· Editorial, sophisticated</span>
      </div>

      {/* Nav between fonts */}
      <div className="fixed bottom-4 right-4 flex gap-2">
        <Link href="/font-a" className="bg-zinc-800 text-white px-3 py-2 rounded text-sm hover:bg-zinc-700">A</Link>
        <Link href="/font-b" className="bg-zinc-800 text-white px-3 py-2 rounded text-sm hover:bg-zinc-700">B</Link>
        <span className="bg-[#c9a87c] text-[#0a1628] px-3 py-2 rounded text-sm font-medium">C</span>
      </div>
    </div>
  );
}
