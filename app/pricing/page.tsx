import Link from 'next/link';
import Image from 'next/image';
import { Check, Star } from 'lucide-react';

export const metadata = {
    title: 'Pricing — The Investment | SkillBridge',
    description: 'Choose the SkillBridge plan that fits your career goals. From free CV analysis to enterprise talent matching — transparent, value-based pricing.',
};

export default function PricingPage() {
    return (
        <>
            {/* Hero */}
            <section style={{ position: 'relative', overflow: 'hidden', minHeight: '450px', display: 'flex', alignItems: 'center' }}>
                {/* Background Image & Overlay */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    <Image
                        src="/images/PricingPageHeader.png"
                        alt="SkillBridge Pricing"
                        fill
                        priority
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        quality={90}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,6,15,0.85) 0%, rgba(6,6,15,0.6) 40%, rgba(6,6,15,0.95) 100%)' }} />
                </div>

                <div className="glow-orb" style={{ width: 500, height: 500, top: '-10%', left: '50%', transform: 'translateX(-50%)', background: 'rgba(139,92,246,0.15)', zIndex: 1 }} />
                <div className="bg-dots" style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.5 }} />
                <div className="section animate-fade-up" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 140, zIndex: 2 }}>
                    <div className="section-label">The Investment</div>
                    <h1 className="section-title" style={{ maxWidth: 700 }}>
                        Transparent Pricing. <span className="gradient-text">Real Value.</span>
                    </h1>
                    <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: 560 }}>
                        Start free, scale as you grow. Every tier includes our core multi-agent AI engine — the difference is depth, frequency, and enterprise capabilities.
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section>
                <div className="section" style={{ paddingTop: 20 }}>
                    <div className="pricing-grid">

                        {/* Explorer – Free */}
                        <div className="pricing-card animate-fade-up">
                            <div className="pricing-tier">Tier 1</div>
                            <div className="pricing-name">Explorer</div>
                            <div className="pricing-price">Free <span></span></div>
                            <div className="pricing-desc">
                                Perfect for getting started. Upload your CV and see what SkillBridge can reveal.
                            </div>
                            <ul className="pricing-features">
                                <li><Check size={16} className="check" /> Basic CV analysis with NLP extraction</li>
                                <li><Check size={16} className="check" /> 5 identified skill gaps</li>
                                <li><Check size={16} className="check" /> Static learning roadmap (one-time)</li>
                                <li><Check size={16} className="check" /> Basic skill profile visualization</li>
                                <li><Check size={16} className="check" /> Community support</li>
                            </ul>
                            <Link href="/get-started" className="btn-secondary" style={{ width: '100%' }}>
                                Start Free →
                            </Link>
                        </div>

                        {/* Pro – Featured */}
                        <div className="pricing-card featured animate-fade-up-delay-1">
                            <div className="pricing-badge">Best for Career Growth</div>
                            <div className="pricing-tier">Tier 2</div>
                            <div className="pricing-name">Pro</div>
                            <div className="pricing-price">$29 <span>/month</span></div>
                            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: 20, marginTop: -4 }}>
                                or $249/year (save 28%)
                            </div>
                            <div className="pricing-desc">
                                The complete career acceleration toolkit. Dynamic roadmaps that evolve with you and the market.
                            </div>
                            <ul className="pricing-features">
                                <li><Check size={16} className="check" /> <strong>Unlimited</strong> gap analysis runs</li>
                                <li><Check size={16} className="check" /> <strong>Dynamic Roadmap Recalibration</strong> based on real-time market data</li>
                                <li><Check size={16} className="check" /> Full RAG-driven resource library (Coursera, Udemy, YouTube, MIT OCW)</li>
                                <li><Check size={16} className="check" /> Milestone tracking & achievement badges</li>
                                <li><Check size={16} className="check" /> Progress analytics & learning insights</li>
                                <li><Check size={16} className="check" /> Smart notifications & plateau detection</li>
                                <li><Check size={16} className="check" /> Priority support</li>
                            </ul>
                            <Link href="/get-started" className="btn-primary" style={{ width: '100%' }}>
                                Start Pro Trial →
                            </Link>
                        </div>

                        {/* Enterprise */}
                        <div className="pricing-card animate-fade-up-delay-2">
                            <div className="pricing-tier">Tier 3</div>
                            <div className="pricing-name">Enterprise</div>
                            <div className="pricing-price">Custom</div>
                            <div className="pricing-desc">
                                For recruiters, teams, and academic institutes. Precision talent matching at scale.
                            </div>
                            <ul className="pricing-features">
                                <li><Check size={16} className="check" /> Everything in Pro</li>
                                <li><Check size={16} className="check" /> <strong>Bulk candidate ranking</strong> & processing</li>
                                <li><Check size={16} className="check" /> <strong>Explainable AI</strong> ranking reports</li>
                                <li><Check size={16} className="check" /> Domain adaptation for specific industries</li>
                                <li><Check size={16} className="check" /> Fairness & bias auditing reports</li>
                                <li><Check size={16} className="check" /> ATS integration via REST API</li>
                                <li><Check size={16} className="check" /> Dedicated account manager</li>
                                <li><Check size={16} className="check" /> SOC 2 compliant data handling</li>
                            </ul>
                            <Link href="/get-started" className="btn-secondary" style={{ width: '100%' }}>
                                Contact Sales →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section style={{ position: 'relative' }}>
                <div className="section">
                    <div style={{ textAlign: 'center', marginBottom: 40 }}>
                        <div className="section-label">Full Comparison</div>
                        <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                            Feature <span className="gradient-text">Breakdown</span>
                        </h2>
                    </div>

                    <div className="glass-card" style={{ overflow: 'hidden', padding: 0 }}>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
                                <thead>
                                    <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                        <th style={{ padding: '16px 24px', textAlign: 'left', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Feature</th>
                                        <th style={{ padding: '16px 24px', textAlign: 'center', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Explorer</th>
                                        <th style={{ padding: '16px 24px', textAlign: 'center', fontSize: '0.85rem', fontWeight: 600, color: 'var(--violet-400)', background: 'rgba(139,92,246,0.05)' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                                                Pro <Star size={14} fill="currentColor" />
                                            </div>
                                        </th>
                                        <th style={{ padding: '16px 24px', textAlign: 'center', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Enterprise</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { feature: 'CV/Resume Analysis', explorer: '1 scan', pro: 'Unlimited', enterprise: 'Unlimited' },
                                        { feature: 'Skill Gap Identification', explorer: 'Up to 5', pro: 'Unlimited', enterprise: 'Unlimited' },
                                        { feature: 'Learning Roadmap', explorer: 'Static', pro: 'Dynamic + Recalibration', enterprise: 'Dynamic + Recalibration' },
                                        { feature: 'Resource Library (RAG)', explorer: '—', pro: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}><Check size={14} /> Full Access</div>, enterprise: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}><Check size={14} /> Full Access</div> },
                                        { feature: 'Milestone Tracking', explorer: '—', pro: <div style={{ display: 'flex', justifyContent: 'center' }}><Check size={16} /></div>, enterprise: <div style={{ display: 'flex', justifyContent: 'center' }}><Check size={16} /></div> },
                                        { feature: 'Progress Analytics', explorer: '—', pro: <div style={{ display: 'flex', justifyContent: 'center' }}><Check size={16} /></div>, enterprise: <div style={{ display: 'flex', justifyContent: 'center' }}><Check size={16} /></div> },
                                        { feature: 'Bulk Candidate Ranking', explorer: '—', pro: '—', enterprise: <div style={{ display: 'flex', justifyContent: 'center' }}><Check size={16} /></div> },
                                        { feature: 'Explainable AI Reports', explorer: '—', pro: '—', enterprise: <div style={{ display: 'flex', justifyContent: 'center' }}><Check size={16} /></div> },
                                        { feature: 'Domain Adaptation', explorer: '—', pro: '—', enterprise: <div style={{ display: 'flex', justifyContent: 'center' }}><Check size={16} /></div> },
                                        { feature: 'Bias Auditing', explorer: '—', pro: '—', enterprise: <div style={{ display: 'flex', justifyContent: 'center' }}><Check size={16} /></div> },
                                        { feature: 'ATS Integration', explorer: '—', pro: '—', enterprise: <div style={{ display: 'flex', justifyContent: 'center' }}><Check size={16} /></div> },
                                        { feature: 'Support', explorer: 'Community', pro: 'Priority', enterprise: 'Dedicated Manager' },
                                    ].map((row) => (
                                        <tr key={row.feature} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                                            <td style={{ padding: '14px 24px', fontSize: '0.88rem', fontWeight: 500 }}>{row.feature}</td>
                                            <td style={{ padding: '14px 24px', textAlign: 'center', fontSize: '0.85rem', color: row.explorer === '—' ? 'var(--text-muted)' : 'var(--text-secondary)' }}>{row.explorer}</td>
                                            <td style={{ padding: '14px 24px', textAlign: 'center', fontSize: '0.85rem', fontWeight: 600, color: row.pro === '—' ? 'var(--text-muted)' : '#34d399', background: 'rgba(139,92,246,0.03)' }}>{row.pro}</td>
                                            <td style={{ padding: '14px 24px', textAlign: 'center', fontSize: '0.85rem', color: row.enterprise === '—' ? 'var(--text-muted)' : 'var(--text-secondary)' }}>{row.enterprise}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="glow-orb" style={{ width: 400, height: 400, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'rgba(139,92,246,0.08)' }} />
                <div className="section" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                        Not Sure? <span className="gradient-text">Start Free.</span>
                    </h2>
                    <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: 28 }}>
                        Try the Explorer plan at zero cost. Upgrade to Pro when you&apos;re ready to
                        unlock Dynamic Roadmap Recalibration and the full resource library.
                    </p>
                    <Link href="/get-started" className="btn-primary" style={{ padding: '16px 40px' }}>
                        Get Started Free →
                    </Link>
                </div>
            </section>
        </>
    );
}
