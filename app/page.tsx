import Image from 'next/image';
import Link from 'next/link';
import { Fraunces, Manrope } from 'next/font/google';
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Heart,
  MessageCircle,
  Send,
  ShoppingCart,
  Sparkles,
  Target,
} from 'lucide-react';
import styles from './page.module.css';
import CursorGlow from './components/CursorGlow';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fraunces',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
});

export default function Home() {
  return (
    <div className={`${styles.page} ${fraunces.variable} ${manrope.variable}`}>
      <CursorGlow glowClassName={styles.cursorGlow} gridClassName={styles.cursorGrid} />
      <div className={styles.shell}>
        <section className={styles.hero}>
          <h1>AI-Driven Career Growth Right Away</h1>
          <p>
            From resume to roadmap - map your skills, identify your gaps,
            and grow with personalized learning plans.
          </p>

          <div className={styles.ctaRow}>
            <Link href="/get-started" className={styles.primaryPill}>Analyze Resume Free</Link>
            <Link href="/engine" className={styles.secondaryPill}>See How It Works</Link>
          </div>
        </section>

        <section className={styles.visualStage}>
          <div className={styles.arcOne} />
          <div className={styles.arcTwo} />
          <div className={styles.arcThree} />
          <div className={styles.glow} />

          <article className={`${styles.card} ${styles.leftTopCard}`}>
            <span className={styles.miniBadge}>Profile Scan</span>
            <Image
              src="/images/home_redesign/resume_icon_1772640118416.png"
              alt="Resume skill extraction preview"
              fill
              className={styles.coverImage}
            />
          </article>

          <article className={`${styles.card} ${styles.leftMidCard}`}>
            <div className={styles.bars}>
              <span />
              <span />
              <span />
              <span />
            </div>
            <div>
              <small>Skill Match</small>
              <strong>94%</strong>
            </div>
          </article>

          <article className={`${styles.card} ${styles.leftBottomCard}`}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </article>

          <div className={styles.phoneWrap}>
            <div className={styles.phoneFrame}>
              <div className={styles.notch} />
              <Image
                src="/images/home_redesign/professional_portrait_1772640102826.png"
                alt="Candidate career profile"
                fill
                className={styles.coverImage}
              />
              <div className={styles.streamMeta}>
                <div className={styles.streamUser}>
                  <Image
                    src="/images/home_redesign/professional_portrait_1772640102826.png"
                    alt="Candidate avatar"
                    width={28}
                    height={28}
                  />
                  <span>Ava Johnson</span>
                </div>
                <div className={styles.livePill}>AI</div>
              </div>
            </div>
          </div>

          <article className={`${styles.card} ${styles.rightTopCard}`}>
            <div>
              <h3>42 <span>skills</span></h3>
              <p>Mapped this week</p>
              <div className={styles.priceTag}>3.2x faster</div>
            </div>
            <Image
              src="/images/home_redesign/brain_icon_1772640133620.png"
              alt="AI skill intelligence"
              width={110}
              height={110}
              className={styles.rightTopImage}
            />
          </article>

          <article className={`${styles.card} ${styles.rightBottomCard}`}>
            <div className={styles.feedImageWrap}>
              <Image
                src="/images/home_redesign/recruiter_portrait_1772640152240.png"
                alt="Recruiter compatibility"
                fill
                className={styles.coverImage}
              />
              <span className={styles.viewsTag}>98% Match</span>
            </div>
            <div className={styles.feedIcons}>
              <Heart size={16} fill="currentColor" />
              <MessageCircle size={16} />
              <ShoppingCart size={16} />
              <Send size={16} />
            </div>
          </article>
        </section>

        <section className={styles.brandStrip} aria-label="Trusted brands">
          {['Talent Teams', 'EdTech Partners', 'Hiring Managers', 'Career Coaches', 'Bootcamps', 'Universities', 'HR Platforms', 'Recruiters', 'Learners'].map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </section>

        <section className={styles.problemSection}>
          <div className={styles.sectionIntro}>
            <span className={styles.kicker}>The Problem</span>
            <h2>Most resumes are static. Career growth is not.</h2>
            <p>
              Traditional hiring and upskilling workflows miss potential because they only
              match keywords. SkillBridge uses multi-agent AI to understand real capabilities.
            </p>
          </div>
          <div className={styles.problemGrid}>
            <article className={styles.problemCard}>
              <h3>Old Workflow</h3>
              <ul>
                <li>Keyword-only parsing</li>
                <li>Generic career advice</li>
                <li>No progress intelligence</li>
                <li>Low recruiter trust in rankings</li>
              </ul>
            </article>
            <article className={styles.problemCard}>
              <h3>SkillBridge Workflow</h3>
              <ul>
                <li>Semantic skill extraction</li>
                <li>Personalized gap analysis</li>
                <li>Adaptive learning roadmap</li>
                <li>Explainable match scoring</li>
              </ul>
            </article>
          </div>
        </section>

        <section className={styles.engineSection}>
          <div className={styles.sectionIntro}>
            <span className={styles.kicker}>How It Works</span>
            <h2>Four AI agents working as one growth engine.</h2>
          </div>
          <div className={styles.stepsGrid}>
            {[
              {
                icon: <Sparkles size={20} />,
                title: 'Extract',
                text: 'Reads resumes and portfolios to identify explicit and hidden skills.',
              },
              {
                icon: <Target size={20} />,
                title: 'Analyze',
                text: 'Measures skill gaps against live role requirements and market demand.',
              },
              {
                icon: <BriefcaseBusiness size={20} />,
                title: 'Roadmap',
                text: 'Builds a personalized, milestone-based growth plan with clear priorities.',
              },
              {
                icon: <CheckCircle2 size={20} />,
                title: 'Track',
                text: 'Continuously updates recommendations as users complete learning tasks.',
              },
            ].map((step) => (
              <article key={step.title} className={styles.stepCard}>
                <div className={styles.stepIcon}>{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.audienceSection}>
          <article className={styles.audienceCard}>
            <h3>For Individuals</h3>
            <p>
              Get a clear growth roadmap, track progress weekly, and close skill gaps with
              recommendations built around your goals.
            </p>
            <Link href="/individuals">Explore Individual Plans <ArrowRight size={16} /></Link>
          </article>
          <article className={styles.audienceCard}>
            <h3>For Recruiters</h3>
            <p>
              Identify qualified candidates faster with explainable matching and confidence
              scores that your hiring team can trust.
            </p>
            <Link href="/recruiters">Explore Recruiter Tools <ArrowRight size={16} /></Link>
          </article>
        </section>

        <section className={styles.metricsSection}>
          {[
            { value: '94%', label: 'Average skill-role match accuracy' },
            { value: '3.2x', label: 'Faster shortlisting workflows' },
            { value: '50K+', label: 'Skills mapped across profiles' },
            { value: '98%', label: 'Recruiter confidence score' },
          ].map((metric) => (
            <article key={metric.label} className={styles.metricCard}>
              <h3>{metric.value}</h3>
              <p>{metric.label}</p>
            </article>
          ))}
        </section>

        <section className={styles.finalCta}>
          <h2>Build career momentum with SkillBridge.</h2>
          <p>Start with a free AI resume analysis and get your roadmap in minutes.</p>
          <div className={styles.ctaRow}>
            <Link href="/get-started" className={styles.primaryPill}>Start Free Analysis</Link>
            <Link href="/pricing" className={styles.secondaryPill}>View Pricing</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
