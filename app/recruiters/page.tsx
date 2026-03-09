import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  FileSearch,
  Layers,
  Lock,
  Scale,
  ShieldCheck,
  Users,
} from 'lucide-react';
import styles from './recruiters.module.css';

export const metadata = {
  title: 'For Recruiters — Precision Talent Matching | SkillBridge',
  description:
    'SkillBridge helps recruiters shortlist faster with semantic candidate matching, explainable AI ranking, and fairness-aware hiring insights.',
};

const coreBenefits = [
  {
    icon: FileSearch,
    title: 'Semantic Candidate Matching',
    text: 'Identify true competency overlap, not just keyword overlap.',
  },
  {
    icon: BarChart3,
    title: 'Explainable Ranking Scores',
    text: 'Every score includes rationale across skills, relevance, and role fit.',
  },
  {
    icon: Scale,
    title: 'Fairness-Aware Screening',
    text: 'Built-in bias checks and transparent audit trails for hiring teams.',
  },
  {
    icon: Layers,
    title: 'Bulk Pipeline Processing',
    text: 'Process large candidate pools with consistent ranking quality.',
  },
];

const workflow = [
  {
    step: '01',
    title: 'Ingest Candidates',
    text: 'Import resumes from your ATS or upload directly in batches.',
  },
  {
    step: '02',
    title: 'Rank By Role Fit',
    text: 'Score each candidate against role requirements semantically.',
  },
  {
    step: '03',
    title: 'Review Explanations',
    text: 'See why top profiles ranked higher with confidence detail.',
  },
  {
    step: '04',
    title: 'Shortlist With Confidence',
    text: 'Move forward with high-fit candidates faster and more fairly.',
  },
];

const enterprise = [
  { icon: Users, title: 'Team Workspaces', text: 'Shared pipelines, reviewer roles, and centralized hiring decisions.' },
  { icon: Building2, title: 'Domain Configs', text: 'Custom skill frameworks by industry and role family.' },
  { icon: ShieldCheck, title: 'Compliance Ready', text: 'Fairness reporting and explainability logs for governance.' },
  { icon: Lock, title: 'Data Security', text: 'Encryption at rest and in transit, with access controls.' },
];

export default function RecruitersPage() {
  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.kicker}>For Recruiters</span>
            <h1>Precision Talent Matching Your Team Can Trust</h1>
            <p>
              Move beyond keyword filters. SkillBridge ranks candidates with semantic AI,
              explains every score, and helps teams shortlist faster with confidence.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/get-started" className={styles.primaryPill}>Request Enterprise Demo</Link>
              <Link href="/how-it-works" className={styles.secondaryPill}>Explore The Engine</Link>
            </div>
            <div className={styles.statRow}>
              <div><strong>92.3%</strong><span>Recruiter trust score</span></div>
              <div><strong>3.5x</strong><span>Faster shortlisting</span></div>
              <div><strong>40%</strong><span>Lower cost-per-hire</span></div>
            </div>
          </div>

          <div className={styles.rankCard}>
            <div className={styles.rankHeader}>
              <span>Role Matchboard</span>
              <BadgeCheck size={16} />
            </div>
            <div className={styles.rankList}>
              {[
                { name: 'Sarah Chen', score: 94, status: 'top' },
                { name: 'Marcus Rivera', score: 87, status: 'good' },
                { name: 'Aisha Patel', score: 82, status: 'good' },
                { name: 'Nina Gomez', score: 78, status: 'mid' },
              ].map((item, idx) => (
                <article key={item.name} className={styles.rankItem}>
                  <span className={styles.rankNum}>#{idx + 1}</span>
                  <div>
                    <h4>{item.name}</h4>
                    <p>Senior ML Engineer Fit</p>
                  </div>
                  <strong className={`${styles.rankScore} ${styles[item.status]}`}>{item.score}%</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <div className={styles.sectionIntro}>
            <span className={styles.kicker}>Core Value</span>
            <h2>From black-box screening to transparent intelligence</h2>
          </div>

          <div className={styles.benefitGrid}>
            {coreBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article key={benefit.title} className={styles.benefitCard}>
                  <div className={styles.benefitIcon}><Icon size={18} /></div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.workflowSection}>
          <div className={styles.sectionIntro}>
            <span className={styles.kicker}>Hiring Workflow</span>
            <h2>A clean 4-step recruiting flow</h2>
          </div>

          <div className={styles.workflowGrid}>
            {workflow.map((item) => (
              <article key={item.step} className={styles.workflowCard}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <CheckCircle2 size={16} />
              </article>
            ))}
          </div>
        </section>

        <section className={styles.enterpriseSection}>
          <div className={styles.sectionIntro}>
            <span className={styles.kicker}>Enterprise Ready</span>
            <h2>Built for scale, governance, and hiring velocity</h2>
          </div>

          <div className={styles.enterpriseGrid}>
            {enterprise.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className={styles.enterpriseCard}>
                  <Icon size={18} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.bottomCta}>
          <div className={styles.ctaPanel}>
            <div className={styles.ctaText}>
              <BriefcaseBusiness size={18} />
              <h3>Hire smarter with explainable AI ranking</h3>
              <p>
                Run a recruiter demo with your own role requirements and see ranked candidates in minutes.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/get-started" className={styles.primaryPill}>
                Request Demo <ArrowRight size={16} />
              </Link>
              <Link href="/pricing" className={styles.secondaryPill}>Enterprise Pricing</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
