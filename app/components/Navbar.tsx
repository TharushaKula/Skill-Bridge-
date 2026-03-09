'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'How it works', href: '/how-it-works' },
    { name: 'For Individuals', href: '/individuals' },
    { name: 'For Recruiters', href: '/recruiters' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo">
          <div className="brand-emblem" aria-hidden="true">
            <span className="brand-emblem-line brand-emblem-line-top" />
            <span className="brand-emblem-dot" />
            <span className="brand-emblem-line brand-emblem-line-bottom" />
          </div>
          SkillBridge
        </Link>

        <button className="mobile-menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>

        <ul className={`navbar-links ${open ? 'open' : ''}`}>
          {links.map((link) => {
            const isActive = pathname === link.href || (pathname?.startsWith(link.href) && link.href !== '/');
            return (
              <li key={link.name}>
                <Link href={link.href} className={isActive ? 'active' : ''} onClick={() => setOpen(false)}>
                  {link.name}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/get-started"
              className={`navbar-cta ${pathname === '/get-started' ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
