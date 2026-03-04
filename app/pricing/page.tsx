import Link from 'next/link';
import { ArrowRight, BadgeCheck, Check, Sparkles } from 'lucide-react';
import styles from './pricing.module.css';

export const metadata = {
  title: 'Pricing — Transparent Plans | SkillBridge',
  description:
    'Choose the SkillBridge plan that fits your growth stage. Start free, scale with pro insights, and deploy enterprise hiring intelligence.',
};

const plans = [
  {
    name: 'Explorer',
    price: 'Free',
    note: 'Great for first-time analysis',
    cta: 'Start Free',
    href: '/get-started',
    featured: false,
    features: [
      '1 profile analysis',
      'Up to 5 skill gaps identified',
      'Static starter roadmap',
      'Basic skill overview',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    price: '$29/mo',
    note: 'or $249/year (save 28%)',
    cta: 'Start Pro Trial',
    href: '/get-started',
    featured: true,
    features: [
      'Unlimited profile and gap analysis',
      'Dynamic roadmap recalibration',
      'RAG resource recommendations',
      'Milestone and progress analytics',
      'Smart nudges and plateau alerts',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    note: 'For teams and recruiters at scale',
    cta: 'Contact Sales',
    href: '/get-started',
    featured: false,
    features: [
      'Everything in Pro',
      'Bulk candidate processing',
      'Explainable ranking reports',
      'Domain-specific configurations',
      'Fairness and audit reporting',
      'ATS integration and admin controls',
    ],
  },
];

const compare = [
  { feature: 'Profile analysis', explorer: '1 run', pro: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Skill gap detection', explorer: 'Up to 5', pro: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Dynamic roadmap', explorer: 'No', pro: 'Yes', enterprise: 'Yes' },
  { feature: 'Resource recommendations', explorer: 'Basic', pro: 'Advanced', enterprise: 'Advanced' },
  { feature: 'Progress analytics', explorer: 'No', pro: 'Yes', enterprise: 'Yes' },
  { feature: 'Bulk candidate ranking', explorer: 'No', pro: 'No', enterprise: 'Yes' },
  { feature: 'Explainable AI reports', explorer: 'No', pro: 'No', enterprise: 'Yes' },
  { feature: 'Support', explorer: 'Community', pro: 'Priority', enterprise: 'Dedicated manager' },
];

export default function PricingPage() {
  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.hero}>
          <span className={styles.kicker}>Pricing</span>
          <h1>Transparent Plans For Every Growth Stage</h1>
          <p>
            Start with a free analysis, unlock adaptive roadmap intelligence with Pro,
            or scale semantic talent matching with Enterprise.
          </p>
        </section>

        <section className={styles.planSection}>
          <div className={styles.planGrid}>
            {plans.map((plan) => (
              <article key={plan.name} className={`${styles.planCard} ${plan.featured ? styles.featured : ''}`}>
                {plan.featured && (
                  <div className={styles.featuredBadge}>
                    <Sparkles size={14} /> Best Value
                  </div>
                )}
                <h2>{plan.name}</h2>
                <strong>{plan.price}</strong>
                <p className={styles.note}>{plan.note}</p>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={15} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={plan.href} className={plan.featured ? styles.primaryPill : styles.secondaryPill}>
                  {plan.cta} <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.compareSection}>
          <div className={styles.sectionIntro}>
            <span className={styles.kicker}>Comparison</span>
            <h2>Feature breakdown by plan</h2>
          </div>

          <div className={styles.tableWrap}>
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Explorer</th>
                  <th>Pro</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((row) => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    <td>{row.explorer}</td>
                    <td>{row.pro}</td>
                    <td>{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.bottomCta}>
          <div className={styles.ctaPanel}>
            <div>
              <BadgeCheck size={18} />
              <h3>Not sure where to start?</h3>
              <p>Run a free profile analysis and upgrade when you are ready.</p>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/get-started" className={styles.primaryPill}>Get Started Free</Link>
              <Link href="/faq" className={styles.secondaryPill}>View FAQ</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
