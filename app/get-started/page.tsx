'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function GetStartedPage() {
    const [formType, setFormType] = useState<'individual' | 'enterprise'>('individual');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div className="glow-orb" style={{ width: 500, height: 500, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'rgba(139,92,246,0.1)' }} />
                <div className="section animate-fade-up" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(52,211,153,0.12)', border: '2px solid rgba(52,211,153,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: 24 }}>
                        ✓
                    </div>
                    <h1 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
                        You&apos;re <span className="gradient-text">All Set!</span>
                    </h1>
                    <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: 32 }}>
                        {formType === 'individual'
                            ? "We've received your request. Check your email for a link to start your free skill audit."
                            : "Our enterprise team will reach out within 24 hours to schedule your personalized demo."}
                    </p>
                    <a href="/" className="btn-secondary" style={{ padding: '14px 32px' }}>
                        ← Back to Home
                    </a>
                </div>
            </section>
        );
    }

    return (
        <>
            {/* Hero */}
            <section style={{ position: 'relative', overflow: 'hidden', minHeight: '450px', display: 'flex', alignItems: 'center' }}>
                {/* Background Image & Overlay */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    <Image
                        src="/images/GetStartedPageHeader.png"
                        alt="SkillBridge Get Started"
                        fill
                        priority
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        quality={90}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,6,15,0.85) 0%, rgba(6,6,15,0.6) 40%, rgba(6,6,15,0.95) 100%)' }} />
                </div>

                <div className="glow-orb" style={{ width: 500, height: 500, top: '-10%', left: '50%', transform: 'translateX(-50%)', background: 'rgba(139,92,246,0.15)', zIndex: 1 }} />
                <div className="bg-grid" style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.5 }} />
                <div className="section animate-fade-up" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 140, paddingBottom: 40, zIndex: 2 }}>
                    <div className="section-label">Get Started</div>
                    <h1 className="section-title" style={{ maxWidth: 600 }}>
                        Begin Your <span className="gradient-text">Career Evolution</span>
                    </h1>
                    <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: 520 }}>
                        Start a free skill audit or request an enterprise demo. It takes less than 60 seconds.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section>
                <div className="section" style={{ paddingTop: 0, maxWidth: 620, margin: '0 auto' }}>

                    {/* Toggle */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
                        <div className="glass-subtle" style={{ display: 'inline-flex', padding: 4, borderRadius: 'var(--radius-full)' }}>
                            <button
                                onClick={() => setFormType('individual')}
                                style={{
                                    padding: '10px 28px',
                                    borderRadius: 'var(--radius-full)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '0.88rem',
                                    fontWeight: 600,
                                    fontFamily: 'var(--font-display)',
                                    transition: 'all 0.3s',
                                    background: formType === 'individual' ? 'var(--gradient-violet)' : 'transparent',
                                    color: formType === 'individual' ? '#fff' : 'var(--text-secondary)',
                                }}
                            >
                                🧑‍💻 Start Audit
                            </button>
                            <button
                                onClick={() => setFormType('enterprise')}
                                style={{
                                    padding: '10px 28px',
                                    borderRadius: 'var(--radius-full)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '0.88rem',
                                    fontWeight: 600,
                                    fontFamily: 'var(--font-display)',
                                    transition: 'all 0.3s',
                                    background: formType === 'enterprise' ? 'var(--gradient-violet)' : 'transparent',
                                    color: formType === 'enterprise' ? '#fff' : 'var(--text-secondary)',
                                }}
                            >
                                🏢 Request Demo
                            </button>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="glass-card animate-fade-up" style={{ padding: 40 }}>
                        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 8 }}>
                            {formType === 'individual' ? 'Start Your Free Skill Audit' : 'Request Enterprise Demo'}
                        </h2>
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: 32, lineHeight: 1.5 }}>
                            {formType === 'individual'
                                ? "Upload your CV and our AI agents will analyze your skills, identify gaps, and generate a preview roadmap — completely free."
                                : "Get a personalized walkthrough of SkillBridge's enterprise features including bulk ranking, domain adaptation, and bias auditing."}
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                                <div className="form-group">
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-input" placeholder="Jane" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" className="form-input" placeholder="Doe" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-input" placeholder="jane@example.com" required />
                            </div>

                            {formType === 'enterprise' && (
                                <>
                                    <div className="form-group">
                                        <label className="form-label">Company</label>
                                        <input type="text" className="form-input" placeholder="Acme Corp" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Team Size</label>
                                        <select className="form-select" required>
                                            <option value="">Select team size</option>
                                            <option value="1-10">1–10</option>
                                            <option value="11-50">11–50</option>
                                            <option value="51-200">51–200</option>
                                            <option value="201-1000">201–1,000</option>
                                            <option value="1000+">1,000+</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Industry</label>
                                        <select className="form-select" required>
                                            <option value="">Select industry</option>
                                            <option value="tech">Technology</option>
                                            <option value="finance">Finance & Banking</option>
                                            <option value="healthcare">Healthcare</option>
                                            <option value="education">Education</option>
                                            <option value="consulting">Consulting</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </>
                            )}

                            {formType === 'individual' && (
                                <div className="form-group">
                                    <label className="form-label">Target Role (Optional)</label>
                                    <input type="text" className="form-input" placeholder="e.g. Senior ML Engineer" />
                                </div>
                            )}

                            <div className="form-group">
                                <label className="form-label">
                                    {formType === 'individual' ? 'Anything else?' : 'Tell us about your needs'}
                                </label>
                                <textarea
                                    className="form-textarea"
                                    placeholder={formType === 'individual'
                                        ? "Optional: Tell us about your career goals..."
                                        : "What challenges are you facing with talent acquisition?"}
                                    rows={4}
                                />
                            </div>

                            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1rem', marginTop: 8 }}>
                                {formType === 'individual' ? 'Start Free Audit →' : 'Request Demo →'}
                            </button>

                            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.5 }}>
                                {formType === 'individual'
                                    ? 'No credit card required. Your data is encrypted and never shared.'
                                    : "We'll respond within 24 hours. No commitment required."}
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
