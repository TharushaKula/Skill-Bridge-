import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link href="/" className="navbar-logo" style={{ marginBottom: 4 }}>
                            <div className="navbar-logo-icon">⚡</div>
                            SkillBridge
                        </Link>
                        <p>
                            Transforming static resumes into dynamic career evolution with
                            multi-agent AI that bridges the talent-demand mismatch.
                        </p>
                    </div>

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
                        <a href="#">Documentation</a>
                        <a href="#">API Reference</a>
                    </div>

                    <div className="footer-col">
                        <h4>Company</h4>
                        <a href="#">About Us</a>
                        <a href="#">Careers</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© 2026 SkillBridge. All rights reserved.</span>
                    <span>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none', marginRight: 16 }}>Privacy</a>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
