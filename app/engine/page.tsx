import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: 'The Engine — SkillBridge Multi-Agent Architecture',
    description: 'Discover how SkillBridge\'s four specialized AI agents — Extraction, Gap Analysis, Roadmap, and Tracker — work together to power your career evolution.',
};

export default function EnginePage() {
    return (
        <>
            {/* Hero */}
            <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                {/* Background Image & Overlay */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    <Image
                        src="/images/EnginePage-AgentPipeline.png"
                        alt="SkillBridge Agent Pipeline"
                        fill
                        priority
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        quality={90}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,6,15,0.85) 0%, rgba(6,6,15,0.6) 40%, rgba(6,6,15,0.95) 100%)' }} />
                </div>

                <div className="glow-orb" style={{ width: 500, height: 500, top: '-5%', left: '40%', background: 'rgba(139,92,246,0.15)', zIndex: 1 }} />
                <div className="bg-grid" style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.5 }} />
                <div className="section animate-fade-up" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 140, zIndex: 2 }}>
                    <div className="section-label">Under the Hood</div>
                    <h1 className="section-title" style={{ maxWidth: 760 }}>
                        The <span className="gradient-text">Multi-Agent Engine</span> Powering Your Growth
                    </h1>
                    <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: 620 }}>
                        Four specialized AI agents working in concert — each with a unique role, collaborating through a unified pipeline to deliver precision career intelligence.
                    </p>
                </div>
            </section>

            {/* Pipeline Visualization */}
            <section style={{ position: 'relative' }}>
                <div className="section">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>

                        {/* Agent 1: Extraction */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', padding: '60px 0' }} className="engine-row">
                            <div className="animate-fade-up">
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                                    <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>🔍</div>
                                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--violet-400)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Agent 01</span>
                                </div>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 12 }}>Extraction Agent</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20 }}>
                                    Goes beyond keyword parsing. Using advanced NLP with Sentence-BERT, this agent builds rich semantic
                                    skill profiles from CVs and resumes — understanding context, proficiency levels, and transferable competencies.
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                    {['NLP Parsing', 'Sentence-BERT', 'Semantic Embedding', 'Context Mapping'].map((t) => (
                                        <span key={t} className="glass-subtle" style={{ padding: '6px 14px', fontSize: '0.78rem', color: 'var(--violet-300)', fontWeight: 500 }}>{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="animate-fade-up-delay-1 huly-window">
                                <div className="huly-window-header">
                                    <div className="huly-dot" style={{ background: '#ff5f56' }} />
                                    <div className="huly-dot" style={{ background: '#ffbd2e' }} />
                                    <div className="huly-dot" style={{ background: '#27c93f' }} />
                                </div>
                                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
                                    <Image
                                        src="/images/platform-images/CV-Analyzer-page.png"
                                        alt="CV Analyzer Platform Screenshot"
                                        fill
                                        style={{ objectFit: 'contain', objectPosition: 'top' }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Connector */}
                        <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 0' }}>
                            <div style={{ width: 2, height: 48, background: 'linear-gradient(to bottom, var(--violet-500), var(--cyan-400))', borderRadius: 2 }} />
                        </div>

                        {/* Agent 2: Gap Analysis */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', padding: '60px 0' }} className="engine-row">
                            <div className="glass-card animate-fade-up" style={{ padding: 32, order: 0 }}>
                                <div style={{ marginBottom: 20, fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-muted)' }}>Gap Analysis Matrix</div>
                                {[
                                    { skill: 'Cloud Architecture', yours: 34, market: 85, gap: 'High' },
                                    { skill: 'MLOps', yours: 22, market: 78, gap: 'Critical' },
                                    { skill: 'System Design', yours: 45, market: 82, gap: 'Medium' },
                                    { skill: 'Python', yours: 92, market: 88, gap: 'None' },
                                ].map((r) => (
                                    <div key={r.skill} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                                        <span style={{ width: 130, fontSize: '0.82rem', color: 'var(--text-secondary)', flexShrink: 0 }}>{r.skill}</span>
                                        <div style={{ flex: 1, height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
                                            <div style={{ height: '100%', borderRadius: 3, width: `${r.yours}%`, background: r.gap === 'None' ? '#34d399' : r.gap === 'Critical' ? '#fb7185' : '#fbbf24', transition: 'width 1s ease' }} />
                                        </div>
                                        <span style={{ fontSize: '0.72rem', fontWeight: 600, color: r.gap === 'None' ? '#34d399' : r.gap === 'Critical' ? '#fb7185' : '#fbbf24', width: 55, textAlign: 'right' }}>{r.gap}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="animate-fade-up-delay-1" style={{ order: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                                    <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>📊</div>
                                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--cyan-400)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Agent 02</span>
                                </div>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 12 }}>Gap Analysis Agent</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20 }}>
                                    Compares your semantic skill profile against real-time market demands using high-dimensional embeddings.
                                    Identifies not just missing skills, but the priority and impact of each gap on your career trajectory.
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                    {['Cosine Similarity', 'Market Demand API', 'Priority Scoring', 'Impact Analysis'].map((t) => (
                                        <span key={t} className="glass-subtle" style={{ padding: '6px 14px', fontSize: '0.78rem', color: 'var(--cyan-400)', fontWeight: 500 }}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Connector */}
                        <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 0' }}>
                            <div style={{ width: 2, height: 48, background: 'linear-gradient(to bottom, var(--cyan-400), var(--emerald-400))', borderRadius: 2 }} />
                        </div>

                        {/* Agent 3: Roadmap */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', padding: '60px 0' }} className="engine-row">
                            <div className="animate-fade-up">
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                                    <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>🗺️</div>
                                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Agent 03</span>
                                </div>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 12 }}>Roadmap Agent</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20 }}>
                                    Generates personalized, adaptive learning roadmaps using RAG (Retrieval-Augmented Generation).
                                    Curates resources from Coursera, Udemy, YouTube, and open-source platforms — tailored to your specific gaps.
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                    {['RAG Pipeline', 'Coursera API', 'Udemy API', 'Adaptive Paths'].map((t) => (
                                        <span key={t} className="glass-subtle" style={{ padding: '6px 14px', fontSize: '0.78rem', color: '#34d399', fontWeight: 500 }}>{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="animate-fade-up-delay-1 huly-window">
                                <div className="huly-window-header">
                                    <div className="huly-dot" style={{ background: '#ff5f56' }} />
                                    <div className="huly-dot" style={{ background: '#ffbd2e' }} />
                                    <div className="huly-dot" style={{ background: '#27c93f' }} />
                                </div>
                                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
                                    <Image
                                        src="/images/platform-images/roadmap-page.png"
                                        alt="Skill Roadmap Platform Screenshot"
                                        fill
                                        style={{ objectFit: 'contain', objectPosition: 'top' }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Connector */}
                        <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 0' }}>
                            <div style={{ width: 2, height: 48, background: 'linear-gradient(to bottom, var(--emerald-400), var(--amber-400))', borderRadius: 2 }} />
                        </div>

                        {/* Agent 4: Tracker */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', padding: '60px 0' }} className="engine-row">
                            <div className="glass-card animate-fade-up" style={{ padding: 32, order: 0 }}>
                                <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 16 }}>Progress Dashboard</div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                                    {[
                                        { label: 'Skills Acquired', val: '12/23', pct: 52, color: '#34d399' },
                                        { label: 'Courses Done', val: '8/14', pct: 57, color: '#8b5cf6' },
                                        { label: 'Market Readiness', val: '67%', pct: 67, color: '#06b6d4' },
                                        { label: 'Recalibrations', val: '3', pct: 100, color: '#fbbf24' },
                                    ].map((s) => (
                                        <div key={s.label} className="glass-subtle" style={{ padding: 16, textAlign: 'center' }}>
                                            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: s.color }}>{s.val}</div>
                                            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 4 }}>{s.label}</div>
                                            <div style={{ height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.05)', marginTop: 8 }}>
                                                <div style={{ height: '100%', borderRadius: 2, width: `${s.pct}%`, background: s.color }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="animate-fade-up-delay-1" style={{ order: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                                    <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'rgba(251,191,36,0.12)', border: '1px solid rgba(251,191,36,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>📈</div>
                                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Agent 04</span>
                                </div>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 12 }}>Tracker Agent</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20 }}>
                                    Continuously monitors your progress and recalibrates recommendations based on real-time market data.
                                    Celebrates milestones, identifies plateaus, and ensures your roadmap stays aligned with evolving industry demands.
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                    {['Real-time Tracking', 'Market Recalibration', 'Milestone Alerts', 'Plateau Detection'].map((t) => (
                                        <span key={t} className="glass-subtle" style={{ padding: '6px 14px', fontSize: '0.78rem', color: '#fbbf24', fontWeight: 500 }}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div style={{ textAlign: 'center', marginTop: 48 }}>
                        <Link href="/get-started" className="btn-primary" style={{ padding: '16px 40px', fontSize: '1rem' }}>
                            Experience the Engine →
                        </Link>
                    </div>
                </div>

                {/* Responsive styles for engine rows */}
                <style>{`
          @media (max-width: 768px) {
            .engine-row { grid-template-columns: 1fr !important; }
            .engine-row > *:first-child { order: 0 !important; }
            .engine-row > *:last-child { order: 1 !important; }
          }
        `}</style>
            </section>
        </>
    );
}
