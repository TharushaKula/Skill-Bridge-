'use client';

import { useEffect } from 'react';

type CursorGlowProps = {
  glowClassName: string;
  gridClassName: string;
};

export default function CursorGlow({ glowClassName, gridClassName }: CursorGlowProps) {
  useEffect(() => {
    const root = document.documentElement;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let rafId = 0;

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      root.style.setProperty('--cursor-x', `${currentX}px`);
      root.style.setProperty('--cursor-y', `${currentY}px`);

      rafId = window.requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <span className={gridClassName} aria-hidden="true" />
      <span className={glowClassName} aria-hidden="true" />
    </>
  );
}
