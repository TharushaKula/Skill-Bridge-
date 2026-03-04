'use client';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="navbar-logo">
              <div className="brand-emblem" aria-hidden="true">
                <span className="brand-emblem-line brand-emblem-line-top" />
                <span className="brand-emblem-dot" />
                <span className="brand-emblem-line brand-emblem-line-bottom" />
              </div>
              SkillBridge
            </Link>
            <p>
              Multi-agent AI platform for skill mapping, personalized learning roadmaps,
              and high-confidence talent matching.
            </p>
          </div>
          <Link href="/get-started" className="footer-cta">
            Start Free Analysis <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <h4>Platform</h4>
            <Link href="/engine">The Engine</Link>
            <Link href="/individuals">For Individuals</Link>
            <Link href="/recruiters">For Recruiters</Link>
            <Link href="/pricing">Pricing</Link>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <Link href="/faq">FAQ</Link>
            <Link href="/get-started">Get Started</Link>
            <a href="mailto:hello@skillbridge.ai">Contact Support</a>
            <a href="mailto:hello@skillbridge.ai">Book a Demo</a>
          </div>

          <div className="footer-col">
            <h4>Use Cases</h4>
            <Link href="/individuals">Career Upskilling</Link>
            <Link href="/recruiters">Candidate Matching</Link>
            <Link href="/engine">Skill Gap Analysis</Link>
            <Link href="/engine">Learning Path Automation</Link>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Data Security</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 SkillBridge. All rights reserved.</span>
          <span className="footer-bottom-right">
            <a href="mailto:hello@skillbridge.ai">hello@skillbridge.ai</a>
            <a href="tel:+94112233445">+94 11 223 3445</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
