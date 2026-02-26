'use client';

import { useState } from 'react';

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: 'How is SkillBridge different from keyword-based screening?',
            answer: `Traditional screening tools rely on simple keyword matching — if a CV says "Python," it's a match; if not, it's rejected. This misses context, transferable skills, and true proficiency. SkillBridge uses Sentence-BERT and high-dimensional embeddings to understand skills semantically. For example, it understands that "data pipeline engineering" is closely related to "ETL development," even if the exact words don't match. This shift from lexical to semantic understanding means better matches, fewer false negatives, and a genuinely deeper understanding of a candidate's capabilities.`,
        },
        {
            question: 'Can SkillBridge help me find specific courses to close my skill gaps?',
            answer: `Absolutely. SkillBridge uses RAG (Retrieval-Augmented Generation) to curate learning resources from major platforms including Coursera, Udemy, YouTube, MIT OpenCourseWare, and Open Library. Instead of generic recommendations, the system identifies your specific gaps and pulls the exact courses, tutorials, and textbooks that address them — ranked by relevance, quality, and your learning preferences. Pro users get dynamic resource updates as new courses become available.`,
        },
        {
            question: 'How do you ensure the AI recommendations are fair and unbiased?',
            answer: `Fairness is built into our architecture, not bolted on. SkillBridge integrates fairness-aware training that actively checks for demographic biases in skill assessment and candidate ranking. Enterprise clients receive automated Bias Auditing Reports that flag any statistical anomalies. Additionally, our "Anti-Black Box" approach ensures full transparency — every ranking and recommendation comes with an explainable reasoning chain, so your team can verify the AI's logic. 92.3% of recruiters say they trust AI more when it explains its decisions.`,
        },
        {
            question: 'What documents can I upload?',
            answer: `SkillBridge supports CVs/resumes and Job Descriptions in standard formats including PDF, DOCX, and TXT. Our Extraction Agent uses advanced NLP to parse these documents, extracting skills, experience, education, certifications, and context — creating a rich semantic profile that goes far beyond surface-level text extraction.`,
        },
        {
            question: 'What makes the "Dynamic Roadmap Recalibration" different from static recommendations?',
            answer: `Static roadmaps are generated once and never change — like a printed map in a GPS world. SkillBridge's Dynamic Roadmap Recalibration continuously adjusts your learning path based on three signals: your real-time progress (completed milestones, learning velocity), market data shifts (new skills emerging, demand changes), and your evolving career goals. This means your roadmap is always aligned with both where you are and where the industry is heading.`,
        },
        {
            question: 'How does the bulk candidate ranking work for enterprises?',
            answer: `Enterprise clients can upload hundreds of CVs simultaneously. Our multi-agent system processes each candidate in parallel — extracting skills, mapping them against the job description semantically, scoring alignment across multiple dimensions, and ranking them by overall fit. Each ranking comes with an explainable AI report showing exactly why a candidate scored the way they did, enabling faster, fairer, and more defensible hiring decisions.`,
        },
        {
            question: 'Is my data secure?',
            answer: `Yes. SkillBridge is SOC 2 compliant with enterprise-grade security. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We offer configurable data retention policies, and candidate data is never used to train our models without explicit consent. Enterprise clients get dedicated infrastructure options and can request data residency in specific regions.`,
        },
    ];

    return (
        <>
            {/* Hero */}
            <section style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="glow-orb" style={{ width: 400, height: 400, top: '-10%', left: '50%', transform: 'translateX(-50%)', background: 'rgba(139,92,246,0.08)' }} />
                <div className="bg-grid" style={{ position: 'absolute', inset: 0 }} />
                <div className="section animate-fade-up" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 140, paddingBottom: 40 }}>
                    <div className="section-label">The Clarity</div>
                    <h1 className="section-title" style={{ maxWidth: 600 }}>
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h1>
                    <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: 520 }}>
                        Everything you need to know about how SkillBridge works, our technology, and your data.
                    </p>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section>
                <div className="section" style={{ paddingTop: 0 }}>
                    <div className="faq-list">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
                                <button
                                    className="faq-question"
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                >
                                    {faq.question}
                                    <div className="faq-icon">+</div>
                                </button>
                                <div className="faq-answer">
                                    <div className="faq-answer-inner">{faq.answer}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Still have questions */}
            <section style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="glow-orb" style={{ width: 400, height: 400, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'rgba(139,92,246,0.06)' }} />
                <div className="section" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                        Still Have <span className="gradient-text">Questions?</span>
                    </h2>
                    <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: 28 }}>
                        Our team is here to help. Reach out for a personalized walkthrough or
                        start with a free skill audit to see the platform in action.
                    </p>
                    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
                        <a href="/get-started" className="btn-primary" style={{ padding: '16px 36px' }}>Get Started Free →</a>
                        <a href="mailto:hello@skillbridge.ai" className="btn-secondary" style={{ padding: '16px 36px' }}>Email Us</a>
                    </div>
                </div>
            </section>
        </>
    );
}
