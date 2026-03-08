import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Database,
  Layers,
  Map,
  Radar,
  Search,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import styles from './engine.module.css';

export const metadata = {
  title: 'The Engine — SkillBridge Multi-Agent Architecture',
  description:
    "Discover how SkillBridge's four specialized AI agents work together to power semantic skill mapping, gap intelligence, and adaptive career roadmaps.",
};

const agents = [
  {
    id: '01',
    name: 'Extraction Agent',
    icon: Search,
    accent: 'violet',
    summary:
      'Parses resumes, portfolios, and role descriptions with semantic understanding instead of keyword matching.',
    points: [
      'Sentence-level skill interpretation',
      'Role-context aware parsing',
      'Transferable skill detection',
    ],
    tags: ['NLP Parsing', 'Sentence-BERT', 'Skill Taxonomy'],
    image: '/images/platform-images/CV-Analyzer-page.png',
    imageAlt: 'Skill extraction dashboard',
  },
  {
    id: '02',
    name: 'Gap Analysis Agent',
    icon: BarChart3,
    accent: 'cyan',
    summary:
      'Compares candidate profiles to market demand vectors and role requirements to identify priority gaps.',
    points: [
      'High-dimensional similarity scoring',
      'Demand-weighted priority ranking',
      'Explainable confidence breakdown',
    ],
    tags: ['Cosine Similarity', 'Demand Signals', 'Priority Scoring'],
    image: '/images/EnginePage-AgentPipeline.png',
    imageAlt: 'Gap intelligence pipeline view',
  },
  {
    id: '03',
    name: 'Roadmap Agent',
    icon: Map,
    accent: 'green',
    summary:
      'Builds adaptive learning roadmaps that close the highest-impact gaps first, with milestone checkpoints.',
    points: [
      'RAG-powered learning recommendations',
      'Milestone-based growth sequence',
      'Outcome-focused resource curation',
    ],
    tags: ['RAG Pipeline', 'Path Planning', 'Course Matching'],
    image: '/images/platform-images/roadmap-page.png',
    imageAlt: 'Personalized roadmap dashboard',
  },
  {
    id: '04',
    name: 'Tracker Agent',
    icon: TrendingUp,
    accent: 'amber',
    summary:
      'Monitors progress over time, recalibrates recommendations, and keeps roadmaps aligned with market shifts.',
    points: [
      'Real-time progress analytics',
      'Adaptive recommendation updates',
      'Plateau and risk detection',
    ],
    tags: ['Progress Signals', 'Market Drift', 'Auto Recalibration'],
    image: '/images/platform-images/tracker-agent.png',
    imageAlt: 'Progress and tracking analytics',
  },
];

const outcomes = [
  { value: '94%', label: 'Semantic matching accuracy' },
  { value: '3.2x', label: 'Faster hiring shortlist cycle' },
  { value: '50K+', label: 'Skills mapped across profiles' },
  { value: '98%', label: 'Recruiter trust confidence' },
];

const techChips = [
  { icon: BrainCircuit, label: 'Semantic AI Models' },
  { icon: Radar, label: 'Market Signal Intelligence' },
  { icon: Layers, label: 'Multi-Agent Orchestration' },
  { icon: Database, label: 'Live Skills Knowledge Base' },
];

export default function EnginePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroGrid} aria-hidden="true" />

        <div className={styles.heroInner}>
          <span className={styles.kicker}>Under The Hood</span>
          <h1>The Multi-Agent Engine Powering Career Intelligence</h1>
          <p>
            SkillBridge orchestrates four specialized AI agents to transform static
            resumes into actionable skill intelligence, adaptive roadmaps, and
            high-confidence talent matching.
          </p>

          <div className={styles.heroActions}>
            <Link href="/get-started" className={styles.primaryButton}>
              Try The Engine <ArrowRight size={16} />
            </Link>
            <Link href="/pricing" className={styles.secondaryButton}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.pipelineSection}>
        <div className={styles.sectionHeading}>
          <span className={styles.kicker}>Pipeline</span>
          <h2>How agents collaborate from profile to outcome</h2>
        </div>

        <div className={styles.pipelineRail}>
          {agents.map((agent, index) => {
            const Icon = agent.icon;
            const isEven = index % 2 === 1;
            return (
              <article
                key={agent.id}
                className={`${styles.agentCard} ${styles[agent.accent]} ${isEven ? styles.reverse : ''}`}
              >
                <div className={styles.agentText}>
                  <div className={styles.agentHeader}>
                    <span className={styles.agentId}>Agent {agent.id}</span>
                    <div className={styles.agentIconWrap}>
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3>{agent.name}</h3>
                  <p>{agent.summary}</p>

                  <ul>
                    {agent.points.map((point) => (
                      <li key={point}>
                        <CheckCircle2 size={16} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.tags}>
                    {agent.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.agentVisual}>
                  <div className={styles.windowChrome}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className={styles.agentImageWrap}>
                    <Image src={agent.image} alt={agent.imageAlt} fill className={styles.agentImage} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.techSection}>
        <div className={styles.sectionHeading}>
          <span className={styles.kicker}>Architecture</span>
          <h2>Built for scale, explainability, and adaptation</h2>
        </div>

        <div className={styles.techGrid}>
          {techChips.map((chip) => {
            const Icon = chip.icon;
            return (
              <article key={chip.label} className={styles.techCard}>
                <Icon size={20} />
                <span>{chip.label}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.outcomesSection}>
        <div className={styles.sectionHeading}>
          <span className={styles.kicker}>Outcomes</span>
          <h2>Measured impact from the engine</h2>
        </div>

        <div className={styles.outcomeGrid}>
          {outcomes.map((outcome) => (
            <article key={outcome.label} className={styles.outcomeCard}>
              <strong>{outcome.value}</strong>
              <span>{outcome.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.finalCtaInner}>
          <Sparkles size={20} />
          <h3>See SkillBridge Engine on your own profile</h3>
          <p>Run a free analysis and get a personalized skill-gap roadmap in minutes.</p>
          <Link href="/get-started" className={styles.primaryButton}>
            Get Started Free <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
