'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo">
          <div className="navbar-logo-icon">⚡</div>
          SkillBridge
        </Link>

        <button className="mobile-menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <ul className={`navbar-links ${open ? 'open' : ''}`}>
          <li><Link href="/engine" onClick={() => setOpen(false)}>The Engine</Link></li>
          <li><Link href="/individuals" onClick={() => setOpen(false)}>Individuals</Link></li>
          <li><Link href="/recruiters" onClick={() => setOpen(false)}>Recruiters</Link></li>
          <li><Link href="/pricing" onClick={() => setOpen(false)}>Pricing</Link></li>
          <li><Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link></li>
          <li><Link href="/get-started" className="navbar-cta" onClick={() => setOpen(false)}>Get Started</Link></li>
        </ul>
      </div>
    </nav>
  );
}
