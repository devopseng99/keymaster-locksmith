'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/booking', label: 'Booking' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#1C1917] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#DAA520] to-[#B8860B] flex items-center justify-center font-bold text-[#1C1917] text-lg">
            K
          </div>
          <span className="text-xl font-bold">KeyMaster<span className="text-[#DAA520]"> Locksmith</span></span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm hover:text-[#DAA520] transition-colors">
              {l.label}
            </Link>
          ))}
          <Link href="/booking" className="bg-[#DAA520] text-[#1C1917] px-4 py-2 rounded font-semibold text-sm hover:bg-[#B8860B] transition-colors">
            Emergency Call
          </Link>
        </nav>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-white" aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-[#1C1917] border-t border-white/10 px-4 pb-4">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm hover:text-[#DAA520] transition-colors">
              {l.label}
            </Link>
          ))}
          <Link href="/booking" onClick={() => setOpen(false)} className="block mt-2 bg-[#DAA520] text-[#1C1917] px-4 py-2 rounded font-semibold text-sm text-center">
            Emergency Call
          </Link>
        </nav>
      )}
    </header>
  );
}
