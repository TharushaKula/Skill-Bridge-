'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  User,
  Users,
} from 'lucide-react';
import styles from './get-started.module.css';

type Flow = 'individual' | 'enterprise';

export default function GetStartedClient() {
  const [flow, setFlow] = useState<Flow>('individual');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.hero}>
          <span className={styles.kicker}>Get Started</span>
          <h1>Start Your SkillBridge Journey In Under 60 Seconds</h1>
          <p>
            Choose your path: run a free individual skill audit or request a guided
            enterprise demo for your hiring team.
          </p>
        </section>

        {!submitted ? (
          <section className={styles.formSection}>
            <aside className={styles.sidePanel}>
              <h2>What happens next</h2>
              <ul>
                <li>
                  <Clock3 size={16} />
                  <span>Fast setup with clear next steps</span>
                </li>
                <li>
                  <BadgeCheck size={16} />
                  <span>AI-powered profile and gap analysis</span>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <span>Actionable roadmap aligned to your goal</span>
                </li>
              </ul>

              <div className={styles.metaCard}>
                <strong>Need help choosing?</strong>
                <p>Start free as an individual and upgrade to team workflows anytime.</p>
                <Link href="/pricing">View Plans</Link>
              </div>
            </aside>

            <div className={styles.formCard}>
              <div className={styles.toggle}>
                <button
                  type="button"
                  onClick={() => setFlow('individual')}
                  className={flow === 'individual' ? styles.toggleActive : ''}
                >
                  <User size={14} /> Individual
                </button>
                <button
                  type="button"
                  onClick={() => setFlow('enterprise')}
                  className={flow === 'enterprise' ? styles.toggleActive : ''}
                >
                  <Users size={14} /> Enterprise
                </button>
              </div>

              <div className={styles.formHead}>
                <h3>{flow === 'individual' ? 'Start Free Skill Audit' : 'Request Enterprise Demo'}</h3>
                <p>
                  {flow === 'individual'
                    ? 'Tell us where you are and where you want to go. We will generate your personalized roadmap.'
                    : 'Tell us about your team and hiring workflow. We will tailor a live walkthrough for your use case.'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className={styles.formGrid}>
                <div className={styles.row2}>
                  <label>
                    First Name
                    <input type="text" placeholder="Jane" required />
                  </label>
                  <label>
                    Last Name
                    <input type="text" placeholder="Doe" required />
                  </label>
                </div>

                <label>
                  Work Email
                  <input type="email" placeholder="jane@example.com" required />
                </label>

                {flow === 'individual' ? (
                  <>
                    <label>
                      Target Role
                      <input type="text" placeholder="Machine Learning Engineer" required />
                    </label>
                    <label>
                      Current Experience Level
                      <select required defaultValue="">
                        <option value="" disabled>Select level</option>
                        <option value="student">Student</option>
                        <option value="junior">Junior (0-2 years)</option>
                        <option value="mid">Mid (3-5 years)</option>
                        <option value="senior">Senior (6+ years)</option>
                      </select>
                    </label>
                  </>
                ) : (
                  <>
                    <label>
                      Company
                      <input type="text" placeholder="Acme Corp" required />
                    </label>
                    <div className={styles.row2}>
                      <label>
                        Team Size
                        <select required defaultValue="">
                          <option value="" disabled>Select size</option>
                          <option value="1-10">1-10</option>
                          <option value="11-50">11-50</option>
                          <option value="51-200">51-200</option>
                          <option value="200+">200+</option>
                        </select>
                      </label>
                      <label>
                        Hiring Volume / Month
                        <select required defaultValue="">
                          <option value="" disabled>Select volume</option>
                          <option value="1-10">1-10 roles</option>
                          <option value="11-30">11-30 roles</option>
                          <option value="31+">31+ roles</option>
                        </select>
                      </label>
                    </div>
                    <label>
                      What challenge do you want to solve?
                      <textarea rows={4} placeholder="e.g. reduce screening time and improve shortlist quality" required />
                    </label>
                  </>
                )}

                <button type="submit" className={styles.submitBtn}>
                  {flow === 'individual' ? 'Start Free Analysis' : 'Request Demo'}
                  <ArrowRight size={15} />
                </button>
              </form>
            </div>
          </section>
        ) : (
          <section className={styles.successSection}>
            <div className={styles.successCard}>
              <div className={styles.successIcon}>
                {flow === 'individual' ? <User size={22} /> : <BriefcaseBusiness size={22} />}
              </div>
              <h2>{flow === 'individual' ? 'You are all set!' : 'Demo request received!'}</h2>
              <p>
                {flow === 'individual'
                  ? 'Check your inbox. We sent next steps for your free skill audit and roadmap setup.'
                  : 'Our team will contact you shortly to schedule your tailored enterprise walkthrough.'}
              </p>
              <div className={styles.successActions}>
                <button type="button" className={styles.secondaryBtn} onClick={() => setSubmitted(false)}>
                  Submit Another
                </button>
                <Link href="/" className={styles.primaryBtn}>
                  Back To Home
                </Link>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
