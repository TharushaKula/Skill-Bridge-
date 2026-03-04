'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, HelpCircle, Mail, MessageSquareQuote } from 'lucide-react';
import styles from './faq.module.css';

const faqs = [
  {
    question: 'How is SkillBridge different from keyword-based screening?',
    answer:
      'SkillBridge uses semantic understanding instead of literal keyword matching. It can recognize related capabilities and transferable skills even when exact terms are missing.',
  },
  {
    question: 'Can SkillBridge recommend learning resources for my exact gaps?',
    answer:
      'Yes. Our recommendation engine curates targeted resources based on your current profile, target role, and gap priority so your roadmap stays relevant and practical.',
  },
  {
    question: 'How does SkillBridge support fairness in hiring workflows?',
    answer:
      'SkillBridge includes explainable scoring and fairness-aware reporting to help teams audit model decisions and reduce hidden bias in candidate ranking.',
  },
  {
    question: 'What file formats are supported for profile and resume upload?',
    answer:
      'You can upload PDF, DOCX, and TXT files. The extraction pipeline parses context, experience, skills, and progression signals from each document.',
  },
  {
    question: 'What does Dynamic Roadmap Recalibration mean?',
    answer:
      'Your roadmap updates as you progress and as demand signals change. Instead of a static plan, you get an adaptive path that stays aligned to real opportunities.',
  },
  {
    question: 'Is my data secure on SkillBridge?',
    answer:
      'Yes. Data is encrypted in transit and at rest. Enterprise plans include additional governance controls and configurable retention policies.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.hero}>
          <span className={styles.kicker}>FAQ</span>
          <h1>Clear Answers To Common Questions</h1>
          <p>
            Learn how SkillBridge works, how data is handled, and how both individuals and
            recruiters get measurable outcomes with multi-agent AI.
          </p>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.leftPanel}>
            <div className={styles.panelIcon}><HelpCircle size={18} /></div>
            <h2>Everything you need to get started</h2>
            <p>
              If you need implementation guidance for your organization, our team can provide
              a tailored walkthrough based on your hiring or upskilling workflow.
            </p>
            <div className={styles.quickActions}>
              <Link href="/get-started" className={styles.primaryPill}>Start Free Analysis</Link>
              <a href="mailto:hello@skillbridge.ai" className={styles.secondaryPill}>Email Support</a>
            </div>
          </div>

          <div className={styles.accordion}>
            {faqs.map((faq, index) => {
              const open = openIndex === index;
              return (
                <article key={faq.question} className={`${styles.item} ${open ? styles.itemOpen : ''}`}>
                  <button
                    className={styles.question}
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown size={16} className={open ? styles.chevronOpen : ''} />
                  </button>
                  <div className={styles.answerWrap}>
                    <p>{faq.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.bottomCta}>
          <div className={styles.ctaPanel}>
            <div>
              <MessageSquareQuote size={18} />
              <h3>Still need help deciding?</h3>
              <p>Talk to our team and get the right setup for your goals.</p>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/get-started" className={styles.primaryPill}>Book A Walkthrough</Link>
              <a href="mailto:hello@skillbridge.ai" className={styles.secondaryPill}>
                <Mail size={14} /> hello@skillbridge.ai
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
