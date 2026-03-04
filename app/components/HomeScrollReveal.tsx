'use client';

import { useEffect } from 'react';

export default function HomeScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!elements.length) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      elements.forEach((element) => {
        element.setAttribute('data-reveal-visible', 'true');
      });
      return;
    }

    elements.forEach((element) => {
      const delay = element.dataset.revealDelay;
      if (delay) {
        element.style.setProperty('--reveal-delay', `${delay}ms`);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          target.setAttribute('data-reveal-visible', 'true');
          observer.unobserve(target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -12% 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
