import Link from 'next/link';
import Image from 'next/image';
import { Search, ClipboardList, Scale, Target, Package, Factory, BarChart, Link as LinkIcon, Lock, TrendingUp } from 'lucide-react';

export const metadata = {
    title: 'For Recruiters — Precision Talent Matching | SkillBridge',
    description: 'Go beyond keyword screening. SkillBridge delivers explainable AI rankings, semantic candidate matching, and fairness-aware hiring tools for modern recruiters.',
};

export default function RecruitersPage() {
    return (
        <>
            {/* Hero */}
            <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                {/* Background Image & Overlay */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    <Image
                        src="/images/RecruitersPage.png"
                        alt="SkillBridge For Recruiters"
                        fill
                        priority
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        quality={90}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,6,15,0.85) 0%, rgba(6,6,15,0.6) 40%, rgba(6,6,15,0.95) 100%)' }} />
                </div>

                <div className="glow-orb" style={{ width: 500, height: 500, top: '-5%', left: '20%', background: 'rgba(6,182,212,0.15)', zIndex: 1 }} />
                <div className="glow-orb" style={{ width: 400, height: 400, bottom: '5%', right: '15%', background: 'rgba(139,92,246,0.15)', zIndex: 1 }} />
                <div className="bg-grid" style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.5 }} />
                <div className="section animate-fade-up" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 140, zIndex: 2 }}>
                    <div className="section-label">For Recruiters</div>
                    <h1 className="section-title" style={{ maxWidth: 760 }}>
                        <span className="gradient-text">Precision Talent Matching</span>
                        {' '}Your Team Can Trust
                    </h1>
                    <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: 620, marginBottom: 36 }}>
                        Move beyond keyword filters. SkillBridge uses semantic AI to rank candidates by true competency —
                        and explains every decision so your team hires with confidence.
                    </p>
                    <Link href="/get-started" className="btn-primary" style={{ padding: '16px 40px', fontSize: '1rem' }}>
                        Request Enterprise Demo →
                    </Link>
                </div>
            </section>

            {/* Anti-Black Box */}
            <section style={{ position: 'relative' }}>
                <div className="section">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }} className="engine-row">
                        <div className="animate-fade-up">
                            <div className="section-label" style={{ marginBottom: 16 }}>The Anti-Black Box</div>
                            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>
                                See <span className="gradient-text">Why</span> a Candidate Ranks High
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20 }}>
                                92.3% of recruiters trust AI more when it explains its reasoning. SkillBridge doesn&apos;t just score — it shows the semantic breakdown behind every ranking.
                            </p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                                {[
                                    { icon: <Search size={20} color="#8b5cf6" />, title: 'Semantic Skill Matching', desc: 'Understands that "React" and "Frontend Development" are deeply related.' },
                                    { icon: <ClipboardList size={20} color="#06b6d4" />, title: 'Explainable Rankings', desc: 'Full transparency on why each candidate scored the way they did.' },
                                    { icon: <Scale size={20} color="#34d399" />, title: 'Fairness Auditing', desc: 'Built-in bias detection and fairness-aware training reports.' },
                                    { icon: <Target size={20} color="#fbbf24" />, title: 'Precision Over Volume', desc: 'Quality matches, not just more resumes in your inbox.' },
                                ].map((f) => (
                                    <li key={f.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                                        <span style={{ flexShrink: 0, marginTop: 4 }}>{f.icon}</span>
                                        <div>
                                            <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: 2 }}>{f.title}</div>
                                            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{f.desc}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Candidate Ranking Card */}
                        <div className="glass-card animate-fade-up-delay-1" style={{ padding: 32 }}>
                            <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 20 }}>
                                Candidate Ranking — Senior ML Engineer
                            </div>
                            {[
                                { name: 'Sarah Chen', score: 94, match: ['Python 0.95', 'TensorFlow 0.91', 'MLOps 0.88'], top: true },
                                { name: 'Marcus Rivera', score: 87, match: ['Python 0.92', 'PyTorch 0.86', 'Cloud 0.79'] },
                                { name: 'Aisha Patel', score: 82, match: ['Python 0.88', 'Data Eng 0.84', 'MLOps 0.72'] },
                            ].map((c, i) => (
                                <div key={c.name} className={i === 0 ? 'glass-subtle' : ''} style={{ padding: 16, marginBottom: 12, borderRadius: 'var(--radius-md)', border: c.top ? '1px solid rgba(139,92,246,0.3)' : '1px solid transparent' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                            <div style={{ width: 32, height: 32, borderRadius: '50%', background: c.top ? 'var(--gradient-violet)' : 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700 }}>
                                                #{i + 1}
                                            </div>
                                            <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>{c.name}</span>
                                        </div>
                                        <span style={{ fontWeight: 800, fontSize: '1.1rem', color: c.top ? '#34d399' : 'var(--text-secondary)' }}>{c.score}%</span>
                                    </div>
                                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                                        {c.match.map((m) => (
                                            <span key={m} style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: 'var(--radius-full)', background: 'rgba(139,92,246,0.1)', color: 'var(--violet-300)' }}>{m}</span>
                                        ))}
                                    </div>
                                    {c.top && (
                                        <div style={{ marginTop: 10, fontSize: '0.78rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                                            &quot;Ranked #1 due to strong alignment in core ML skills and proven MLOps experience.&quot;
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <style>{`
          @media (max-width: 768px) { .engine-row { grid-template-columns: 1fr !important; } }
        `}</style>
            </section>

            {/* Enterprise Features */}
            <section style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="bg-dots" style={{ position: 'absolute', inset: 0 }} />
                <div className="section" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', marginBottom: 56 }}>
                        <div className="section-label">Enterprise Features</div>
                        <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>
                            Built for <span className="gradient-text">Scale & Compliance</span>
                        </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
                        {[
                            { icon: <Package size={24} color="#8b5cf6" />, title: 'Bulk Candidate Processing', desc: 'Upload hundreds of CVs at once. Our agents process and rank them in parallel — no manual review needed.', color: '#8b5cf6' },
                            { icon: <Factory size={24} color="#06b6d4" />, title: 'Domain Adaptation', desc: 'Customize the AI for specific industries — healthcare, fintech, engineering — with domain-specific skill taxonomies.', color: '#06b6d4' },
                            { icon: <BarChart size={24} color="#34d399" />, title: 'Bias Auditing Reports', desc: 'Automated fairness reports that demonstrate compliance with diversity and inclusion requirements.', color: '#34d399' },
                            { icon: <LinkIcon size={24} color="#fbbf24" />, title: 'ATS Integration', desc: 'Seamlessly integrates with your existing Applicant Tracking System through our REST API.', color: '#fbbf24' },
                            { icon: <Lock size={24} color="#fb7185" />, title: 'Data Privacy First', desc: 'SOC 2 compliant. Candidate data is encrypted at rest and in transit, with configurable data retention.', color: '#fb7185' },
                            { icon: <TrendingUp size={24} color="#a78bfa" />, title: 'Hiring Analytics', desc: 'Track time-to-hire, candidate pipeline quality, and matching accuracy across all open positions.', color: '#a78bfa' },
                        ].map((f) => (
                            <div key={f.title} className="glass-card" style={{ padding: 28 }}>
                                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: `${f.color}15`, border: `1px solid ${f.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                                    {f.icon}
                                </div>
                                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Stats */}
            <section>
                <div className="section" style={{ textAlign: 'center' }}>
                    <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', marginBottom: 48 }}>
                        Trusted by <span className="gradient-text">Forward-Thinking Teams</span>
                    </h2>
                    <div className="stats-row" style={{ justifyContent: 'center' }}>
                        <div className="stat-item">
                            <div className="stat-value">92.3%</div>
                            <div className="stat-label">Recruiter Trust Score</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">3.5x</div>
                            <div className="stat-label">Faster Screening</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">40%</div>
                            <div className="stat-label">↓ Cost-per-Hire</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">98%</div>
                            <div className="stat-label">Fairness Score</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="glow-orb" style={{ width: 500, height: 500, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'rgba(6,182,212,0.08)' }} />
                <div className="section" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>
                        Hire Smarter, <span className="gradient-text">Not Harder</span>
                    </h2>
                    <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: 32 }}>
                        See how SkillBridge transforms your hiring pipeline. Schedule an enterprise demo with our team.
                    </p>
                    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Link href="/get-started" className="btn-primary" style={{ padding: '16px 40px' }}>Request Enterprise Demo →</Link>
                        <Link href="/pricing" className="btn-secondary" style={{ padding: '16px 40px' }}>Enterprise Pricing</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
