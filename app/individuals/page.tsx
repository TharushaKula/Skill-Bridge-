import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: 'For Individuals — Adaptive Learning Roadmaps | SkillBridge',
    description: 'Get a personalized, AI-driven career roadmap that evolves with you. Track milestones, close skill gaps, and unlock new opportunities with SkillBridge.',
};

export default function IndividualsPage() {
    return (
        <>
            {/* Hero */}
            <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                {/* Background Image & Overlay */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    <Image
                        src="/images/IndividualsPage.png"
                        alt="SkillBridge For Individuals"
                        fill
                        priority
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        quality={90}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,6,15,0.85) 0%, rgba(6,6,15,0.6) 40%, rgba(6,6,15,0.95) 100%)' }} />
                </div>

                <div className="glow-orb" style={{ width: 500, height: 500, top: '-5%', right: '10%', background: 'rgba(52,211,153,0.15)', zIndex: 1 }} />
                <div className="glow-orb" style={{ width: 400, height: 400, bottom: '0', left: '10%', background: 'rgba(139,92,246,0.15)', zIndex: 1 }} />
                <div className="bg-dots" style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.5 }} />
                <div className="section animate-fade-up" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 140, zIndex: 2 }}>
                    <div className="section-label">For Individuals</div>
                    <h1 className="section-title" style={{ maxWidth: 760 }}>
                        Your Career Path, <span className="gradient-text">Reimagined by AI</span>
                    </h1>
                    <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: 600, marginBottom: 36 }}>
                        Stop guessing what to learn next. SkillBridge builds an adaptive roadmap that evolves with your progress,
                        market shifts, and career goals — powered by four specialized AI agents.
                    </p>
                    <Link href="/get-started" className="btn-primary" style={{ padding: '16px 40px', fontSize: '1rem' }}>
                        Start Your Free Skill Audit →
                    </Link>
                </div>
            </section>

            {/* Feature: Adaptive Learning Roadmap */}
            <section style={{ position: 'relative' }}>
                <div className="section">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }} className="engine-row">
                        <div className="animate-fade-up">
                            <div className="section-label" style={{ marginBottom: 16 }}>Core Feature</div>
                            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>
                                Adaptive Learning <span className="gradient-text">Roadmap</span>
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>
                                Unlike static course lists, your SkillBridge roadmap is a living document. It recalibrates based on:
                            </p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                                {[
                                    { icon: '🎯', title: 'Your Progress', desc: 'Completed a milestone? Your roadmap instantly adapts.' },
                                    { icon: '📈', title: 'Market Shifts', desc: 'New skills in demand? They surface automatically.' },
                                    { icon: '🧠', title: 'Learning Patterns', desc: 'The AI learns how you learn and optimizes accordingly.' },
                                    { icon: '🔄', title: 'Real-Time Data', desc: 'Dynamic recalibration, not annual reviews.' },
                                ].map((f) => (
                                    <li key={f.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                                        <span style={{ fontSize: '1.2rem', flexShrink: 0, marginTop: 2 }}>{f.icon}</span>
                                        <div>
                                            <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: 2 }}>{f.title}</div>
                                            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{f.desc}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Visual: Roadmap */}
                        <div className="glass-card animate-fade-up-delay-1" style={{ padding: 32 }}>
                            <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 20 }}>Your Adaptive Roadmap</div>
                            {[
                                { phase: 'Foundation', weeks: '1–3', items: ['Python Advanced', 'Statistics Refresher'], done: true },
                                { phase: 'Specialization', weeks: '4–8', items: ['Machine Learning (Coursera)', 'Data Pipeline Design'], done: false, active: true },
                                { phase: 'Cloud & DevOps', weeks: '9–14', items: ['AWS Solutions Architect', 'Docker & Kubernetes'], done: false },
                                { phase: 'Capstone', weeks: '15–18', items: ['End-to-End ML Project', 'Portfolio Building'], done: false },
                            ].map((p, i) => (
                                <div key={p.phase} style={{ display: 'flex', gap: 16, marginBottom: i < 3 ? 20 : 0 }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: p.done ? '#34d399' : p.active ? 'var(--violet-500)' : 'rgba(255,255,255,0.1)', border: p.active ? '2px solid var(--violet-400)' : 'none', flexShrink: 0 }} />
                                        {i < 3 && <div style={{ width: 2, flex: 1, background: p.done ? '#34d399' : 'rgba(255,255,255,0.06)', minHeight: 40 }} />}
                                    </div>
                                    <div style={{ paddingBottom: 4 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                                            <span style={{ fontWeight: 700, fontSize: '0.92rem', color: p.done ? '#34d399' : p.active ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{p.phase}</span>
                                            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Wk {p.weeks}</span>
                                            {p.done && <span style={{ fontSize: '0.68rem', padding: '2px 8px', borderRadius: 'var(--radius-full)', background: 'rgba(52,211,153,0.12)', color: '#34d399', fontWeight: 600 }}>Done</span>}
                                            {p.active && <span style={{ fontSize: '0.68rem', padding: '2px 8px', borderRadius: 'var(--radius-full)', background: 'rgba(139,92,246,0.15)', color: 'var(--violet-400)', fontWeight: 600 }}>Active</span>}
                                        </div>
                                        {p.items.map((item) => (
                                            <div key={item} style={{ fontSize: '0.82rem', color: 'var(--text-muted)', paddingLeft: 4, marginBottom: 2 }}>• {item}</div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <style>{`
          @media (max-width: 768px) { .engine-row { grid-template-columns: 1fr !important; } }
        `}</style>
            </section>

            {/* Milestone Tracking */}
            <section style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="glow-orb" style={{ width: 400, height: 400, top: '20%', right: '-5%', background: 'rgba(139,92,246,0.06)' }} />
                <div className="section">
                    <div style={{ textAlign: 'center', marginBottom: 56 }}>
                        <div className="section-label">Milestone Tracking</div>
                        <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>
                            Every Step <span className="gradient-text">Measured & Celebrated</span>
                        </h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            Track your journey with precision. See exactly where you are, what&apos;s next,
                            and how each completed milestone impacts your career trajectory.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
                        {[
                            { icon: '🏆', title: 'Achievement Badges', desc: 'Earn verifiable badges for every milestone completed — shareable on LinkedIn and your portfolio.', color: '#fbbf24' },
                            { icon: '📊', title: 'Progress Analytics', desc: 'Detailed analytics on learning speed, skill acquisition rate, and comparison to industry benchmarks.', color: '#8b5cf6' },
                            { icon: '🔔', title: 'Smart Notifications', desc: 'Get nudges when you plateau, celebrations when you level up, and alerts when market demands shift.', color: '#06b6d4' },
                            { icon: '🎯', title: 'Goal Alignment', desc: 'Set your target role. Every recommendation is aligned to get you there as efficiently as possible.', color: '#34d399' },
                        ].map((f) => (
                            <div key={f.title} className="glass-card" style={{ padding: 28 }}>
                                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: `${f.color}15`, border: `1px solid ${f.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', marginBottom: 16 }}>
                                    {f.icon}
                                </div>
                                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resource Curation */}
            <section style={{ position: 'relative' }}>
                <div className="bg-grid" style={{ position: 'absolute', inset: 0 }} />
                <div className="section" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', marginBottom: 48 }}>
                        <div className="section-label">Smart Resources</div>
                        <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>
                            Curated Learning from <span className="gradient-text">Top Platforms</span>
                        </h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            Our RAG-driven engine pulls the best resources from major platforms, filtering thousands of options to find the exact courses matched to your gaps.
                        </p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
                        {[
                            { name: 'Coursera', desc: 'University-backed courses' },
                            { name: 'Udemy', desc: 'Practical skill courses' },
                            { name: 'YouTube', desc: 'Free video tutorials' },
                            { name: 'MIT OCW', desc: 'Open courseware' },
                            { name: 'Open Library', desc: 'Free textbooks' },
                        ].map((p) => (
                            <div key={p.name} className="glass-subtle" style={{ padding: '20px 28px', textAlign: 'center', minWidth: 150 }}>
                                <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 4 }}>{p.name}</div>
                                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{p.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="glow-orb" style={{ width: 500, height: 500, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'rgba(139,92,246,0.08)' }} />
                <div className="section" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>
                        Ready to <span className="gradient-text">Evolve Your Career?</span>
                    </h2>
                    <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: 32 }}>
                        Start with a free CV analysis. See your skill map, gaps, and a preview of your personalized roadmap — in under 60 seconds.
                    </p>
                    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Link href="/get-started" className="btn-primary" style={{ padding: '16px 40px' }}>Start Free Audit →</Link>
                        <Link href="/pricing" className="btn-secondary" style={{ padding: '16px 40px' }}>View Plans</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
