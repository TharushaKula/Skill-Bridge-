import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'SkillBridge — Transform Your Career with Multi-Agent AI',
  description: 'From static resumes to dynamic career evolution. SkillBridge bridges the talent-demand mismatch with AI-powered skill mapping, gap analysis, and adaptive learning roadmaps.',
};

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        {/* Background Image & Overlay */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/images/HomeHero-Main-Banner.png"
            alt="SkillBridge AI Career Evolution Gateway"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            quality={90}
          />
          {/* Deep gradient overlay to ensure white text remains legible */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,6,15,0.85) 0%, rgba(6,6,15,0.6) 40%, rgba(6,6,15,0.95) 100%)' }} />
        </div>

        {/* Background effects */}
        <div className="glow-orb" style={{ width: 600, height: 600, top: '-10%', left: '50%', transform: 'translateX(-50%)', background: 'rgba(139,92,246,0.15)', zIndex: 1 }} />
        <div className="glow-orb" style={{ width: 400, height: 400, bottom: '10%', right: '-5%', background: 'rgba(6,182,212,0.1)', zIndex: 1 }} />
        <div className="bg-grid" style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.5 }} />

        <div className="section animate-fade-up" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 140, zIndex: 2 }}>
          <div className="section-label animate-fade-up">
            <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#34d399', animation: 'pulse-glow 2s infinite' }} />
            Multi-Agent AI Platform
          </div>

          <h1 className="section-title animate-fade-up-delay-1" style={{ maxWidth: 820, fontSize: 'clamp(2.5rem, 6vw, 4.2rem)' }}>
            Transform <span className="gradient-text">Static Resumes</span> Into{' '}
            <span className="gradient-text">Dynamic Career Evolution</span>
          </h1>

          <p className="section-subtitle animate-fade-up-delay-2" style={{ maxWidth: 640, textAlign: 'center', marginBottom: 40, fontSize: '1.18rem' }}>
            SkillBridge deploys specialized AI agents that map your skills, identify gaps, and build
            adaptive learning roadmaps — bridging the talent-demand mismatch in real time.
          </p>

          <div className="animate-fade-up-delay-3" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/get-started" className="btn-primary" style={{ padding: '16px 36px', fontSize: '1rem' }}>
              Start Free Audit →
            </Link>
            <Link href="/engine" className="btn-secondary" style={{ padding: '16px 36px', fontSize: '1rem' }}>
              See How It Works
            </Link>
          </div>

          {/* Stats */}
          <div className="stats-row animate-fade-up-delay-3" style={{ justifyContent: 'center', marginTop: 64 }}>
            <div className="stat-item">
              <div className="stat-value">94.7%</div>
              <div className="stat-label">Matching Accuracy</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">3.2x</div>
              <div className="stat-label">Faster Upskilling</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">50K+</div>
              <div className="stat-label">Skills Mapped</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">92.3%</div>
              <div className="stat-label">Recruiter Trust Score</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM → SOLUTION ═══ */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb" style={{ width: 500, height: 500, top: '20%', left: '-10%', background: 'rgba(139,92,246,0.06)' }} />
        <div className="section">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label">The Problem We Solve</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              The Talent-Demand Mismatch is <span className="gradient-text">Widening</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              87% of companies report skills gaps, yet traditional screening tools rely on simple keyword matching—missing the real potential in every candidate.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {/* Before card */}
            <div className="glass-card" style={{ padding: 32 }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#fb7185', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>
                ✕ The Old Way
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 12 }}>Keyword-Based Screening</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Static resume parsing', 'Binary skill matching', 'No growth potential analysis', 'Black-box decisions', 'One-size-fits-all advice'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <span style={{ color: '#fb7185' }}>✕</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After card */}
            <div className="glass-card" style={{ padding: 32, borderColor: 'rgba(139,92,246,0.3)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>
                ✓ The SkillBridge Way
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 12 }}>Semantic AI Understanding</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Deep semantic skill extraction', 'Multi-dimensional gap analysis', 'Dynamic career trajectory mapping', 'Explainable AI reasoning', 'Personalized adaptive roadmaps'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <span style={{ color: '#34d399' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS (Quick) ═══ */}
      <section style={{ position: 'relative' }}>
        <div className="bg-dots" style={{ position: 'absolute', inset: 0 }} />
        <div className="section" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="section-label">How It Works</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Four Agents. One <span className="gradient-text">Unified Mission</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Our specialized AI agents collaborate in real time to analyze, plan, and accelerate your career.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { icon: '🔍', name: 'Extraction Agent', desc: 'Parses resumes with NLP to build rich, semantic skill profiles beyond keywords.', color: '#8b5cf6' },
              { icon: '📊', name: 'Gap Analysis Agent', desc: 'Compares your profile against market demands using high-dimensional embeddings.', color: '#06b6d4' },
              { icon: '🗺️', name: 'Roadmap Agent', desc: 'Generates personalized, adaptive learning paths with curated resources.', color: '#34d399' },
              { icon: '📈', name: 'Tracker Agent', desc: 'Monitors progress and recalibrates recommendations based on real-time data.', color: '#fbbf24' },
            ].map((agent) => (
              <div key={agent.name} className="glass-card" style={{ padding: 28, textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-md)', background: `${agent.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '1.5rem', border: `1px solid ${agent.color}30` }}>
                  {agent.icon}
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 8 }}>{agent.name}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{agent.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link href="/engine" className="btn-secondary">
              Explore the Engine in Detail →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ WHO IT'S FOR ═══ */}
      <section style={{ position: 'relative' }}>
        <div className="glow-orb" style={{ width: 400, height: 400, bottom: '10%', right: '5%', background: 'rgba(6,182,212,0.06)' }} />
        <div className="section">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="section-label">Built For</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Two Sides. <span className="gradient-text">One Bridge</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28 }}>
            {/* Individuals */}
            <div className="glass-card" style={{ padding: 40 }}>
              <div style={{ fontSize: '2rem', marginBottom: 16 }}>🧑‍💻</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 12 }}>For Individuals</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 24, lineHeight: 1.6 }}>
                Get an adaptive, AI-driven career roadmap that evolves with you.
                Track milestones, close skill gaps, and unlock new opportunities.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                {['Adaptive Learning Roadmap', 'Real-time milestone tracking', 'Curated course recommendations', 'Skill gap visualization'].map((f) => (
                  <li key={f} style={{ display: 'flex', gap: 10, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: '#34d399' }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/individuals" className="btn-secondary" style={{ width: '100%' }}>
                Learn More →
              </Link>
            </div>

            {/* Recruiters */}
            <div className="glass-card" style={{ padding: 40 }}>
              <div style={{ fontSize: '2rem', marginBottom: 16 }}>🏢</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 12 }}>For Recruiters</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 24, lineHeight: 1.6 }}>
                Precision talent matching that goes beyond keywords. Understand every candidate through explainable AI rankings your team can trust.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                {['Precision Talent Matching', 'Explainable AI rankings', 'Bulk candidate analysis', 'Fairness-aware screening'].map((f) => (
                  <li key={f} style={{ display: 'flex', gap: 10, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: '#06b6d4' }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/recruiters" className="btn-secondary" style={{ width: '100%' }}>
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb" style={{ width: 500, height: 500, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'rgba(139,92,246,0.1)' }} />
        <div className="section" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="section-label">Ready?</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            Your Career is <span className="gradient-text">Not Static</span>. Your Tools Shouldn&apos;t Be Either.
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: 36 }}>
            Join thousands of professionals and recruiters who are already building smarter career paths with SkillBridge.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/get-started" className="btn-primary" style={{ padding: '16px 40px', fontSize: '1rem' }}>
              Start Your Free Audit
            </Link>
            <Link href="/pricing" className="btn-secondary" style={{ padding: '16px 40px', fontSize: '1rem' }}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
