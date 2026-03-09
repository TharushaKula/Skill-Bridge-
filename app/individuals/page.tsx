import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  BellRing,
  BookOpen,
  CalendarCheck2,
  Compass,
  Gauge,
  Target,
  TrendingUp,
} from 'lucide-react';
import styles from './individuals.module.css';

export const metadata = {
  title: 'For Individuals — Adaptive Career Growth | SkillBridge',
  description:
    'SkillBridge helps individuals map skills, close gaps, and follow adaptive AI roadmaps to reach target roles faster.',
};

const pillars = [
  {
    icon: Target,
    title: 'Precision Skill Mapping',
    text: 'Understand your current strengths and hidden transferable skills with semantic analysis.',
  },
  {
    icon: Compass,
    title: 'Adaptive Roadmaps',
    text: 'Get a living plan that recalibrates based on your progress and market demand shifts.',
  },
  {
    icon: BellRing,
    title: 'Smart Nudges',
    text: 'Receive reminders, milestone nudges, and risk alerts when progress slows down.',
  },
  {
    icon: TrendingUp,
    title: 'Market-Ready Outcomes',
    text: 'Focus on high-impact learning so every hour contributes to real hiring outcomes.',
  },
];

const journey = [
  {
    step: '01',
    title: 'Upload Profile',
    text: 'Add your resume or LinkedIn profile to generate a semantic skill map.',
  },
  {
    step: '02',
    title: 'Reveal Gaps',
    text: 'Identify the exact skills missing for your target role with impact scoring.',
  },
  {
    step: '03',
    title: 'Follow Roadmap',
    text: 'Complete milestone-based learning actions curated from trusted platforms.',
  },
  {
    step: '04',
    title: 'Track Growth',
    text: 'Measure progress weekly and auto-update the plan as your profile evolves.',
  },
];

const learningSources = [
  'Coursera',
  'Udemy',
  'YouTube',
  'MIT OCW',
  'Khan Academy',
  'Open Library',
  'freeCodeCamp',
  'Harvard Online',
];

export default function IndividualsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.kicker}>For Individuals</span>
            <h1>Your AI Career Copilot For Continuous Growth</h1>
            <p>
              Stop guessing what to learn next. SkillBridge maps your skills,
              prioritizes the right gaps, and builds an adaptive roadmap aligned
              to your target role.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/get-started" className={styles.primaryPill}>Start Free Skill Audit</Link>
              <Link href="/how-it-works" className={styles.secondaryPill}>See The Engine</Link>
            </div>
            <div className={styles.statRow}>
              <div><strong>94%</strong><span>Matching accuracy</span></div>
              <div><strong>3.2x</strong><span>Faster skill closure</span></div>
              <div><strong>50K+</strong><span>Skills mapped</span></div>
            </div>
          </div>

          <div className={styles.roadmapCard}>
            <div className={styles.roadmapHeader}>
              <span>Adaptive Roadmap</span>
              <BadgeCheck size={16} />
            </div>
            <div className={styles.roadmapList}>
              {[
                { phase: 'Foundation', weeks: 'Week 1-3', status: 'done' },
                { phase: 'Specialization', weeks: 'Week 4-8', status: 'active' },
                { phase: 'Cloud & DevOps', weeks: 'Week 9-14', status: 'upcoming' },
                { phase: 'Portfolio Sprint', weeks: 'Week 15-18', status: 'upcoming' },
              ].map((item) => (
                <article key={item.phase} className={styles.roadmapItem}>
                  <span className={`${styles.roadDot} ${styles[item.status]}`} />
                  <div>
                    <h4>{item.phase}</h4>
                    <p>{item.weeks}</p>
                  </div>
                  <span className={`${styles.badge} ${styles[item.status]}`}>
                    {item.status === 'done' ? 'Done' : item.status === 'active' ? 'Live' : 'Next'}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.pillars}>
          <div className={styles.sectionIntro}>
            <span className={styles.kicker}>Why SkillBridge</span>
            <h2>Everything you need to move from learning to earning</h2>
          </div>

          <div className={styles.pillarGrid}>
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.title} className={styles.pillarCard}>
                  <div className={styles.pillarIcon}><Icon size={18} /></div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.journeySection}>
          <div className={styles.sectionIntro}>
            <span className={styles.kicker}>Your Journey</span>
            <h2>A simple 4-step loop that keeps improving</h2>
          </div>

          <div className={styles.journeyGrid}>
            {journey.map((item) => (
              <article key={item.step} className={styles.journeyCard}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.resourceSection}>
          <div className={styles.sectionIntro}>
            <span className={styles.kicker}>Resource Intelligence</span>
            <h2>Curated learning from top platforms</h2>
            <p>
              We source the right material for each gap so you spend time learning,
              not searching.
            </p>
          </div>

          <div className={styles.resourceGrid}>
            {learningSources.map((source) => (
              <article key={source} className={styles.resourceChip}>
                <BookOpen size={15} />
                <span>{source}</span>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.bottomCta}>
          <div className={styles.ctaPanel}>
            <div className={styles.ctaText}>
              <Gauge size={18} />
              <h3>See your personalized roadmap in under 60 seconds</h3>
              <p>Upload your profile and get an AI-powered skill-gap report instantly.</p>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/get-started" className={styles.primaryPill}>
                Start Free Analysis <ArrowRight size={16} />
              </Link>
              <Link href="/pricing" className={styles.secondaryPill}>View Plans</Link>
            </div>
          </div>
          <div className={styles.inlineMeta}>
            <span><CalendarCheck2 size={14} /> Weekly milestones</span>
            <span><BadgeCheck size={14} /> Verified skill outcomes</span>
            <span><TrendingUp size={14} /> Market-aligned guidance</span>
          </div>
        </section>
      </div>
    </div>
  );
}
