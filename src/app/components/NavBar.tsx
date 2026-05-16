'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TrackedLink from "./TrackedLink";

const links = [
  { href: "#approach", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#about", label: "Dr. Japa" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 sm:px-8 py-2 max-w-7xl mx-auto relative">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo-transparent.png"
          alt="Agni Health"
          width={400}
          height={100}
          className="h-[75px] sm:h-[113px] md:h-[138px] w-auto"
        />
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="text-zinc-400 hover:text-white transition-colors text-sm"
            onClick={(e) => { e.preventDefault(); scrollToSection(href.slice(1)); }}
          >
            {label}
          </a>
        ))}
        <TrackedLink
          href="/start"
          eventName="cta_click"
          eventProperties={{ location: 'nav', button: 'book_discovery' }}
          className="bg-[#d4a088] text-[#0a1628] px-5 py-2.5 rounded text-sm font-medium hover:bg-[#c4906c] transition-colors"
        >
          Book Initial Consultation
        </TrackedLink>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-[#0a1628] border-t border-zinc-800 flex flex-col px-8 py-6 gap-5 z-50 md:hidden">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-zinc-300 hover:text-white transition-colors text-base"
              onClick={(e) => { e.preventDefault(); setOpen(false); scrollToSection(href.slice(1)); }}
            >
              {label}
            </a>
          ))}
          <TrackedLink
            href="/start"
            eventName="cta_click"
            eventProperties={{ location: 'nav_mobile', button: 'book_discovery' }}
            className="bg-[#d4a088] text-[#0a1628] px-5 py-3 rounded text-sm font-medium hover:bg-[#c4906c] transition-colors text-center mt-2"
          >
            Book Initial Consultation
          </TrackedLink>
        </div>
      )}
    </nav>
  );
}
